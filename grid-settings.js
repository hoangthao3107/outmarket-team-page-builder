// Contextual property controls modeled after the supplied team-page prototype.
Object.assign(state, {
  gridGap: state.gridGap ?? 16,
  gridPadding: state.gridPadding ?? 0,
  headingText: state.headingText ?? 'Meet the Team',
  descriptionText: state.descriptionText ?? 'Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit. In vel imperdiet mi. Aliquam erat volutpat.',
  subheadText: state.subheadText ?? 'Meet the people behind the work.',
  headingSize: state.headingSize ?? 24,
  descriptionSize: state.descriptionSize ?? 14,
  headingColor: state.headingColor ?? '#0f3a64',
  headingColorOpacity: state.headingColorOpacity ?? 1,
  headingBackground: state.headingBackground ?? '#ffffff',
  headingBackgroundOpacity: state.headingBackgroundOpacity ?? 0,
  subheadColor: state.subheadColor ?? '#525965',
  subheadColorOpacity: state.subheadColorOpacity ?? 1,
  subheadBackground: state.subheadBackground ?? '#ffffff',
  subheadBackgroundOpacity: state.subheadBackgroundOpacity ?? 0,
  descriptionColor: state.descriptionColor ?? '#343839',
  descriptionColorOpacity: state.descriptionColorOpacity ?? 1,
  descriptionBackground: state.descriptionBackground ?? '#ffffff',
  descriptionBackgroundOpacity: state.descriptionBackgroundOpacity ?? 0,
  alignment: state.alignment ?? 'left',
  gridAlignment: state.gridAlignment ?? 'left',
  pageBackground: state.pageBackground ?? '#ffffff',
  pageBackgroundOpacity: state.pageBackgroundOpacity ?? 1,
  cardPadding: state.cardPadding ?? 0,
  cardMinHeight: state.cardMinHeight ?? 0,
  cardRadius: state.cardRadius ?? 0,
  cardBackground: state.cardBackground ?? '#ffffff',
  cardBackgroundOpacity: state.cardBackgroundOpacity ?? 0,
  cardBorderColor: state.cardBorderColor ?? '#e5e2e0',
  cardBorderOpacity: state.cardBorderOpacity ?? 0,
  cardBorderWidth: state.cardBorderWidth ?? 0,
  cardBorderStyle: state.cardBorderStyle ?? 'solid',
  cardShadow: state.cardShadow ?? 'none',
  cardTextAlign: state.cardTextAlign ?? 'left',
  photoSize: state.photoSize ?? 64,
  avatarSize: state.avatarSize ?? 100,
  photoShape: state.photoShape ?? 'square',
  avatarRadius: state.avatarRadius ?? 0,
  nameSize: state.nameSize ?? 14,
  titleSize: state.titleSize ?? 12,
  bodySize: state.bodySize ?? 12,
  nameColor: state.nameColor ?? '#0f3a64',
  titleColor: state.titleColor ?? '#343839',
  bodyColor: state.bodyColor ?? '#343839',
  // Replaces the legacy visual card presets. The photo is an avatar that can
  // sit above the content, alongside it, or be omitted for every card.
  avatarPosition: state.avatarPosition ?? (state.cardStyle === 'horizontal' ? 'left' : state.cardStyle === 'text' ? 'none' : 'top'),
  cardFieldOrder: state.cardFieldOrder ?? ['photo', 'fullName', 'jobTitle', 'phone', 'email', 'cellphone', 'bio'],
  openColorPicker: state.openColorPicker ?? null,
})

const textStyleConfig = {
  heading: { size: 'headingSize', color: 'headingColor', colorOpacity: 'headingColorOpacity', background: 'headingBackground', backgroundOpacity: 'headingBackgroundOpacity', min: 20, max: 64 },
  subhead: { size: 'subheadSize', color: 'subheadColor', colorOpacity: 'subheadColorOpacity', background: 'subheadBackground', backgroundOpacity: 'subheadBackgroundOpacity', min: 10, max: 32 },
  description: { size: 'descriptionSize', color: 'descriptionColor', colorOpacity: 'descriptionColorOpacity', background: 'descriptionBackground', backgroundOpacity: 'descriptionBackgroundOpacity', min: 10, max: 32 },
  fullName: { size: 'nameSize', color: 'nameColor', background: 'nameBackground', backgroundOpacity: 'nameBackgroundOpacity', min: 11, max: 24 },
  jobTitle: { size: 'titleSize', color: 'titleColor', background: 'titleBackground', backgroundOpacity: 'titleBackgroundOpacity', min: 9, max: 20 },
  email: { size: 'emailSize', color: 'emailColor', background: 'emailBackground', backgroundOpacity: 'emailBackgroundOpacity', min: 9, max: 18 },
  phone: { size: 'phoneSize', color: 'phoneColor', background: 'phoneBackground', backgroundOpacity: 'phoneBackgroundOpacity', min: 9, max: 18 },
  cellphone: { size: 'cellphoneSize', color: 'cellphoneColor', background: 'cellphoneBackground', backgroundOpacity: 'cellphoneBackgroundOpacity', min: 9, max: 18 },
  bio: { size: 'bioSize', color: 'bioColor', background: 'bioBackground', backgroundOpacity: 'bioBackgroundOpacity', min: 9, max: 18 },
}

const textStyleKeys = Object.keys(textStyleConfig)
textStyleKeys.forEach(key => {
  const config = textStyleConfig[key]
  if (state[config.size] == null) state[config.size] = key === 'subhead' ? 14 : key === 'description' ? 14 : key === 'heading' ? 24 : key === 'fullName' ? state.nameSize : key === 'jobTitle' ? state.titleSize : state.bodySize
  if (state[config.color] == null) state[config.color] = key === 'heading' ? state.headingColor : key === 'subhead' ? state.subheadColor : key === 'description' ? state.descriptionColor : key === 'fullName' ? state.nameColor : key === 'jobTitle' ? state.titleColor : state.bodyColor
  if (state[config.colorOpacity] == null && config.colorOpacity) state[config.colorOpacity] = 1
  if (state[config.background] == null) state[config.background] = '#ffffff'
  if (state[config.backgroundOpacity] == null) state[config.backgroundOpacity] = 0
  ;['bold', 'italic', 'underline', 'strike'].forEach(style => {
    const styleKey = `${key}${style[0].toUpperCase()}${style.slice(1)}`
    if (state[styleKey] == null) state[styleKey] = false
  })
})

const panelHeader = (breadcrumb, title, subtitle = '') => `<div class="properties-head"><p class="breadcrumb">${breadcrumb}</p><h2>${title}</h2>${subtitle ? `<p class="property-subtitle">${subtitle}</p>` : ''}</div>`
const sectionTitle = (title, content) => `<section class="property-section"><h3>${title}</h3>${content}</section>`
const stepper = (label, key, value, { unit = 'px', min = 0, max = 128, step = 1 } = {}) => `<div class="property-stepper"><span>${label}</span><div class="property-stepper__control"><span class="property-number-field"><input type="number" inputmode="numeric" value="${key === 'photoSize' && !value ? '' : value}" placeholder="${key === 'photoSize' ? 'Full' : ''}" min="${min}" max="${max}" step="${step}" data-number-input="${key}" aria-label="${label}">${unit ? `<small>${unit.toLowerCase()}</small>` : ''}</span><span class="property-stepper__actions"><button data-step="${key}" data-delta="-${step}" aria-label="Decrease ${label}">${icon('minus')}</button><button data-step="${key}" data-delta="${step}" data-min="${min}" data-max="${max}" aria-label="Increase ${label}">${icon('plus')}</button></span></div></div>`
const selectControl = (selectMarkup, variant = 'compact') => `<span class="select-control select-control--${variant}">${selectMarkup}${icon('chevrons-up-down')}</span>`
const alignmentToggle = (label, value, attribute = 'data-align') => `<div class="property-align"><span>${label}</span><div class="segmented-control segmented-control--sm alignment-toggle" role="group" aria-label="${label}">${['left', 'center', 'right'].map(option => `<button class="segmented-control__segment ${value === option ? 'is-active' : ''}" ${attribute}="${option}" aria-label="Align ${option}">${icon(`align-${option}`)}</button>`).join('')}</div></div>`
const visibility = (key, label, required = false) => `<div class="property-visibility ${state.selectedField === key ? 'is-focused' : ''}" draggable="true" data-field-order="${key}" aria-current="${state.selectedField === key ? 'true' : 'false'}"><span class="field-drag-handle" aria-hidden="true">${icon('grip-vertical')}</span><span>${label}${required ? '<em>required</em>' : ''}</span><button class="structure-row__eye" data-prop-visibility="${key}" aria-label="Toggle ${label} visibility">${visibilityIcon(isVisible(key))}</button></div>`
const avatarRange = (label, key, value, { min, max, step = 1, unit = 'PX' } = {}) => `<div class="avatar-range"><span>${label}</span><div class="avatar-range__control"><span class="property-number-field"><input type="number" inputmode="numeric" min="${min}" max="${max}" step="${step}" value="${value}" data-avatar-number="${key}" aria-label="${label}"><small>${unit}</small></span><input type="range" min="${min}" max="${max}" step="${step}" value="${value}" data-avatar-range="${key}" aria-label="${label}"></div></div>`
const cardFieldLabels = { photo: ['Photo'], fullName: ['Full name', true], jobTitle: ['Job title'], email: ['Email'], phone: ['Phone'], cellphone: ['Cellphone'], bio: ['Bio'] }
const textFormatControl = key => {
  const labels = { bold: 'Bold', italic: 'Italic', underline: 'Underline', strike: 'Strikethrough' }
  return `<div class="property-format"><span>Text style</span><div class="property-format__controls" role="group" aria-label="Text style">${Object.entries(labels).map(([style, label]) => { const stateKey = `${key}${style[0].toUpperCase()}${style.slice(1)}`; return `<button type="button" class="${state[stateKey] ? 'is-active' : ''}" data-text-format="${stateKey}" aria-label="${label}" aria-pressed="${state[stateKey]}">${icon(style === 'strike' ? 'strikethrough' : style)}</button>` }).join('')}</div></div>`
}
const colorControl = (label, key, value, opacityKey = null, opacity = 1) => {
  const hsv = hexToHsv(value)
  return `<div class="property-color"><span>${label}</span><button class="property-color-trigger" data-open-color="${key}" data-opacity-key="${opacityKey || ''}" aria-expanded="${state.openColorPicker === key}" aria-label="Edit ${label} color"><i style="--swatch-color:${colorWithOpacity(value, opacity)}"></i><code>${value.toUpperCase()}</code>${opacityKey ? `<small>${Math.round(opacity * 100)}%</small>` : ''}</button>${state.openColorPicker === key ? `<div class="color-picker" data-color-picker="${key}"><div class="color-picker__plane" data-color-plane="${key}" style="--picker-hue:${hsv.h};"><i style="left:${hsv.s}%;top:${100 - hsv.v}%;"></i></div><label class="color-picker__range color-picker__hue"><span>Hue</span><input type="range" min="0" max="360" value="${Math.round(hsv.h)}" data-color-hue="${key}"></label>${opacityKey ? `<label class="color-picker__range color-picker__alpha"><span>Opacity</span><input type="range" min="0" max="100" value="${Math.round(opacity * 100)}" data-color-alpha="${opacityKey}" data-color-key="${key}"></label>` : ''}<div class="color-picker__value"><button type="button" data-eyedropper="${key}" aria-label="Pick a color from the screen">${icon('pipette')}</button><input value="${value.toUpperCase()}" data-color-hex="${key}" aria-label="${label} hex value">${opacityKey ? `<output>${Math.round(opacity * 100)}%</output>` : ''}</div></div>` : ''}</div>`
}

function pageSettingsBody({ modal = false } = {}) {
  const override = key => modal && state.templateOverrides.has(key) ? '<span class="override-dot property-override"></span>' : ''
  return `
    ${sectionTitle('Content', `
      <label class="compact-content-field"><span>Heading</span>${override('heading')}<input value="${esc(state.headingText)}" data-page-content="headingText"></label>
      <label class="compact-content-field"><span>Sub-head</span>${override('subhead')}<input value="${esc(state.subheadText)}" data-page-content="subheadText"></label>
      <label class="compact-content-field"><span>Description</span>${override('description')}<textarea data-page-content="descriptionText">${esc(state.descriptionText)}</textarea></label>
    `)}
    ${sectionTitle('Grid', `${stepper('Columns', 'columns', state.columns, { unit: '', min: 1, max: 4 })}${stepper('Gap', 'gridGap', state.gridGap, { min: 0, max: 96 })}${stepper('Padding', 'gridPadding', state.gridPadding, { min: 0, max: 128 })}`)}
    ${sectionTitle('Style', `${colorControl('Color', 'pageBackground', state.pageBackground, 'pageBackgroundOpacity', state.pageBackgroundOpacity)}${stepper('Heading size', 'headingSize', state.headingSize, { min: 20, max: 64, step: 2 })}${alignmentToggle('Align', state.alignment)}`)}
  `
}

function gridSettingsBody() {
  return `${sectionTitle('Layout', `${stepper('Columns', 'columns', state.columns, { unit: '', min: 1, max: 4 })}${stepper('Gap', 'gridGap', state.gridGap, { min: 0, max: 96 })}${stepper('Padding', 'gridPadding', state.gridPadding, { min: 0, max: 128 })}`)}`
}

function cardSettingsBody() {
  return `
    ${sectionTitle('Fields', `<p class="help-text card-template-note">Drag to set the shared field order.</p>${state.cardFieldOrder.map(key => visibility(key, ...cardFieldLabels[key])).join('')}`)}
    ${sectionTitle('Avatar position', `<div class="segmented-control segmented-control--sm avatar-position-control" role="group" aria-label="Avatar position">${[['top','Top'],['left','Left'],['none','None']].map(([key, label]) => `<button class="segmented-control__segment ${state.avatarPosition === key ? 'is-active' : ''}" data-avatar-position="${key}" title="Avatar ${label.toLowerCase()}">${label}</button>`).join('')}</div>${avatarRange('Avatar radius', 'avatarRadius', state.avatarRadius, { min: 0, max: 50, unit: '%' })}${avatarRange('Avatar size', 'avatarSize', state.avatarSize, { min: 25, max: 200, step: 5, unit: '%' })}`)}
    ${sectionTitle('Surface', `${colorControl('Background', 'cardBackground', state.cardBackground, 'cardBackgroundOpacity', state.cardBackgroundOpacity)}${colorControl('Border color', 'cardBorderColor', state.cardBorderColor, 'cardBorderOpacity', state.cardBorderOpacity)}${stepper('Border width', 'cardBorderWidth', state.cardBorderWidth, { unit: 'px', min: 0, max: 8 })}<label class="property-select"><span>Border style</span>${selectControl(`<select data-card-input="cardBorderStyle"><option ${state.cardBorderStyle === 'solid' ? 'selected' : ''}>solid</option><option ${state.cardBorderStyle === 'dashed' ? 'selected' : ''}>dashed</option><option ${state.cardBorderStyle === 'none' ? 'selected' : ''}>none</option></select>`)}</label>${stepper('Corner radius', 'cardRadius', state.cardRadius, { min: 0, max: 32 })}<label class="property-select"><span>Elevation</span>${selectControl(`<select data-card-input="cardShadow"><option value="none" ${state.cardShadow === 'none' ? 'selected' : ''}>None</option><option value="soft" ${state.cardShadow === 'soft' ? 'selected' : ''}>Soft</option><option value="medium" ${state.cardShadow === 'medium' ? 'selected' : ''}>Medium</option></select>`)}</label>`)}
    ${sectionTitle('Layout', `${stepper('Card padding', 'cardPadding', state.cardPadding, { min: 8, max: 48 })}${alignmentToggle('Alignment', state.cardTextAlign, 'data-card-align')}`)}
  `
}

// A child row under Member card represents one shared field, not the whole
// card template. Keep its panel focused so selecting Photo, Full name, etc.
// never exposes unrelated card controls.
function cardFieldSettingsBody(key) {
  const label = cardFieldLabels[key]?.[0] || key
  // Field visibility follows the same switch pattern used by the page text
  // elements. Keeping the control as a checkbox makes the intent explicit
  // ("Show Photo") and keeps its selected state consistent across contexts.
  const visibilityControl = `<label class="toggle-row"><span>Show ${label}</span><input type="checkbox" data-prop-visibility="${key}" aria-label="Show ${label}" ${isVisible(key) ? 'checked' : ''}><i></i></label>`
  if (key === 'photo') {
    const position = `<div class="segmented-control segmented-control--sm avatar-position-control" role="group" aria-label="Avatar position">${[['top','Top'],['left','Left'],['none','None']].map(([positionKey, positionLabel]) => `<button class="segmented-control__segment ${state.avatarPosition === positionKey ? 'is-active' : ''}" data-avatar-position="${positionKey}">${positionLabel}</button>`).join('')}</div>`
    return `${sectionTitle('Content', visibilityControl)}${sectionTitle('Avatar', `${position}${avatarRange('Avatar radius', 'avatarRadius', state.avatarRadius, { min: 0, max: 50, unit: '%' })}${avatarRange('Avatar size', 'avatarSize', state.avatarSize, { min: 25, max: 200, step: 5, unit: '%' })}`)}`
  }
  const config = textStyleConfig[key]
  const colorOpacityKey = config.colorOpacity || null
  return `${sectionTitle('Content', visibilityControl)}${sectionTitle('Typography', `${stepper('Font size', config.size, state[config.size], { min: config.min, max: config.max })}${colorControl('Text color', config.color, state[config.color], colorOpacityKey, state[colorOpacityKey] ?? 1)}${colorControl('Background color', config.background, state[config.background], config.backgroundOpacity, state[config.backgroundOpacity])}${textFormatControl(key)}`)}`
}

function applyTextStyle(node, key) {
  const config = textStyleConfig[key]
  if (!config || !node) return
  const decoration = [state[`${key}Underline`] ? 'underline' : '', state[`${key}Strike`] ? 'line-through' : ''].filter(Boolean).join(' ')
  node.style.fontWeight = state[`${key}Bold`] ? '700' : ''
  node.style.fontStyle = state[`${key}Italic`] ? 'italic' : ''
  node.style.textDecoration = decoration
  node.style.backgroundColor = colorWithOpacity(state[config.background], state[config.backgroundOpacity])
}

function applyBuilderSettings() {
  document.querySelectorAll('.team-page__content').forEach(page => {
    page.style.backgroundColor = colorWithOpacity(state.pageBackground, state.pageBackgroundOpacity)
  })
  document.querySelectorAll('.members-grid').forEach(grid => {
    grid.style.gridTemplateColumns = `repeat(${state.columns}, minmax(0, 1fr))`
    grid.style.gap = `${state.gridGap}px`
    grid.style.padding = `${state.gridPadding}px`
    grid.style.justifyItems = 'stretch'
    grid.style.alignItems = 'start'
    grid.style.marginLeft = state.gridAlignment === 'center' || state.gridAlignment === 'right' ? 'auto' : '0'
    grid.style.marginRight = state.gridAlignment === 'center' ? 'auto' : '0'
  })
  document.querySelectorAll('.team-page__heading').forEach(node => { node.textContent = state.headingText; node.style.fontSize = `${state.headingSize}px`; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.headingColor, state.headingColorOpacity); applyTextStyle(node, 'heading') })
  document.querySelectorAll('.team-page__description').forEach(node => { node.textContent = state.descriptionText; node.style.fontSize = `${state.descriptionSize}px`; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.descriptionColor, state.descriptionColorOpacity); applyTextStyle(node, 'description') })
  document.querySelectorAll('.team-page__subhead').forEach(node => { node.textContent = state.subheadText; node.style.fontSize = `${state.subheadSize}px`; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.subheadColor, state.subheadColorOpacity); applyTextStyle(node, 'subhead') })
  document.querySelectorAll('.member-card').forEach(card => {
    card.style.padding = `${state.cardPadding}px`
    card.style.height = 'auto'
    card.style.minHeight = state.cardMinHeight ? `${state.cardMinHeight}px` : ''
    card.style.alignSelf = 'start'
    card.style.backgroundColor = colorWithOpacity(state.cardBackground, state.cardBackgroundOpacity)
    card.style.border = state.cardBorderStyle === 'none' ? '0' : `${state.cardBorderWidth}px ${state.cardBorderStyle} ${colorWithOpacity(state.cardBorderColor, state.cardBorderOpacity)}`
    card.style.borderRadius = `${state.cardRadius}px`
    card.style.boxShadow = state.cardShadow === 'soft' ? '0 4px 12px rgba(35, 35, 50, .10)' : state.cardShadow === 'medium' ? '0 10px 24px rgba(35, 35, 50, .16)' : 'none'
    card.style.textAlign = state.cardTextAlign
    card.querySelectorAll('[data-card-field]').forEach(node => {
      const key = node.dataset.cardField
      const config = textStyleConfig[key]
      if (!config) return
      node.style.fontSize = `${state[config.size]}px`
      node.style.color = colorWithOpacity(state[config.color], state[config.colorOpacity] ?? 1)
      applyTextStyle(node, key)
    })
    const photo = card.querySelector('.member-card__photo')
    if (photo) {
      photo.style.display = state.avatarPosition === 'none' ? 'none' : ''
      photo.style.width = `${state.avatarSize}%`
      photo.style.height = 'auto'
      photo.style.aspectRatio = '1'
      photo.style.borderRadius = `${state.avatarRadius}%`

      // Keep the avatar aligned with the card content when it sits above the text.
      // Left-positioned avatars are part of the two-column card layout and stay in
      // the first column regardless of the text alignment setting.
      if (state.avatarPosition === 'left' || state.cardTextAlign === 'left') {
        photo.style.marginLeft = '0'
        photo.style.marginRight = 'auto'
      } else if (state.cardTextAlign === 'center') {
        photo.style.marginLeft = 'auto'
        photo.style.marginRight = 'auto'
      } else {
        photo.style.marginLeft = 'auto'
        photo.style.marginRight = '0'
      }
    }
    card.classList.toggle('is-avatar-left', state.avatarPosition === 'left')
    card.classList.toggle('is-avatar-none', state.avatarPosition === 'none')
    // Selecting Card or one of its shared fields puts every card into the
    // template-editing state. The active card gets the solid focus outline
    // in renderCanvas; the remaining cards use the dashed indicator.
    card.classList.toggle('has-card-selection', state.selected === 'card' && !state.selectedMember)
  })
  const avatarSizeLimit = fitCardsToLetterPage()
  if (Number.isFinite(avatarSizeLimit)) {
    const constrainedSize = Math.max(25, Math.min(200, avatarSizeLimit))
    if (state.avatarSize > constrainedSize) {
      state.avatarSize = constrainedSize
      document.querySelectorAll('.member-card__photo').forEach(photo => {
        photo.style.width = `${state.avatarSize}%`
        photo.style.height = 'auto'
        photo.style.aspectRatio = '1'
      })
    }
    document.querySelectorAll('[data-avatar-range="avatarSize"],[data-avatar-number="avatarSize"]').forEach(control => {
      control.max = constrainedSize
      control.value = state.avatarSize
    })
  }
}

function fitCardsToLetterPage() {
  let maxAvatarSize = 200
  document.querySelectorAll('.page-sheet .team-page__content--figma').forEach(page => {
    const grid = page.querySelector('.members-grid')
    const cards = [...grid?.querySelectorAll('.member-card') || []]
    if (!grid || !cards.length) return
    const pageStyle = getComputedStyle(page)
    const availableGridHeight = Math.max(0, page.clientHeight - grid.offsetTop - (parseFloat(pageStyle.paddingBottom) || 0))
    grid.style.height = 'auto'
    grid.style.minHeight = '0'
    grid.style.gridAutoRows = 'auto'
    const rows = Math.ceil(cards.length / state.columns)
    const firstPhoto = cards[0]?.querySelector('.member-card__photo')
    const photoHeight = firstPhoto?.getBoundingClientRect().height || 0
    const nonAvatarGridHeight = Math.max(0, grid.offsetHeight - photoHeight * rows)
    if (state.avatarPosition === 'top' && photoHeight) {
      const allowedAvatarSpace = Math.max(0, availableGridHeight - nonAvatarGridHeight)
      const allowedPercent = Math.floor((state.avatarSize * allowedAvatarSpace / (photoHeight * rows)) / 5) * 5
      maxAvatarSize = Math.min(maxAvatarSize, allowedPercent)
    }
    cards.forEach(card => {
      card.style.height = 'auto'
      card.style.alignSelf = 'start'
    })
  })
  return maxAvatarSize
}

function captureScrollState() {
  const snapshot = {}
  ;['.properties-scroll', '.members-list', '.canvas-scroll', '.template-preview-sheet'].forEach(selector => {
    snapshot[selector] = [...document.querySelectorAll(selector)].map(element => ({ top: element.scrollTop, left: element.scrollLeft }))
  })
  return snapshot
}

function restoreScrollState(snapshot) {
  if (!snapshot) return
  const restore = () => {
    Object.entries(snapshot).forEach(([selector, positions]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        const position = positions[index]
        if (!position) return
        element.scrollTop = position.top
        element.scrollLeft = position.left
      })
    })
  }
  restore()
  requestAnimationFrame(restore)
}

function renderProperties() {
  const scrollState = captureScrollState()
  const panel = document.getElementById('properties-panel')
  if (state.selectedMember) { panel.innerHTML = propertiesMarkup(); finishPropertiesRender(scrollState); return }
  if (state.selected === 'page') { panel.innerHTML = `${panelHeader('Page', 'Page', 'Page settings')}<div class="properties-scroll">${pageSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selected === 'grid') { panel.innerHTML = `${panelHeader('Page › Grid', 'Grid', 'Grid settings')}<div class="properties-scroll">${gridSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selectedField && cardFieldLabels[state.selectedField]) { panel.innerHTML = `${panelHeader('Member card', cardFieldLabels[state.selectedField][0], 'Shared field settings')}<div class="properties-scroll">${cardFieldSettingsBody(state.selectedField)}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selected === 'card') { panel.innerHTML = `${panelHeader('Page › Grid › Card', 'Card', 'Card settings')}<div class="properties-scroll">${cardSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  panel.innerHTML = propertiesMarkup()
  finishPropertiesRender(scrollState)
}

function renderTemplate() {
  const scrollState = captureScrollState()
  document.getElementById('template-preview').innerHTML = teamPageMarkup('preview')
  document.getElementById('template-properties').innerHTML = `${panelHeader('Page', 'Page', 'Page settings')}<div class="properties-scroll"><label class="template-source"><span>Source team</span>${selectControl(`<select id="modal-team-select"><option ${state.modalTeam === 'Marketing Team' ? 'selected' : ''}>Marketing Team</option><option ${state.modalTeam === 'Client Success Team' ? 'selected' : ''}>Client Success Team</option><option ${state.modalTeam === 'Executive Team' ? 'selected' : ''}>Executive Team</option></select>`, 'field')}<small>this proposal only</small></label><div class="override-summary ${state.templateOverrides.size ? '' : 'is-clean'}">${state.templateOverrides.size ? `${state.templateOverrides.size} changes from this proposal only <button id="reset-all">Reset all</button>` : 'No proposal-only changes'}</div>${pageSettingsBody({ modal: true })}</div>`
  finishPropertiesRender(scrollState)
}

function finishPropertiesRender(scrollState) {
  refreshLucideIcons()
  // Legacy text-element settings still render their alignment as a select.
  // Normalize it during every properties render (including color-picker
  // renders) so the control cannot regress to a dropdown after an interaction.
  upgradeAlignmentControls()
  enhanceSelectControls()
  refreshLucideIcons()
  queuePopoverLayout()
  restoreScrollState(scrollState)
}

/* Native select popups are owned by the browser and ignore the product's
   dropdown styling. Build one shared, accessible menu for every select in the
   properties panel while retaining the native select as the value/change
   source used by the existing state handlers. */
function enhanceSelectControls() {
  document.querySelectorAll('.select-control:not([data-select-control])').forEach(wrapper => {
    const select = wrapper.querySelector('select')
    if (!select) return

    wrapper.dataset.selectControl = 'true'
    const existingIcon = Array.from(wrapper.children).find(child => child.classList?.contains('lucide'))
    existingIcon?.remove()

    const trigger = document.createElement('button')
    trigger.type = 'button'
    trigger.className = 'select-control__trigger'
    trigger.dataset.selectTrigger = ''
    trigger.setAttribute('aria-haspopup', 'listbox')
    trigger.setAttribute('aria-expanded', 'false')
    trigger.innerHTML = `<span class="select-control__value"></span>${icon('chevrons-up-down')}`

    const menu = document.createElement('div')
    menu.className = 'select-menu'
    menu.dataset.selectMenu = ''
    menu.hidden = true
    menu.setAttribute('role', 'listbox')

    Array.from(select.options).forEach(option => {
      const optionButton = document.createElement('button')
      optionButton.type = 'button'
      optionButton.className = 'select-menu__option'
      optionButton.dataset.selectOption = ''
      optionButton.dataset.selectValue = option.value || option.textContent
      optionButton.setAttribute('role', 'option')
      optionButton.innerHTML = `<span>${option.textContent}</span><span class="select-menu__check" aria-hidden="true"></span>`
      menu.append(optionButton)
    })

    const sync = () => {
      const selected = select.options[select.selectedIndex]
      const value = selected ? (selected.value || selected.textContent) : ''
      const valueNode = trigger.querySelector('.select-control__value')
      if (valueNode) valueNode.textContent = selected?.textContent || ''
      trigger.disabled = select.disabled
      menu.querySelectorAll('[data-select-option]').forEach(optionButton => {
        const isSelected = optionButton.dataset.selectValue === value
        optionButton.classList.toggle('is-selected', isSelected)
        optionButton.setAttribute('aria-selected', String(isSelected))
        const check = optionButton.querySelector('.select-menu__check')
        if (check) check.innerHTML = isSelected ? icon('check') : ''
      })
    }

    select.classList.add('select-control__native')
    select.tabIndex = -1
    select.setAttribute('aria-hidden', 'true')
    wrapper.insertBefore(trigger, select)
    wrapper.append(menu)
    sync()
  })
}

function closeCustomSelects(except = null) {
  document.querySelectorAll('[data-select-control].is-open').forEach(wrapper => {
    if (wrapper === except) return
    wrapper.classList.remove('is-open')
    const trigger = wrapper.querySelector('[data-select-trigger]')
    const menu = wrapper.querySelector('[data-select-menu]')
    trigger?.setAttribute('aria-expanded', 'false')
    if (menu) menu.hidden = true
  })
}

function queuePopoverLayout() {
  requestAnimationFrame(positionOpenPopovers)
}

function positionViewportPopover(popover, trigger, preferred = 'bottom') {
  if (!popover || !trigger || popover.hidden) return
  const margin = 12
  const gap = 8
  const measured = popover.getBoundingClientRect()
  popover.classList.add('is-viewport-popover')
  popover.style.width = `${Math.ceil(measured.width)}px`
  popover.style.visibility = 'hidden'
  popover.style.left = '0px'
  popover.style.top = '0px'

  const anchor = trigger.getBoundingClientRect()
  const popup = measured
  const maxLeft = Math.max(margin, window.innerWidth - popup.width - margin)
  const maxTop = Math.max(margin, window.innerHeight - popup.height - margin)
  let left
  let top

  if (preferred === 'left') {
    left = anchor.left - popup.width - gap
    if (left < margin) left = anchor.right + gap
    if (left + popup.width > window.innerWidth - margin) left = maxLeft
    top = Math.min(Math.max(margin, anchor.top), maxTop)
  } else if (preferred === 'right') {
    left = anchor.right + gap
    if (left + popup.width > window.innerWidth - margin) left = anchor.left - popup.width - gap
    if (left < margin) left = margin
    top = Math.min(Math.max(margin, anchor.top), maxTop)
  } else if (preferred === 'top') {
    left = Math.min(Math.max(margin, anchor.left), maxLeft)
    top = anchor.top - popup.height - gap
    if (top < margin) top = anchor.bottom + gap
    if (top + popup.height > window.innerHeight - margin) top = maxTop
  } else {
    left = Math.min(Math.max(margin, anchor.left), maxLeft)
    top = anchor.bottom + gap
    if (top + popup.height > window.innerHeight - margin) top = anchor.top - popup.height - gap
    if (top < margin) top = margin
  }

  popover.style.left = `${Math.round(left)}px`
  popover.style.top = `${Math.round(top)}px`
  popover.style.visibility = ''
}

function positionOpenPopovers() {
  document.querySelectorAll('[data-color-picker]').forEach(popover => {
    const trigger = document.querySelector(`[data-open-color="${popover.dataset.colorPicker}"]`)
    positionViewportPopover(popover, trigger, 'left')
  })
  const teamMenu = document.getElementById('team-selector-menu')
  positionViewportPopover(teamMenu, document.getElementById('team-selector-toggle'), 'bottom')
  const saveMenu = document.getElementById('team-save-menu')
  positionViewportPopover(saveMenu, document.getElementById('team-save-toggle'), 'top')
  document.querySelectorAll('.member-popover:not([hidden])').forEach(popover => {
    const memberId = popover.id.replace('member-popover-', '')
    positionViewportPopover(popover, document.querySelector(`[data-member-menu="${memberId}"]`), 'right')
  })
  document.querySelectorAll('[data-select-menu]:not([hidden])').forEach(menu => {
    positionViewportPopover(menu, menu.closest('[data-select-control]')?.querySelector('[data-select-trigger]'), 'left')
  })
}

function render() {
  const scrollState = captureScrollState()
  renderStructure(); renderMembers(); renderCanvas(); renderProperties(); upgradeAlignmentControls(); renderSavePrompts()
  if (!document.getElementById('template-modal').hidden) renderTemplate()
  applyBuilderSettings()
  refreshLucideIcons()
  restoreScrollState(scrollState)
}

function upgradeAlignmentControls() {
  document.querySelectorAll('.properties-panel select[data-field="alignment"]').forEach(select => {
    const field = select.closest('.field')
    if (!field) return
    field.outerHTML = alignmentToggle('Alignment', state.alignment)
  })
}

function recordPageChange(key) {
  state.pageDraft = true
  if (!document.getElementById('template-modal').hidden) state.templateOverrides.add(key)
}

document.addEventListener('click', event => {
  const selectTrigger = event.target.closest('[data-select-trigger]')
  const selectOption = event.target.closest('[data-select-option]')
  if (selectTrigger || selectOption) {
    event.stopImmediatePropagation()
    const wrapper = (selectTrigger || selectOption).closest('[data-select-control]')
    const menu = wrapper?.querySelector('[data-select-menu]')
    const trigger = wrapper?.querySelector('[data-select-trigger]')
    const select = wrapper?.querySelector('select')
    if (!wrapper || !menu || !trigger || !select) return
    if (selectOption) {
      select.value = selectOption.dataset.selectValue
      select.dispatchEvent(new Event('change', { bubbles: true }))
      return
    }
    const isOpen = wrapper.classList.contains('is-open')
    closeCustomSelects(wrapper)
    wrapper.classList.toggle('is-open', !isOpen)
    menu.hidden = isOpen
    trigger.setAttribute('aria-expanded', String(!isOpen))
    if (!isOpen) requestAnimationFrame(() => positionViewportPopover(menu, trigger, 'left'))
    return
  }
  closeCustomSelects()
  if (state.openColorPicker && !event.target.closest('[data-color-picker]') && !event.target.closest('[data-open-color]')) {
    state.openColorPicker = null
    if (!document.getElementById('template-modal').hidden) renderTemplate()
    else renderProperties()
  }
  const colorTrigger = event.target.closest('[data-open-color]')
  if (colorTrigger) {
    event.stopImmediatePropagation()
    state.openColorPicker = state.openColorPicker === colorTrigger.dataset.openColor ? null : colorTrigger.dataset.openColor
    renderProperties()
    return
  }
  const colorPlane = event.target.closest('[data-color-plane]')
  if (colorPlane) {
    event.stopImmediatePropagation()
    const rect = colorPlane.getBoundingClientRect()
    const hsv = hexToHsv(state[colorPlane.dataset.colorPlane])
    hsv.s = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))
    hsv.v = Math.max(0, Math.min(100, 100 - ((event.clientY - rect.top) / rect.height) * 100))
    state[colorPlane.dataset.colorPlane] = hsvToHex(hsv)
    recordPageChange(colorPlane.dataset.colorPlane)
    render()
    return
  }
  const step = event.target.closest('[data-step]')
  if (step) {
    event.stopImmediatePropagation()
    const key = step.dataset.step
    const min = Number(step.dataset.min ?? (key === 'columns' ? 1 : 0))
    const max = Number(step.dataset.max ?? 128)
    state[key] = Math.min(max, Math.max(min, Number(state[key]) + Number(step.dataset.delta)))
    recordPageChange(key); render(); return
  }
  const align = event.target.closest('[data-align]')
  if (align) { event.stopImmediatePropagation(); state.alignment = align.dataset.align; recordPageChange('alignment'); render(); return }
  const gridAlign = event.target.closest('[data-grid-align]')
  if (gridAlign) { event.stopImmediatePropagation(); state.gridAlignment = gridAlign.dataset.gridAlign; recordPageChange('gridAlignment'); render(); return }
  const cardAlign = event.target.closest('[data-card-align]')
  if (cardAlign) { event.stopImmediatePropagation(); state.cardTextAlign = cardAlign.dataset.cardAlign; recordPageChange('cardTextAlign'); render(); return }
  const textFormat = event.target.closest('[data-text-format]')
  if (textFormat) { event.stopImmediatePropagation(); const key = textFormat.dataset.textFormat; state[key] = !state[key]; recordPageChange(key); render(); return }
  const avatarPosition = event.target.closest('[data-avatar-position]')
  if (avatarPosition) { event.stopImmediatePropagation(); state.avatarPosition = avatarPosition.dataset.avatarPosition; recordPageChange('avatarPosition'); render(); return }
  const toggle = event.target.closest('[data-prop-visibility]')
  if (toggle) { event.stopImmediatePropagation(); const key = toggle.dataset.propVisibility; state.hidden.has(key) ? state.hidden.delete(key) : state.hidden.add(key); recordPageChange(key); render(); }
}, true)

document.addEventListener('input', event => {
  const avatarRangeInput = event.target.closest('[data-avatar-range]')
  if (avatarRangeInput) {
    event.stopImmediatePropagation()
    const key = avatarRangeInput.dataset.avatarRange
    state[key] = Number(avatarRangeInput.value)
    avatarRangeInput.closest('.avatar-range').querySelector('[data-avatar-number]').value = state[key]
    recordPageChange(key)
    applyBuilderSettings()
    return
  }
  const avatarNumberInput = event.target.closest('[data-avatar-number]')
  if (avatarNumberInput) {
    event.stopImmediatePropagation()
    if (avatarNumberInput.value === '' || Number.isNaN(Number(avatarNumberInput.value))) return
    const key = avatarNumberInput.dataset.avatarNumber
    state[key] = Math.min(Number(avatarNumberInput.max), Math.max(Number(avatarNumberInput.min), Number(avatarNumberInput.value)))
    avatarNumberInput.closest('.avatar-range').querySelector('[data-avatar-range]').value = state[key]
    recordPageChange(key)
    applyBuilderSettings()
    return
  }
  const numberInput = event.target.closest('[data-number-input]')
  if (numberInput) {
    event.stopImmediatePropagation()
    if (numberInput.value === '' || Number.isNaN(Number(numberInput.value))) return
    const key = numberInput.dataset.numberInput
    const min = Number(numberInput.min)
    const max = Number(numberInput.max)
    state[key] = Math.min(max, Math.max(min, Number(numberInput.value)))
    recordPageChange(key)
    applyBuilderSettings()
    return
  }
  const input = event.target.closest('[data-page-content]')
  if (!input) return
  event.stopImmediatePropagation()
  state[input.dataset.pageContent] = input.value
  recordPageChange(input.dataset.pageContent)
  applyBuilderSettings()
}, true)

function colorWithOpacity(hex, opacity) {
  const value = hex.replace('#', '')
  const rgb = value.length === 3 ? value.split('').map(char => parseInt(char + char, 16)) : [value.slice(0, 2), value.slice(2, 4), value.slice(4, 6)].map(part => parseInt(part, 16))
  return `rgba(${rgb.join(', ')}, ${opacity})`
}

function hexToHsv(hex) {
  const value = hex.replace('#', '')
  const [r, g, b] = (value.length === 3 ? value.split('').map(char => parseInt(char + char, 16)) : [value.slice(0, 2), value.slice(2, 4), value.slice(4, 6)].map(part => parseInt(part, 16))).map(channel => channel / 255)
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min
  let h = 0
  if (delta) h = max === r ? 60 * (((g - b) / delta) % 6) : max === g ? 60 * ((b - r) / delta + 2) : 60 * ((r - g) / delta + 4)
  if (h < 0) h += 360
  return { h, s: max ? (delta / max) * 100 : 0, v: max * 100 }
}

function hsvToHex({ h, s, v }) {
  const saturation = s / 100, value = v / 100, chroma = value * saturation, x = chroma * (1 - Math.abs((h / 60) % 2 - 1)), match = value - chroma
  const [r, g, b] = h < 60 ? [chroma, x, 0] : h < 120 ? [x, chroma, 0] : h < 180 ? [0, chroma, x] : h < 240 ? [0, x, chroma] : h < 300 ? [x, 0, chroma] : [chroma, 0, x]
  return '#' + [r, g, b].map(channel => Math.round((channel + match) * 255).toString(16).padStart(2, '0')).join('')
}

document.addEventListener('input', event => {
  const alpha = event.target.closest('[data-color-alpha]')
  if (alpha) {
    event.stopImmediatePropagation()
    state[alpha.dataset.colorAlpha] = Number(alpha.value) / 100
    alpha.closest('.color-picker').querySelector('.color-picker__value output').textContent = `${alpha.value}%`
    recordPageChange(alpha.dataset.colorAlpha)
    applyBuilderSettings()
    return
  }
  const hue = event.target.closest('[data-color-hue]')
  if (hue) {
    event.stopImmediatePropagation()
    const hsv = hexToHsv(state[hue.dataset.colorHue])
    hsv.h = Number(hue.value)
    state[hue.dataset.colorHue] = hsvToHex(hsv)
    recordPageChange(hue.dataset.colorHue)
    render()
  }
}, true)

document.addEventListener('change', event => {
  const avatarNumberInput = event.target.closest('[data-avatar-number]')
  if (avatarNumberInput) {
    event.stopImmediatePropagation()
    const key = avatarNumberInput.dataset.avatarNumber
    const min = Number(avatarNumberInput.min)
    const max = Number(avatarNumberInput.max)
    const value = Number(avatarNumberInput.value)
    state[key] = Number.isNaN(value) ? min : Math.min(max, Math.max(min, value))
    recordPageChange(key)
    render()
    return
  }
  const numberInput = event.target.closest('[data-number-input]')
  if (numberInput) {
    event.stopImmediatePropagation()
    const key = numberInput.dataset.numberInput
    const min = Number(numberInput.min)
    const max = Number(numberInput.max)
    const fallback = key === 'photoSize' ? 0 : min
    const value = numberInput.value === '' ? fallback : Number(numberInput.value)
    state[key] = Number.isNaN(value) ? fallback : Math.min(max, Math.max(min, value))
    recordPageChange(key)
    render()
    return
  }
  const alpha = event.target.closest('[data-color-alpha]')
  if (alpha || event.target.closest('[data-color-hue]')) { event.stopImmediatePropagation(); render(); return }
  const hex = event.target.closest('[data-color-hex]')
  if (hex) {
    event.stopImmediatePropagation()
    const value = hex.value.trim().replace(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i, '#$1')
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) { state[hex.dataset.colorHex] = value; recordPageChange(hex.dataset.colorHex) }
    render()
    return
  }
  const cardInput = event.target.closest('[data-card-input]')
  if (cardInput) {
    event.stopImmediatePropagation()
    state[cardInput.dataset.cardInput] = cardInput.value
    recordPageChange(cardInput.dataset.cardInput)
    render()
    return
  }
  if (!event.target.closest('[data-page-content]')) return
  event.stopImmediatePropagation()
  render()
}, true)

document.addEventListener('dragstart', event => {
  const field = event.target.closest('[data-field-order]')
  if (!field) return
  state.draggedCardField = field.dataset.fieldOrder
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', state.draggedCardField)
  field.classList.add('is-dragging')
})

document.addEventListener('dragover', event => {
  const field = event.target.closest('[data-field-order]')
  if (!field || !state.draggedCardField || field.dataset.fieldOrder === state.draggedCardField) return
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
  document.querySelectorAll('[data-field-order].is-drop-target').forEach(node => node.classList.remove('is-drop-target'))
  field.classList.add('is-drop-target')
})

document.addEventListener('drop', event => {
  const field = event.target.closest('[data-field-order]')
  if (!field || !state.draggedCardField) return
  event.preventDefault()
  const from = state.cardFieldOrder.indexOf(state.draggedCardField)
  const to = state.cardFieldOrder.indexOf(field.dataset.fieldOrder)
  if (from !== -1 && to !== -1 && from !== to) {
    state.cardFieldOrder.splice(from, 1)
    state.cardFieldOrder.splice(to, 0, state.draggedCardField)
    recordPageChange('cardFieldOrder')
  }
  state.draggedCardField = null
  render()
})

document.addEventListener('dragend', () => {
  state.draggedCardField = null
  document.querySelectorAll('[data-field-order].is-dragging,[data-field-order].is-drop-target').forEach(node => node.classList.remove('is-dragging', 'is-drop-target'))
})

render()
