/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment, forwardRef, SVGAttributes } from 'react'
import { FillProperty } from 'csstype'

type IconName =
  | 'calendar'
  | 'camera'
  | 'car'
  | 'check'
  | 'comments'
  | 'envelope'
  | 'expand'
  | 'eye'
  | 'frown'
  | 'id'
  | 'keyboard'
  | 'lightbulb'
  | 'link'
  | 'lock'
  | 'meh'
  | 'menu'
  | 'passport'
  | 'print'
  | 'question'
  | 'save'
  | 'smile'
  | 'times'
  | 'trash'

type PathProps = SVGAttributes<SVGPathElement>

const Calendar = (props: PathProps) => (
  <path
    d="M9 4v1H5v22h22V5h-4V4h-2v1H11V4H9zM7 7h2v1h2V7h10v1h2V7h2v2H7V7zm0 4h18v14H7V11zm6 2v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 17v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 21v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
    {...props}
  />
)
const Camera = (props: PathProps) => (
  <path
    d="M11.5 6l-.31.4L10 8H9V7H5v1H3v18h26V8h-7l-1.19-1.6-.31-.4h-9zm1 2h7l1.19 1.6.31.4h6v4h-5.81A6.02 6.02 0 0 0 16 11a6.02 6.02 0 0 0-5.19 3H5v-4h6l.31-.4L12.5 8zM23 11v2h2v-2h-2zm-7 2c2.22 0 4 1.78 4 4 0 2.22-1.78 4-4 4-2.22 0-4-1.78-4-4 0-2.22 1.78-4 4-4zM5 16h5.1a6.02 6.02 0 0 0 5.9 7 6.02 6.02 0 0 0 5.9-7H27v8H5v-8z"
    {...props}
  />
)

const Car = (props: PathProps) => (
  <path
    d="M9.5 6a3 3 0 0 0-2.88 2.13l-1.37 4.59-1.94-.66-.62 1.88 1.97.65-.63 2.13A1 1 0 0 0 4 17v7a1 1 0 0 0 0 .1v.9a1 1 0 0 0 1 1h3l.34-1h15.32l.34 1h3a1 1 0 0 0 1-1v-.84a1 1 0 0 0 0-.16v-7a1 1 0 0 0-.03-.28l-.63-2.13 1.97-.65-.62-1.88-1.94.66-1.38-4.6A3 3 0 0 0 22.5 6h-13zm0 2h13c.45 0 .84.3.97.72L24.75 13H7.25l1.28-4.28c.13-.43.52-.72.97-.72zm-2.84 7h18.68l.66 2.19V23H6v-5.81L6.66 15zm1.84 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm15 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 19l-1.25 3h2.16l.43-1h5.32l.43 1h2.16L20 19h-8z"
    {...props}
  />
)

const Check = (props: PathProps) => (
  <path
    d="M28.28 6.28L11 23.56l-7.28-7.28-1.44 1.44 8 8 .72.69.72-.7 18-18-1.44-1.43z"
    {...props}
  />
)

const Comments = (props: PathProps) => (
  <path
    d="M2 5v16h4v5.1l1.63-1.32L12.34 21H22V5H2zm2 2h16v12h-8.34l-.29.22L8 21.9V19H4V7zm20 2v2h4v12h-4v2.9L20.34 23h-7.5l-2.5 2h9.32L26 30.1V25h4V9h-6z"
    {...props}
  />
)

const Envelope = (props: PathProps) => (
  <path
    d="M3 8v18h26V8H3zm4.31 2H24.7L16 15.78 7.31 10zM5 10.88l10.44 6.96.56.35.56-.35L27 10.88V24H5V10.87z"
    {...props}
  />
)

const Expand = (props: PathProps) => (
  <path
    d="M14 5v2h9.56L7 23.56V14H5v13h13v-2H8.44L25 8.44V18h2V5H14z"
    {...props}
  />
)

const Eye = (props: PathProps) => (
  <path
    d="M16 8C7.66 8 1.25 15.34 1.25 15.34l-.6.66.6.66s5.85 6.66 13.63 7.28a8.88 8.88 0 0 0 2.24 0c7.78-.62 13.63-7.28 13.63-7.28l.6-.66-.6-.66S24.34 8 16 8zm0 2c2.2 0 4.23.6 6 1.4a7 7 0 0 1-5.22 10.56h-.06c-.24.02-.48.04-.72.04l-.78-.03a7 7 0 0 1-5.25-10.53h-.03A14.52 14.52 0 0 1 16 10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-8.75.94a8.93 8.93 0 0 0 1.13 6.84A23.1 23.1 0 0 1 3.53 16c.48-.5 1.82-1.8 3.72-3.06zm17.5 0A24.06 24.06 0 0 1 28.47 16a23.1 23.1 0 0 1-4.84 3.78 8.94 8.94 0 0 0 1.12-6.84z"
    {...props}
  />
)

const Frown = (props: PathProps) => (
  <path
    d="M16 4C9.38 4 4 9.38 4 16s5.38 12 12 12 12-5.38 12-12S22.62 4 16 4zm0 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S6 21.53 6 16 10.47 6 16 6zm-4.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM16 18a7.98 7.98 0 0 0-6.47 3.34l1.63 1.16a5.94 5.94 0 0 1 9.68 0l1.63-1.16A7.98 7.98 0 0 0 16 18z"
    {...props}
  />
)

const IdCard = (props: PathProps) => {
  return (
    <path
      d="M29.33 3.11H2.67A2.67 2.67 0 0 0 0 5.78v19.55C0 26.81 1.2 28 2.67 28h26.66c1.48 0 2.67-1.2 2.67-2.67V5.78c0-1.47-1.2-2.67-2.67-2.67zM30 26H17v-2c0-1.77-1.94-3-4-3-.6 0-1.05.5-2.5.5C9 21.5 8.63 21 8 21c-2.06 0-4 1.32-4 3.09V26H2V8h28v18zM20 14h7v-2h-7v2zm-9.5 5c1.96 0 3.5-1.54 3.5-3.5S12.46 12 10.5 12A3.46 3.46 0 0 0 7 15.5c0 1.96 1.54 3.5 3.5 3.5zM20 16h7v2h-7v-2zM20 20h7v2h-7v-2z"
      {...props}
    />
  )
}

const Keyboard = (props: PathProps) => (
  <path
    d="M3 7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H3zm0 2h26v14H3V9zm2 2v2h2v-2H5zm4 0v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM5 15v2h4v-2H5zm6 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h4v-2h-4zM5 19v2h4v-2H5zm6 0v2h10v-2H11zm12 0v2h4v-2h-4z"
    {...props}
  />
)

const Lightbulb = (props: PathProps) => (
  <path
    d="M6.81 2.4l-1.4 1.41 2.09 2.1L8.9 4.5 6.82 2.4zm18.38 0l-2.1 2.1 1.41 1.4 2.1-2.09-1.41-1.4zM16 3.04c-.33 0-.66.02-1 .06h-.03a9.08 9.08 0 0 0-7.85 7.79c-.44 3.24.9 6.2 3.13 8.09A5.24 5.24 0 0 1 12 22v6H14.28a1.98 1.98 0 0 0 3.44 0H20v-4h.1v-1.19c0-1.46.76-2.94 2-4.1A9.58 9.58 0 0 0 25 12a8.99 8.99 0 0 0-9-8.97zm0 2c3.86-.05 7 3.1 7 6.97 0 2.1-.97 3.94-2.31 5.28l.03.03A7.79 7.79 0 0 0 18.28 22h-4.37a7.1 7.1 0 0 0-2.35-4.56 6.94 6.94 0 0 1-2.47-6.32A7.07 7.07 0 0 1 16 5.04zM2 12v2h3v-2H2zm25 0v2h3v-2h-3zM7.5 20.1l-2.1 2.09 1.41 1.4 2.1-2.09-1.41-1.4zm17 0l-1.4 1.4 2.09 2.1 1.4-1.41-2.09-2.1zM14 24h4v2h-4v-2z"
    {...props}
  />
)

const Link = (props: PathProps) => (
  <path
    d="M21.75 4c-1.67 0-3.26.66-4.44 1.84l-1.47 1.47a6.26 6.26 0 0 0-1.4 6.72l1.62-1.62c-.2-1.3.2-2.7 1.19-3.7l1.47-1.46a4.27 4.27 0 0 1 6.03 6.03l-1.47 1.47a4.28 4.28 0 0 1-3.69 1.19l-1.62 1.62a6.25 6.25 0 0 0 6.72-1.4l1.47-1.47A6.26 6.26 0 0 0 21.75 4zm-2.47 7.28l-8 8 1.44 1.44 8-8-1.44-1.44zM11.75 14c-1.67 0-3.26.66-4.44 1.84l-1.47 1.47a6.26 6.26 0 1 0 8.85 8.85l1.47-1.47a6.26 6.26 0 0 0 1.4-6.72l-1.62 1.62c.2 1.3-.2 2.7-1.19 3.7l-1.47 1.46a4.27 4.27 0 0 1-6.03-6.03l1.47-1.47a4.28 4.28 0 0 1 3.69-1.19l1.62-1.62a6.16 6.16 0 0 0-2.28-.44z"
    {...props}
  />
)

const Lock = (props: PathProps) => (
  <path
    d="M16 3c-3.85 0-7 3.15-7 7v3H6v16h20V13h-3v-3c0-3.85-3.15-7-7-7zm0 2a5 5 0 0 1 5 5v3H11v-3a5 5 0 0 1 5-5zM8 15h16v12H8V15z"
    {...props}
  />
)

const Meh = (props: PathProps) => (
  <path
    d="M16 4C9.38 4 4 9.38 4 16s5.38 12 12 12 12-5.38 12-12S22.62 4 16 4zm0 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S6 21.53 6 16 10.47 6 16 6zm-4.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 20v2h10v-2H11z"
    {...props}
  />
)

const Menu = (props: PathProps) => (
  <path
    d="M26.82 18H5.18C4 18 4 17.18 4 16c0-1.18 0-2 1.18-2H26.8c1.18 0 1.18.82 1.18 2 0 1.18 0 2-1.18 2h.02zm0-8H5.18C4 10 4 9.18 4 8c0-1.18 0-2 1.18-2H26.8c1.18 0 1.18.82 1.18 2 0 1.18 0 2-1.18 2h.02zM5.18 22H26.8c1.18 0 1.18.82 1.18 2 0 1.18 0 2-1.18 2H5.18C4 26 4 25.18 4 24c0-1.18 0-2 1.18-2z"
    {...props}
  />
)

const Passport = (props: PathProps) => (
  <path
    fillRule="evenodd"
    d="M6 2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zM2 4a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V4zm6 9a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm2.1-1h2.44c.1-1.69.41-3.2.9-4.4-1.74.83-3 2.45-3.34 4.4zm0 2a6 6 0 0 0 3.33 4.4c-.48-1.2-.8-2.71-.89-4.4H10.1zm5.9 4.92c.48-.47 1.3-2.15 1.46-4.92h-2.93c.17 2.77.99 4.45 1.47 4.92zM14.54 12h2.93c-.17-2.77-.99-4.45-1.47-4.92-.48.47-1.3 2.15-1.46 4.92zm4.03 6.4c1.73-.83 3-2.45 3.33-4.4h-2.44c-.1 1.69-.41 3.2-.9 4.4zm0-10.8c.48 1.2.8 2.71.89 4.4h2.44a5.99 5.99 0 0 0-3.33-4.4zM8 26a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1 1 1 0 0 0-1-1H9a1 1 0 0 0-1 1z"
    {...props}
  />
)

const Print = (props: PathProps) => (
  <path
    d="M9 4v7H7c-1.64 0-3 1.36-3 3v10h5v4h14v-4h5V14c0-1.64-1.36-3-3-3h-2V4H9zm2 2h10v5H11V6zm-4 7h18c.57 0 1 .43 1 1v8h-3v-4H9v4H6v-8c0-.57.43-1 1-1zm1 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 6h10v6H11v-6z"
    {...props}
  />
)

const Question = (props: PathProps) => (
  <path
    d="M16 4C9.38 4 4 9.38 4 16s5.38 12 12 12 12-5.38 12-12S22.62 4 16 4zm0 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S6 21.53 6 16 10.47 6 16 6zm0 4c-2.2 0-4 1.8-4 4h2c0-1.12.88-2 2-2s2 .88 2 2c0 .77-.5 1.45-1.22 1.69l-.4.12a2.02 2.02 0 0 0-1.38 1.9V19h2v-1.28l.4-.13A3.8 3.8 0 0 0 20 14c0-2.2-1.8-4-4-4zm-1 10v2h2v-2h-2z"
    {...props}
  />
)

const Save = (props: PathProps) => (
  <path
    d="M5 5v22h22V9.6l-.28-.32-4-4L22.4 5H5zm2 2h3v6h12V7.44l3 3V25h-2v-9H9v9H7V7zm5 0h4v2h2V7h2v4h-8V7zm-1 11h10v7H11v-7z"
    {...props}
  />
)

const Smile = (props: PathProps) => (
  <path
    d="M16 4C9.38 4 4 9.38 4 16s5.38 12 12 12 12-5.38 12-12S22.62 4 16 4zm0 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S6 21.53 6 16 10.47 6 16 6zm-4.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.69 7L9.1 20a7.98 7.98 0 0 0 13.82 0l-1.72-1a5.98 5.98 0 0 1-10.38 0z"
    {...props}
  />
)

const Times = (props: PathProps) => (
  <path
    d="M7.22 5.78L5.78 7.22 14.56 16l-8.78 8.78 1.44 1.44L16 17.44l8.78 8.78 1.44-1.44L17.44 16l8.78-8.78-1.44-1.44L16 14.56 7.22 5.78z"
    {...props}
  />
)

const Trash = (props: PathProps) => (
  <path
    d="M15 4c-.52 0-1.06.19-1.44.56-.37.38-.56.92-.56 1.44v1H7v2h1v16c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3V9h1V7h-6V6c0-.52-.19-1.06-.56-1.44A2.04 2.04 0 0 0 19 4h-4zm0 2h4v1h-4V6zm-5 3h14v16a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V9zm2 3v11h2V12h-2zm4 0v11h2V12h-2zm4 0v11h2V12h-2z"
    {...props}
  />
)

interface IconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Text to show assistive technologies.
   * **Not** an actual `alt` attribute, because we don't render an `img`, but it serves the same role.
   */
  alt: string
  /** Which Icon to show */
  name: IconName
  /** Icon fill color */
  fill?: FillProperty
}

export type IconRef = SVGSVGElement

/**
 * Versatile and accessible icon component.
 */
export const Icon = forwardRef<IconRef, IconProps>(
  (
    {
      name,
      alt,
      width = 32,
      height = 32,
      viewBox = '0 0 32 32',
      fill = 'grays.7',
      ...rest
    },
    ref
  ) => {
    let path
    const pathStyles = { fill }
    switch (name) {
      case 'calendar':
        path = <Calendar sx={pathStyles} />
        break
      case 'camera':
        path = <Camera sx={pathStyles} />
        break
      case 'car':
        path = <Car sx={pathStyles} />
        break
      case 'check':
        path = <Check sx={pathStyles} />
        break
      case 'comments':
        path = <Comments sx={pathStyles} />
        break
      case 'envelope':
        path = <Envelope sx={pathStyles} />
        break
      case 'expand':
        path = <Expand sx={pathStyles} />
        break
      case 'eye':
        path = <Eye sx={pathStyles} />
        break
      case 'frown':
        path = <Frown sx={pathStyles} />
        break
      case 'id':
        path = <IdCard sx={pathStyles} />
        break
      case 'keyboard':
        path = <Keyboard sx={pathStyles} />
        break
      case 'lightbulb':
        path = <Lightbulb sx={pathStyles} />
        break
      case 'link':
        path = <Link sx={pathStyles} />
        break
      case 'lock':
        path = <Lock sx={pathStyles} />
        break
      case 'meh':
        path = <Meh sx={pathStyles} />
        break
      case 'menu':
        path = <Menu sx={pathStyles} />
        break
      case 'passport':
        path = <Passport sx={pathStyles} />
        break
      case 'print':
        path = <Print sx={pathStyles} />
        break
      case 'question':
        path = <Question sx={pathStyles} />
        break
      case 'save':
        path = <Save sx={pathStyles} />
        break
      case 'smile':
        path = <Smile sx={pathStyles} />
        break
      case 'times':
        path = <Times sx={pathStyles} />
        break
      case 'trash':
        path = <Trash sx={pathStyles} />
        break
      default:
        path = null
    }

    return (
      <Fragment>
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={viewBox}
          focusable="false"
          role="img"
          aria-hidden={alt ? 'false' : 'true'}
          {...rest}
        >
          {path}
        </svg>
        <span sx={{ variant: 'visuallyhidden' }}>{alt}</span>
      </Fragment>
    )
  }
)

Icon.displayName = 'Icon'
