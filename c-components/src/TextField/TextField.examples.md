### Usage notes

`TextField` accepts the same props as an HTML input. Most of them are passed on.

`sx` **is not** passed on to the `input`. It's given to the wrapping element instead, so you can size & layout the entire component as a unit.

### Examples

With string hint:

```jsx
<TextField
  label="Social Security Number"
  name="ssn"
  hint="123-45-6789"
  type="text"
  value="486-12-7592"
  sx={{ width: '100%' }}
/>
```

With custom hint content (for validation hints, etc):

```jsx
import { Link } from 'c-components'

const Hint = (
  <div sx={{ display: 'flex' }}>
    <img src="https://placebear.com/16/16" alt="" sx={{ mr: 1 }} />
    <span sx={{ flex: 1 }}>
      We take your privacy seriously.
      <Link href="/privacy-policy">Our policy</Link>
    </span>
  </div>
)

;<TextField
  label="Email address"
  name="email"
  hint={Hint}
  type="email"
  sx={{ width: '100%' }}
/>
```
