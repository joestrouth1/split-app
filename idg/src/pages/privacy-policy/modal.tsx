/**@jsx jsx */
import { jsx } from 'theme-ui'

const PrivacyPolicyModal = () => (
  <div
    sx={{
      bg: 'grays.1',
      maxHeight: '100%',
      px: 3,
      py: 4,
    }}
  >
    <article>
      <h1 sx={{ variant: 'type.title', flex: 1 }}>Privacy Policy</h1>
      <p sx={{ variant: 'type.subtitle' }}>What?</p>
      <p>
        We collect information from a variety of sources, including information
        provided by you, information we collect when you visit our website,
        transaction information, and information we collect about you from third
        party sources. This information may include:
      </p>
      <ul>
        <li>Social Security Number</li>
        <li>Account Balances, Employment Information and Income</li>
        <li>Credit History and Scores</li>
        <li>Name</li>
        <li>Physical Mailing Address, including Zip Code</li>
        <li>Email Address</li>
        <li>Telephone Number(s)</li>
        <li>Mobile Number(s)</li>
        <li>IP Address</li>
        <li>Geo-Location Data</li>
      </ul>
    </article>
  </div>
)

export default PrivacyPolicyModal
