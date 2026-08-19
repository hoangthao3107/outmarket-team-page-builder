const members = [
  { id: 'olivia', initials: 'OW', name: 'Olivia Williams', title: 'Software Engineer', email: 'olivia@example.com', phone: '+1 (555) 666-6666', cell: '', bio: '', color: '#dce9f3', photo: './assets/figma-team/olivia.jpeg' },
  { id: 'noah', initials: 'NB', name: 'Noah Brown', title: 'UX Designer', email: 'noah@example.com', phone: '+1 (555) 555-5555', cell: '', bio: '', color: '#dfe4ea', photo: './assets/figma-team/noah.jpeg' },
  { id: 'james', initials: 'JJ', name: 'James Jones', title: 'Data Analyst', email: 'james@example.com', phone: '+1 (555) 777-7777', cell: '', bio: '', color: '#e7ded5', photo: './assets/figma-team/james.jpeg' },
  { id: 'sophia', initials: 'SG', name: 'Sophia Garcia', title: 'Marketing Specialist', email: 'sophia@example.com', phone: '+1 (555) 888-8888', cell: '', bio: '', color: '#e5d8d0', photo: './assets/figma-team/sophia.jpeg' },
  { id: 'lucas', initials: 'LM', name: 'Lucas Martinez', title: 'Sales Executive', email: 'lucas@example.com', phone: '+1 (555) 999-9999', cell: '', bio: '', color: '#dae4e5', photo: './assets/figma-team/lucas.jpeg' },
  { id: 'mia', initials: 'MR', name: 'Mia Rodriguez', title: 'Customer Support Lead', email: 'mia@example.com', phone: '+1 (555) 101-0101', cell: '', bio: '', color: '#eadfd8', photo: './assets/figma-team/mia.jpeg' },
]
const savedTeams = {
  'Marketing Team': members.map(member => ({ ...member })),
  'Design Team': [members[0], members[1], members[3]].map(member => ({ ...member })),
  'Leadership Team': [members[2], members[4], members[5]].map(member => ({ ...member })),
}
const cardFieldStructure = [['photo','Photo',3],['fullName','Full name',3],['jobTitle','Job title',3],['email','Email',3],['phone','Phone',3],['cellphone','Cellphone',3],['bio','Bio',3]]
const cardFieldKeys = cardFieldStructure.map(([key]) => key)
const structure = [['page','Page',0],['heading','Heading',1],['subhead','Sub-head',1],['description','Description',1],['grid','Grid',1],['card','Member card',2],...cardFieldStructure]
const state = { selected:'page', selectedField:null, selectedMember:null, activeCard:'olivia', hidden:new Set(['subhead', 'cellphone', 'bio']), columns:3, padding:40, pageDraft:false, teamDraft:false, templateOverrides:new Set(), modalTeam:'Marketing Team', activeTeam:'Marketing Team', openTeamSelector:false, openTeamSave:false, pendingTeam:null }
const labelFor = key => structure.find(([id]) => id === key)?.[1] || key
const isVisible = key => !state.hidden.has(key)
const icon = (name, label = '') => `<i data-lucide="${name}"${label ? ` aria-label="${label}"` : ''}></i>`
const visibilityIcon = visible => `<i class="visibility-icon" data-lucide="${visible ? 'eye' : 'eye-off'}" aria-hidden="true"></i>`
const refreshLucideIcons = () => window.lucide?.createIcons({ attrs: { 'stroke-width': 2 } })
const esc = (value='') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'})[char])
// Keep every properties-panel select on the same shared control surface.
// The native select remains in place for keyboard/accessibility support while
// the wrapper supplies the Lucide chevron and consistent Figma-style sizing.
const propertySelectControl = (selectMarkup, variant = 'field') => `<span class="select-control select-control--${variant}">${selectMarkup}${icon('chevrons-up-down')}</span>`
const propertySelect = (key, options, current = '') => propertySelectControl(`<select data-field="${key}">${options.map(value => `<option ${String(current) === String(value) ? 'selected' : ''}>${value}</option>`).join('')}</select>`)
let draggedMemberId = null
let dropPosition = null

function clearMemberDragState() {
  draggedMemberId = null
  dropPosition = null
  document.querySelectorAll('#members-list .member-row').forEach(row => {
    row.classList.remove('is-dragging', 'is-drop-before', 'is-drop-after')
  })
}

function moveMember(memberId, offset) {
  const from = members.findIndex(member => member.id === memberId)
  const to = from + offset
  if (from < 0 || to < 0 || to >= members.length) return false
  const [member] = members.splice(from, 1)
  members.splice(to, 0, member)
  state.teamDraft = true
  render()
  requestAnimationFrame(() => document.querySelector(`[data-member-drag="${memberId}"]`)?.focus())
  return true
}

function moveMemberTo(memberId, targetId, after = false) {
  const from = members.findIndex(member => member.id === memberId)
  const target = members.findIndex(member => member.id === targetId)
  if (from < 0 || target < 0 || from === target) return false
  const [member] = members.splice(from, 1)
  let insertion = members.findIndex(item => item.id === targetId)
  if (after) insertion += 1
  members.splice(insertion, 0, member)
  state.teamDraft = true
  render()
  return true
}
function renderStructure() {
  // Text fields share the same typography affordance as Heading/Sub-head/
  // Description. Keep only non-text content slots (photo/card/page/grid)
  // represented by their specific icons.
  const structureIcons = { page: 'file-text', heading: 'type', subhead: 'type', description: 'type', grid: 'layout-grid', card: 'circle-user', photo: 'image', fullName: 'type', jobTitle: 'type', email: 'type', phone: 'type', cellphone: 'type', bio: 'type' }
  const cardIndex = structure.findIndex(([key]) => key === 'card')
  const orderedCardFields = (state.cardFieldOrder || cardFieldKeys)
    .map(key => structure.find(row => row[0] === key))
    .filter(Boolean)
  const structureRows = [...structure.slice(0, cardIndex + 1), ...orderedCardFields]
  document.getElementById('structure-list').innerHTML = structureRows.map(([key, label, level]) => {
    const isCardField = cardFieldKeys.includes(key)
    const dragAttributes = isCardField ? `draggable="true" data-field-order="${key}"` : ''
    const dragHandle = isCardField ? `<span class="structure-row__drag-handle" aria-hidden="true">${icon('grip-vertical')}</span>` : ''
    return `
    <button class="structure-row ${key === 'card' ? (state.selected === 'card' && !state.selectedField && !state.selectedMember ? 'is-selected' : '') : isCardField ? (state.selectedField === key && !state.selectedMember ? 'is-selected' : '') : (key !== 'page' && state.selected === key && !state.selectedMember ? 'is-selected' : '')} ${!isVisible(key) ? 'is-hidden' : ''}" data-structure="${key}" ${dragAttributes} style="--level:${level}">
      ${dragHandle}
      <span class="structure-row__branch">${icon(structureIcons[key])}</span>
      <span class="structure-row__label">${label}</span>
      ${key === 'page' || key === 'card' ? '' : `<span class="structure-row__eye" data-visibility="${key}" role="button" aria-label="Toggle ${label} visibility">${visibilityIcon(isVisible(key))}</span>`}
    </button>`
  }).join('')
}
function renderMembers() {
  document.getElementById('member-total').textContent = members.length
  document.getElementById('active-team-name').textContent = state.activeTeam
  document.getElementById('team-selector-toggle').setAttribute('aria-expanded', String(state.openTeamSelector))
  document.getElementById('team-selector-menu').hidden = !state.openTeamSelector
  document.getElementById('team-selector-menu').innerHTML = Object.entries(savedTeams).map(([name, roster]) => `<button class="${state.activeTeam === name ? 'is-active' : ''}" data-switch-team="${name}"><span class="team-selector-menu__content"><strong>${esc(name)}</strong><small>${roster.length} members</small></span>${state.activeTeam === name ? icon('check') : ''}</button>`).join('')
  document.getElementById('members-list').innerHTML = members.map(member => `
    <div class="member-row ${state.selectedMember === member.id ? 'is-selected' : ''}" data-member="${member.id}">
      <button type="button" class="member-drag-handle" data-member-drag="${member.id}" draggable="true" aria-label="Reorder ${esc(member.name)}" title="Drag to reorder; use arrow keys when focused">${icon('grip-vertical')}</button>
      <span class="member-avatar" style="--avatar:${member.color}">${member.photo ? `<img src="${member.photo}" alt="">` : member.initials}</span>
      <span class="member-row__content">
        <span class="member-row__name ${member.placeholder ? 'is-placeholder' : ''}">${esc(member.name)}</span>
        <span class="member-row__title ${member.placeholder ? 'is-placeholder' : ''}">${esc(member.title || 'Add team member details')}</span>
      </span>
      <button class="member-menu" data-member-menu="${member.id}" aria-label="Options for ${esc(member.name)}">${icon('ellipsis')}</button>
      <div class="member-popover" id="member-popover-${member.id}" hidden><button data-swap="${member.id}">Swap member</button><button class="remove" data-remove="${member.id}">Remove from page</button></div>
    </div>`).join('')
}
function cardFieldMarkup(member, key, preview = false) { const hidden = !isVisible(key) ? 'element-hidden' : ''; const selected = state.selectedField === key && !preview && !state.selectedMember ? 'is-selected-element' : ''; if (key === 'photo') return `<div class="member-card__photo ${hidden} ${selected}" data-card-field="photo">${member.photo ? `<img src="${member.photo}" alt="${esc(member.name)}">` : member.initials}</div>`; if (key === 'fullName') return `<h3 class="${hidden} ${selected}" data-card-field="fullName">${esc(member.name)}</h3>`; if (key === 'jobTitle') return `<p class="member-card__role ${hidden} ${selected}" data-card-field="jobTitle">${esc(member.title)}</p>`; if (member.placeholder) return ''; const field = key === 'email' ? member.email : key === 'phone' ? member.phone : key === 'cellphone' ? member.cell : member.bio; const iconName = key === 'email' ? 'mail' : key === 'phone' ? 'phone' : key === 'cellphone' ? 'smartphone' : ''; return `<p class="member-card__detail ${key === 'bio' ? 'member-card__bio' : ''} ${hidden} ${selected}" data-card-field="${key}"><span>${iconName ? icon(iconName) : ''}</span>${esc(field)}</p>` }
function teamPageMarkup(mode='builder') {
  const preview = mode === 'preview'
  const selectedClass = key => !preview && !state.selectedMember && state.selected === key ? 'is-selected-element' : ''
  const fieldOrder = state.cardFieldOrder || ['photo', 'fullName', 'jobTitle', 'phone', 'email', 'cellphone', 'bio']
  const cards = members.map(member => `<button class="member-card ${state.selected === 'card' && !preview ? 'is-template-active' : ''} ${state.selectedMember === member.id && !preview ? 'is-member-selected' : ''}" data-card="${member.id}" style="--avatar:${member.color}">${fieldOrder.map(key => cardFieldMarkup(member, key, preview)).join('')}</button>`).join('')
  return `<section class="team-page__content team-page__content--figma ${selectedClass('page')}" style="--page-padding:${state.padding}px"><header class="team-page__brand"><img class="team-page__logomark" src="./assets/figma-team/logomark.svg" alt=""><img class="team-page__logotype" src="./assets/figma-team/logotype.svg" alt="Fictional company"></header><div class="team-page__intro"><h2 class="team-page__heading ${selectedClass('heading')} ${!isVisible('heading') ? 'element-hidden' : ''}">Meet the Team</h2><p class="team-page__subhead ${selectedClass('subhead')} ${!isVisible('subhead') ? 'element-hidden' : ''}">${esc(state.subheadText || 'Meet the people behind the work.')}</p><p class="team-page__description ${selectedClass('description')} ${!isVisible('description') ? 'element-hidden' : ''}">Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit. In vel imperdiet mi. Aliquam erat volutpat.</p></div><div class="members-grid ${selectedClass('grid')} ${!isVisible('grid') ? 'element-hidden' : ''}" style="--columns:${state.columns}">${cards}</div><div class="team-page__bottom-bar" aria-hidden="true"></div></section>`
}
function renderCanvas() { const page=document.getElementById('team-page'); page.innerHTML=teamPageMarkup(); page.classList.toggle('page-is-hidden',!isVisible('page')); if (state.selected === 'card') page.querySelector(`[data-card="${state.activeCard}"]`)?.classList.add('is-template-focus'); const caption=document.getElementById('card-caption'); caption.hidden=!(state.selected === 'card' && !state.selectedMember); caption.textContent=`Editing the card template — all ${members.length} cards update` }
function field(label,value,key,type='text') { if (type === 'number') { const min = key === 'padding' ? 16 : 0; return `<div class="property-stepper property-stepper--generic"><span>${label}</span><div class="property-stepper__control"><span class="property-number-field"><input type="number" inputmode="numeric" value="${esc(value)}" min="${min}" data-field="${key}" aria-label="${label}"><small>px</small></span><span class="property-stepper__actions"><button data-generic-step="${key}" data-delta="-1" data-min="${min}" aria-label="Decrease ${label}">${icon('minus')}</button><button data-generic-step="${key}" data-delta="1" data-min="${min}" aria-label="Increase ${label}">${icon('plus')}</button></span></div></div>` } return `<label class="field"><span>${label}</span><input type="${type}" value="${esc(value)}" data-field="${key}"></label>` } const section=(title,content)=>`<section class="property-section"><h3>${title}</h3>${content}</section>`
function propertiesMarkup({modal=false}={}) {
  const isMember=Boolean(state.selectedMember)
  const target=isMember ? members.find(member=>member.id===state.selectedMember) : null
  const selected=isMember ? target.name : labelFor(state.selected)
  const crumb=isMember ? 'Members' : state.selected === 'page' ? 'Page' : state.selected === 'card' ? 'Page › Grid › Card' : `Page › ${selected}`
  const changed=key=>modal && state.templateOverrides.has(key) ? `<span class="override-dot" title="Changed for this proposal"></span><button class="reset-control" data-reset="${key}" title="Reset this change">↺</button>` : ''
  let content=''
  if (isMember) {
    const avatarPreview = target.photo
      ? `<img src="${esc(target.photo)}" alt="${esc(target.name)}">`
      : esc(target.initials)
    const photoActions = `<div class="member-photo-editor"><div class="member-edit__avatar" style="--avatar:${target.color}">${avatarPreview}</div><div class="member-photo-editor__actions"><label class="button button--ghost member-photo-upload">${target.photo ? 'Replace image' : 'Upload image'}<input type="file" accept="image/*" data-member-photo="${target.id}" aria-label="${target.photo ? 'Replace' : 'Upload'} image for ${esc(target.name)}"></label>${target.photo ? `<button type="button" class="text-button member-photo-delete" data-delete-member-photo="${target.id}">Delete image</button>` : ''}</div></div>`
    content=section('Content',`<div class="member-edit">${photoActions}${field('Full name',target.name,'name')}${field('Job title',target.title,'title')}${field('Email',target.email || '','email')}${field('Phone',target.phone || '','phone')}${field('Cellphone',target.cell || '','cell')}<label class="field"><span>Bio</span><textarea data-field="bio">${esc(target.bio || '')}</textarea></label></div>`)+section('Style','<p class="help-text">Card styles are shared. Select <strong>Card</strong> in Structure to edit the template.</p>')
  } else if (state.selected === 'page') {
    content=section('Content','<p class="help-text">Controls the outer team page and its grid.</p>')+section('Style',`${field('Page padding',state.padding,'padding','number')}${changed('padding')}${field('Maximum width','1200','maxWidth')}${changed('maxWidth')}<label class="field"><span>Background</span>${propertySelect('background',['White','Warm gray','Ink'],'White')}</label>${changed('background')}<label class="field"><span>Grid columns</span>${propertySelect('columns',[2,3,4],state.columns)}</label>${changed('columns')}`)
  } else if (state.selected === 'card') {
    content=section('Content','<p class="help-text">The card is one shared template. Text and contact information come from each member.</p>')+section('Style',`<label class="field"><span>Card alignment</span>${propertySelect('alignment',['Left','Center'],'Left')}</label>${changed('alignment')}<label class="field"><span>Photo shape</span>${propertySelect('photoShape',['Circle','Rounded square'],'Circle')}</label>${changed('photoShape')}<label class="field"><span>Card padding</span><input type="number" value="28" data-field="cardPadding"></label>${changed('cardPadding')}`)
  } else {
    const elementKey = state.selected === 'heading' ? 'heading' : state.selected === 'subhead' ? 'subhead' : 'description'
    const visibility=isVisible(state.selected)
    const fontSizeKey = elementKey === 'heading' ? 'headingSize' : elementKey === 'subhead' ? 'subheadSize' : 'descriptionSize'
    const fontSize = elementKey === 'heading' ? state.headingSize : elementKey === 'subhead' ? state.subheadSize : state.descriptionSize
    const colorKey = `${elementKey}Color`
    const colorOpacityKey = `${colorKey}Opacity`
    const backgroundKey = `${elementKey}Background`
    const backgroundOpacityKey = `${backgroundKey}Opacity`
    const fontSizeControl = typeof stepper === 'function' ? stepper('Font size', fontSizeKey, fontSize, { min: elementKey === 'heading' ? 20 : 10, max: elementKey === 'heading' ? 64 : 32 }) : field('Font size', fontSize, fontSizeKey, 'number')
    const textContentKey = elementKey === 'heading' ? 'headingText' : elementKey === 'subhead' ? 'subheadText' : 'descriptionText'
    const textContentControl = elementKey === 'description'
      ? `<label class="compact-content-field"><span>${selected}</span><textarea data-page-content="${textContentKey}">${esc(state[textContentKey])}</textarea></label>`
      : `<label class="compact-content-field"><span>${selected}</span><input value="${esc(state[textContentKey])}" data-page-content="${textContentKey}"></label>`
    content=section('Content',`<label class="toggle-row"><span>Show ${selected}</span><input type="checkbox" data-field="elementVisibility" ${visibility ? 'checked' : ''}><i></i></label>${textContentControl}`)+section('Style',`${field('Top margin','16','marginTop','number')}${field('Bottom margin','16','marginBottom','number')}<label class="field"><span>Alignment</span>${propertySelect('alignment',['Left','Center'],'Left')}</label>${fontSizeControl}${colorControl('Text color',colorKey,state[colorKey],colorOpacityKey,state[colorOpacityKey])}${changed(colorKey)}${colorControl('Text background',backgroundKey,state[backgroundKey],backgroundOpacityKey,state[backgroundOpacityKey])}${changed(backgroundKey)}${typeof textFormatControl === 'function' ? textFormatControl(elementKey) : ''}`)
  }
  const modalTeamSelect = propertySelectControl(`<select id="modal-team-select">${['Marketing Team','Client Success Team','Executive Team'].map(value => `<option ${state.modalTeam === value ? 'selected' : ''}>${value}</option>`).join('')}</select>`, 'field')
  return `<div class="properties-head">${modal ? `<label class="team-selector"><span>Source team</span>${modalTeamSelect}<div class="override-summary ${state.templateOverrides.size ? '' : 'is-clean'}">${state.templateOverrides.size ? `${state.templateOverrides.size} changes from this proposal only <button id="reset-all">Reset all</button>` : 'No changes from this proposal'}</div>` : ''}<p class="breadcrumb">${crumb}</p><h2>${esc(selected)}</h2></div><div class="properties-scroll">${content}</div>`
}
function renderProperties() {
  const panel = document.getElementById('properties-panel')
  if (!panel) return
  const isTemplate = document.body.dataset.page === 'template-demo' && panel.dataset.templatePanel === 'true'
  panel.innerHTML = propertiesMarkup({ modal: isTemplate })
}
function renderTemplate() {
  const blockPreview = document.querySelector('.template-demo-block-preview .template-demo-team-page')
  const preview = document.getElementById('template-preview')
  const props = document.getElementById('template-properties')
  if (blockPreview) blockPreview.innerHTML = teamPageMarkup('preview')
  if (preview) preview.innerHTML = teamPageMarkup('preview')
  if (props) props.innerHTML = propertiesMarkup({ modal: true })
  const panel = document.getElementById('properties-panel')
  if (panel?.dataset.templatePanel === 'true') panel.innerHTML = propertiesMarkup({ modal: true })
}
function renderSavePrompts() { const control=document.getElementById('team-save-control'); const toggle=document.getElementById('team-save-toggle'); const menu=document.getElementById('team-save-menu'); if (!control || !toggle || !menu) return; if (!state.teamDraft) state.openTeamSave=false; const isOpen=Boolean(state.teamDraft && state.openTeamSave); control.hidden=!state.teamDraft; control.classList.toggle('is-open',isOpen); toggle.setAttribute('aria-expanded',String(isOpen)); menu.hidden=!isOpen; menu.setAttribute('aria-hidden',String(!isOpen)); menu.classList.toggle('is-open',isOpen); menu.classList.toggle('is-viewport-popover',isOpen); menu.style.display=isOpen ? 'block' : 'none'; menu.innerHTML=`<button data-save-team><span>Update ${esc(state.activeTeam)}</span></button><button data-save-new><span>Save as new team</span></button>`; if (isOpen && menu.parentElement !== document.body) document.body.appendChild(menu) }
function render() { renderStructure();renderMembers();renderCanvas();renderProperties();renderSavePrompts();const templateModal=document.getElementById('template-modal');if(document.body.dataset.page === 'template-demo' || (templateModal && !templateModal.hidden))renderTemplate();refreshLucideIcons() }
function selectStructure(key) { state.selectedField = cardFieldKeys.includes(key) ? key : null; state.selected = cardFieldKeys.includes(key) ? 'card' : key; state.selectedMember=null; render() } function selectMember(id) { state.selectedMember=id;state.selected='member';state.selectedField=null;render() } function markPageChanged(key) { state.pageDraft=true;if(!document.getElementById('template-modal').hidden)state.templateOverrides.add(key);render() }
document.addEventListener('click', event => {
  const genericStep = event.target.closest('[data-generic-step]')
  if (genericStep) { const input = genericStep.closest('.property-stepper').querySelector('[data-field]'); const min = Number(genericStep.dataset.min ?? 0); const next = Math.max(min, Number(input.value || min) + Number(genericStep.dataset.delta)); input.value = next; input.dispatchEvent(new Event('change', { bubbles: true })); return }
  if (event.target.closest('#team-selector-toggle')) { state.openTeamSelector = !state.openTeamSelector; renderMembers(); refreshLucideIcons(); requestAnimationFrame(() => positionOpenPopovers?.()); return }
  if (event.target.closest('#team-save-toggle')) { state.openTeamSave = !state.openTeamSave; renderSavePrompts(); refreshLucideIcons(); positionOpenPopovers?.(); requestAnimationFrame(() => positionOpenPopovers?.()); return }
  const teamSwitch = event.target.closest('[data-switch-team]')
  if (teamSwitch) { const teamName = teamSwitch.dataset.switchTeam; members.splice(0, members.length, ...savedTeams[teamName].map(member => ({ ...member }))); state.activeTeam = teamName; state.openTeamSelector = false; state.selected = 'page'; state.selectedField = null; state.selectedMember = null; state.activeCard = members[0]?.id || null; state.pageDraft = true; render(); return }
  const visibility = event.target.closest('[data-visibility]')
  if (visibility) { event.stopPropagation(); const key = visibility.dataset.visibility; state.hidden.has(key) ? state.hidden.delete(key) : state.hidden.add(key); markPageChanged(key); return }
  const structureButton = event.target.closest('[data-structure]')
  if (structureButton) { selectStructure(structureButton.dataset.structure); return }
  const remove = event.target.closest('[data-remove]')
  if (remove) { const index = members.findIndex(member => member.id === remove.dataset.remove); members.splice(index, 1); state.selected = 'page'; state.selectedField = null; state.selectedMember = null; state.teamDraft = true; render(); return }
  const deleteMemberPhoto = event.target.closest('[data-delete-member-photo]')
  if (deleteMemberPhoto) { const member = members.find(item => item.id === deleteMemberPhoto.dataset.deleteMemberPhoto); if (member) { member.photo = ''; state.teamDraft = true; render() } return }
  const swap = event.target.closest('[data-swap]')
  if (swap) { const member = members.find(member => member.id === swap.dataset.swap); member.name = member.placeholder ? 'New placeholder' : `${member.name.split(' ')[0]} Nguyen`; state.teamDraft = true; render(); return }
  const menu = event.target.closest('[data-member-menu]')
  if (menu) { event.stopPropagation(); document.querySelectorAll('.member-popover').forEach(pop => pop.hidden = true); document.getElementById(`member-popover-${menu.dataset.memberMenu}`).hidden = false; requestAnimationFrame(() => positionOpenPopovers?.()); return }
  const dragHandle = event.target.closest('[data-member-drag]')
  if (dragHandle) { event.stopPropagation(); return }
  const memberButton = event.target.closest('[data-member]')
  if (memberButton) { selectMember(memberButton.dataset.member); return }
  const card = event.target.closest('[data-card]')
  if (card) { state.activeCard = card.dataset.card; selectStructure('card'); return }
  if (event.target.closest('#canvas') && !event.target.closest('.team-page__content') && !event.target.closest('.save-prompt')) { selectStructure('page'); return }
  if (event.target.closest('#add-placeholder')) { const id=`member-${Date.now()}`; members.push({id,placeholder:true,initials:'+',name:'New member',title:'Add team member details',email:'',phone:'',cell:'',bio:'',color:'#f3f4f6'}); state.teamDraft = true; selectMember(id); return }
  if (event.target.closest('#open-template')) { document.getElementById('template-modal').hidden = false; renderTemplate(); return }
  if (event.target.closest('[data-close-modal]')) { document.getElementById('template-modal').hidden = true; return }
  if (event.target.closest('#reset-all')) { state.templateOverrides.clear(); renderTemplate(); return }
  const reset = event.target.closest('[data-reset]')
  if (reset) { state.templateOverrides.delete(reset.dataset.reset); renderTemplate(); return }
  if (event.target.closest('[data-save-page]') || event.target.closest('#save-page-top')) { state.pageDraft = false; render(); return }
  if (event.target.closest('[data-save-team]')) { savedTeams[state.activeTeam] = members.map(member => ({ ...member })); state.teamDraft = false; render(); return }
  if (event.target.closest('[data-save-new]')) { const baseName = `${state.activeTeam} copy`; let newName = baseName; let suffix = 2; while (savedTeams[newName]) newName = `${baseName} ${suffix++}`; savedTeams[newName] = members.map(member => ({ ...member })); state.activeTeam = newName; state.teamDraft = false; render(); return }
  if (event.target.closest('#cancel-team-change')) { document.getElementById('confirm-dialog').hidden = true; renderTemplate(); return }
  if (event.target.closest('#confirm-team-change')) { state.modalTeam = state.pendingTeam; state.pendingTeam = null; state.templateOverrides.clear(); document.getElementById('confirm-dialog').hidden = true; renderTemplate(); return }
  document.querySelectorAll('.member-popover').forEach(pop => pop.hidden = true)
  if (state.openTeamSave) { state.openTeamSave = false; renderSavePrompts() }
})
document.addEventListener('dragstart', event => {
  const handle = event.target.closest?.('[data-member-drag]')
  const row = event.target.closest?.('#members-list .member-row')
  if (!handle || !row) return
  draggedMemberId = handle.dataset.memberDrag
  row.classList.add('is-dragging')
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', draggedMemberId)
})
document.addEventListener('dragover', event => {
  if (!draggedMemberId) return
  const row = event.target.closest?.('#members-list .member-row')
  if (!row || row.dataset.member === draggedMemberId) return
  event.preventDefault()
  const after = event.clientY > row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2
  dropPosition = { targetId: row.dataset.member, after }
  document.querySelectorAll('#members-list .member-row').forEach(item => item.classList.remove('is-drop-before', 'is-drop-after'))
  row.classList.add(after ? 'is-drop-after' : 'is-drop-before')
  event.dataTransfer.dropEffect = 'move'
})
document.addEventListener('drop', event => {
  if (!draggedMemberId) return
  const row = event.target.closest?.('#members-list .member-row')
  if (!row || !dropPosition) { clearMemberDragState(); return }
  event.preventDefault()
  const sourceId = draggedMemberId
  const { targetId, after } = dropPosition
  clearMemberDragState()
  moveMemberTo(sourceId, targetId, after)
})
document.addEventListener('dragend', clearMemberDragState)
document.addEventListener('change',event=>{const photoTarget=event.target.closest('[data-member-photo]');if(photoTarget){const file=photoTarget.files?.[0];const member=members.find(item=>item.id===photoTarget.dataset.memberPhoto);if(file&&member){const reader=new FileReader();reader.onload=()=>{member.photo=String(reader.result||'');state.teamDraft=true;render()};reader.readAsDataURL(file)}return}const fieldTarget=event.target.closest('[data-field]');if(fieldTarget){const key=fieldTarget.dataset.field;if(state.selectedMember){const member=members.find(item=>item.id===state.selectedMember);member[key]=fieldTarget.value;state.teamDraft=true;render();return}if(key==='columns')state.columns=Number(fieldTarget.value);if(key==='padding')state.padding=Math.max(16,Number(fieldTarget.value));if(key==='headingSize')state.headingSize=Math.max(12,Number(fieldTarget.value));if(key==='descriptionSize')state.descriptionSize=Math.max(12,Number(fieldTarget.value));if(key==='elementVisibility'){state.hidden.has(state.selected)?state.hidden.delete(state.selected):state.hidden.add(state.selected)}markPageChanged(key);return}if(event.target.id==='modal-team-select'){state.pendingTeam=event.target.value;document.getElementById('confirm-dialog').hidden=false}})
document.addEventListener('keydown',event=>{const dragHandle=event.target.closest?.('[data-member-drag]');if(dragHandle&&(event.key==='ArrowUp'||event.key==='ArrowDown')){event.preventDefault();moveMember(dragHandle.dataset.memberDrag,event.key==='ArrowUp'?-1:1);return}if(event.key==='Escape'){if(!document.getElementById('template-modal').hidden)document.getElementById('template-modal').hidden=true;else selectStructure('page')}})
if (document.body.dataset.page === 'template-demo') document.getElementById('template-modal').hidden = false
render()
