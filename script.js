const memberCatalog = [
  { id: 'olivia', initials: 'OW', name: 'Olivia Williams', title: 'Software Engineer', email: 'olivia@example.com', phone: '+1 (555) 666-6666', cell: '', bio: '', color: '#dce9f3', photo: './assets/figma-team/olivia.jpeg' },
  { id: 'noah', initials: 'NB', name: 'Noah Brown', title: 'UX Designer', email: 'noah@example.com', phone: '+1 (555) 555-5555', cell: '', bio: '', color: '#dfe4ea', photo: './assets/figma-team/noah.jpeg' },
  { id: 'james', initials: 'JJ', name: 'James Jones', title: 'Data Analyst', email: 'james@example.com', phone: '+1 (555) 777-7777', cell: '', bio: '', color: '#e7ded5', photo: './assets/figma-team/james.jpeg' },
  { id: 'sophia', initials: 'SG', name: 'Sophia Garcia', title: 'Marketing Specialist', email: 'sophia@example.com', phone: '+1 (555) 888-8888', cell: '', bio: '', color: '#e5d8d0', photo: './assets/figma-team/sophia.jpeg' },
  { id: 'lucas', initials: 'LM', name: 'Lucas Martinez', title: 'Sales Executive', email: 'lucas@example.com', phone: '+1 (555) 999-9999', cell: '', bio: '', color: '#dae4e5', photo: './assets/figma-team/lucas.jpeg' },
  { id: 'mia', initials: 'MR', name: 'Mia Rodriguez', title: 'Customer Support Lead', email: 'mia@example.com', phone: '+1 (555) 101-0101', cell: '', bio: '', color: '#eadfd8', photo: './assets/figma-team/mia.jpeg' },
  { id: 'ava', initials: 'AP', name: 'Ava Patel', title: 'Product Manager', email: 'ava@example.com', phone: '+1 (555) 202-0202', cell: '', bio: '', color: '#e8e0f3', photo: './assets/figma-team/ava.png' },
  { id: 'ethan', initials: 'EC', name: 'Ethan Chen', title: 'Frontend Developer', email: 'ethan@example.com', phone: '+1 (555) 303-0303', cell: '', bio: '', color: '#dcebe7', photo: './assets/figma-team/ethan.png' },
]
const savedTeams = {
  'Marketing Team': { id: 'marketing', name: 'Marketing Team', groups: [
    { id: 'marketing-engineering', name: 'Engineering', memberIds: ['olivia', 'noah'] },
    { id: 'marketing-growth', name: 'Growth Marketing', memberIds: ['sophia', 'mia'] },
    { id: 'marketing-analytics', name: 'Analytics & Sales', memberIds: ['james', 'lucas'] },
  ] },
  'Design Team': { id: 'design', name: 'Design Team', groups: [
    { id: 'design-product', name: 'Product Design', memberIds: ['olivia', 'noah', 'sophia', 'mia', 'james', 'lucas', 'ava', 'ethan'] },
  ] },
  'Leadership Team': { id: 'leadership', name: 'Leadership Team', groups: [
    { id: 'leadership-executive', name: 'Executive Team', memberIds: ['olivia', 'noah', 'sophia', 'james', 'lucas', 'mia'] },
  ] },
  'Operations Team': { id: 'operations', name: 'Operations Team', groups: [
    { id: 'operations-delivery', name: 'Delivery', memberIds: ['olivia', 'noah', 'sophia'] },
    { id: 'operations-support', name: 'Support', memberIds: ['james', 'lucas', 'mia'] },
  ] },
}
const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char])
const defaultGroupSettings = overrides => ({
  hidden: ['phone', 'cellphone', 'bio'],
  sectionAlignment: 'top', sectionGap: 16,
  sectionContainerBackground: '#FFFFFF', sectionContainerBackgroundOpacity: 0, sectionContainerPadding: 0, sectionContainerRadius: 0, sectionContentGap: 10,
  sectionHeadingSize: 17, sectionHeadingMarginTop: 0, sectionHeadingMarginBottom: 0, sectionHeadingAlignment: 'left', sectionHeadingColor: '#0F3A64', sectionHeadingColorOpacity: 1, sectionHeadingBackground: '#FFFFFF', sectionHeadingBackgroundOpacity: 0,
  sectionContentSize: 14, sectionContentMarginTop: 0, sectionContentMarginBottom: 0, sectionContentAlignment: 'left', sectionContentColor: '#343839', sectionContentColorOpacity: 1, sectionContentBackground: '#FFFFFF', sectionContentBackgroundOpacity: 0,
  columns: 3, gridGap: 16, gridPadding: 0, gridAlignment: 'left', cardVerticalAlignment: 'top',
  cardPadding: 0, cardRadius: 0, cardBackground: '#FFFFFF', cardBackgroundOpacity: 0, cardBorderColor: '#E5E2E0', cardBorderOpacity: 0, cardBorderWidth: 0, cardBorderStyle: 'solid', cardShadow: 'none', cardTextAlign: 'left', avatarPosition: 'top', avatarRadius: 0, avatarSize: 100,
  ...overrides,
})
const defaultGroup = (name, memberIds, description, overrides = {}) => {
  const { layout = 'stacked', showHeading = true, contentVisible = true, visible = true, ...settings } = overrides
  return { name, heading: name, showHeading, contentVisible, contentHtml: descriptionHtmlFromText(description), layout, visible, memberIds, settings: defaultGroupSettings(settings) }
}
const defaultTeamConfigs = {
  marketing: {
    groupOrder: ['marketing-engineering', 'marketing-growth', 'marketing-analytics'],
    groups: {
      'marketing-engineering': defaultGroup('Engineering', ['olivia', 'noah'], 'Here is team description. Here is team description. Here is team description.\n• Item 1\n• Item 2\n• Item 3', { layout: 'content-left', sectionContainerBackground: '#F5F5FE', sectionContainerBackgroundOpacity: 1, sectionContainerPadding: 12, sectionContainerRadius: 8, sectionContentGap: 2, sectionHeadingSize: 14, sectionHeadingMarginBottom: 2, sectionContentSize: 12, columns: 2, gridGap: 16, cardVerticalAlignment: 'bottom', cardPadding: 10, cardBackground: '#FFFFFF', cardBackgroundOpacity: 1, cardBorderColor: '#90ADC8', cardBorderOpacity: 1, cardAlign: undefined, cardTextAlign: 'center', avatarRadius: 14, avatarSize: 80 }),
      'marketing-growth': defaultGroup('Growth Marketing', ['sophia', 'mia'], 'Here is team description. Here is team description.', { layout: 'content-left', sectionContainerBackground: '#F5F5FE', sectionContainerBackgroundOpacity: 1, sectionContainerPadding: 12, sectionContainerRadius: 8, sectionContentGap: 2, sectionHeadingSize: 14, sectionContentSize: 12, columns: 2, gridGap: 16, cardVerticalAlignment: 'bottom', cardPadding: 10, cardBackground: '#FFFFFF', cardBackgroundOpacity: 1, cardBorderColor: '#90ADC8', cardBorderOpacity: 1, cardTextAlign: 'center', avatarRadius: 14, avatarSize: 80 }),
      'marketing-analytics': defaultGroup('Analytics & Sales', ['james', 'lucas'], 'Here is team description', { layout: 'content-left', sectionContainerBackground: '#F5F5FE', sectionContainerBackgroundOpacity: 1, sectionContainerPadding: 12, sectionContainerRadius: 8, sectionContentGap: 2, sectionHeadingSize: 14, sectionContentSize: 12, columns: 2, gridGap: 16, cardVerticalAlignment: 'bottom', cardPadding: 10, cardBackground: '#FFFFFF', cardBackgroundOpacity: 1, cardBorderColor: '#90ADC8', cardBorderOpacity: 1, cardTextAlign: 'center', avatarRadius: 14, avatarSize: 80 }),
    },
  },
  design: {
    groupOrder: ['design-product'],
    groups: {
      'design-product': defaultGroup('Product Design', ['olivia', 'noah', 'sophia', 'mia', 'james', 'lucas', 'ava', 'ethan'], 'Here is team description', { sectionContentGap: 10, columns: 3, gridGap: 16, cardVerticalAlignment: 'center', cardPadding: 9, cardBackground: '#F9F9FF', cardBackgroundOpacity: 1, cardBorderColor: '#E3E5FF', cardBorderOpacity: 1, cardTextAlign: 'center', avatarRadius: 50, avatarSize: 45 }),
    },
  },
  leadership: {
    groupOrder: ['leadership-executive'],
    groups: {
      'leadership-executive': defaultGroup('Executive Team', ['olivia', 'noah', 'sophia', 'james', 'lucas', 'mia'], '\\Here is team description', { showHeading: false, contentVisible: false, sectionContentGap: 10, columns: 3, gridGap: 16, cardVerticalAlignment: 'top', cardBackground: '#FFFFFF', cardBackgroundOpacity: 0, cardBorderColor: '#E5E2E0', cardBorderOpacity: 0, cardTextAlign: 'left', avatarRadius: 0, avatarSize: 100 }),
    },
  },
  operations: {
    groupOrder: ['operations-delivery', 'operations-support'],
    groups: {
      'operations-delivery': defaultGroup('Delivery', ['olivia', 'noah', 'sophia'], 'Description of team section', { sectionGap: 23, sectionContainerBackground: '#F5F5FE', sectionContainerBackgroundOpacity: 0, sectionContainerRadius: 8, sectionContentGap: 2, sectionHeadingSize: 16, sectionContentSize: 12, columns: 3, gridGap: 10, cardVerticalAlignment: 'center', cardPadding: 10, cardRadius: 12, cardBackground: '#F5F5FF', cardBackgroundOpacity: 1, cardBorderColor: '#E5E2E0', cardBorderOpacity: 0, cardTextAlign: 'center', avatarRadius: 50, avatarSize: 60 }),
      'operations-support': defaultGroup('Support', ['james', 'lucas', 'mia'], 'Here is team description. There can be more bullet points:\n• Item 1\n• Item 2', { sectionGap: 23, sectionContainerBackground: '#F5F5FE', sectionContainerBackgroundOpacity: 0, sectionContainerRadius: 8, sectionContentGap: 2, sectionHeadingSize: 16, sectionContentSize: 12, columns: 3, gridGap: 10, cardVerticalAlignment: 'center', cardPadding: 10, cardRadius: 12, cardBackground: '#F5F5FF', cardBackgroundOpacity: 1, cardBorderColor: '#E5E2E0', cardBorderOpacity: 0, cardTextAlign: 'center', avatarRadius: 50, avatarSize: 60 }),
    },
  },
}
const cardFieldStructure = [['photo','Photo',3],['fullName','Full name',3],['jobTitle','Job title',3],['email','Email',3],['phone','Phone',3],['cellphone','Cellphone',3],['bio','Bio',3]]
const cardFieldKeys = cardFieldStructure.map(([key]) => key)
const structure = [['page','Page',0],['heading','Heading',1],['subhead','Sub-head',1],['description','Description',1]]
const sectionSettingKeys = ['hidden','columns','gridGap','gridPadding','gridAlignment','sectionAlignment','alignment','cardPadding','cardMinHeight','cardRadius','cardBackground','cardBackgroundOpacity','cardBorderColor','cardBorderOpacity','cardBorderWidth','cardBorderStyle','cardShadow','cardTextAlign','avatarSize','avatarPosition','avatarRadius','cardFieldOrder','nameSize','titleSize','bodySize','nameColor','titleColor','bodyColor','nameBackground','nameBackgroundOpacity','titleBackground','titleBackgroundOpacity','emailSize','emailColor','emailColorOpacity','emailBackground','emailBackgroundOpacity','phoneSize','phoneColor','phoneColorOpacity','phoneBackground','phoneBackgroundOpacity','cellphoneSize','cellphoneColor','cellphoneColorOpacity','cellphoneBackground','cellphoneBackgroundOpacity','bioSize','bioColor','bioColorOpacity','bioBackground','bioBackgroundOpacity','fullNameBold','fullNameItalic','fullNameUnderline','fullNameStrike','jobTitleBold','jobTitleItalic','jobTitleUnderline','jobTitleStrike','emailBold','emailItalic','emailUnderline','emailStrike','phoneBold','phoneItalic','phoneUnderline','phoneStrike','cellphoneBold','cellphoneItalic','cellphoneUnderline','cellphoneStrike','bioBold','bioItalic','bioUnderline','bioStrike','sectionHeadingSize','sectionHeadingMarginTop','sectionHeadingMarginBottom','sectionHeadingAlignment','sectionHeadingBold','sectionHeadingItalic','sectionHeadingUnderline','sectionHeadingStrike','sectionHeadingColor','sectionHeadingColorOpacity','sectionHeadingBackground','sectionHeadingBackgroundOpacity','sectionHeadingPadding','sectionHeadingRadius','sectionContentSize','sectionContentMarginTop','sectionContentMarginBottom','sectionContentAlignment','sectionContentBold','sectionContentItalic','sectionContentUnderline','sectionContentStrike','sectionContentColor','sectionContentColorOpacity','sectionContentBackground','sectionContentBackgroundOpacity','sectionContentPadding','sectionContentRadius','sectionContainerBackground','sectionContainerBackgroundOpacity','sectionContainerPadding','sectionContainerRadius']
sectionSettingKeys.push('sectionGap')
sectionSettingKeys.push('sectionContentWidth')
sectionSettingKeys.push('sectionContentGap')
sectionSettingKeys.push('cardVerticalAlignment')
const state = {
  selected: 'page', selectedField: null, selectedMember: null, activeCard: 'olivia', activeSectionId: 'section-marketing', hidden: new Set(['subhead', 'cellphone', 'bio']), columns: 3, padding: 40, pageGap: 26, pageDraft: false, teamDraft: false,
  templateOverrides: new Set(), modalTeam: 'Marketing Team', activeTeamId: 'marketing', teamConfigs: JSON.parse(JSON.stringify(defaultTeamConfigs)), openTeamSelector: false, openTeamSave: false, pendingTeam: null, pageMemberOverrides: {}, draggedSectionId: null, collapsedSections: new Set(), collapsedGroups: new Set(), sectionChild: null, pageHidden: new Set(['subhead']), pageDefaults: {}, pageDefaultsInitialized: false, settingsScope: 'page',
  headingSize: 18, headingMarginTop: 0, headingMarginBottom: 0, descriptionSize: 12, descriptionMarginTop: 4, descriptionMarginBottom: 0, subheadSize: 14, subheadMarginTop: 8, subheadMarginBottom: 0, pageBackground: '#FFFFFF', pageBackgroundOpacity: 1, alignment: 'left',
  pageSections: [],
  groupSettingsClipboard: null,
}
const BUILDER_STORAGE_KEY = 'outmarket-team-page-builder-state-v2'
const labelFor = key => structure.find(([id]) => id === key)?.[1] || key
const icon = (name, label = '') => `<i data-lucide="${name}"${label ? ` aria-label="${label}"` : ''}></i>`
const visibilityIcon = visible => `<i class="visibility-icon" data-lucide="${visible ? 'eye' : 'eye-off'}" aria-hidden="true"></i>`
const refreshLucideIcons = () => window.lucide?.createIcons({ attrs: { 'stroke-width': 2 } })
const propertySelectControl = (selectMarkup, variant = 'field') => `<span class="select-control select-control--${variant}">${selectMarkup}${icon('chevrons-up-down')}</span>`
const propertySelect = (key, options, current = '') => propertySelectControl(`<select data-field="${key}">${options.map(value => `<option value="${esc(value)}" ${String(current) === String(value) ? 'selected' : ''}>${esc(value)}</option>`).join('')}</select>`)
let draggedMemberId = null
let dropPosition = null
let resizingSectionId = null
let resizingHandle = null
let lastMemberProfileClick = null
function isVisible(key) { return !state.hidden.has(key) }

function makeSectionsForTeam(team, config = {}) {
  if (!team) return []
  const groupsById = new Map(team.groups.map(group => [group.id, group]))
  const order = [...(config.groupOrder || []), ...team.groups.map(group => group.id).filter(id => !(config.groupOrder || []).includes(id))]
  const used = new Set()
  return order.map(groupId => groupsById.get(groupId)).filter(Boolean).map(group => {
    const saved = config.groups?.[group.id] || {}
    const configuredIds = saved.memberIds ? [...saved.memberIds.filter(id => group.memberIds.includes(id)), ...group.memberIds.filter(id => !saved.memberIds.includes(id))] : group.memberIds
    const memberIds = configuredIds.filter(id => {
      if (used.has(id)) return false
      used.add(id)
      return true
    })
    return {
      id: `section-${group.id}`,
      sourceGroupId: group.id,
      sourceGroupName: group.name,
      name: saved.name ?? group.name,
      heading: saved.heading ?? group.name,
      showHeading: saved.showHeading ?? true,
      contentVisible: saved.contentVisible ?? true,
      contentHtml: saved.contentHtml ?? '<p>Here is team description</p>',
      containerEnabled: true,
      layout: saved.layout ?? 'stacked',
      visible: saved.visible ?? true,
      memberIds,
      settings: saved.settings ? { ...saved.settings } : {},
    }
  })
}
state.pageSections = makeSectionsForTeam(savedTeams['Marketing Team'], state.teamConfigs.marketing)
state.activeSectionId = state.pageSections[0]?.id || null
state.layoutSuggestion = null
// The source defaults already contain the approved four-team layouts. Do not
// replace them with an automatic recommendation on a fresh developer load.
state.layoutSuggestionApplied = true
function getSection(id = state.activeSectionId) { return state.pageSections.find(section => section.id === id) || state.pageSections[0] }
function activeTeam() { return Object.values(savedTeams).find(team => team.id === state.activeTeamId) || Object.values(savedTeams)[0] }
function saveCurrentTeamConfig() {
  const team = activeTeam()
  if (!team) return
  state.teamConfigs[team.id] = {
    groupOrder: state.pageSections.map(section => section.sourceGroupId),
    groups: Object.fromEntries(state.pageSections.map(section => [section.sourceGroupId, {
      name: section.name, heading: section.heading, showHeading: section.showHeading, contentVisible: section.contentVisible,
      contentHtml: section.contentHtml, layout: section.layout, visible: section.visible, memberIds: [...section.memberIds], settings: { ...(section.settings || {}) },
      containerEnabled: true,
    }])),
  }
}
function persistBuilderState() {
  try {
    persistActiveSectionSettings()
    saveCurrentTeamConfig()
    const snapshot = JSON.parse(JSON.stringify(state, (_key, value) => value instanceof Set ? [...value] : value))
    localStorage.setItem(BUILDER_STORAGE_KEY, JSON.stringify(snapshot))
  } catch (_error) {
    // Local persistence is a convenience; private browsing or blocked storage
    // should not prevent the builder from working in memory.
  }
}
let saveSnackbarTimer = null
function hideSaveSnackbar() {
  const snackbar = document.getElementById('save-snackbar')
  if (!snackbar) return
  clearTimeout(saveSnackbarTimer)
  snackbar.classList.remove('is-visible')
  window.setTimeout(() => { snackbar.hidden = true }, 180)
}
function showSaveSnackbar() {
  const snackbar = document.getElementById('save-snackbar')
  if (!snackbar) return
  clearTimeout(saveSnackbarTimer)
  snackbar.hidden = false
  snackbar.classList.remove('is-visible')
  refreshLucideIcons()
  requestAnimationFrame(() => snackbar.classList.add('is-visible'))
  saveSnackbarTimer = window.setTimeout(hideSaveSnackbar, 4000)
}
function restoreBuilderState() {
  try {
    const saved = JSON.parse(localStorage.getItem(BUILDER_STORAGE_KEY) || 'null')
    if (!saved || typeof saved !== 'object') return false
    Object.assign(state, saved)
    ;['hidden', 'pageHidden', 'collapsedSections', 'collapsedGroups', 'templateOverrides'].forEach(key => {
      state[key] = new Set(Array.isArray(saved[key]) ? saved[key] : [])
    })
    state.teamConfigs = saved.teamConfigs && typeof saved.teamConfigs === 'object' ? saved.teamConfigs : {}
    state.activeTeamId = activeTeam()?.id || 'marketing'
    state.pageSections = makeSectionsForTeam(activeTeam(), state.teamConfigs[state.activeTeamId] || {})
    state.activeSectionId = state.pageSections.some(section => section.id === saved.activeSectionId) ? saved.activeSectionId : state.pageSections[0]?.id || null
    state.activeCard = state.pageSections[0]?.memberIds[0] || null
    state.selected = 'page'
    state.selectedField = null
    state.selectedMember = null
    state.sectionChild = null
    state.openColorPicker = null
    state.openTeamSelector = false
    state.openTeamSave = false
    state.settingsScope = 'page'
    return true
  } catch (_error) {
    return false
  }
}
function copyActiveGroupSettings() {
  const section = getSection()
  if (!section) return false
  const resolved = sectionSettings(section)
  const settings = {}
  sectionSettingKeys.forEach(key => {
    if (key === 'hidden') settings[key] = [...(resolved.hidden || [])]
    else if (key === 'cardFieldOrder') settings[key] = [...(resolved.cardFieldOrder || cardFieldKeys)]
    else if (resolved[key] !== undefined) settings[key] = Array.isArray(resolved[key]) ? [...resolved[key]] : resolved[key]
  })
  state.groupSettingsClipboard = { sourceName: section.name, layout: section.layout, showHeading: section.showHeading, contentVisible: section.contentVisible, settings }
  return true
}
function pasteGroupSettingsToActive() {
  const section = getSection()
  const clipboard = state.groupSettingsClipboard
  if (!section || !clipboard) return false
  section.layout = clipboard.layout
  section.showHeading = clipboard.showHeading
  section.contentVisible = clipboard.contentVisible
  section.settings = { ...(section.settings || {}) }
  Object.entries(clipboard.settings || {}).forEach(([key, value]) => { section.settings[key] = Array.isArray(value) ? [...value] : value })
  loadSectionSettings(section)
  state.teamDraft = true
  return true
}
function selectTeam(teamName) {
  const team = savedTeams[teamName]
  if (!team) return
  const savedConfig = state.teamConfigs[team.id]
  persistActiveSectionSettings()
  saveCurrentTeamConfig()
  state.activeTeamId = team.id
  state.pageSections = makeSectionsForTeam(team, savedConfig)
  state.collapsedSections = new Set()
  state.collapsedGroups = new Set()
  state.activeSectionId = state.pageSections[0]?.id || null
  state.activeCard = state.pageSections[0]?.memberIds[0] || null
  state.layoutSuggestion = null
  state.layoutSuggestionApplied = false
  state.selected = 'page'
  state.selectedField = null
  state.selectedMember = null
  state.openTeamSelector = false
  state.teamDraft = true
  loadPageDefaults()
  if (!savedConfig) applyLayoutRecommendation({ automatic: true })
  render()
}
function normalizeSectionAlignment(value) { return value === 'center' ? 'center' : value === 'bottom' || value === 'right' ? 'bottom' : 'top' }
function normalizeSectionContentWidth(value) { const numeric = Number(value); return Number.isFinite(numeric) ? Math.min(70, Math.max(25, numeric)) : 45 }
function snapSectionContentWidth(value) { const numeric = Number(value); const clamped = Number.isFinite(numeric) ? Math.min(70, Math.max(25, numeric)) : 50; const columns = Math.min(8, Math.max(3, Math.round((clamped / 100) * 12))); return columns * (100 / 12) }
function normalizeAvatarSize(value) { const numeric = Number(value); return Number.isFinite(numeric) ? Math.min(100, Math.max(0, numeric)) : 100 }
function sectionSettings(section = getSection()) { const settings = section?.settings || {}; return new Proxy(settings, { get(target, key) { return target[key] ?? state.pageDefaults?.[key] ?? state[key] } }) }
function activeSettings() { return sectionSettings() }
function ensurePageDefaults() { if (state.pageDefaultsInitialized || state.gridGap === undefined) return; sectionSettingKeys.filter(key => !['hidden', 'cardFieldOrder'].includes(key)).forEach(key => { if (state[key] !== undefined) state.pageDefaults[key] = state[key] }); state.pageDefaults.cardFieldOrder = [...(state.cardFieldOrder || cardFieldKeys)]; state.pageDefaultsInitialized = true }
function loadPageDefaults() { ensurePageDefaults(); Object.entries(state.pageDefaults).forEach(([key, value]) => { state[key] = Array.isArray(value) ? [...value] : value }); state.settingsScope = 'page' }
function persistActiveSectionSettings() { if (state.settingsScope !== 'section') return; const section = getSection(); if (!section) return; section.settings = section.settings || {}; sectionSettingKeys.forEach(key => { if (key === 'hidden') section.settings[key] = [...state.hidden].filter(value => cardFieldKeys.includes(value) || value === 'grid'); else if (key === 'cardFieldOrder') section.settings[key] = [...(state.cardFieldOrder || cardFieldKeys)]; else if (state[key] !== undefined) section.settings[key] = state[key] }) }
function loadSectionSettings(section = getSection()) { if (!section) return; ensurePageDefaults(); const settings = section.settings || {}; state.hidden = new Set(settings.hidden || ['cellphone', 'bio']); sectionSettingKeys.filter(key => !['hidden', 'cardFieldOrder'].includes(key)).forEach(key => { const value = settings[key] ?? state.pageDefaults[key] ?? state[key]; state[key] = key === 'sectionAlignment' ? normalizeSectionAlignment(value) : value }); if (settings.cardFieldOrder) state.cardFieldOrder = [...settings.cardFieldOrder]; else state.cardFieldOrder = [...(state.pageDefaults.cardFieldOrder || cardFieldKeys)]; state.activeSectionId = section.id; state.activeCard = section.memberIds[0] || null; state.settingsScope = 'section' }
function selectSection(sectionId, renderNow = true) { if (!getSection(sectionId)) return; persistActiveSectionSettings(); loadSectionSettings(getSection(sectionId)); state.selectedMember = null; if (renderNow) render() }
function currentMemberIds() { return getSection()?.memberIds || [] }
function currentMembers() { return currentMemberIds().map(id => { const member = memberCatalog.find(item => item.id === id); return member ? { ...member, ...(state.pageMemberOverrides?.[id] || {}) } : null }).filter(Boolean) }
function memberById(id) { const member = memberCatalog.find(item => item.id === id); return member ? { ...member, ...(state.pageMemberOverrides?.[id] || {}) } : null }
function allAssignedMemberIds(exceptSectionId = null) { return new Set(state.pageSections.filter(section => section.id !== exceptSectionId).flatMap(section => section.memberIds)) }
function sourceTeamById(id) { return Object.values(savedTeams).find(team => team.id === id) || Object.values(savedTeams)[0] }
function sourceGroup(section = getSection()) { return activeTeam()?.groups.find(group => group.id === section?.sourceGroupId) }
function sourceTeamName() { return activeTeam()?.name || 'Select team' }
function sanitizeRichText(html = '', { trimTrailingEmptyBlocks = false } = {}) {
  const template = document.createElement('template')
  template.innerHTML = String(html)
  const allowed = new Set(['P','BR','STRONG','B','EM','I','A','UL','OL','LI','DIV'])
  template.content.querySelectorAll('*').forEach(node => {
    if (!allowed.has(node.tagName)) { node.replaceWith(...node.childNodes); return }
    Array.from(node.attributes).forEach(attribute => {
      if (node.tagName === 'A' && attribute.name === 'href') {
        const value = attribute.value.trim()
        if (/^(https?:|mailto:)/i.test(value)) {
          node.setAttribute('href', value)
          node.setAttribute('target', '_blank')
          node.setAttribute('rel', 'noreferrer')
        } else node.removeAttribute(attribute.name)
      } else node.removeAttribute(attribute.name)
    })
  })
  if (trimTrailingEmptyBlocks) {
    const isEmptyBlock = node => ['P', 'DIV'].includes(node?.tagName) && !node.textContent.replace(/\u00a0/g, ' ').trim() && [...node.children].every(child => child.tagName === 'BR')
    while (isEmptyBlock(template.content.lastElementChild)) template.content.lastElementChild.remove()
  }
  return template.innerHTML
}
function descriptionTextFromHtml(html = '') {
  const template = document.createElement('template')
  template.innerHTML = sanitizeRichText(html)
  template.content.querySelectorAll('ul,ol').forEach(list => {
    Array.from(list.children).filter(node => node.tagName === 'LI').forEach((item, index) => {
      item.prepend(list.tagName === 'OL' ? `${index + 1}. ` : '• ')
    })
  })
  template.content.querySelectorAll('br').forEach(node => node.replaceWith('\n'))
  template.content.querySelectorAll('li').forEach(node => node.append('\n'))
  template.content.querySelectorAll('p,div').forEach(node => node.append('\n'))
  return (template.content.textContent || '').replace(/\u00a0/g, ' ').replace(/\n{2,}/g, '\n').trim()
}
function descriptionHtmlFromText(text = '') {
  const normalized = String(text).replace(/\r\n?/g, '\n')
  if (!normalized.trim()) return ''
  const lines = normalized.split('\n')
  const blocks = []
  let listType = null
  let listItems = []
  const flushList = () => {
    if (!listType || !listItems.length) return
    const tag = listType === 'numbered' ? 'ol' : 'ul'
    blocks.push(`<${tag}>${listItems.map(item => `<li>${esc(item)}</li>`).join('')}</${tag}>`)
    listType = null
    listItems = []
  }
  lines.forEach(line => {
    const bullet = line.match(/^\s*(?:•|-)\s+(.+)$/)
    const numbered = line.match(/^\s*\d+[.)]\s+(.+)$/)
    const nextType = bullet ? 'bulleted' : numbered ? 'numbered' : null
    if (nextType) {
      if (listType && listType !== nextType) flushList()
      listType = nextType
      listItems.push((bullet || numbered)[1])
      return
    }
    flushList()
    blocks.push(`<p>${line ? esc(line) : '<br>'}</p>`)
  })
  flushList()
  return blocks.join('')
}
function toggleDescriptionListStyle(text = '', selectionStart = 0, selectionEnd = selectionStart, style = 'none') {
  const value = String(text)
  const start = Math.max(0, Math.min(value.length, selectionStart))
  const end = Math.max(start, Math.min(value.length, selectionEnd))
  const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1
  const nextBreak = value.indexOf('\n', end)
  const lineEnd = nextBreak === -1 ? value.length : nextBreak
  const selected = value.slice(lineStart, lineEnd).split('\n')
  const marker = line => {
    if (/^\s*(?:•|-)\s+/.test(line)) return 'bulleted'
    if (/^\s*\d+[.)]\s+/.test(line)) return 'numbered'
    return 'none'
  }
  const stripMarker = line => line.replace(/^\s*(?:(?:•|-)\s+|\d+[.)]\s+)/, '')
  const isAlreadyStyled = style !== 'none' && selected.filter(line => line.trim()).every(line => marker(line) === style)
  let number = 1
  const updatedLines = selected.map(line => {
    if (!line.trim()) return line
    const content = stripMarker(line)
    if (style === 'none' || isAlreadyStyled) return content
    if (style === 'numbered') return `${number++}. ${content}`
    return `• ${content}`
  })
  const replacement = updatedLines.join('\n')
  const updatedValue = `${value.slice(0, lineStart)}${replacement}${value.slice(lineEnd)}`
  return { value: updatedValue, selectionStart: lineStart, selectionEnd: lineStart + replacement.length }
}
function assignedConflicts(section = getSection()) { const assigned = allAssignedMemberIds(section?.id); return (sourceGroup(section)?.memberIds || []).filter(id => assigned.has(id)).map(id => memberById(id)?.name || id) }
function clearMemberDragState() { draggedMemberId = null; dropPosition = null; document.querySelectorAll('#members-list .member-row').forEach(row => row.classList.remove('is-dragging', 'is-drop-before', 'is-drop-after')) }
function moveMemberTo(memberId, targetId, after = false) { const section = getSection(); if (!section) return false; const from = section.memberIds.indexOf(memberId); const target = section.memberIds.indexOf(targetId); if (from < 0 || target < 0 || from === target) return false; section.memberIds.splice(from, 1); let insertion = section.memberIds.indexOf(targetId); if (after) insertion += 1; section.memberIds.splice(insertion, 0, memberId); state.teamDraft = true; render(); return true }
function moveMember(memberId, offset) { const ids = getSection()?.memberIds || []; const from = ids.indexOf(memberId); const to = from + offset; if (from < 0 || to < 0 || to >= ids.length) return false; const [id] = ids.splice(from, 1); ids.splice(to, 0, id); state.teamDraft = true; render(); requestAnimationFrame(() => document.querySelector(`[data-member-drag="${memberId}"]`)?.focus()); return true }
function assignSavedTeam(teamName) { selectTeam(teamName) }
function removeSection(sectionId) { if (state.pageSections.length <= 1) return; const index = state.pageSections.findIndex(section => section.id === sectionId); if (index < 0) return; state.pageSections.splice(index, 1); const next = state.pageSections[Math.max(0, index - 1)]; state.teamDraft = true; state.selected = 'section'; selectSection(next.id, true) }

function renderStructure() {
  const icons = { page:'file-text', heading:'type', subhead:'type', description:'type', section:'layers-3', sectionContent:'layers-2', sectionDescription:'align-left', content:'align-left', grid:'layout-grid', card:'circle-user', photo:'image', fullName:'type', jobTitle:'type', email:'type', phone:'type', cellphone:'type', bio:'type' }
  const row = (key, label, level, sectionId = null, extra = '') => { const isField = cardFieldKeys.includes(key); const isSection = key === 'section'; const isGroup = isSection || ['sectionContent', 'grid', 'card'].includes(key); const section = sectionId ? getSection(sectionId) : null; const sectionHidden = section ? new Set(sectionSettings(section).hidden || []) : new Set(); const isHidden = isSection ? section?.visible === false : sectionId ? (key === 'heading' ? section?.showHeading === false : key === 'sectionDescription' ? section?.contentVisible === false : sectionHidden.has(key)) : ['heading', 'subhead', 'description'].includes(key) && !isGlobalVisible(key); const collapseKey = isSection ? sectionId : `${sectionId}:${key}`; const collapsed = isGroup && (isSection ? state.collapsedSections.has(collapseKey) : state.collapsedGroups.has(collapseKey)); const selected = isSection ? state.selected === 'section' && state.activeSectionId === sectionId && !state.selectedMember : isField ? state.selectedField === key && state.activeSectionId === sectionId && !state.selectedMember : state.selected === key && (sectionId ? state.activeSectionId === sectionId && state.sectionChild === key : !state.sectionChild) && !state.selectedMember; const draggable = isSection || isField; const dragValue = isField ? key : sectionId; const collapseControl = isGroup ? `<span class="structure-row__collapse" data-group-collapse="${collapseKey}" role="button" tabindex="0" aria-expanded="${!collapsed}" aria-label="${collapsed ? 'Expand' : 'Collapse'} ${esc(label)} group" draggable="false">${icon(collapsed ? 'chevron-right' : 'chevron-down')}</span>` : ''; return `<button class="structure-row ${selected ? 'is-selected' : ''} ${isHidden ? 'is-hidden' : ''}" data-structure="${key}" ${sectionId ? `data-section-id="${sectionId}"` : ''} ${draggable ? `draggable="true" data-${isSection ? 'section-order' : 'field-order'}="${dragValue}"` : ''} style="--level:${level}">${draggable ? `<span class="structure-row__drag-handle" aria-hidden="true">${icon('grip-vertical')}</span>` : ''}${collapseControl}<span class="structure-row__branch">${icon(icons[key] || 'circle')}</span><span class="structure-row__label">${esc(label)}</span>${extra}</button>` }
  const globalVisibility = key => `<span class="structure-row__eye" data-global-visibility="${key}" role="button" aria-label="Toggle ${labelFor(key)} visibility">${visibilityIcon(isGlobalVisible(key))}</span>`
  let html = row('page', 'Page', 0) + row('heading', 'Heading', 1, null, globalVisibility('heading')) + row('subhead', 'Sub-head', 1, null, globalVisibility('subhead')) + row('description', 'Description', 1, null, globalVisibility('description'))
  state.pageSections.forEach(section => { const settings = sectionSettings(section); const order = section.settings?.cardFieldOrder || state.cardFieldOrder || cardFieldKeys; const hidden = settings.hidden instanceof Set ? settings.hidden : new Set(settings.hidden || []); const collapsed = state.collapsedSections.has(section.id); let groupHtml = row('section', section.name, 1, section.id, `<span class="structure-row__eye" data-section-visibility="${section.id}" role="button" aria-label="Toggle section visibility">${visibilityIcon(section.visible !== false)}</span>`); if (!collapsed) { const contentCollapsed = state.collapsedGroups.has(`${section.id}:sectionContent`); const gridCollapsed = state.collapsedGroups.has(`${section.id}:grid`); const cardCollapsed = state.collapsedGroups.has(`${section.id}:card`); groupHtml += row('sectionContent', 'Content', 2, section.id); if (!contentCollapsed) { groupHtml += row('heading', 'Heading', 3, section.id, `<span class="structure-row__eye" data-section-heading-visibility="${section.id}" role="button" aria-label="Toggle group heading visibility">${visibilityIcon(section.showHeading)}</span>`); groupHtml += row('sectionDescription', 'Description', 3, section.id, `<span class="structure-row__eye" data-section-content-visibility="${section.id}" role="button" aria-label="Toggle group description visibility">${visibilityIcon(section.contentVisible)}</span>`) } groupHtml += row('grid', 'Grid', 2, section.id); if (!gridCollapsed) { groupHtml += row('card', 'Member card', 3, section.id); if (!cardCollapsed) order.map(key => cardFieldStructure.find(item => item[0] === key)).filter(Boolean).forEach(([key, label]) => { groupHtml += row(key, label, 4, section.id, `<span class="structure-row__eye" data-field-visibility="${key}" role="button" aria-label="Toggle ${label} visibility">${visibilityIcon(!hidden.has(key))}</span>`) }) } } html += `<div class="structure-group" data-structure-group="${section.id}" aria-label="${esc(section.name)} group">${groupHtml}</div>` })
  const list = document.getElementById('structure-list'); if (list) list.innerHTML = html
}
function renderMembers() {
  const members = currentMembers(); const section = getSection(); const total = document.getElementById('member-total'); if (total) total.textContent = members.length; const activeName = document.getElementById('active-team-name'); if (activeName) activeName.textContent = sourceTeamName(); const toggle = document.getElementById('team-selector-toggle'); toggle?.setAttribute('aria-expanded', String(state.openTeamSelector)); const menu = document.getElementById('team-selector-menu'); if (menu) { menu.hidden = !state.openTeamSelector; menu.innerHTML = Object.values(savedTeams).map(team => `<button class="${state.activeTeamId === team.id ? 'is-active' : ''}" data-switch-team="${esc(team.name)}"><span class="team-selector-menu__content"><strong>${esc(team.name)}</strong><small>${team.groups.length} ${team.groups.length === 1 ? 'group' : 'groups'}</small></span>${state.activeTeamId === team.id ? icon('check') : ''}</button>`).join('') } const conflict = document.getElementById('team-conflict-message'); if (conflict) { const conflicts = assignedConflicts(section); conflict.hidden = !conflicts.length; conflict.innerHTML = conflicts.length ? `<strong>${conflicts.length} already used on this page</strong><span>${esc(conflicts.join(', '))} ${conflicts.length === 1 ? 'was' : 'were'} excluded from this group.</span>` : '' } const list = document.getElementById('members-list'); if (!list) return; list.innerHTML = members.map(member => `<div class="member-row ${state.selectedMember === member.id ? 'is-selected' : ''}" data-member="${member.id}"><button type="button" class="member-drag-handle" data-member-drag="${member.id}" draggable="true" aria-label="Reorder ${esc(member.name)}">${icon('grip-vertical')}</button><span class="member-avatar" style="--avatar:${member.color}">${member.photo ? `<img src="${esc(member.photo)}" alt="">` : esc(member.initials)}</span><span class="member-row__content"><span class="member-row__name ${member.placeholder ? 'is-placeholder' : ''}">${esc(member.name)}</span><span class="member-row__title ${member.placeholder ? 'is-placeholder' : ''}">${esc(member.title || 'Add team member details')}</span></span><button class="member-menu" data-member-menu="${member.id}" aria-label="Options for ${esc(member.name)}">${icon('ellipsis')}</button><div class="member-popover" id="member-popover-${member.id}" hidden><button data-swap="${member.id}">Swap member</button><button class="remove" data-remove="${member.id}">Remove from group</button></div></div>`).join('')
}
function cardFieldMarkup(member, key, preview = false, settings = activeSettings()) { const hidden = (settings.hidden instanceof Set ? settings.hidden : new Set(settings.hidden || [])).has(key) ? 'element-hidden' : ''; const selected = state.selectedField === key && state.activeSectionId === member.sectionId && !preview && !state.selectedMember ? 'is-selected-element' : ''; if (key === 'photo') return `<div class="member-card__photo ${hidden} ${selected}" data-card-field="photo">${member.photo ? `<img src="${esc(member.photo)}" alt="${esc(member.name)}">` : esc(member.initials)}</div>`; if (key === 'fullName') return `<h3 class="${hidden} ${selected}" data-card-field="fullName">${esc(member.name)}</h3>`; if (key === 'jobTitle') return `<p class="member-card__role ${hidden} ${selected}" data-card-field="jobTitle">${esc(member.title)}</p>`; if (member.placeholder) return ''; const field = key === 'email' ? member.email : key === 'phone' ? member.phone : key === 'cellphone' ? member.cell : member.bio; const iconName = key === 'email' ? 'mail' : key === 'phone' ? 'phone' : key === 'cellphone' ? 'smartphone' : ''; return `<p class="member-card__detail ${key === 'bio' ? 'member-card__bio' : ''} ${hidden} ${selected}" data-card-field="${key}"><span>${iconName ? icon(iconName) : ''}</span>${esc(field)}</p>` }
function sectionMembersMarkup(section, preview = false) { const settings = sectionSettings(section); const fieldOrder = settings.cardFieldOrder || cardFieldKeys; return section.memberIds.map(id => { const member = memberById(id); if (!member) return ''; member.sectionId = section.id; const templateSelected = state.selected === 'card' && state.activeSectionId === section.id && !preview; const templateFocus = templateSelected && state.activeCard === id; const memberSelected = state.selectedMember === id && state.activeSectionId === section.id && !preview; return `<button class="member-card ${templateSelected ? 'has-card-selection' : ''} ${templateFocus ? 'is-template-focus-active' : ''} ${memberSelected ? 'is-member-selected' : ''}" data-card="${id}" data-section-id="${section.id}" style="--avatar:${member.color}">${fieldOrder.map(key => cardFieldMarkup(member, key, preview, settings)).join('')}</button>` }).join('') }
function sectionMarkup(section, preview = false) {
  const settings = sectionSettings(section)
  const visible = section.visible !== false
  const interactive = !preview && !state.selectedMember && state.activeSectionId === section.id
  const sectionSelected = interactive && state.selected === 'section'
  const contentSelected = interactive && state.sectionChild === 'sectionContent'
  const headingSelected = interactive && state.sectionChild === 'heading'
  const descriptionSelected = interactive && state.sectionChild === 'sectionDescription'
  const content = section.contentVisible && section.contentHtml ? `<div class="team-section__content-panel ${descriptionSelected ? 'is-selected-element' : ''}" data-section-content="${section.id}">${sanitizeRichText(section.contentHtml, { trimTrailingEmptyBlocks: true })}</div>` : ''
  const heading = `<header class="team-section__head"><h3 class="team-section__heading ${section.showHeading ? '' : 'element-hidden'} ${headingSelected ? 'is-selected-element' : ''}">${esc(section.heading || section.name)}</h3></header>`
  const combined = section.containerEnabled ? `<div class="team-section__container ${contentSelected ? 'is-selected-element' : ''}">${heading}${content}</div>` : `${heading}${content}`
  const gridHidden = (settings.hidden instanceof Set ? settings.hidden : new Set(settings.hidden || [])).has('grid')
  const grid = `<div class="members-grid ${state.selected === 'grid' && state.activeSectionId === section.id && !preview ? 'is-selected-element' : ''} ${gridHidden ? 'element-hidden' : ''}" data-section-id="${section.id}" style="--columns:${settings.columns}">${sectionMembersMarkup(section, preview)}</div>`
  const splitLayout = section.layout === 'content-left' || section.layout === 'content-right'
  const splitWidth = normalizeSectionContentWidth(settings.sectionContentWidth)
  const dividerPosition = section.layout === 'content-right' ? 100 - splitWidth : splitWidth
  const divider = splitLayout && sectionSelected ? `<button class="team-section__resize-handle" type="button" data-section-resize="${section.id}" style="--resize-position:${dividerPosition}%" aria-label="Resize content and member grid columns"><span aria-hidden="true"></span></button>` : ''
  const body = `<div class="team-section__layout team-section__layout--${section.layout}">${combined}${divider}${grid}</div>`
  return `<section class="team-section ${visible ? '' : 'element-hidden'} ${section.containerEnabled ? 'has-shared-container' : ''} ${sectionSelected ? 'is-selected-element' : ''}" data-section-id="${section.id}" data-section-layout="${section.layout}">${body}</section>`
}
function textLineCount(text, charsPerLine = 76) { const plain = String(text || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); return Math.max(1, Math.ceil(plain.length / charsPerLine)) }
function sectionHeightEstimate(section, { compact = false } = {}) {
  const settings = sectionSettings(section)
  const pagePadding = Math.max(16, Number(state.padding) || 40)
  const innerWidth = Math.max(280, 608 - pagePadding * 2)
  const columns = Math.max(1, Number(settings.columns ?? state.columns ?? 3))
  const gap = Math.max(0, Number(settings.gridGap ?? state.gridGap ?? 16))
  const gridPadding = Math.max(0, Number(settings.gridPadding ?? state.gridPadding ?? 0))
  const contentWidth = normalizeSectionContentWidth(settings.sectionContentWidth)
  const gridWidth = section.layout === 'stacked' ? innerWidth - gridPadding * 2 : (innerWidth * (1 - contentWidth / 100)) - gridPadding * 2
  const cardWidth = Math.max(72, (gridWidth - gap * (columns - 1)) / columns)
  const hidden = settings.hidden instanceof Set ? settings.hidden : new Set(settings.hidden || [])
  const visibleFields = (settings.cardFieldOrder || state.cardFieldOrder || cardFieldKeys).filter(key => !hidden.has(key))
  const textHeight = (visibleFields.includes('fullName') ? 22 : 0) + (visibleFields.includes('jobTitle') ? 24 : 0) + (visibleFields.filter(key => ['email', 'phone', 'cellphone', 'bio'].includes(key)).length * 16)
  const avatarPosition = settings.avatarPosition ?? state.avatarPosition
  const requestedAvatarSize = normalizeAvatarSize(settings.avatarSize ?? state.avatarSize ?? 90)
  // fitCardsToLetterPage() reduces top avatars when several groups share a
  // page. Use the same compact target for the fallback pagination pass so a
  // group is not moved to page 2 before the renderer has a chance to fit it.
  const avatarSize = compact && avatarPosition === 'top' ? Math.min(requestedAvatarSize, 40) : requestedAvatarSize
  const photoHeight = avatarPosition === 'none' || hidden.has('photo') ? 0 : cardWidth * (avatarSize / 100)
  const cardHeight = Math.max(Number(settings.cardMinHeight) || 0, avatarPosition === 'left' ? Math.max(photoHeight, textHeight + 16) : photoHeight + (photoHeight ? 12 : 0) + textHeight)
  const rows = Math.max(1, Math.ceil(section.memberIds.length / columns))
  const gridHeight = rows * cardHeight + Math.max(0, rows - 1) * gap + gridPadding * 2
  const contentText = section.contentHtml || ''
  const contentColumnWidth = section.layout === 'stacked' ? innerWidth : innerWidth * (contentWidth / 100)
  const contentHeight = section.contentVisible && contentText ? 28 + textLineCount(contentText, Math.max(28, Math.floor(contentColumnWidth / 7))) * 18 + (!section.containerEnabled ? (Number(settings.sectionContentPadding) || 0) * 2 : 0) : 0
  const contentGap = section.showHeading && section.contentVisible && contentText ? Math.max(0, Number(settings.sectionContentGap ?? 10) || 0) : 0
  const headingHeight = section.showHeading ? 24 + contentGap + (!section.containerEnabled ? (Number(settings.sectionHeadingPadding) || 0) * 2 : 0) : 0
  // The Figma canvas removes the legacy grid top margin for every group.
  // Keep pagination aligned with the rendered flex layout so groups are not
  // pushed to another page for space that does not actually exist.
  const sectionGap = Math.max(0, Number(settings.sectionGap ?? 22) || 0)
  const gridTopGap = section.layout === 'stacked' ? sectionGap : 0
  const bodyHeight = section.layout === 'stacked' ? contentHeight + (contentHeight ? 10 : 0) + gridTopGap + gridHeight : Math.max(contentHeight, gridTopGap + gridHeight)
  return headingHeight + bodyHeight + (section.containerEnabled ? (Number(settings.sectionContainerPadding) || 0) * 2 : 0)
}
function applyLayoutRecommendation({ automatic = false } = {}) {
  const sections = state.pageSections.filter(sectionHasRenderableContent)
  if (!sections.length) return null
  if (automatic && state.layoutSuggestionApplied) return state.layoutSuggestion
  const snapshots = sections.map(section => ({ settings: { ...(section.settings || {}) }, layout: section.layout }))
  const totalMembers = sections.reduce((total, section) => total + section.memberIds.length, 0)
  const candidates = [
    { name: 'Balanced', avatarSize: 80, avatarPosition: 'top', gridGap: 16, sectionGap: 16 },
    { name: 'Compact', avatarSize: 62, avatarPosition: 'top', gridGap: 12, sectionGap: 12 },
    { name: 'Horizontal', avatarSize: 72, avatarPosition: 'left', gridGap: 12, sectionGap: 12 },
    { name: 'Dense', avatarSize: 48, avatarPosition: 'left', gridGap: 10, sectionGap: 10 },
    { name: 'Extra compact', avatarSize: 40, avatarPosition: 'left', gridGap: 8, sectionGap: 8 },
  ]
  let best = null
  candidates.forEach(candidate => {
    const plans = sections.map(section => {
      const memberCount = section.memberIds.length
      const split = sections.length > 1 && memberCount <= (candidate.name === 'Balanced' ? 3 : 4)
      return {
        layout: split ? 'content-left' : 'stacked',
        columns: Math.max(1, Math.min(split ? 2 : 3, memberCount || 1)),
        gridGap: candidate.gridGap,
        gridPadding: 0,
        gridAlignment: 'left',
        sectionAlignment: 'top',
        sectionGap: candidate.sectionGap,
        cardMinHeight: 0,
        avatarPosition: candidate.avatarPosition,
        avatarSize: candidate.avatarSize,
      }
    })
    sections.forEach((section, index) => {
      const { layout, ...stylePlan } = plans[index]
      section.layout = layout
      section.settings = { ...snapshots[index].settings, ...stylePlan }
    })
    const pages = paginateSections().length
    const estimatedHeight = sections.reduce((total, section, index) => total + sectionHeightEstimate(section) + (index ? 22 : 0), 0)
    const score = (pages === 1 ? 0 : pages * 100000) + Math.abs(Math.min(760, estimatedHeight) - 700)
    if (!best || score < best.score) best = { ...candidate, plans, pages, estimatedHeight, score }
  })
  sections.forEach((section, index) => {
    const { layout, ...stylePlan } = best.plans[index]
    section.layout = layout
    section.settings = { ...snapshots[index].settings, ...stylePlan }
  })
  const groupCount = sections.length
  const pageLabel = best.pages === 1 ? '1 page' : `${best.pages} pages`
  state.layoutSuggestion = {
    strategy: best.name,
    groupCount,
    totalMembers,
    pages: best.pages,
    summary: `${groupCount} ${groupCount === 1 ? 'group' : 'groups'} · ${totalMembers} ${totalMembers === 1 ? 'member' : 'members'} · ${pageLabel}`,
  }
  state.layoutSuggestionApplied = true
  return state.layoutSuggestion
}
function sectionHasRenderableContent(section) {
  if (!section || section.visible === false) return false
  const settings = sectionSettings(section)
  const hidden = settings.hidden instanceof Set ? settings.hidden : new Set(settings.hidden || [])
  const hasHeading = section.showHeading !== false && String(section.heading || section.name || '').trim()
  const contentText = String(section.contentHtml || '').replace(/<[^>]*>/g, ' ').replace(/&nbsp;/gi, ' ').replace(/\s+/g, ' ').trim()
  const hasContent = section.contentVisible && contentText
  const hasMembers = !hidden.has('grid') && section.memberIds.some(id => Boolean(memberById(id)))
  return Boolean(hasHeading || hasContent || hasMembers)
}
function paginateSections() {
  const sections = state.pageSections.filter(sectionHasRenderableContent)
  const buildPages = (compact = false) => {
    const pages = []
    let page = []
    let used = 40 + 24
    // The bottom bar occupies the last 16px of a Letter sheet. Keep a small
    // safety buffer, but do not treat the full bottom padding as unusable space:
    // it is part of the visual inset, while the section flow can safely extend
    // above the bar.
    const pageLimit = 792 - 32
    const pageGap = Math.max(0, Number(state.pageGap ?? 26) || 0)
    const firstPageIntro = () => {
      const heading = isGlobalVisible('heading') ? 32 + (Number(state.headingMarginTop) || 0) + (Number(state.headingMarginBottom) || 0) : 0
      const subhead = isGlobalVisible('subhead') ? 20 + (Number(state.subheadMarginTop) || 0) + (Number(state.subheadMarginBottom) || 0) : 0
      const description = isGlobalVisible('description') ? Math.max(1, textLineCount(state.descriptionText, 76)) * (Number(state.descriptionSize) || 14) * 1.5 + (Number(state.descriptionMarginTop) || 0) + (Number(state.descriptionMarginBottom) || 0) : 0
      const hasIntroContent = Boolean(heading || subhead || description)
      // When all global intro elements are hidden, the intro's 44px top margin
      // collapses with the section-list margin instead of adding both margins.
      return 44 + heading + subhead + description + (hasIntroContent ? pageGap : 0)
    }
    sections.forEach(section => {
      const estimate = sectionHeightEstimate(section, { compact })
      if (page.length && used + pageGap + estimate > pageLimit) { pages.push(page); page = []; used = 40 + 24 + pageGap }
      if (!page.length && pages.length === 0) used += firstPageIntro()
      page.push(section)
      used += (page.length > 1 ? pageGap : 0) + estimate
    })
    if (page.length || !pages.length) pages.push(page)
    return pages
  }
  const pages = buildPages()
  if (pages.length <= 1) return pages
  const compactPages = buildPages(true)
  return compactPages.length < pages.length ? compactPages : pages
}
function pageSheetsMarkup(mode = 'builder', { singlePage = false } = {}) {
  const preview = mode === 'preview'
  const pages = singlePage ? [state.pageSections.filter(sectionHasRenderableContent)] : paginateSections()
  return pages.map((sections, pageIndex) => `<article class="page-sheet"><div class="team-page ${preview ? 'team-page--preview' : ''}"><section class="team-page__content team-page__content--figma ${!preview && state.selected === 'page' ? 'is-selected-element' : ''}" style="--page-padding:${state.padding}px"><header class="team-page__proposal-indicator team-page__proposal-indicator--header">Header - populated from proposal</header>${pageIndex === 0 ? `<div class="team-page__intro"><h2 class="team-page__heading ${!isGlobalVisible('heading') ? 'element-hidden' : ''} ${!preview && state.selected === 'heading' && !state.sectionChild && !state.selectedMember ? 'is-selected-element' : ''}">${esc(state.headingText || 'Meet the Team')}</h2><p class="team-page__subhead ${!isGlobalVisible('subhead') ? 'element-hidden' : ''} ${!preview && state.selected === 'subhead' && !state.sectionChild && !state.selectedMember ? 'is-selected-element' : ''}">${esc(state.subheadText || 'Meet the people behind the work.')}</p><p class="team-page__description ${!isGlobalVisible('description') ? 'element-hidden' : ''} ${!preview && state.selected === 'description' && !state.sectionChild && !state.selectedMember ? 'is-selected-element' : ''}">${esc(state.descriptionText || '')}</p></div>` : ''}<div class="team-sections">${sections.map(section => sectionMarkup(section, preview)).join('')}</div><footer class="team-page__proposal-indicator team-page__proposal-indicator--footer">Footer - populated from proposal</footer></section></div></article>`).join('')
}
function isGlobalVisible(key) { return !state.pageHidden.has(key) }
function teamPageMarkup(mode = 'builder') { return pageSheetsMarkup(mode) }
function renderCanvas() {
  const scroll = document.querySelector('.canvas-scroll')
  if (!scroll) return
  // Render all groups once so the browser can apply the real flex/card sizes.
  // The fallback estimator is intentionally used only when this measured pass
  // confirms that a group would cross the footer.
  scroll.innerHTML = pageSheetsMarkup('builder', { singlePage: true })
  if (typeof applyBuilderSettings === 'function') applyBuilderSettings()
  const sheet = scroll.querySelector('.page-sheet')
  const footer = sheet?.querySelector('.team-page__proposal-indicator--footer')
  const footerTop = footer?.getBoundingClientRect().top
  const hasOverflow = Number.isFinite(footerTop) && [...(sheet?.querySelectorAll('.team-section') || [])].some(section => section.getBoundingClientRect().bottom > footerTop + 1)
  if (hasOverflow) {
    scroll.innerHTML = pageSheetsMarkup()
    if (typeof applyBuilderSettings === 'function') applyBuilderSettings()
  }
  const caption = document.getElementById('card-caption')
  if (caption) { caption.hidden = !(state.selected === 'card' && !state.selectedMember); caption.textContent = `Editing the card template — ${currentMemberIds().length} cards in this section update` }
}
function field(label, value, key, type = 'text') { return `<label class="field"><span>${label}</span><input type="${type}" value="${esc(value)}" data-field="${key}"></label>` }
function sectionPropertiesMarkup() { const section = getSection(); if (!section) return ''; return `<div class="properties-head"><p class="breadcrumb">Page › Groups</p><h2>${esc(section.name)}</h2><p class="property-subtitle">Group presentation settings</p></div><div class="properties-scroll"><section class="property-section"><h3>Content</h3><label class="field"><span>Display name</span><input data-section-field="name" value="${esc(section.name)}"></label><label class="field"><span>Heading</span><input data-section-field="heading" value="${esc(section.heading)}"></label><label class="toggle-row"><span>Show heading</span><input type="checkbox" data-section-field="showHeading" ${section.showHeading ? 'checked' : ''}><i></i></label><label class="toggle-row"><span>Show content panel</span><input type="checkbox" data-section-field="contentVisible" ${section.contentVisible ? 'checked' : ''}><i></i></label><label class="toggle-row"><span>Combine heading and content</span><input type="checkbox" data-section-field="containerEnabled" ${section.containerEnabled ? 'checked' : ''}><i></i></label><div class="rich-editor"><div class="rich-editor__toolbar"><button type="button" data-rich-command="bold" aria-label="Bold">${icon('bold')}</button><button type="button" data-rich-command="italic" aria-label="Italic">${icon('italic')}</button><button type="button" data-rich-command="insertUnorderedList" aria-label="Bulleted list">${icon('list')}</button><button type="button" data-rich-command="insertOrderedList" aria-label="Numbered list">${icon('list-ordered')}</button><button type="button" data-rich-command="justifyLeft" aria-label="Align left">${icon('align-left')}</button><button type="button" data-rich-command="justifyCenter" aria-label="Align center">${icon('align-center')}</button><button type="button" data-rich-command="createLink" aria-label="Add link">${icon('link')}</button></div><div class="rich-editor__surface" contenteditable="true" aria-label="Group description" data-placeholder="Add a description..." data-section-content-editor="${section.id}">${sanitizeRichText(section.contentHtml || '')}</div></div></section>${sectionTitle('Shared container style', `${colorControl('Background', 'sectionContainerBackground', state.sectionContainerBackground, 'sectionContainerBackgroundOpacity', state.sectionContainerBackgroundOpacity)}${stepper('Padding', 'sectionContainerPadding', state.sectionContainerPadding, { min: 0, max: 64 })}${stepper('Corner radius', 'sectionContainerRadius', state.sectionContainerRadius, { min: 0, max: 32 })}`)}${sectionTitle('Heading style', `${stepper('Font size', 'sectionHeadingSize', state.sectionHeadingSize, { min: 12, max: 48 })}${colorControl('Text color', 'sectionHeadingColor', state.sectionHeadingColor, 'sectionHeadingColorOpacity', state.sectionHeadingColorOpacity)}${colorControl('Background', 'sectionHeadingBackground', state.sectionHeadingBackground, 'sectionHeadingBackgroundOpacity', state.sectionHeadingBackgroundOpacity)}${stepper('Padding', 'sectionHeadingPadding', state.sectionHeadingPadding, { min: 0, max: 48 })}${stepper('Corner radius', 'sectionHeadingRadius', state.sectionHeadingRadius, { min: 0, max: 32 })}`)}${sectionTitle('Content panel style', `${colorControl('Background', 'sectionContentBackground', state.sectionContentBackground, 'sectionContentBackgroundOpacity', state.sectionContentBackgroundOpacity)}${stepper('Padding', 'sectionContentPadding', state.sectionContentPadding, { min: 0, max: 64 })}${stepper('Corner radius', 'sectionContentRadius', state.sectionContentRadius, { min: 0, max: 32 })}`)}<section class="property-section"><h3>Layout</h3><label class="property-select"><span>Group layout</span>${propertySelectControl(`<select data-section-field="layout"><option value="stacked" ${section.layout === 'stacked' ? 'selected' : ''}>Stacked</option><option value="content-left" ${section.layout === 'content-left' ? 'selected' : ''}>Content left</option><option value="content-right" ${section.layout === 'content-right' ? 'selected' : ''}>Content right</option></select>`)}</label></section></div>` }
function propertiesMarkup() { const isMember = Boolean(state.selectedMember); const member = isMember ? memberById(state.selectedMember) : null; const section = getSection(); if (state.selected === 'section' || (state.sectionChild && (state.selected === 'heading' || state.selected === 'content'))) return sectionPropertiesMarkup(); if (isMember) { const photo = member.photo ? `<img src="${esc(member.photo)}" alt="${esc(member.name)}">` : esc(member.initials); return `<div class="properties-head"><p class="breadcrumb">Page › ${esc(section?.name || 'Members')}</p><h2>${esc(member.name)}</h2><p class="property-subtitle">Page override</p></div><div class="properties-scroll"><section class="property-section"><h3>Content</h3><div class="member-edit"><div class="member-photo-editor"><div class="member-edit__avatar" style="--avatar:${member.color}">${photo}</div><div class="member-photo-editor__actions"><label class="button button--ghost member-photo-upload">${member.photo ? 'Replace image' : 'Upload image'}<input type="file" accept="image/*" data-member-photo="${member.id}" aria-label="Upload image"></label>${member.photo ? `<button type="button" class="text-button member-photo-delete" data-delete-member-photo="${member.id}">Delete image</button>` : ''}</div></div>${field('Full name', member.name, 'name')}${field('Job title', member.title, 'title')}${field('Email', member.email, 'email')}${field('Phone', member.phone, 'phone')}${field('Cellphone', member.cell, 'cell')}<label class="field"><span>Bio</span><textarea data-field="bio">${esc(member.bio || '')}</textarea></label></div></section></div>` } const heading = state.selected === 'heading' ? 'heading' : state.selected === 'subhead' ? 'subhead' : 'description'; const contentKey = `${heading}Text`; if (['heading', 'subhead', 'description'].includes(state.selected)) return `<div class="properties-head"><p class="breadcrumb">Page</p><h2>${labelFor(state.selected)}</h2></div><div class="properties-scroll"><section class="property-section"><h3>Content</h3><label class="toggle-row"><span>Show ${labelFor(state.selected)}</span><input type="checkbox" data-field="elementVisibility" ${isGlobalVisible(state.selected) ? 'checked' : ''}><i></i></label><label class="compact-content-field"><span>${labelFor(state.selected)}</span>${heading === 'description' ? `<textarea data-page-content="${contentKey}">${esc(state[contentKey] || '')}</textarea>` : `<input data-page-content="${contentKey}" value="${esc(state[contentKey] || '')}">`}</label></section></div>`; return `<div class="properties-head"><p class="breadcrumb">Page</p><h2>Page</h2></div><div class="properties-scroll"><section class="property-section"><h3>Content</h3><p class="help-text">Global page heading and intro. Team sections can add independent headings and content panels.</p></section></div>` }
function renderProperties() { const panel = document.getElementById('properties-panel'); if (panel) panel.innerHTML = propertiesMarkup() }
function renderTemplate() { const output = pageSheetsMarkup('preview'); const preview = document.getElementById('template-preview'); if (preview) preview.innerHTML = output; const props = document.getElementById('template-properties'); if (props) props.innerHTML = propertiesMarkup(); const panel = document.getElementById('properties-panel'); if (panel?.dataset.templatePanel === 'true') panel.innerHTML = propertiesMarkup() }
function renderSavePrompts() { const control = document.getElementById('team-save-control'); if (!control) return; control.hidden = true }
function render() { ensurePageDefaults(); persistActiveSectionSettings(); renderStructure(); renderMembers(); renderCanvas(); renderProperties(); renderSavePrompts(); const modal = document.getElementById('template-modal'); if (modal && !modal.hidden) renderTemplate(); refreshLucideIcons(); if (typeof applyBuilderSettings === 'function') applyBuilderSettings() }
function alignStructureToSelection(key, sectionId = null) {
  requestAnimationFrame(() => {
    const list = document.getElementById('structure-list')
    if (!list) return
    const target = [...list.querySelectorAll('[data-structure]')].find(row => row.dataset.structure === key && (sectionId ? row.dataset.sectionId === sectionId : !row.dataset.sectionId))
    if (!target) return
    const listRect = list.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const inset = 12
    if (targetRect.top < listRect.top + inset) list.scrollTop -= listRect.top + inset - targetRect.top
    else if (targetRect.bottom > listRect.bottom - inset) list.scrollTop += targetRect.bottom - (listRect.bottom - inset)
  })
}
function alignSelectionToLayer(key, sectionId = null) { alignStructureToSelection(key, sectionId) }
function selectStructure(key, sectionId = null) { state.sectionChild = sectionId ? key : null; if (sectionId) selectSection(sectionId, false); else { persistActiveSectionSettings(); loadPageDefaults() } state.selectedField = cardFieldKeys.includes(key) ? key : null; state.selected = cardFieldKeys.includes(key) ? 'card' : key; state.selectedMember = null; render(); alignSelectionToLayer(key, sectionId) }
function selectMember(id) { state.selectedMember = id; state.selected = 'member'; state.selectedField = null; render(); alignStructureToSelection('card', state.activeSectionId) }
function selectCanvasLayer(target) {
  const page = target.closest('.canvas-scroll .team-page__content--figma')
  if (!page || target.closest('.team-page--preview') || target.closest('.team-page__proposal-indicator')) return false
  const card = target.closest('[data-card]')
  if (card) {
    const sectionId = card.dataset.sectionId
    const memberId = card.dataset.card
    const now = Date.now()
    const isSecondClick = lastMemberProfileClick
      && lastMemberProfileClick.sectionId === sectionId
      && lastMemberProfileClick.memberId === memberId
      && now - lastMemberProfileClick.time < 450
    lastMemberProfileClick = isSecondClick ? null : { sectionId, memberId, time: now }
    if (isSecondClick && getSection(sectionId) && memberById(memberId)) {
      selectSection(sectionId, false)
      selectMember(memberId)
      return true
    }
  }
  const section = target.closest('.team-section')
  const sectionId = section?.dataset.sectionId || null
  if (sectionId && state.activeSectionId !== sectionId) {
    selectStructure('section', sectionId)
    return true
  }
  const field = target.closest('[data-card-field]')
  if (field && sectionId) {
    selectStructure(field.dataset.cardField, sectionId)
    const card = field.closest('[data-card]')
    if (card) state.activeCard = card.dataset.card
    return true
  }
  if (card && sectionId) {
    selectStructure('card', sectionId)
    state.activeCard = card.dataset.card
    return true
  }
  const grid = target.closest('.members-grid')
  if (grid && sectionId) { selectStructure('grid', sectionId); return true }
  const description = target.closest('.team-section__content-panel')
  if (description && sectionId) { selectStructure('sectionDescription', sectionId); return true }
  const groupHeading = target.closest('.team-section__heading')
  if (groupHeading && sectionId) { selectStructure('heading', sectionId); return true }
  const container = target.closest('.team-section__container')
  if (container && sectionId) { selectStructure('sectionContent', sectionId); return true }
  if (sectionId) { selectStructure('section', sectionId); return true }
  const globalHeading = target.closest('.team-page__heading')
  if (globalHeading) { selectStructure('heading'); return true }
  const globalSubhead = target.closest('.team-page__subhead')
  if (globalSubhead) { selectStructure('subhead'); return true }
  const globalDescription = target.closest('.team-page__description')
  if (globalDescription) { selectStructure('description'); return true }
  selectStructure('page')
  return true
}
document.addEventListener('pointerdown', event => {
  const handle = event.target.closest?.('[data-section-resize]')
  if (!handle) return
  const section = getSection(handle.dataset.sectionResize)
  const layout = handle.closest('.team-section__layout')
  if (!section || !layout) return
  event.preventDefault()
  event.stopPropagation()
  resizingSectionId = section.id
  resizingHandle = handle
  const snappedWidth = snapSectionContentWidth(section.settings?.sectionContentWidth ?? state.sectionContentWidth)
  section.settings = section.settings || {}
  section.settings.sectionContentWidth = snappedWidth
  state.sectionContentWidth = snappedWidth
  document.querySelectorAll(`[data-section-resize="${section.id}"]`).forEach(node => node.style.setProperty('--resize-position', `${section.layout === 'content-right' ? 100 - snappedWidth : snappedWidth}%`))
  handle.setPointerCapture?.(event.pointerId)
  handle.classList.add('is-dragging')
  layout.classList.add('is-resizing-columns')
  document.body.classList.add('is-resizing-columns')
})
document.addEventListener('pointermove', event => {
  if (!resizingSectionId) return
  const section = getSection(resizingSectionId)
  const layout = resizingHandle?.closest('.team-section__layout')
  if (!section || !layout) return
  const rect = layout.getBoundingClientRect()
  if (!rect.width) return
  const dividerPosition = Math.max(25, Math.min(75, ((event.clientX - rect.left) / rect.width) * 100))
  const contentWidth = snapSectionContentWidth(section.layout === 'content-right' ? 100 - dividerPosition : dividerPosition)
  section.settings = section.settings || {}
  section.settings.sectionContentWidth = contentWidth
  state.sectionContentWidth = contentWidth
  state.teamDraft = true
  document.querySelectorAll(`[data-section-resize="${section.id}"]`).forEach(node => node.style.setProperty('--resize-position', `${section.layout === 'content-right' ? 100 - contentWidth : contentWidth}%`))
  if (typeof applyBuilderSettings === 'function') applyBuilderSettings()
})
function finishSectionResize(event) {
  if (!resizingSectionId) return
  resizingHandle?.releasePointerCapture?.(event.pointerId)
  resizingHandle?.classList.remove('is-dragging')
  resizingHandle?.closest('.team-section__layout')?.classList.remove('is-resizing-columns')
  document.body.classList.remove('is-resizing-columns')
  recordPageChange('sectionContentWidth')
  resizingSectionId = null
  resizingHandle = null
}
document.addEventListener('pointerup', finishSectionResize)
document.addEventListener('pointercancel', finishSectionResize)
function recordPageChange(key) { state.pageDraft = true; if (state.settingsScope === 'page' && sectionSettingKeys.includes(key) && state.pageDefaultsInitialized) state.pageDefaults[key] = Array.isArray(state[key]) ? [...state[key]] : state[key]; if (!document.getElementById('template-modal')?.hidden) state.templateOverrides.add(key) }

document.addEventListener('click', event => {
  if (event.target.closest('[data-dismiss-snackbar]')) { hideSaveSnackbar(); return }
  if (state.openTeamSelector && !event.target.closest('.team-selector-control')) {
    state.openTeamSelector = false
    renderMembers()
    refreshLucideIcons()
  }
  const groupCollapse = event.target.closest('[data-group-collapse],[data-section-collapse]'); if (groupCollapse) { event.stopPropagation(); const collapseKey = groupCollapse.dataset.groupCollapse || groupCollapse.dataset.sectionCollapse; const isSection = !groupCollapse.dataset.groupCollapse || !collapseKey.includes(':'); const collection = isSection ? state.collapsedSections : state.collapsedGroups; collection.has(collapseKey) ? collection.delete(collapseKey) : collection.add(collapseKey); render(); return }
  const globalVisibility = event.target.closest('[data-global-visibility]'); if (globalVisibility) { event.stopPropagation(); const key = globalVisibility.dataset.globalVisibility; state.pageHidden.has(key) ? state.pageHidden.delete(key) : state.pageHidden.add(key); recordPageChange('elementVisibility'); render(); return }
  const visibility = event.target.closest('[data-field-visibility]'); if (visibility) { event.stopPropagation(); const key = visibility.dataset.fieldVisibility; state.hidden.has(key) ? state.hidden.delete(key) : state.hidden.add(key); persistActiveSectionSettings(); recordPageChange(key); render(); return }
  const sectionVisibility = event.target.closest('[data-section-visibility]'); if (sectionVisibility) { event.stopPropagation(); const section = getSection(sectionVisibility.dataset.sectionVisibility); section.visible = section.visible === false; recordPageChange('sectionVisibility'); render(); return }
  const headingVisibility = event.target.closest('[data-section-heading-visibility]'); if (headingVisibility) { event.stopPropagation(); const section = getSection(headingVisibility.dataset.sectionHeadingVisibility); section.showHeading = !section.showHeading; render(); return }
  const contentVisibility = event.target.closest('[data-section-content-visibility]'); if (contentVisibility) { event.stopPropagation(); const section = getSection(contentVisibility.dataset.sectionContentVisibility); section.contentVisible = !section.contentVisible; render(); return }
  const removeSectionButton = event.target.closest('[data-remove-section]'); if (removeSectionButton) { removeSection(removeSectionButton.dataset.removeSection); return }
  if (event.target.closest('#team-selector-toggle')) { state.openTeamSelector = !state.openTeamSelector; renderMembers(); refreshLucideIcons(); return }
  const teamSwitch = event.target.closest('[data-switch-team]'); if (teamSwitch) { state.openTeamSelector = false; assignSavedTeam(teamSwitch.dataset.switchTeam); return }
  if (event.target.closest('#team-save-toggle')) { state.openTeamSave = !state.openTeamSave; renderSavePrompts(); return }
  if (selectCanvasLayer(event.target)) return
  const structureButton = event.target.closest('[data-structure]'); if (structureButton) { selectStructure(structureButton.dataset.structure, structureButton.dataset.sectionId); return }
  const remove = event.target.closest('[data-remove]'); if (remove) { const section = getSection(); section.memberIds = section.memberIds.filter(id => id !== remove.dataset.remove); state.selectedMember = null; state.teamDraft = true; render(); return }
  const deletePhoto = event.target.closest('[data-delete-member-photo]'); if (deletePhoto) { state.pageMemberOverrides[deletePhoto.dataset.deleteMemberPhoto] = { ...(state.pageMemberOverrides[deletePhoto.dataset.deleteMemberPhoto] || {}), photo: '' }; state.teamDraft = true; render(); return }
  const swap = event.target.closest('[data-swap]'); if (swap) { const member = memberById(swap.dataset.swap); if (member) state.pageMemberOverrides[member.id] = { ...(state.pageMemberOverrides[member.id] || {}), name: member.placeholder ? 'New placeholder' : `${member.name.split(' ')[0]} Nguyen` }; state.teamDraft = true; render(); return }
  const menu = event.target.closest('[data-member-menu]'); if (menu) { event.stopPropagation(); document.querySelectorAll('.member-popover').forEach(pop => pop.hidden = true); document.getElementById(`member-popover-${menu.dataset.memberMenu}`)?.removeAttribute('hidden'); return }
  if (event.target.closest('[data-member-drag]')) { event.stopPropagation(); return }
  const memberButton = event.target.closest('[data-member]'); if (memberButton) { selectMember(memberButton.dataset.member); return }
  const card = event.target.closest('[data-card]'); if (card) { state.activeCard = card.dataset.card; selectStructure('card', card.dataset.sectionId); return }
  if (event.target.closest('#add-placeholder')) { const id = `member-${Date.now()}`; memberCatalog.push({ id, placeholder:true, initials:'+', name:'New member', title:'Add team member details', email:'', phone:'', cell:'', bio:'', color:'#f3f4f6' }); getSection().memberIds.push(id); state.teamDraft = true; selectMember(id); return }
  if (event.target.closest('#open-template')) { document.getElementById('template-modal').hidden = false; renderTemplate(); return }
  if (event.target.closest('[data-close-modal]')) { document.getElementById('template-modal').hidden = true; return }
  if (event.target.closest('[data-save-team]')) { saveCurrentTeamConfig(); state.teamDraft = false; render(); showSaveSnackbar(); return }
  const richCommand = event.target.closest('[data-rich-command]'); if (richCommand) { const command = richCommand.dataset.richCommand; if (command === 'createLink') { const url = window.prompt('Link URL'); if (url) document.execCommand(command, false, url) } else document.execCommand(command, false); const editor = richCommand.closest('.rich-editor')?.querySelector('[contenteditable]'); if (editor) { getSection().contentHtml = sanitizeRichText(editor.innerHTML); state.teamDraft = true; render() } return }
  document.querySelectorAll('.member-popover').forEach(pop => { if (!event.target.closest('.member-popover')) pop.hidden = true })
})
document.addEventListener('input', event => { const descriptionInput = event.target.closest('[data-section-description]'); if (descriptionInput) { const section = getSection(descriptionInput.dataset.sectionDescription); if (!section) return; section.contentHtml = descriptionHtmlFromText(descriptionInput.value); state.teamDraft = true; persistBuilderState(); const previewPanels = [...document.querySelectorAll('.team-section')].filter(node => node.dataset.sectionId === section.id).map(node => node.querySelector('.team-section__content-panel')).filter(Boolean); previewPanels.forEach(panel => { panel.innerHTML = sanitizeRichText(section.contentHtml, { trimTrailingEmptyBlocks: true }) }); if (!previewPanels.length) { renderCanvas(); if (!document.getElementById('template-modal')?.hidden) renderTemplate() } if (typeof applyBuilderSettings === 'function') applyBuilderSettings(); return } const editor = event.target.closest('[data-section-content-editor]'); if (editor) { const section = getSection(editor.dataset.sectionContentEditor); if (!section) return; section.contentHtml = sanitizeRichText(editor.innerHTML); state.teamDraft = true; const previewPanels = [...document.querySelectorAll('.team-section')].filter(node => node.dataset.sectionId === section.id).map(node => node.querySelector('.team-section__content-panel')).filter(Boolean); previewPanels.forEach(panel => { panel.innerHTML = sanitizeRichText(section.contentHtml, { trimTrailingEmptyBlocks: true }) }); if (!previewPanels.length) { renderCanvas(); if (!document.getElementById('template-modal')?.hidden) renderTemplate(); if (typeof applyBuilderSettings === 'function') applyBuilderSettings() } return } const pageContent = event.target.closest('[data-page-content]'); if (pageContent) { state[pageContent.dataset.pageContent] = pageContent.value; recordPageChange(pageContent.dataset.pageContent); if (typeof applyBuilderSettings === 'function') applyBuilderSettings() } })
document.addEventListener('change', event => { const photo = event.target.closest('[data-member-photo]'); if (photo) { const file = photo.files?.[0]; if (file) { const reader = new FileReader(); reader.onload = () => { state.pageMemberOverrides[photo.dataset.memberPhoto] = { ...(state.pageMemberOverrides[photo.dataset.memberPhoto] || {}), photo: String(reader.result || '') }; state.teamDraft = true; render() }; reader.readAsDataURL(file) } return } const sectionField = event.target.closest('[data-section-field]'); if (sectionField) { const section = getSection(); const key = sectionField.dataset.sectionField; section[key] = sectionField.type === 'checkbox' ? sectionField.checked : sectionField.value; state.teamDraft = true; render(); return } const fieldTarget = event.target.closest('[data-field]'); if (fieldTarget) { const key = fieldTarget.dataset.field; if (state.selectedMember) { state.pageMemberOverrides[state.selectedMember] = { ...(state.pageMemberOverrides[state.selectedMember] || {}), [key]: fieldTarget.value }; state.teamDraft = true; render(); return } if (key === 'columns') state.columns = Number(fieldTarget.value); if (key === 'padding') state.padding = Math.max(16, Number(fieldTarget.value)); if (key === 'elementVisibility') state.pageHidden.has(state.selected) ? state.pageHidden.delete(state.selected) : state.pageHidden.add(state.selected); recordPageChange(key); render() } })
document.addEventListener('dragstart', event => { const memberHandle = event.target.closest?.('[data-member-drag]'); const memberRow = event.target.closest?.('#members-list .member-row'); if (memberHandle && memberRow) { draggedMemberId = memberHandle.dataset.memberDrag; memberRow.classList.add('is-dragging'); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', draggedMemberId); return } const sectionRow = event.target.closest?.('#structure-list [data-section-order]'); if (sectionRow) { state.draggedSectionId = sectionRow.dataset.sectionOrder; sectionRow.classList.add('is-dragging'); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', state.draggedSectionId) } })
document.addEventListener('dragover', event => { if (draggedMemberId) { const row = event.target.closest?.('#members-list .member-row'); if (!row || row.dataset.member === draggedMemberId) return; event.preventDefault(); const after = event.clientY > row.getBoundingClientRect().top + row.getBoundingClientRect().height / 2; dropPosition = { targetId: row.dataset.member, after }; document.querySelectorAll('#members-list .member-row').forEach(item => item.classList.remove('is-drop-before', 'is-drop-after')); row.classList.add(after ? 'is-drop-after' : 'is-drop-before'); return } if (state.draggedSectionId) { const row = event.target.closest?.('#structure-list [data-section-order]'); if (!row || row.dataset.sectionOrder === state.draggedSectionId) return; event.preventDefault(); document.querySelectorAll('#structure-list [data-section-order].is-drop-target').forEach(node => node.classList.remove('is-drop-target')); row.classList.add('is-drop-target') } })
document.addEventListener('drop', event => { if (draggedMemberId) { const row = event.target.closest?.('#members-list .member-row'); if (!row || !dropPosition) { clearMemberDragState(); return } event.preventDefault(); const source = draggedMemberId; const { targetId, after } = dropPosition; clearMemberDragState(); moveMemberTo(source, targetId, after); return } if (state.draggedSectionId) { const row = event.target.closest?.('#structure-list [data-section-order]'); if (!row) return; event.preventDefault(); const from = state.pageSections.findIndex(section => section.id === state.draggedSectionId); const to = state.pageSections.findIndex(section => section.id === row.dataset.sectionOrder); if (from >= 0 && to >= 0 && from !== to) { const [section] = state.pageSections.splice(from, 1); state.pageSections.splice(to, 0, section); state.teamDraft = true } state.draggedSectionId = null; render() } })
document.addEventListener('dragend', () => { clearMemberDragState(); state.draggedSectionId = null; document.querySelectorAll('#structure-list [data-section-order].is-dragging,#structure-list [data-section-order].is-drop-target').forEach(node => node.classList.remove('is-dragging', 'is-drop-target')) })
document.addEventListener('keydown', event => { const groupCollapse = event.target.closest?.('[data-group-collapse],[data-section-collapse]'); if (groupCollapse && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); groupCollapse.click(); return } const handle = event.target.closest?.('[data-member-drag]'); if (handle && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) { event.preventDefault(); moveMember(handle.dataset.memberDrag, event.key === 'ArrowUp' ? -1 : 1); return } if (event.key === 'Escape') { const modal = document.getElementById('template-modal'); if (modal && !modal.hidden) modal.hidden = true; else selectStructure('page') } })
if (document.body.dataset.page === 'template-demo') document.getElementById('template-modal').hidden = false
render()
