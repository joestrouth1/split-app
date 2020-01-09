/**@jsx jsx */
import { jsx, Container, Main } from 'theme-ui'
import { Card, Icon, Button } from 'components'
import { DefaultLayout as Layout } from '../components/layouts'
import { SEO } from '../components/seo'
import { useState, useEffect, HTMLAttributes, Fragment } from 'react'
import { navigate } from 'gatsby'

interface LoanDocument {
  id: string
  title: string
  url: string
  agreed: boolean
}

/**
 * TODO: get loan docs from API
 */
const mockDocuments: LoanDocument[] = [
  {
    id: 'tila',
    title: 'Loan Agreement',
    url: 'https://placekitten.com/2550/6600',
    agreed: false,
  },
  {
    id: 'olpa',
    title: 'Optional Loan Payment Authorization',
    url: 'https://placekitten.com/2550/3300',
    agreed: false,
  },
]

interface LoanDocumentCardProps extends HTMLAttributes<HTMLDivElement> {
  doc: LoanDocument
}
const LoanDocumentCard = ({ doc, ...props }: LoanDocumentCardProps) => {
  return (
    <Card
      variant="default"
      {...props}
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        pt: 3,
        pb: 2,
        mb: 3,
      }}
    >
      {/* Card title */}
      <p
        sx={{
          variant: 'type.body',
          textTransform: 'uppercase',
          textAlign: 'center',
          mb: 2,
        }}
      >
        {doc.title}
      </p>
      {/* Doc window */}
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
          maxWidth: `100%`,
          maxHeight: 344,
          overflowY: 'auto',
          mx: 'auto',
        }}
      >
        <img
          src={doc.url}
          alt={doc.title}
          sx={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      {/* Actions */}
      <div
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
        }}
      >
        <Button
          variant="base"
          sx={{
            bg: 'transparent',
            p: 2,
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            flex: `1 0 auto`,
          }}
        >
          <Icon name="expand" alt="" width={16} height={16} sx={{ mr: 2 }} />
          <span sx={{ variant: 'type.body' }}>Expand</span>
        </Button>
        <Button
          variant="base"
          sx={{
            bg: 'transparent',
            p: 2,
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            flex: `1 0 auto`,
          }}
        >
          <Icon name="print" alt="" width={16} height={16} sx={{ mr: 2 }} />
          <span sx={{ variant: 'type.body' }}>Print</span>
        </Button>
        <Button
          variant="base"
          sx={{
            bg: 'transparent',
            p: 2,
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            flex: `1 0 auto`,
          }}
        >
          <Icon name="save" alt="" width={16} height={16} sx={{ mr: 2 }} />
          <span sx={{ variant: 'type.body' }}>Save</span>
        </Button>
      </div>
    </Card>
  )
}

/**
 * Read and sign loan docs (Agreement, OLPA, etc)
 */
const SignDocsPage = () => {
  const [documents, setDocuments] = useState<LoanDocument[]>([...mockDocuments])
  const currentDocument = documents.find(doc => !doc.agreed)
  const agreeToDocument = (id: string) => {
    const updatedDocuments = documents.map(doc => {
      if (doc.id === id) {
        return { ...doc, agreed: true }
      } else {
        return doc
      }
    })
    setDocuments(updatedDocuments)
  }
  useEffect(() => {
    if (!currentDocument && documents.every(doc => doc.agreed)) {
      navigate('/final-signature')
    }
  }, [currentDocument, documents])
  return (
    <Layout>
      <SEO title="Sign loan documents" />
      <Main>
        <Container
          sx={{
            px: 3,
            pt: 3,
            pb: 4,
            maxWidth: theme => theme.breakpoints[0],
            display: 'flex',
            flexFlow: 'column nowrap',
          }}
        >
          <header>
            <h1 sx={{ variant: 'type.title', mb: 3 }}>
              Read and sign your loan documents
            </h1>
          </header>
          {currentDocument && (
            <Fragment>
              <LoanDocumentCard doc={currentDocument} sx={{ mb: 3 }} />
              <Button onClick={() => agreeToDocument(currentDocument.id)}>
                Agree
              </Button>
            </Fragment>
          )}
        </Container>
      </Main>
    </Layout>
  )
}

export default SignDocsPage
