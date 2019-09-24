/**@jsx jsx */
import { jsx, Main, Container } from 'theme-ui'
import { DefaultLayout as Layout } from '../../components/layouts'
import { SEO } from '../../components/seo'

export const TcpaModal = () => (
  <div
    sx={{
      bg: 'grays.1',
      maxHeight: '100%',
      px: 3,
      py: 4,
    }}
  >
    <article>
      <h1 sx={{ variant: 'type.title', flex: 1, wordBreak: 'break-word' }}>
        Telecommunications Consent and Privacy Agreement
      </h1>
      {/*
      TODO: Replace with actual policy
      src: https://www.lawinsider.com/clause/tcpa-consent-privacy
      */}
      <p>
        Notwithstanding any current or prior election to opt in or opt out of
        receiving telemarketing calls or SMS messages (including text messages)
        from us, our agents, representatives, affiliates, or anyone calling on
        our behalf, you expressly consent to be contacted by us, our agents,
        representatives, affiliates, or anyone calling on our behalf for any and
        all purposes arising out of or relating to your loan and/or account, at
        any telephone number, or physical or electronic address you provide or
        at which you may be reached. You agree we may contact you in any way,
        including SMS messages (including text messages), calls using
        prerecorded messages or artificial voice, and calls and messages
        delivered using auto telephone dialing system or an automatic texting
        system. Automated messages may be played when the telephone is answered,
        whether by you or someone else. In the event that an agent or
        representative calls, he or she may also leave a message on your
        answering machine, voice mail, or send one via text.You consent to
        receive SMS messages (including text messages), calls and messages
        (including prerecorded and artificial voice and autodialed) from us, our
        agents, representatives, affiliates or anyone calling on our behalf at
        the specific number(s) you have provided to us, or numbers we can
        reasonably associate with your account (through skip trace, caller ID
        capture or other means), with information or questions about your
        application, loan and/or account. You certify, warrant and represent
        that the telephone numbers that you have provided to us are your contact
        numbers. You represent that you are permitted to receive calls at each
        of the telephone numbers you have provided to us. You agree to promptly
        alert us whenever you stop using a particular telephone number.Your
        cellular or mobile telephone provider will charge you according to the
        type of plan you carry. You also agree that we may contact you by
        e-mail, using any email address you have provided to us or that you
        provide to us in the future. We may listen to and/or record phone calls
        between you and our representatives without notice to you as permitted
        by applicable law. For example, we listen to and record calls for
        quality monitoring purposes.
      </p>
    </article>
  </div>
)

const TcpaPage = () => (
  <Layout>
    <SEO title="Telecommunications Consent Agreement" />
    <Main>
      <Container sx={{ px: 3, py: 4, maxWidth: theme => theme.breakpoints[0] }}>
        <TcpaModal />
      </Container>
    </Main>
  </Layout>
)

export default TcpaPage
