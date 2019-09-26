### Usage notes

`TextInput` accepts all the attributes of an HTML input. Most of them are forwarded to the input.

CSS classes will be applied to the component as a whole.

### Examples

With string hint:

```jsx
<TextInput
  label="Social Security Number"
  name="ssn"
  hint="123-45-6789"
  type="text"
  sx={{ width: '100%' }}
/>
```

With custom hint content (for validation hints, etc):

```jsx
import { Link, Icon } from 'c-components'

const Hint = (
  <div sx={{ display: 'flex' }}>
    <Icon
      name="lock"
      alt=""
      fill="grays.7"
      sx={{ mr: 1 }}
      width={16}
      height={16}
    />
    <span sx={{ flex: 1 }}>
      We take your privacy seriously.
      <Link href="/privacy-policy">Our policy</Link>
    </span>
  </div>
)

;<TextInput
  label="Email address"
  name="email"
  hint={Hint}
  type="email"
  sx={{ width: '100%' }}
/>
```

Automatically wrapping `PasswordField` if `type="password"`:

```jsx
<TextInput
  label="Password"
  name="password"
  type="password"
  sx={{ width: '100%' }}
  hint="mAkE iT sEcUrE"
/>
```
