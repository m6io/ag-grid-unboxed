type PlaceholderFormat = 'svg' | 'png' | 'jpeg' | 'gif' | 'webp' | 'avif'

interface PlaceholderOptions {
  width: number
  height?: number
  bgColor?: string
  textColor?: string
  format?: PlaceholderFormat
  retina?: 2 | 3
  text?: string
  font?: string
}

export function createPlaceholderUrl(opts: PlaceholderOptions): string {
  const {
    width,
    height,
    bgColor,
    textColor,
    format = 'svg',
    retina,
    text,
    font,
  } = opts

  if (width < 10 || width > 4000) {
    throw new Error('Width must be between 10 and 4000.')
  }
  if (height !== undefined && (height < 10 || height > 4000)) {
    throw new Error('Height must be between 10 and 4000.')
  }

  if ((bgColor && !textColor) || (!bgColor && textColor)) {
    throw new Error('Both bgColor and textColor must be specified together.')
  }

  if (retina && format === 'svg') {
    throw new Error('Retina (@2x/@3x) images are not supported for SVG format.')
  }

  const stripHash = (s: string) => (s.startsWith('#') ? s.slice(1) : s)

  let sizeSeg = `${width}${height ? `x${height}` : ''}`
  if (retina) {
    sizeSeg += `@${retina}x`
  }

  const segments = [sizeSeg]

  if (bgColor && textColor) {
    segments.push(stripHash(bgColor), stripHash(textColor))
  }

  if (format !== 'svg') {
    segments.push(format)
  }

  let url = `https://placehold.co/${segments.join('/')}`

  const params: string[] = []
  if (text !== undefined) {
    const escText = text.split('\n').join('\\n').split(' ').join('+')
    params.push(`text=${escText}`)
  }
  if (font !== undefined) {
    params.push(`font=${encodeURIComponent(font)}`)
  }
  if (params.length) {
    url += `?${params.join('&')}`
  }

  return url
}
