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

With error, with icon:

```jsx
import { Alert, Icon } from 'c-components'
;<>
  <TextField label="Name of your first pet" defaultValue="Roscoe" />
  <TextField
    label="Mother's maiden name"
    hint="Her first last name"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Icon
          name="exclamation-circle"
          alt="Error: "
          sx={{ mr: 1, flexShrink: 0 }}
          width={16}
          height={16}
          fill="red"
        />
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          This field cannot be empty
        </span>
      </div>
    }
  />
  <TextField
    label="Mother's maiden name"
    hint="Her first last name"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Icon
          name="warning"
          alt="Error: "
          sx={{ mr: 1, flexShrink: 0 }}
          width={16}
          height={16}
          fill="red"
        />
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          This field cannot be empty
        </span>
      </div>
    }
  />
  <TextField
    label="Invalid input"
    sx={{ width: '100%' }}
    hint="Hint text"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Icon
          name="exclamation-circle"
          alt="Error: "
          sx={{ mr: 1, flexShrink: 0 }}
          width={16}
          height={16}
          fill="red"
        />
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          Houston, we have a problem. Houston, we have a problem. Houston, we
          have a problem. Houston, we have a problem. Houston, we have a
          problem.
        </span>
      </div>
    }
  />
  <TextField
    label="Invalid input"
    hint="Hint text"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <Icon
          name="warning"
          alt="Error: "
          sx={{ mr: 1, flexShrink: 0 }}
          width={16}
          height={16}
          fill="red"
        />
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          Houston, we have a problem. Houston, we have a problem. Houston, we
          have a problem. Houston, we have a problem. Houston, we have a
          problem.
        </span>
      </div>
    }
  />
</>
```

With error, no icon:

```jsx
import { Alert, Icon } from 'c-components'
;<>
  <TextField label="Name of your first pet" defaultValue="Roscoe" />
  <TextField
    label="Mother's maiden name"
    hint="Her first last name"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          This field cannot be empty
        </span>
      </div>
    }
  />
  <TextField
    label="Invalid input"
    hint="Hint text"
    error={
      <div sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <span sx={{ variant: 'type.hint', color: 'red' }}>
          Houston, we have a problem. Houston, we have a problem. Houston, we
          have a problem. Houston, we have a problem. Houston, we have a
          problem.
        </span>
      </div>
    }
  />
</>
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
