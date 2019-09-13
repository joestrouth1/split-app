/**@jsx jsx */
import { jsx } from 'theme-ui'

/**
 * Where customers setup 2-factor authentication.
 * @visibleName 2FA enrollment
 */
export const SecureAccount = () => {
  return (
    <main>
      <header sx={{ px: 3, pt: 4 }}>
        <h1 sx={{ variant: 'type.title', mb: 4 }}>Secure your account</h1>
      </header>
      <img
        src="https://placebear.com/343/200"
        alt=""
        sx={{
          maxWidth: '100%',
          height: 'auto',
          mx: 'auto',
          mb: 4,
        }}
      />
      <div sx={{ px: 3, pb: 4 }}>
        <p sx={{ variant: 'type.body' }}>
          To keep your account extra safe, we recommend two-factor
          authentication.
        </p>

        <p sx={{ variant: 'type.body' }}>
          Whenever someone tries to access your account, we'll send you a
          notification with a secret code. You'll need to enter it to log in.
        </p>

        <p sx={{ variant: 'type.body' }}>How would you like to be notified?</p>

        <form sx={{ mb: 3 }}>
          {/* TODO: replace these with actual radio cards */}
          <pre>Radio group as Cards</pre>
        </form>
      </div>
    </main>
  )
}
