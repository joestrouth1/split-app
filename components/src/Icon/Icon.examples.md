All icons:

```jsx
const IconWithName = props => (
  <div
    sx={{
      display: 'inline-flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
    }}
  >
    <Icon {...props} />
    <span sx={{ variant: 'type.hint', textAlign: 'center' }}>{props.name}</span>
  </div>
)
;<div
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(4rem, 1fr))',
    gridGap: 3,
  }}
>
  <IconWithName alt="Date" name="calendar" />
  <IconWithName alt="Photo, picture" name="camera" />
  <IconWithName alt="Drivers license" name="car" />
  <IconWithName alt="Valid or approved" name="check" />
  <IconWithName alt="Text message or comments" name="comments" />
  <IconWithName alt="Enlarge, expand" name="expand" />
  <IconWithName alt="Reveal password, view" name="eye" />
  <IconWithName alt="Hide password" name="eye-slash" />
  <IconWithName alt="Mail or email" name="envelope" />
  <IconWithName alt="Warning, error" name="exclamation-circle" />
  <IconWithName alt="Negative review/feedback" name="frown" />
  <IconWithName alt="Home, start screen" name="home" />
  <IconWithName alt="Goverment ID card" name="id" />
  <IconWithName alt="Authentication" name="key" />
  <IconWithName alt="Input or manual entry" name="keyboard" />
  <IconWithName alt="FYI, info alert, idea, general notice" name="lightbulb" />
  <IconWithName alt="Link (account) or link (navigation)" name="link" />
  <IconWithName alt="Security, privacy" name="lock" />
  <IconWithName alt="Mediocre review/feedback" name="meh" />
  <IconWithName alt="Menu" name="menu" />
  <IconWithName alt="Passport" name="passport" />
  <IconWithName alt="Print" name="print" />
  <IconWithName alt="Hint, FAQ, help" name="question" />
  <IconWithName alt="Save" name="save" />
  <IconWithName alt="Sign in" name="sign-in" />
  <IconWithName alt="Sign up" name="sign-up" />
  <IconWithName alt="Positive review/feedback" name="smile" />
  <IconWithName alt="Invalid or close" name="times" />
  <IconWithName alt="Delete, destructive action" name="trash" />
  <IconWithName alt="Warning, error" name="warning" />
</div>
```

`fill` values will pull from the theme first, falling back to regular CSS colors and keywords.

Shown below: theme values `primary` & `red`, plus `rgba(220, 80, 160, 0.8)` (not in the theme)

```jsx
<div sx={{ display: 'flex', justifyContent: 'space-around' }}>
  <Icon alt="Valid or approved" name="check" fill="primary" />

  {/* theme.colors.red, not CSS red */}
  <Icon alt="Invalid or close" name="times" fill="red" />

  {/* not in theme, fallback to CSS */}
  <Icon alt="Valid or approved" name="meh" fill="rgba(220, 80, 160, 0.8)" />
</div>
```
