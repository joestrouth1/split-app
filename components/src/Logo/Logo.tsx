/**@jsx jsx */
import { jsx } from 'theme-ui'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface LogoProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  /** URL of logo image */
  src?: string
  /** Alternative text for image, e.g. 'Company Name' */
  alt: string
}

/**
 * The company logo.
 */
export const Logo = ({
  src = 'https://placekitten.com/434/80',
  alt,
  ...props
}: LogoProps) => <img {...props} alt={alt} src={src} />
