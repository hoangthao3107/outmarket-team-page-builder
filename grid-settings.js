// Contextual property controls modeled after the supplied team-page prototype.
Object.assign(state, {
  gridGap: state.gridGap ?? 16,
  gridPadding: state.gridPadding ?? 0,
  headingText: state.headingText ?? 'Meet the Team',
  descriptionText: state.descriptionText ?? 'Aliquam a dui vel justo fringilla euismod id id enim. Nunc non semper tellus. Pellentesque vitae tellus non dui fermentum hendrerit. In vel imperdiet mi. Aliquam erat volutpat.',
  subheadText: state.subheadText ?? 'Meet the people behind the work.',
  headingSize: state.headingSize ?? 24,
  headingMarginTop: state.headingMarginTop ?? 0,
  headingMarginBottom: state.headingMarginBottom ?? 0,
  descriptionSize: state.descriptionSize ?? 14,
  descriptionMarginTop: state.descriptionMarginTop ?? 4,
  descriptionMarginBottom: state.descriptionMarginBottom ?? 0,
  headingColor: state.headingColor ?? '#0f3a64',
  headingColorOpacity: state.headingColorOpacity ?? 1,
  headingBackground: state.headingBackground ?? '#ffffff',
  headingBackgroundOpacity: state.headingBackgroundOpacity ?? 0,
  subheadColor: state.subheadColor ?? '#525965',
  subheadColorOpacity: state.subheadColorOpacity ?? 1,
  subheadBackground: state.subheadBackground ?? '#ffffff',
  subheadBackgroundOpacity: state.subheadBackgroundOpacity ?? 0,
  subheadMarginTop: state.subheadMarginTop ?? 8,
  subheadMarginBottom: state.subheadMarginBottom ?? 0,
  descriptionColor: state.descriptionColor ?? '#343839',
  descriptionColorOpacity: state.descriptionColorOpacity ?? 1,
  descriptionBackground: state.descriptionBackground ?? '#ffffff',
  descriptionBackgroundOpacity: state.descriptionBackgroundOpacity ?? 0,
  alignment: state.alignment ?? 'left',
  sectionAlignment: normalizeSectionAlignment(state.sectionAlignment),
  sectionGap: state.sectionGap ?? 22,
  sectionContentGap: state.sectionContentGap ?? 10,
  pageGap: state.pageGap ?? 26,
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
  cardVerticalAlignment: normalizeSectionAlignment(state.cardVerticalAlignment),
  sectionHeadingSize: state.sectionHeadingSize ?? 17,
  sectionHeadingMarginTop: state.sectionHeadingMarginTop ?? 0,
  sectionHeadingMarginBottom: state.sectionHeadingMarginBottom ?? 0,
  sectionHeadingAlignment: state.sectionHeadingAlignment ?? 'left',
  sectionHeadingBold: state.sectionHeadingBold ?? false,
  sectionHeadingItalic: state.sectionHeadingItalic ?? false,
  sectionHeadingUnderline: state.sectionHeadingUnderline ?? false,
  sectionHeadingStrike: state.sectionHeadingStrike ?? false,
  sectionHeadingColor: state.sectionHeadingColor ?? '#0f3a64',
  sectionHeadingColorOpacity: state.sectionHeadingColorOpacity ?? 1,
  sectionHeadingBackground: state.sectionHeadingBackground ?? '#ffffff',
  sectionHeadingBackgroundOpacity: state.sectionHeadingBackgroundOpacity ?? 0,
  sectionHeadingPadding: state.sectionHeadingPadding ?? 0,
  sectionHeadingRadius: state.sectionHeadingRadius ?? 0,
  sectionContentSize: state.sectionContentSize ?? 14,
  sectionContentMarginTop: state.sectionContentMarginTop ?? 0,
  sectionContentMarginBottom: state.sectionContentMarginBottom ?? 0,
  sectionContentAlignment: state.sectionContentAlignment ?? 'left',
  sectionContentBold: state.sectionContentBold ?? false,
  sectionContentItalic: state.sectionContentItalic ?? false,
  sectionContentUnderline: state.sectionContentUnderline ?? false,
  sectionContentStrike: state.sectionContentStrike ?? false,
  sectionContentColor: state.sectionContentColor ?? '#343839',
  sectionContentColorOpacity: state.sectionContentColorOpacity ?? 1,
  sectionContentBackground: state.sectionContentBackground ?? '#ffffff',
  sectionContentBackgroundOpacity: state.sectionContentBackgroundOpacity ?? 0,
  sectionContentPadding: state.sectionContentPadding ?? 0,
  sectionContentRadius: state.sectionContentRadius ?? 0,
  sectionContainerBackground: state.sectionContainerBackground ?? '#ffffff',
  sectionContainerBackgroundOpacity: state.sectionContainerBackgroundOpacity ?? 0,
  sectionContainerPadding: state.sectionContainerPadding ?? 0,
  sectionContainerRadius: state.sectionContainerRadius ?? 0,
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
  colorPickerHues: state.colorPickerHues ?? {},
})
let initialCanvasScrollReset = false

const textStyleConfig = {
  heading: { size: 'headingSize', marginTop: 'headingMarginTop', marginBottom: 'headingMarginBottom', color: 'headingColor', colorOpacity: 'headingColorOpacity', background: 'headingBackground', backgroundOpacity: 'headingBackgroundOpacity', min: 20, max: 64 },
  subhead: { size: 'subheadSize', marginTop: 'subheadMarginTop', marginBottom: 'subheadMarginBottom', color: 'subheadColor', colorOpacity: 'subheadColorOpacity', background: 'subheadBackground', backgroundOpacity: 'subheadBackgroundOpacity', min: 10, max: 32 },
  description: { size: 'descriptionSize', marginTop: 'descriptionMarginTop', marginBottom: 'descriptionMarginBottom', color: 'descriptionColor', colorOpacity: 'descriptionColorOpacity', background: 'descriptionBackground', backgroundOpacity: 'descriptionBackgroundOpacity', min: 10, max: 32 },
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
const verticalAlignmentIconLegacy = option => {
  const paths = {
    top: 'M2 2H22M7 16H17C18.1046 16 19 16.8954 19 18V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V18C5 16.8954 5.89543 16 5.89543 16 7 16 9 16 7 16ZM9 6H15C16.1046 6 17 6.89543 17 8V10C17 11.1046 16.1046 12 15 12H9C7.89543 12 7 11.1046 7 10V8C7 6.89543 7.89543 6 9 6Z',
    center: 'M2 12H22M7 16H17C18.1046 16 19 16.8954 19 18V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V18C5 16.8954 5.89543 16 5.89543 16 7 16 9 16 7 16ZM9 2H15C16.1046 2 17 2.89543 17 4V6C17 7.10457 16.1046 8 15 8H9C7.89543 8 7 7.10457 7 6V4C7 2.89543 7.89543 2 9 2Z',
    bottom: 'M2 22H22M7 12H17C18.1046 12 19 12.8954 19 14V16C19 17.1046 18.1046 18 17 18H7C5.89543 18 5 17.1046 5 16V14C5 12.8954 5.89543 12 7 12ZM9 2H15C16.1046 2 17 2.89543 17 4V6C17 7.10457 16.1046 8 15 8H9C7.89543 8 7 7.10457 7 6V4C7 2.89543 7.89543 2 9 2Z'
  }
  return `<svg class="vertical-alignment-icon vertical-alignment-icon--${option}" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${paths[option]}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}
const verticalAlignmentIcon = option => {
  const paths = {
    top: 'M2 2H22M7 16H17C18.1046 16 19 16.8954 19 18V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V18C5 16.8954 5.89543 16 7 16ZM9 6H15C16.1046 6 17 6.89543 17 8V10C17 11.1046 16.1046 12 15 12H9C7.89543 12 7 11.1046 7 10V8C7 6.89543 7.89543 6 9 6Z',
    center: 'M2 12H22M7 16H17C18.1046 16 19 16.8954 19 18V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V18C5 16.8954 5.89543 16 7 16ZM9 2H15C16.1046 2 17 2.89543 17 4V6C17 7.10457 16.1046 8 15 8H9C7.89543 8 7 7.10457 7 6V4C7 2.89543 7.89543 2 9 2Z',
    bottom: 'M2 22H22M7 12H17C18.1046 12 19 12.8954 19 14V16C19 17.1046 18.1046 18 17 18H7C5.89543 18 5 17.1046 5 16V14C5 12.8954 5 12 7 12ZM9 2H15C16.1046 2 17 2.89543 17 4V6C17 7.10457 16.1046 8 15 8H9C7.89543 8 7 7.10457 7 6V4C7 2.89543 7.89543 2 9 2Z'
  }
  return `<svg class="vertical-alignment-icon vertical-alignment-icon--${option}" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${paths[option]}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}
const verticalAlignmentToggle = (label, value, attribute = 'data-section-align') => `<div class="property-align"><span>${label}</span><div class="segmented-control segmented-control--sm alignment-toggle" role="group" aria-label="${label}">${['top', 'center', 'bottom'].map(option => `<button class="segmented-control__segment ${value === option ? 'is-active' : ''}" ${attribute}="${option}" aria-label="Align ${option}">${verticalAlignmentIcon(option)}</button>`).join('')}</div></div>`
const avatarRange = (label, key, value, { min, max, step = 1, unit = 'PX' } = {}) => `<div class="avatar-range"><span>${label}</span><div class="avatar-range__control"><span class="property-number-field"><input type="number" inputmode="numeric" min="${min}" max="${max}" step="${step}" value="${value}" data-avatar-number="${key}" aria-label="${label}"><small>${unit}</small></span><input type="range" min="${min}" max="${max}" step="${step}" value="${value}" style="--range-progress:${Math.max(0, Math.min(100, ((Number(value) - min) / (max - min)) * 100))}%;" data-avatar-range="${key}" aria-label="${label}"></div></div>`
const cardFieldLabels = { photo: ['Photo'], fullName: ['Full name', true], jobTitle: ['Job title'], email: ['Email'], phone: ['Phone'], cellphone: ['Cellphone'], bio: ['Bio'] }
const textFormatControl = key => {
  const labels = { bold: 'Bold', italic: 'Italic', underline: 'Underline', strike: 'Strikethrough' }
  return `<div class="property-format"><span>Text style</span><div class="property-format__controls" role="group" aria-label="Text style">${Object.entries(labels).map(([style, label]) => { const stateKey = `${key}${style[0].toUpperCase()}${style.slice(1)}`; return `<button type="button" class="${state[stateKey] ? 'is-active' : ''}" data-text-format="${stateKey}" aria-label="${label}" aria-pressed="${state[stateKey]}">${icon(style === 'strike' ? 'strikethrough' : style)}</button>` }).join('')}</div></div>`
}
const listStyleControl = () => `<div class="property-list-style"><span>List style</span><div class="list-style-control" role="group" aria-label="List style">${[['none', 'None', 'minus'], ['bulleted', 'Bulleted list', 'list'], ['numbered', 'Numbered list', 'list-ordered']].map(([key, label, glyph]) => `<button type="button" class="${key === 'none' ? 'is-active' : ''}" data-section-content-list-style="${key}" aria-label="${label}" aria-pressed="${key === 'none'}">${icon(glyph)}</button>`).join('')}</div></div>`
const colorControl = (label, key, value, opacityKey = null, opacity = 1) => {
  const hsv = hexToHsv(value)
  hsv.h = pickerHueFor(key, value)
  const hsl = hexToHsl(value)
  const opacityPercent = Math.round(opacity * 100)
  const picker = state.openColorPicker === key ? `<div class="color-picker" data-color-picker="${key}" role="dialog" aria-label="${label} color picker">
    <div class="color-picker__header"><span>Color</span><button type="button" class="color-picker__close" data-close-color-picker="${key}" aria-label="Close color picker">${icon('x')}</button></div>
    <div class="color-picker__plane" data-color-plane="${key}" tabindex="0" role="slider" aria-label="Saturation and lightness" aria-valuetext="${Math.round(hsl.s)}% saturation, ${Math.round(hsl.l)}% lightness" style="--picker-hue:${hsv.h};"><span class="color-picker__plane-grid" aria-hidden="true"></span><i style="left:${hsv.s}%;top:${100 - hsv.v}%;"></i></div>
    <label class="color-picker__range color-picker__hue"><span>Hue</span><span class="color-picker__track" style="--picker-position:${(hsv.h / 360) * 100}%;"><i class="color-picker__range-thumb" style="--thumb-color:${hsvToHex({ h: hsv.h, s: 100, v: 100 })};"></i><input type="range" min="0" max="360" value="${Math.round(hsv.h)}" data-color-hue="${key}" aria-label="Hue"></span></label>
    ${opacityKey ? `<label class="color-picker__range color-picker__alpha"><span>Opacity</span><span class="color-picker__track color-picker__track--alpha" style="--picker-position:${opacityPercent}%;--picker-alpha-color:${colorWithOpacity(value, 1)};"><i class="color-picker__range-thumb" style="--thumb-color:${colorWithOpacity(value, 1)};"></i><input type="range" min="0" max="100" value="${opacityPercent}" data-color-alpha="${opacityKey}" data-color-key="${key}" aria-label="Opacity"></span></label>` : ''}
    <div class="color-picker__hex-row"><button type="button" class="color-picker__eyedropper" data-eyedropper="${key}" aria-label="Pick a color from the screen">${icon('pipette')}</button><input class="color-picker__eyedropper-fallback" type="color" value="${/^#[0-9a-f]{6}$/i.test(value) ? value : '#ffffff'}" data-eyedropper-fallback="${key}" aria-label="Choose a color"><label class="color-picker__hex-field"><span class="sr-only">Hex color</span><input value="${value.replace('#', '').toUpperCase()}" data-color-hex="${key}" aria-label="${label} hex value" spellcheck="false"></label>${opacityKey ? `<label class="color-picker__opacity-field"><span class="sr-only">Opacity</span><input type="number" min="0" max="100" value="${opacityPercent}" data-color-opacity-field="${opacityKey}" data-color-key="${key}" aria-label="Opacity"><b>%</b></label>` : ''}</div>
  </div>` : ''
  return `<div class="property-color"><span>${label}</span><button class="property-color-trigger" data-open-color="${key}" data-opacity-key="${opacityKey || ''}" aria-expanded="${state.openColorPicker === key}" aria-label="Edit ${label} color"><i style="--swatch-color:${colorWithOpacity(value, opacity)}"></i><code>${value.toUpperCase()}</code>${opacityKey ? `<small>${opacityPercent}%</small>` : ''}</button>${picker}</div>`
}

function pageSettingsBody() {
  return `
    ${sectionTitle('Styles', `${colorControl('Color', 'pageBackground', state.pageBackground, 'pageBackgroundOpacity', state.pageBackgroundOpacity)}${stepper('Heading size', 'headingSize', state.headingSize, { min: 20, max: 64, step: 2 })}${alignmentToggle('Align', state.alignment)}${stepper('Gap', 'pageGap', state.pageGap, { min: 0, max: 128 })}`)}
  `
}

function layoutRecommendationMarkup() {
  const suggestion = state.layoutSuggestion
  if (!suggestion) return ''
  return sectionTitle('Suggested layout', `<div class="layout-suggestion"><strong>${esc(suggestion.strategy)}</strong><p>${esc(suggestion.summary)}</p><small>Based on the selected groups and member counts. You can adjust the layout after applying it.</small><button class="button button--ghost" type="button" data-apply-layout-suggestion>Reapply suggestion</button></div>`)
}

function gridSettingsBody() {
  return `${sectionTitle('Layout', `${stepper('Columns', 'columns', state.columns, { unit: '', min: 1, max: 4 })}${stepper('Gap', 'gridGap', state.gridGap, { min: 0, max: 96 })}${stepper('Padding', 'gridPadding', state.gridPadding, { min: 0, max: 128 })}${alignmentToggle('Alignment', state.gridAlignment, 'data-grid-align')}${verticalAlignmentToggle('Vertical alignment', state.cardVerticalAlignment, 'data-card-vertical-align')}`)}`
}

function cardSettingsBody() {
  return `
    ${sectionTitle('Avatar position', `<div class="segmented-control segmented-control--sm avatar-position-control" role="group" aria-label="Avatar position">${[['top','Top'],['left','Left'],['none','None']].map(([key, label]) => `<button class="segmented-control__segment ${state.avatarPosition === key ? 'is-active' : ''}" data-avatar-position="${key}" title="Avatar ${label.toLowerCase()}">${label}</button>`).join('')}</div>${avatarRange('Avatar radius', 'avatarRadius', state.avatarRadius, { min: 0, max: 50, unit: '%' })}${avatarRange('Avatar size', 'avatarSize', state.avatarSize, { min: 0, max: 100, step: 5, unit: '%' })}`)}
    ${sectionTitle('Styles', `${stepper('Card padding', 'cardPadding', state.cardPadding, { min: 8, max: 48 })}${stepper('Corner radius', 'cardRadius', state.cardRadius, { min: 0, max: 32 })}${alignmentToggle('Alignment', state.cardTextAlign, 'data-card-align')}${colorControl('Background', 'cardBackground', state.cardBackground, 'cardBackgroundOpacity', state.cardBackgroundOpacity)}${colorControl('Border color', 'cardBorderColor', state.cardBorderColor, 'cardBorderOpacity', state.cardBorderOpacity)}${stepper('Border width', 'cardBorderWidth', state.cardBorderWidth, { unit: 'px', min: 0, max: 8 })}<label class="property-select"><span>Border style</span>${selectControl(`<select data-card-input="cardBorderStyle"><option ${state.cardBorderStyle === 'solid' ? 'selected' : ''}>solid</option><option ${state.cardBorderStyle === 'dashed' ? 'selected' : ''}>dashed</option><option ${state.cardBorderStyle === 'none' ? 'selected' : ''}>none</option></select>`)}</label><label class="property-select"><span>Elevation</span>${selectControl(`<select data-card-input="cardShadow"><option value="none" ${state.cardShadow === 'none' ? 'selected' : ''}>None</option><option value="soft" ${state.cardShadow === 'soft' ? 'selected' : ''}>Soft</option><option value="medium" ${state.cardShadow === 'medium' ? 'selected' : ''}>Medium</option></select>`)}</label>`)}
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
    return `${sectionTitle('Content', visibilityControl)}${sectionTitle('Avatar', `${position}${avatarRange('Avatar radius', 'avatarRadius', state.avatarRadius, { min: 0, max: 50, unit: '%' })}${avatarRange('Avatar size', 'avatarSize', state.avatarSize, { min: 0, max: 100, step: 5, unit: '%' })}`)}`
  }
  const config = textStyleConfig[key]
  const colorOpacityKey = config.colorOpacity || null
  return `${sectionTitle('Content', visibilityControl)}${sectionTitle('Typography', `${stepper('Font size', config.size, state[config.size], { min: config.min, max: config.max })}${colorControl('Text color', config.color, state[config.color], colorOpacityKey, state[colorOpacityKey] ?? 1)}${colorControl('Background color', config.background, state[config.background], config.backgroundOpacity, state[config.backgroundOpacity])}${textFormatControl(key)}`)}`
}

function pageTextSettingsBody(key) {
  const config = textStyleConfig[key]
  const label = labelFor(key)
  const contentKey = `${key}Text`
  const visibilityControl = `<label class="toggle-row"><span>Show ${label}</span><input type="checkbox" data-field="elementVisibility" aria-label="Show ${label}" ${isGlobalVisible(key) ? 'checked' : ''}><i></i></label>`
  const contentControl = key === 'description' ? `<label class="compact-content-field"><span>${label}</span><textarea data-page-content="${contentKey}">${esc(state[contentKey] || '')}</textarea></label>` : `<label class="compact-content-field"><span>${label}</span><input data-page-content="${contentKey}" value="${esc(state[contentKey] || '')}"></label>`
  const colorOpacityKey = config.colorOpacity || null
  const style = `${stepper('Top margin', config.marginTop, state[config.marginTop], { min: 0, max: 128 })}${stepper('Bottom margin', config.marginBottom, state[config.marginBottom], { min: 0, max: 128 })}${alignmentToggle('Alignment', state.alignment)}${stepper('Font size', config.size, state[config.size], { min: config.min, max: config.max })}${colorControl('Text color', config.color, state[config.color], colorOpacityKey, state[colorOpacityKey] ?? 1)}${colorControl('Text background', config.background, state[config.background], config.backgroundOpacity, state[config.backgroundOpacity])}${textFormatControl(key)}`
  return `${sectionTitle('Content', `${visibilityControl}${contentControl}`)}${sectionTitle('Styles', style)}`
}

function applyTextStyle(node, key, values = state) {
  const config = textStyleConfig[key]
  if (!config || !node) return
  const decoration = [values[`${key}Underline`] ? 'underline' : '', values[`${key}Strike`] ? 'line-through' : ''].filter(Boolean).join(' ')
  node.style.fontWeight = values[`${key}Bold`] ? '700' : ''
  node.style.fontStyle = values[`${key}Italic`] ? 'italic' : ''
  node.style.textDecoration = decoration
  if (textStyleConfig[key].marginTop) node.style.marginTop = `${values[textStyleConfig[key].marginTop]}px`
  if (textStyleConfig[key].marginBottom) node.style.marginBottom = `${values[textStyleConfig[key].marginBottom]}px`
  node.style.backgroundColor = colorWithOpacity(values[config.background], values[config.backgroundOpacity])
}

function syncAvatarRangeStyles() {
  document.querySelectorAll('[data-avatar-range]').forEach(input => {
    const min = Number(input.min)
    const max = Number(input.max)
    const value = Number(input.value)
    const progress = max > min ? Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100)) : 0
    input.style.setProperty('--range-progress', `${progress}%`)
  })
}

function applyBuilderSettings() {
  document.querySelectorAll('.team-page__content').forEach(page => {
    page.style.backgroundColor = colorWithOpacity(state.pageBackground, state.pageBackgroundOpacity)
  })
  document.querySelectorAll('.team-sections').forEach(node => {
    const pageGap = Math.max(0, Number(state.pageGap ?? 26) || 0)
    node.style.marginTop = `${pageGap}px`
    node.style.gap = `${pageGap}px`
  })
  document.querySelectorAll('.members-grid').forEach(grid => {
    const section = getSection(grid.dataset.sectionId)
    const settings = sectionSettings(section)
    const columns = Math.max(1, Number(settings.columns) || 1)
    const gridGap = Math.max(0, Number(settings.gridGap) || 0)
    grid.style.display = 'flex'
    grid.style.flexWrap = 'wrap'
    grid.style.gap = `${gridGap}px`
    grid.style.padding = `${settings.gridPadding}px`
    const gridChildAlignment = settings.cardVerticalAlignment === 'center' ? 'center' : settings.cardVerticalAlignment === 'bottom' ? 'flex-end' : 'flex-start'
    grid.style.alignItems = gridChildAlignment
    grid.style.alignContent = gridChildAlignment
    grid.style.justifyContent = settings.gridAlignment === 'center' ? 'center' : settings.gridAlignment === 'right' ? 'flex-end' : 'flex-start'
    grid.style.gridTemplateColumns = ''
    grid.style.marginLeft = '0'
    grid.style.marginRight = '0'
    grid.querySelectorAll(':scope > .member-card').forEach(card => {
      card.style.flex = `0 0 calc((100% - ${(columns - 1) * gridGap}px) / ${columns})`
    })
  })
  document.querySelectorAll('.team-page__heading').forEach(node => { node.textContent = state.headingText; node.style.fontSize = `${state.headingSize}px`; node.style.lineHeight = '1.333333'; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.headingColor, state.headingColorOpacity); applyTextStyle(node, 'heading') })
  document.querySelectorAll('.team-page__description').forEach(node => { node.textContent = state.descriptionText; node.style.fontSize = `${state.descriptionSize}px`; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.descriptionColor, state.descriptionColorOpacity); applyTextStyle(node, 'description') })
  document.querySelectorAll('.team-page__subhead').forEach(node => { node.textContent = state.subheadText; node.style.fontSize = `${state.subheadSize}px`; node.style.textAlign = state.alignment; node.style.color = colorWithOpacity(state.subheadColor, state.subheadColorOpacity); applyTextStyle(node, 'subhead') })
  document.querySelectorAll('.team-section__heading').forEach(node => {
    const section = getSection(node.closest('.team-section')?.dataset.sectionId)
    const settings = sectionSettings(section)
    node.style.fontSize = `${settings.sectionHeadingSize}px`
    node.style.lineHeight = '1.333333'
    node.style.marginTop = `${Math.max(0, Number(settings.sectionHeadingMarginTop) || 0)}px`
    node.style.marginBottom = `${Math.max(0, Number(settings.sectionHeadingMarginBottom) || 0)}px`
    node.style.textAlign = settings.sectionHeadingAlignment || 'left'
    node.style.fontWeight = settings.sectionHeadingBold ? '700' : ''
    node.style.fontStyle = settings.sectionHeadingItalic ? 'italic' : ''
    node.style.textDecoration = [settings.sectionHeadingUnderline ? 'underline' : '', settings.sectionHeadingStrike ? 'line-through' : ''].filter(Boolean).join(' ')
    node.style.color = colorWithOpacity(settings.sectionHeadingColor, settings.sectionHeadingColorOpacity)
    node.style.backgroundColor = colorWithOpacity(settings.sectionHeadingBackground, settings.sectionHeadingBackgroundOpacity)
    node.style.padding = `${settings.sectionHeadingPadding}px`
    node.style.borderRadius = `${settings.sectionHeadingRadius}px`
  })
  document.querySelectorAll('.team-section__head').forEach(node => {
    const section = getSection(node.closest('.team-section')?.dataset.sectionId)
    const settings = sectionSettings(section)
    const hasHeading = section?.showHeading !== false
    const hasDescription = section?.contentVisible !== false && Boolean(section?.contentHtml)
    node.style.marginBottom = hasHeading && hasDescription ? `${Math.max(0, Number(settings.sectionContentGap ?? 10) || 0)}px` : '0px'
  })
  document.querySelectorAll('.team-section__content-panel').forEach(node => {
    const section = getSection(node.closest('.team-section')?.dataset.sectionId)
    const settings = sectionSettings(section)
    node.style.color = colorWithOpacity(settings.sectionContentColor, settings.sectionContentColorOpacity)
    node.style.fontSize = `${settings.sectionContentSize}px`
    node.style.lineHeight = '1.428571'
    node.style.marginTop = `${Math.max(0, Number(settings.sectionContentMarginTop) || 0)}px`
    node.style.marginBottom = `${Math.max(0, Number(settings.sectionContentMarginBottom) || 0)}px`
    node.style.textAlign = settings.sectionContentAlignment || 'left'
    node.style.fontWeight = settings.sectionContentBold ? '700' : ''
    node.style.fontStyle = settings.sectionContentItalic ? 'italic' : ''
    node.style.textDecoration = [settings.sectionContentUnderline ? 'underline' : '', settings.sectionContentStrike ? 'line-through' : ''].filter(Boolean).join(' ')
    node.style.backgroundColor = colorWithOpacity(settings.sectionContentBackground, settings.sectionContentBackgroundOpacity)
    node.style.padding = `${settings.sectionContentPadding}px`
    node.style.borderRadius = `${settings.sectionContentRadius}px`
  })
  document.querySelectorAll('.team-section__container').forEach(node => {
    const section = getSection(node.closest('.team-section')?.dataset.sectionId)
    const settings = sectionSettings(section)
    node.style.backgroundColor = colorWithOpacity(settings.sectionContainerBackground, settings.sectionContainerBackgroundOpacity)
    node.style.padding = `${settings.sectionContainerPadding}px`
    node.style.borderRadius = `${settings.sectionContainerRadius}px`
  })
  document.querySelectorAll('.team-section').forEach(node => {
    const section = getSection(node.dataset.sectionId)
    const settings = sectionSettings(section)
    const alignment = normalizeSectionAlignment(settings.sectionAlignment)
    node.dataset.sectionAlignment = alignment
    node.style.textAlign = 'left'
    const layout = node.querySelector('.team-section__layout')
    if (layout) {
      layout.style.display = 'flex'
      layout.style.flexDirection = section.layout === 'stacked' ? 'column' : 'row'
      const sectionGap = Math.max(0, Number(settings.sectionGap ?? 22) || 0)
      layout.style.gap = `${sectionGap}px`
      layout.style.alignItems = 'stretch'
      const gapInset = section.layout === 'stacked' ? 0 : sectionGap / 2
      const container = layout.querySelector(':scope > .team-section__container')
      const grid = layout.querySelector(':scope > .members-grid')
      if (container) {
        container.style.justifyContent = alignment === 'center' ? 'center' : alignment === 'bottom' ? 'flex-end' : 'flex-start'
        if (section.layout === 'stacked') container.style.flex = '0 1 auto'
        else container.style.flex = `0 1 calc(${normalizeSectionContentWidth(settings.sectionContentWidth)}% - ${gapInset}px)`
      }
      if (grid) grid.style.flex = section.layout === 'stacked' ? '1 1 auto' : `1 1 calc(${100 - normalizeSectionContentWidth(settings.sectionContentWidth)}% - ${gapInset}px)`
      const resizeHandle = layout.querySelector(':scope > .team-section__resize-handle')
      if (resizeHandle) {
        const contentWidth = normalizeSectionContentWidth(settings.sectionContentWidth)
        resizeHandle.style.setProperty('--resize-position', `${section.layout === 'content-right' ? 100 - contentWidth : contentWidth}%`)
      }
    }
  })
  document.querySelectorAll('.member-card').forEach(card => {
    const section = getSection(card.dataset.sectionId)
    const settings = sectionSettings(section)
    card.style.padding = `${settings.cardPadding}px`
    card.style.height = 'auto'
    card.style.minHeight = settings.cardMinHeight ? `${settings.cardMinHeight}px` : ''
    card.style.alignSelf = ''
    card.style.backgroundColor = colorWithOpacity(settings.cardBackground, settings.cardBackgroundOpacity)
    const cardBorderWidth = Math.max(0, Number(settings.cardBorderWidth) || 0)
    const cardBorderStyle = settings.cardBorderStyle === 'dashed' ? 'dashed' : settings.cardBorderStyle === 'none' ? 'none' : 'solid'
    const cardBorderColor = colorWithOpacity(settings.cardBorderColor, settings.cardBorderOpacity)
    const cardBorder = cardBorderStyle !== 'solid' || !cardBorderWidth
      ? ''
      : `inset 0 0 0 ${cardBorderWidth}px ${cardBorderColor}`
    card.style.border = '0'
    card.style.borderRadius = `${settings.cardRadius}px`
    card.dataset.cardBorderStyle = cardBorderStyle
    card.style.setProperty('--card-border-width', `${cardBorderWidth}px`)
    card.style.setProperty('--card-border-color', cardBorderColor)
    const cardElevation = settings.cardShadow === 'soft' ? '0 4px 12px rgba(35, 35, 50, .10)' : settings.cardShadow === 'medium' ? '0 10px 24px rgba(35, 35, 50, .16)' : ''
    card.style.boxShadow = [cardBorder, cardElevation].filter(Boolean).join(', ') || 'none'
    card.style.textAlign = settings.cardTextAlign
    card.querySelectorAll('[data-card-field]').forEach(node => {
      const key = node.dataset.cardField
      const config = textStyleConfig[key]
      if (!config) return
      node.style.fontSize = `${settings[config.size]}px`
      node.style.color = colorWithOpacity(settings[config.color], settings[config.colorOpacity] ?? 1)
      applyTextStyle(node, key, settings)
      if (['phone', 'cellphone', 'bio'].includes(key)) {
        const member = memberById(card.dataset.card)
        const value = key === 'phone' ? member?.phone : key === 'cellphone' ? member?.cell : member?.bio
        const placeholder = key === 'bio' ? 'Add a bio...' : '+1 (555) 000-0000'
        const isPlaceholder = !String(value || '').trim()
        const iconSpan = node.querySelector(':scope > span')
        Array.from(node.childNodes).forEach(child => { if (child !== iconSpan) child.remove() })
        node.append(document.createTextNode(isPlaceholder ? placeholder : String(value || '')))
        node.classList.toggle('is-placeholder', isPlaceholder)
        if (isPlaceholder) {
          node.style.color = 'var(--text-placeholder)'
          node.style.fontStyle = 'italic'
        } else {
          node.style.color = colorWithOpacity(settings[config.color], settings[config.colorOpacity] ?? 1)
          node.style.fontStyle = ''
        }
      }
    })
    const photo = card.querySelector('.member-card__photo')
    if (photo) {
      photo.style.display = settings.avatarPosition === 'none' ? 'none' : ''
      photo.style.width = `${normalizeAvatarSize(settings.avatarSize)}%`
      photo.style.height = 'auto'
      photo.style.aspectRatio = '1'
      photo.style.borderRadius = `${settings.avatarRadius}%`

      // Keep the avatar aligned with the card content when it sits above the text.
      // Left-positioned avatars are part of the two-column card layout and stay in
      // the first column regardless of the text alignment setting.
      if (settings.avatarPosition === 'left' || settings.cardTextAlign === 'left') {
        photo.style.marginLeft = '0'
        photo.style.marginRight = 'auto'
      } else if (settings.cardTextAlign === 'center') {
        photo.style.marginLeft = 'auto'
        photo.style.marginRight = 'auto'
      } else {
        photo.style.marginLeft = 'auto'
        photo.style.marginRight = '0'
      }
    }
    card.classList.toggle('is-avatar-left', settings.avatarPosition === 'left')
    card.classList.toggle('is-avatar-none', settings.avatarPosition === 'none')
    // Selecting Card or one of its shared fields puts every card into the
    // template-editing state. The selection indicator is drawn outside the
    // card edge and does not change the card's dimensions.
    card.classList.toggle('has-card-selection', state.selected === 'card' && state.activeSectionId === section?.id && !state.selectedMember)
  })
  const avatarSizeLimits = fitCardsToLetterPage()
  avatarSizeLimits.forEach((limit, sectionId) => {
    const constrainedSize = Math.max(0, Math.min(100, limit))
    const section = getSection(sectionId)
    const settings = sectionSettings(section)
    const requestedSize = normalizeAvatarSize(settings.avatarSize)
    const renderedSize = Math.min(requestedSize, constrainedSize)
    document.querySelectorAll('.member-card__photo').forEach(photo => {
      if (photo.closest('.member-card')?.dataset.sectionId !== sectionId) return
      photo.style.width = `${renderedSize}%`
      photo.style.height = 'auto'
      photo.style.aspectRatio = '1'
    })
    if (sectionId === state.activeSectionId) {
      state.avatarSize = renderedSize
      document.querySelectorAll('[data-avatar-range="avatarSize"],[data-avatar-number="avatarSize"]').forEach(control => {
        control.max = 100
        control.value = renderedSize
      })
    }
  })
  syncAvatarRangeStyles()
}

function fitCardsToLetterPage() {
  const limits = new Map()
  document.querySelectorAll('.page-sheet .team-page__content--figma').forEach(page => {
    page.querySelectorAll('.members-grid').forEach(grid => {
      const cards = [...grid.querySelectorAll('.member-card')]
      if (!cards.length) return
      const section = getSection(grid.dataset.sectionId)
      const settings = sectionSettings(section)
      const pageStyle = getComputedStyle(page)
      const availableGridHeight = Math.max(0, page.clientHeight - grid.offsetTop - (parseFloat(pageStyle.paddingBottom) || 0))
      grid.style.height = 'auto'
      grid.style.minHeight = '0'
      grid.style.gridAutoRows = 'auto'
      const rows = Math.ceil(cards.length / Math.max(1, Number(settings.columns) || 1))
      const firstPhoto = cards[0]?.querySelector('.member-card__photo')
      const photoHeight = firstPhoto?.getBoundingClientRect().height || 0
      const nonAvatarGridHeight = Math.max(0, grid.offsetHeight - photoHeight * rows)
      let limit = 200
      if (settings.avatarPosition === 'top' && photoHeight) {
        const allowedAvatarSpace = Math.max(0, availableGridHeight - nonAvatarGridHeight)
        limit = Math.floor((normalizeAvatarSize(settings.avatarSize) * allowedAvatarSpace / (photoHeight * rows)) / 5) * 5
      }
      limits.set(section.id, Math.min(limits.get(section.id) ?? 200, limit))
      cards.forEach(card => {
        card.style.height = 'auto'
        card.style.alignSelf = 'start'
      })
    })
  })
  return limits
}

function captureScrollState() {
  const snapshot = {}
  ;['.properties-scroll', '.members-list', '.canvas-scroll', '.template-preview-sheet'].forEach(selector => {
    snapshot[selector] = [...document.querySelectorAll(selector)].map(element => ({ top: element.scrollTop, left: element.scrollLeft }))
  })
  return snapshot
}

function sectionParentPropertiesMarkup() {
  const section = getSection()
  if (!section) return ''
  const clipboardNote = '<small>Copy this group’s style, then apply it to another group. Names, members, and text stay unchanged.</small>'
  return `${panelHeader('Page › Groups', section.name, 'Group settings')}<div class="properties-scroll">${sectionTitle('Content', `<label class="toggle-row"><span>Show group</span><input type="checkbox" data-section-field="visible" ${section.visible !== false ? 'checked' : ''}><i></i></label>`)}${sectionTitle('Layout', `<label class="property-select"><span>Group layout</span>${propertySelectControl(`<select data-section-field="layout"><option value="stacked" ${section.layout === 'stacked' ? 'selected' : ''}>Content top</option><option value="content-left" ${section.layout === 'content-left' ? 'selected' : ''}>Content left</option><option value="content-right" ${section.layout === 'content-right' ? 'selected' : ''}>Content right</option></select>`)}</label>${verticalAlignmentToggle('Vertical alignment', state.sectionAlignment)}${stepper('Gap', 'sectionGap', state.sectionGap, { min: 0, max: 64 })}`)}${sectionTitle('Reuse group style', `<div class="group-settings-actions">${clipboardNote}<div class="group-settings-actions__buttons"><button class="button button--ghost" type="button" data-copy-group-settings>Copy style</button><button class="button button--ghost" type="button" data-paste-group-settings ${state.groupSettingsClipboard ? '' : 'disabled'}>Apply style</button></div></div>`)}</div>`
}

function sectionContentPropertiesMarkup() {
  const section = getSection()
  if (!section) return ''
  return `${panelHeader(`Page › ${esc(section.name)}`, 'Content', 'Shared heading + description container')}<div class="properties-scroll">${sectionTitle('Container style', `${colorControl('Background', 'sectionContainerBackground', state.sectionContainerBackground, 'sectionContainerBackgroundOpacity', state.sectionContainerBackgroundOpacity)}${stepper('Padding', 'sectionContainerPadding', state.sectionContainerPadding, { min: 0, max: 64 })}${stepper('Corner radius', 'sectionContainerRadius', state.sectionContainerRadius, { min: 0, max: 32 })}${stepper('Gap', 'sectionContentGap', state.sectionContentGap, { min: 0, max: 64 })}`)}</div>`
}

function sectionHeadingPropertiesMarkup() {
  const section = getSection()
  if (!section) return ''
  return `${panelHeader(`Page › ${esc(section.name)} › Content`, 'Heading', 'Group heading')}<div class="properties-scroll">${sectionTitle('Content', `<label class="toggle-row"><span>Show heading</span><input type="checkbox" data-section-field="showHeading" ${section.showHeading ? 'checked' : ''}><i></i></label><label class="compact-content-field"><span>Heading</span><input data-section-field="heading" value="${esc(section.heading)}"></label>`)}${sectionTitle('Styles', `${stepper('Top margin', 'sectionHeadingMarginTop', state.sectionHeadingMarginTop, { min: 0, max: 128 })}${stepper('Bottom margin', 'sectionHeadingMarginBottom', state.sectionHeadingMarginBottom, { min: 0, max: 128 })}${alignmentToggle('Alignment', state.sectionHeadingAlignment, 'data-section-heading-align')}${stepper('Font size', 'sectionHeadingSize', state.sectionHeadingSize, { min: 12, max: 48 })}${colorControl('Text color', 'sectionHeadingColor', state.sectionHeadingColor, 'sectionHeadingColorOpacity', state.sectionHeadingColorOpacity)}${colorControl('Text background', 'sectionHeadingBackground', state.sectionHeadingBackground, 'sectionHeadingBackgroundOpacity', state.sectionHeadingBackgroundOpacity)}${textFormatControl('sectionHeading')}`)}</div>`
}

function sectionDescriptionPropertiesMarkup() {
  const section = getSection()
  if (!section) return ''
  return `${panelHeader(`Page › ${esc(section.name)} › Content`, 'Description', 'Group description')}<div class="properties-scroll">${sectionTitle('Content', `<label class="toggle-row"><span>Show description</span><input type="checkbox" data-section-field="contentVisible" ${section.contentVisible ? 'checked' : ''}><i></i></label><label class="compact-content-field"><span>Description</span><textarea data-section-description="${section.id}" placeholder="Add a description...">${esc(descriptionTextFromHtml(section.contentHtml || ''))}</textarea></label>`)}${sectionTitle('Styles', `${stepper('Top margin', 'sectionContentMarginTop', state.sectionContentMarginTop, { min: 0, max: 128 })}${stepper('Bottom margin', 'sectionContentMarginBottom', state.sectionContentMarginBottom, { min: 0, max: 128 })}${alignmentToggle('Alignment', state.sectionContentAlignment, 'data-section-content-align')}${stepper('Font size', 'sectionContentSize', state.sectionContentSize, { min: 12, max: 48 })}${colorControl('Text color', 'sectionContentColor', state.sectionContentColor, 'sectionContentColorOpacity', state.sectionContentColorOpacity)}${colorControl('Text background', 'sectionContentBackground', state.sectionContentBackground, 'sectionContentBackgroundOpacity', state.sectionContentBackgroundOpacity)}${textFormatControl('sectionContent')}${listStyleControl()}`)}</div>`
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
  if (state.selected === 'section') { panel.innerHTML = sectionParentPropertiesMarkup(); finishPropertiesRender(scrollState); return }
  if (state.sectionChild === 'sectionContent') { panel.innerHTML = sectionContentPropertiesMarkup(); finishPropertiesRender(scrollState); return }
  if (state.sectionChild === 'heading' && state.activeSectionId) { panel.innerHTML = sectionHeadingPropertiesMarkup(); finishPropertiesRender(scrollState); return }
  if (state.sectionChild === 'sectionDescription' && state.activeSectionId) { panel.innerHTML = sectionDescriptionPropertiesMarkup(); finishPropertiesRender(scrollState); return }
  if (state.selected === 'page') { panel.innerHTML = `${panelHeader('Page', 'Page', 'Page settings')}<div class="properties-scroll">${pageSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  if (['heading', 'subhead', 'description'].includes(state.selected)) { panel.innerHTML = `${panelHeader('Page', labelFor(state.selected), 'Text settings')}<div class="properties-scroll">${pageTextSettingsBody(state.selected)}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selected === 'grid') { panel.innerHTML = `${panelHeader('Page › Grid', 'Grid', 'Grid settings')}<div class="properties-scroll">${gridSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selectedField && cardFieldLabels[state.selectedField]) { panel.innerHTML = `${panelHeader('Member card', cardFieldLabels[state.selectedField][0], 'Shared field settings')}<div class="properties-scroll">${cardFieldSettingsBody(state.selectedField)}</div>`; finishPropertiesRender(scrollState); return }
  if (state.selected === 'card') { panel.innerHTML = `${panelHeader('Page › Grid › Card', 'Card', 'Card settings')}<div class="properties-scroll">${cardSettingsBody()}</div>`; finishPropertiesRender(scrollState); return }
  panel.innerHTML = propertiesMarkup()
  finishPropertiesRender(scrollState)
}

function renderTemplate() {
  const scrollState = captureScrollState()
  document.getElementById('template-preview').innerHTML = teamPageMarkup('preview')
  document.getElementById('template-properties').innerHTML = `${panelHeader('Page', 'Page', 'Page settings')}<div class="properties-scroll"><div class="template-source"><span>Team</span><strong>${esc(activeTeam()?.name || '')}</strong><small>${activeTeam()?.groups.length || 0} groups loaded from the selected team</small></div><div class="override-summary ${state.templateOverrides.size ? '' : 'is-clean'}">${state.templateOverrides.size ? `${state.templateOverrides.size} changes from this proposal only <button id="reset-all">Reset all</button>` : 'No proposal-only changes'}</div>${pageSettingsBody({ modal: true })}</div>`
  finishPropertiesRender(scrollState)
}

function normalizeSectionPropertyLabels() {
  document.querySelectorAll('[data-section-field="contentVisible"]').forEach(input => {
    const label = input.closest('.toggle-row')?.querySelector('span')
    if (label) label.textContent = 'Show description'
  })
  document.querySelectorAll('[data-section-field="containerEnabled"]').forEach(input => input.closest('.toggle-row')?.remove())
  document.querySelectorAll('.property-section').forEach(section => {
    const title = section.querySelector('h3')?.textContent.trim()
    if (title === 'Content panel style') section.remove()
    if (title === 'Heading style') {
      section.querySelectorAll('.property-color,.property-stepper').forEach(control => {
        const label = control.querySelector(':scope > span')?.textContent.trim()
        if (label === 'Background' || label === 'Padding' || label === 'Corner radius') control.remove()
      })
    }
  })
}

function finishPropertiesRender(scrollState) {
  refreshLucideIcons()
  normalizeSectionPropertyLabels()
  document.querySelectorAll('[data-field="phone"],[data-field="cell"]').forEach(input => { input.placeholder = '+1 (555) 000-0000' })
  document.querySelectorAll('[data-field="bio"]').forEach(input => { input.placeholder = 'Add a bio...' })
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
  persistBuilderState()
  refreshLucideIcons()
  restoreScrollState(scrollState)
  if (!initialCanvasScrollReset) {
    initialCanvasScrollReset = true
    requestAnimationFrame(() => {
      const canvasScroll = document.querySelector('.canvas-scroll')
      if (!canvasScroll) return
      canvasScroll.scrollTop = 0
      requestAnimationFrame(() => { canvasScroll.scrollTop = 0 })
    })
  }
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
  if (state.settingsScope === 'section' && sectionSettingKeys.includes(key)) persistActiveSectionSettings()
  if (!document.getElementById('template-modal').hidden) state.templateOverrides.add(key)
  persistBuilderState()
}

document.addEventListener('click', event => {
  const savePage = event.target.closest('#save-page-top')
  if (savePage) {
    event.stopImmediatePropagation()
    state.pageDraft = false
    state.teamDraft = false
    persistBuilderState()
    showSaveSnackbar()
    return
  }
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
  const applySuggestion = event.target.closest('[data-apply-layout-suggestion]')
  if (applySuggestion) {
    event.stopImmediatePropagation()
    applyLayoutRecommendation()
    render()
    return
  }
  const copyGroupSettings = event.target.closest('[data-copy-group-settings]')
  if (copyGroupSettings) {
    event.stopImmediatePropagation()
    copyActiveGroupSettings()
    render()
    return
  }
  const pasteGroupSettings = event.target.closest('[data-paste-group-settings]')
  if (pasteGroupSettings) {
    event.stopImmediatePropagation()
    pasteGroupSettingsToActive()
    render()
    return
  }
  closeCustomSelects()
  const closeColorPicker = event.target.closest('[data-close-color-picker]')
  if (closeColorPicker) {
    event.stopImmediatePropagation()
    state.openColorPicker = null
    if (!document.getElementById('template-modal').hidden) renderTemplate()
    else renderProperties()
    return
  }
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
  const eyedropper = event.target.closest('[data-eyedropper]')
  if (eyedropper) {
    event.stopImmediatePropagation()
    if (window.EyeDropper) {
      new window.EyeDropper().open().then(result => updateColorValue(eyedropper.dataset.eyedropper, result.sRGBHex)).catch(() => {})
    } else {
      eyedropper.parentElement?.querySelector(`[data-eyedropper-fallback="${eyedropper.dataset.eyedropper}"]`)?.click()
    }
    return
  }
  const colorTrack = event.target.closest('.color-picker__track')
  if (colorTrack) {
    event.stopImmediatePropagation()
    updateColorFromTrack(colorTrack, event.clientX)
    return
  }
  const colorPlane = event.target.closest('[data-color-plane]')
  if (colorPlane) {
    event.stopImmediatePropagation()
    updateColorFromPlane(colorPlane, event.clientX, event.clientY)
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
  const sectionHeadingAlign = event.target.closest('[data-section-heading-align]')
  if (sectionHeadingAlign) { event.stopImmediatePropagation(); state.sectionHeadingAlignment = sectionHeadingAlign.dataset.sectionHeadingAlign; recordPageChange('sectionHeadingAlignment'); render(); return }
  const sectionContentAlign = event.target.closest('[data-section-content-align]')
  if (sectionContentAlign) { event.stopImmediatePropagation(); state.sectionContentAlignment = sectionContentAlign.dataset.sectionContentAlign; recordPageChange('sectionContentAlignment'); render(); return }
  const descriptionListStyleButton = event.target.closest('[data-section-content-list-style]')
  if (descriptionListStyleButton) {
    event.stopImmediatePropagation()
    const section = getSection()
    const textarea = document.querySelector(`[data-section-description="${section?.id}"]`)
    if (!section || !textarea) return
    const result = toggleDescriptionListStyle(textarea.value, textarea.selectionStart, textarea.selectionEnd, descriptionListStyleButton.dataset.sectionContentListStyle)
    textarea.value = result.value
    textarea.focus()
    textarea.setSelectionRange(result.selectionStart, result.selectionEnd)
    section.contentHtml = descriptionHtmlFromText(result.value)
    state.teamDraft = true
    persistBuilderState()
    document.querySelectorAll(`.team-section[data-section-id="${section.id}"] .team-section__content-panel`).forEach(panel => { panel.innerHTML = sanitizeRichText(section.contentHtml, { trimTrailingEmptyBlocks: true }) })
    const formattedLines = result.value.slice(result.selectionStart, result.selectionEnd).split('\n').filter(line => line.trim())
    const activeStyle = formattedLines.length && formattedLines.every(line => /^\s*(?:•|-)\s+/.test(line)) ? 'bulleted' : formattedLines.length && formattedLines.every(line => /^\s*\d+[.)]\s+/.test(line)) ? 'numbered' : 'none'
    document.querySelectorAll('#properties-panel [data-section-content-list-style]').forEach(button => {
      const active = button.dataset.sectionContentListStyle === activeStyle
      button.classList.toggle('is-active', active)
      button.setAttribute('aria-pressed', String(active))
    })
    if (typeof applyBuilderSettings === 'function') applyBuilderSettings()
    return
  }
  const gridAlign = event.target.closest('[data-grid-align]')
  if (gridAlign) { event.stopImmediatePropagation(); state.gridAlignment = gridAlign.dataset.gridAlign; recordPageChange('gridAlignment'); render(); return }
  const sectionAlign = event.target.closest('[data-section-align]')
  if (sectionAlign) { event.stopImmediatePropagation(); state.sectionAlignment = sectionAlign.dataset.sectionAlign; recordPageChange('sectionAlignment'); render(); return }
  const cardAlign = event.target.closest('[data-card-align]')
  if (cardAlign) { event.stopImmediatePropagation(); state.cardTextAlign = cardAlign.dataset.cardAlign; recordPageChange('cardTextAlign'); render(); return }
  const cardVerticalAlign = event.target.closest('[data-card-vertical-align]')
  if (cardVerticalAlign) { event.stopImmediatePropagation(); state.cardVerticalAlignment = cardVerticalAlign.dataset.cardVerticalAlign; recordPageChange('cardVerticalAlignment'); render(); return }
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

// Numeric property fields are replacement inputs: selecting the existing
// value on focus lets users type a new value without manually clearing it.
document.addEventListener('focusin', event => {
  const input = event.target.closest('input[type="number"][data-number-input], input[type="number"][data-avatar-number], input[type="number"][data-color-opacity-field]')
  if (!input) return
  requestAnimationFrame(() => input.select())
})

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

function hexToHsl(hex) {
  const value = hex.replace('#', '')
  const [r, g, b] = (value.length === 3 ? value.split('').map(char => parseInt(char + char, 16)) : [value.slice(0, 2), value.slice(2, 4), value.slice(4, 6)].map(part => parseInt(part, 16))).map(channel => channel / 255)
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min
  let h = 0
  const l = (max + min) / 2
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
  if (delta) h = max === r ? 60 * (((g - b) / delta) % 6) : max === g ? 60 * ((b - r) / delta + 2) : 60 * ((r - g) / delta + 4)
  if (h < 0) h += 360
  return { h, s: s * 100, l: l * 100 }
}

function pickerHueFor(key, value) {
  const hsv = hexToHsv(value)
  if (hsv.s > 0.001) return hsv.h
  return Number(state.colorPickerHues?.[key] ?? 0)
}

function hslToHex({ h, s, l }) {
  const hue = ((Number(h) % 360) + 360) % 360
  const saturation = Math.max(0, Math.min(100, Number(s))) / 100
  const lightness = Math.max(0, Math.min(100, Number(l))) / 100
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const x = chroma * (1 - Math.abs((hue / 60) % 2 - 1))
  const match = lightness - chroma / 2
  const [r, g, b] = hue < 60 ? [chroma, x, 0] : hue < 120 ? [x, chroma, 0] : hue < 180 ? [0, chroma, x] : hue < 240 ? [0, x, chroma] : hue < 300 ? [x, 0, chroma] : [chroma, 0, x]
  return '#' + [r, g, b].map(channel => Math.round((channel + match) * 255).toString(16).padStart(2, '0')).join('')
}

function hsvToHex({ h, s, v }) {
  const saturation = s / 100, value = v / 100, chroma = value * saturation, x = chroma * (1 - Math.abs((h / 60) % 2 - 1)), match = value - chroma
  const [r, g, b] = h < 60 ? [chroma, x, 0] : h < 120 ? [x, chroma, 0] : h < 180 ? [0, chroma, x] : h < 240 ? [0, x, chroma] : h < 300 ? [x, 0, chroma] : [chroma, 0, x]
  return '#' + [r, g, b].map(channel => Math.round((channel + match) * 255).toString(16).padStart(2, '0')).join('')
}

let activeColorPlane = null
let activeColorTrack = null
let colorApplyFrame = 0

function scheduleColorBuilderApply() {
  if (colorApplyFrame) return
  colorApplyFrame = requestAnimationFrame(() => {
    colorApplyFrame = 0
    applyBuilderSettings()
  })
}

function updateColorFromPlane(plane, clientX, clientY) {
  const rect = plane.getBoundingClientRect()
  if (!rect.width || !rect.height) return
  const key = plane.dataset.colorPlane
  const hsv = hexToHsv(state[key])
  hsv.h = pickerHueFor(key, state[key])
  hsv.s = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
  hsv.v = Math.max(0, Math.min(100, 100 - ((clientY - rect.top) / rect.height) * 100))
  updateColorValue(key, hsvToHex(hsv))
}

function updateColorFromTrack(track, clientX) {
  const rect = track.getBoundingClientRect()
  const input = track.querySelector('input')
  if (!input || !rect.width) return
  const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
  if (input.dataset.colorHue) {
    const key = input.dataset.colorHue
    const hsv = hexToHsv(state[key])
    hsv.h = percent * 360
    state.colorPickerHues[key] = hsv.h
    if (hsv.s > 0.001) updateColorValue(key, hsvToHex(hsv))
    else {
      updateColorPickerVisuals(key)
      scheduleColorBuilderApply()
    }
    return
  }
  if (input.dataset.colorAlpha) {
    const value = Math.round(percent * 100)
    input.value = value
    state[input.dataset.colorAlpha] = value / 100
    recordPageChange(input.dataset.colorAlpha)
    updateColorPickerVisuals(input.dataset.colorKey)
    scheduleColorBuilderApply()
  }
}

function updateColorValue(key, value) {
  state[key] = value
  recordPageChange(key)
  updateColorPickerVisuals(key)
  scheduleColorBuilderApply()
}

function updateColorPickerVisuals(key) {
  const picker = document.querySelector(`[data-color-picker="${key}"]`)
  const value = state[key]
  if (!picker || !value) return
  const hsv = hexToHsv(value)
  hsv.h = pickerHueFor(key, value)
  const hsl = hexToHsl(value)
  const plane = picker.querySelector('[data-color-plane]')
  if (plane) {
    plane.style.setProperty('--picker-hue', hsv.h)
    plane.querySelector('i').style.left = `${hsv.s}%`
    plane.querySelector('i').style.top = `${100 - hsv.v}%`
    plane.setAttribute('aria-valuetext', `${Math.round(hsl.s)}% saturation, ${Math.round(hsl.l)}% lightness`)
  }
  const hueInput = picker.querySelector('[data-color-hue]')
  const hueTrack = hueInput?.closest('.color-picker__track')
  if (hueInput) hueInput.value = Math.round(hsv.h)
  if (hueTrack) {
    hueTrack.style.setProperty('--picker-position', `${(hsv.h / 360) * 100}%`)
    hueTrack.querySelector('.color-picker__range-thumb')?.style.setProperty('--thumb-color', hsvToHex({ h: hsv.h, s: 100, v: 100 }))
  }
  const alphaInput = picker.querySelector('[data-color-alpha]')
  const alphaTrack = alphaInput?.closest('.color-picker__track')
  const opacity = alphaInput ? Number(alphaInput.value) / 100 : 1
  if (alphaTrack) {
    alphaTrack.style.setProperty('--picker-position', `${opacity * 100}%`)
    alphaTrack.style.setProperty('--picker-alpha-color', colorWithOpacity(value, 1))
    alphaTrack.querySelector('.color-picker__range-thumb')?.style.setProperty('--thumb-color', colorWithOpacity(value, 1))
  }
  picker.querySelectorAll('[data-color-hsl-key]').forEach(input => {
    const part = input.dataset.colorHslPart
    input.value = Math.round(hsl[part])
  })
  const opacityField = picker.querySelector('[data-color-opacity-field]')
  if (opacityField && alphaInput) opacityField.value = Math.round(alphaInput.value)
  const hexField = picker.querySelector('[data-color-hex]')
  if (hexField && document.activeElement !== hexField) hexField.value = value.replace('#', '').toUpperCase()
  const trigger = document.querySelector(`[data-open-color="${key}"]`)
  if (trigger) {
    trigger.querySelector('i')?.style.setProperty('--swatch-color', colorWithOpacity(value, opacity))
    const code = trigger.querySelector('code')
    if (code) code.textContent = value.toUpperCase()
    const opacityLabel = trigger.querySelector('small')
    if (opacityLabel && alphaInput) opacityLabel.textContent = `${Math.round(alphaInput.value)}%`
  }
}

document.addEventListener('pointerdown', event => {
  const plane = event.target.closest('[data-color-plane]')
  const track = event.target.closest('.color-picker__track')
  if (!plane && !track) return
  if (plane) {
    activeColorPlane = plane
    plane.setPointerCapture?.(event.pointerId)
    updateColorFromPlane(plane, event.clientX, event.clientY)
  } else {
    activeColorTrack = track
    track.setPointerCapture?.(event.pointerId)
    updateColorFromTrack(track, event.clientX)
  }
}, true)

document.addEventListener('pointermove', event => {
  if (!activeColorPlane && !activeColorTrack) return
  event.preventDefault()
  if (activeColorPlane) updateColorFromPlane(activeColorPlane, event.clientX, event.clientY)
  if (activeColorTrack) updateColorFromTrack(activeColorTrack, event.clientX)
}, true)

function stopColorPlaneDrag(event) {
  if (!activeColorPlane && !activeColorTrack) return
  activeColorPlane?.releasePointerCapture?.(event.pointerId)
  activeColorTrack?.releasePointerCapture?.(event.pointerId)
  activeColorPlane = null
  activeColorTrack = null
}

document.addEventListener('pointerup', stopColorPlaneDrag, true)
document.addEventListener('pointercancel', stopColorPlaneDrag, true)

document.addEventListener('input', event => {
  const alpha = event.target.closest('[data-color-alpha]')
  if (alpha) {
    event.stopImmediatePropagation()
    state[alpha.dataset.colorAlpha] = Number(alpha.value) / 100
    recordPageChange(alpha.dataset.colorAlpha)
    updateColorPickerVisuals(alpha.dataset.colorKey)
    scheduleColorBuilderApply()
    return
  }
  const hue = event.target.closest('[data-color-hue]')
  if (hue) {
    event.stopImmediatePropagation()
    const hsv = hexToHsv(state[hue.dataset.colorHue])
    hsv.h = pickerHueFor(hue.dataset.colorHue, state[hue.dataset.colorHue])
    hsv.h = Number(hue.value)
    state.colorPickerHues[hue.dataset.colorHue] = hsv.h
    if (hsv.s > 0.001) updateColorValue(hue.dataset.colorHue, hsvToHex(hsv))
    else {
      updateColorPickerVisuals(hue.dataset.colorHue)
      scheduleColorBuilderApply()
    }
    return
  }
  const hslField = event.target.closest('[data-color-hsl-key]')
  if (hslField) {
    event.stopImmediatePropagation()
    const key = hslField.dataset.colorHslKey
    const hsl = hexToHsl(state[key])
    const part = hslField.dataset.colorHslPart
    hsl[part] = Number(hslField.value) || 0
    hsl.h = Math.max(0, Math.min(360, hsl.h))
    hsl.s = Math.max(0, Math.min(100, hsl.s))
    hsl.l = Math.max(0, Math.min(100, hsl.l))
    updateColorValue(key, hslToHex(hsl))
    return
  }
  const opacityField = event.target.closest('[data-color-opacity-field]')
  if (opacityField) {
    event.stopImmediatePropagation()
    const value = Math.max(0, Math.min(100, Number(opacityField.value) || 0))
    state[opacityField.dataset.colorOpacityField] = value / 100
    recordPageChange(opacityField.dataset.colorOpacityField)
    updateColorPickerVisuals(opacityField.dataset.colorKey)
    scheduleColorBuilderApply()
    return
  }
  const hex = event.target.closest('[data-color-hex]')
  if (hex) {
    event.stopImmediatePropagation()
    const value = hex.value.trim().replace(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i, '#$1')
    if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) updateColorValue(hex.dataset.colorHex, value)
  }
}, true)

document.addEventListener('change', event => {
  const eyedropperFallback = event.target.closest('[data-eyedropper-fallback]')
  if (eyedropperFallback) {
    event.stopImmediatePropagation()
    updateColorValue(eyedropperFallback.dataset.eyedropperFallback, eyedropperFallback.value)
    return
  }
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
  if (alpha || event.target.closest('[data-color-hue]') || event.target.closest('[data-color-hsl-key]') || event.target.closest('[data-color-opacity-field]')) { event.stopImmediatePropagation(); return }
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
  const field = event.target.closest('#structure-list [data-field-order]')
  if (!field) return
  state.draggedCardField = field.dataset.fieldOrder
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('text/plain', state.draggedCardField)
  field.classList.add('is-dragging')
})

document.addEventListener('dragover', event => {
  const field = event.target.closest('#structure-list [data-field-order]')
  if (!field || !state.draggedCardField || field.dataset.fieldOrder === state.draggedCardField) return
  event.preventDefault()
  event.dataTransfer.dropEffect = 'move'
  document.querySelectorAll('#structure-list [data-field-order].is-drop-target').forEach(node => node.classList.remove('is-drop-target'))
  field.classList.add('is-drop-target')
})

document.addEventListener('drop', event => {
  const field = event.target.closest('#structure-list [data-field-order]')
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
  document.querySelectorAll('#structure-list [data-field-order].is-dragging,#structure-list [data-field-order].is-drop-target').forEach(node => node.classList.remove('is-dragging', 'is-drop-target'))
})

restoreBuilderState()
applyLayoutRecommendation({ automatic: true })
render()
