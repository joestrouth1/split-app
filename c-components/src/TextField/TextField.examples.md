### Usage notes

`TextField` accepts all the attributes of an HTML input. Most of them are forwarded to the input.

Styles applied using the `sx` prop will be applied to the component as a whole.

### Examples

With string hint:

```jsx
<TextField
  label="Social Security Number"
  name="ssn"
  hint="123-45-6789"
  type="text"
  defaultValue="486-12-7592"
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

;<TextField
  label="Email address"
  name="email"
  hint={Hint}
  type="email"
  sx={{ width: '100%' }}
/>
```

Automatically wrapping `PasswordField` if `type="password"`:

```jsx
<TextField
  label="Password"
  name="password"
  type="password"
  sx={{ width: '100%' }}
  show={false}
  hint="mAkE iT sEcUrE"
/>
```

```jsx
import { useState, useEffect, useRef } from 'react'
// toggles `show` every second
function PasswordExample() {
  const timer = useRef()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    timer.current = window.setInterval(() => {
      setIsOpen(isOpen => !isOpen)
    }, 1000)
    return () => window.clearInterval(timer.current)
  }, [])

  return (
    <TextField
      label="Password"
      name="password"
      type="password"
      sx={{ width: '100%' }}
      show={isOpen}
      hint="mAkE iT sEcUrE"
    />
  )
}
;<PasswordExample />
```
