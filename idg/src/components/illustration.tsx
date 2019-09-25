/**@jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { forwardRef, ReactNode, HTMLAttributes } from 'react'

interface IllustrationProps extends HTMLAttributes<HTMLDivElement> {
  /** Content to overlay on the image for now */
  children?: ReactNode
}

type PureIllustrationProps = IllustrationProps & { data: ImageQueryResult }

interface ImageQueryResult {
  file: {
    publicURL: string
  }
}

const imageQuery = graphql`
  query {
    file(relativePath: { eq: "illustration_progress.svg" }) {
      publicURL
    }
  }
`

export type IllustrationRef = HTMLDivElement

export const Illustration = forwardRef<IllustrationRef, IllustrationProps>(
  (props, ref) => {
    const data: ImageQueryResult = useStaticQuery(imageQuery)

    return <PureIllustration {...props} data={data} ref={ref} />
  }
)

export const PureIllustration = forwardRef<
  IllustrationRef,
  PureIllustrationProps
>(
  (
    {
      children = (
        <p sx={{ variant: 'type.subtitle', fontWeight: 'bold' }}>
          Illustration
        </p>
      ),
      ...props
    },
    ref
  ) => {
    const {
      file: { publicURL },
    }: ImageQueryResult = useStaticQuery(imageQuery)

    return (
      <div
        ref={ref}
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        {...props}
      >
        <div
          sx={{
            filter: 'blur(12px)',
            backgroundImage: `url(${publicURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <div sx={{ zIndex: 1, textAlign: 'center' }}>{children}</div>
      </div>
    )
  }
)

Illustration.displayName = 'Illustration'
PureIllustration.displayName = 'PureIllustration'
