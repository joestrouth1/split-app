import React from 'react'

const mockFile = {
  file: {
    publicURL: 'http://localhost/images/nice-image.jpeg2k',
  },
}

const { PureIllustration } = jest.requireActual('../illustration')
export const Illustration = () => <PureIllustration data={mockFile} />
