/**@jsx jsx */
import { jsx } from 'theme-ui'
import { SVGAttributes, Fragment } from 'react'
import { FillProperty } from 'csstype'

interface WordmarkProps extends Omit<SVGAttributes<SVGSVGElement>, 'height'> {
  /**
   * Text to show assistive technologies.
   * **Not** an actual `alt` attribute, because we don't render an `img`, but it serves the same role.
   */
  alt: string
  width?: number
  /** Icon fill color */
  fill?: FillProperty
}
export const Wordmark = ({
  width = 113,
  fill = 'grays.9',
  alt,
  ...props
}: WordmarkProps) => {
  const height = width / 2.825
  return (
    <Fragment>
      <svg
        width={width}
        height={height}
        viewBox="0 0 109 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M.242.094H8.65v23.875H.243V.094zm11 7.968h1.204c2.562 0 4.52.792 5.875 2.376 1.24 1.447 1.859 3.354 1.859 5.718 0 2.407-.682 4.302-2.047 5.688C16.717 23.28 14.69 24 12.055 24h-.813V8.062zm22.62 4.438c0-2.958 1.911-4.438 5.734-4.438h2.188v7.97h-7.922V12.5zM22.924 8.062h8.688V24h-8.688V8.062zm32.455 0h8.625V24h-.984c-2.708 0-4.656-.474-5.844-1.422-1.198-.958-1.797-2.541-1.797-4.75V8.063zM44.1 16.22c0-1.146.15-2.209.452-3.188.302-.99.771-1.854 1.407-2.594 1.375-1.583 3.343-2.374 5.906-2.374h1.203V24h-.813c-2.625 0-4.656-.719-6.093-2.156-1.375-1.375-2.063-3.25-2.063-5.625zm33.634-8.157h1.406c3.833 0 6.12 1.303 6.86 3.907.25.844.374 1.818.374 2.922V24h-8.64V8.062zm-11.266 0h8.687V24h-8.687V8.062zM100.414.079h8.328V24h-8.328V.078zm-11.578 16.14c0-1.145.15-2.208.453-3.187.302-.99.77-1.854 1.406-2.594 1.375-1.583 3.344-2.374 5.906-2.374h1.203V24h-.812c-2.625 0-4.656-.719-6.094-2.156-1.375-1.375-2.062-3.25-2.062-5.625z"
          sx={{ fill: fill }}
        />
      </svg>
      <span sx={{ variant: 'visuallyhidden' }}>{alt}</span>
    </Fragment>
  )
}
