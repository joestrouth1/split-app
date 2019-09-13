/**@jsx jsx */
import { jsx, Flex } from 'theme-ui'

/**
 * Where applicants give us their bank acct. info
 * @visibleName Link account
 */
export const LinkAccount = () => {
  return (
    <Flex as="main" sx={{ flexFlow: 'column nowrap', px: 3, py: 4 }}>
      <header>
        <h1 sx={{ variant: 'type.title', mb: 3 }}>Link your bank account</h1>
        <p sx={{ variant: 'type.subtitle', mb: 3 }}>
          Accepting a loan from us means we'll send your money to your bank
          account.
        </p>
      </header>

      <p
        sx={{
          variant: 'type.body',
          mb: 3,
        }}
      >
        Simply sign in with your online banking credentials (fastest option) or
        enter your routing and account numbers manually.
      </p>

      <Flex
        as="form"
        sx={{
          flexFlow: 'column nowrap',
        }}
      >
        {/* TODO: replace these with radio Cards */}
        <pre>Radio button Card group</pre>
      </Flex>
    </Flex>
  )
}
