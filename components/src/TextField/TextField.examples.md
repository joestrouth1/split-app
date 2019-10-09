### Usage notes

`TextField` accepts all the attributes of an HTML input. Most of them are forwarded to the input.

CSS classes will be applied to the component as a whole.

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
import { Link, Icon } from 'components'

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

With error, with icon:

```jsx
<TextField label="Name of your first pet" defaultValue="Roscoe" />
<TextField
  label="Mother's maiden name"
  hint="Her first last name"
  error="Please fill out this field"
/>
<TextField
  label="Favorite happy hour beverage"
  defaultValue="Milk"
  error="Enter a different beverage"
/>
<TextField
  label="Preferred biome"
  hint="Cold biomes only"
  defaultValue="Tundra"
/>
```

Automatically wrapping `PasswordField` if `type="password"`:

```jsx
<TextField
  label="Password"
  name="password"
  type="password"
  sx={{ width: '100%' }}
  hint="mAkE iT sEcUrE"
/>
```
