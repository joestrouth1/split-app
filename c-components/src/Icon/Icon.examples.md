All icons:

```jsx
<div sx={{ overflow: 'hidden' }}>
  <div
    sx={{ m: 3, '& > svg': { m: 3 }, display: 'flex', flexFlow: 'row wrap' }}
  >
    <Icon alt="Date" name="calendar" />
    <Icon alt="Photo, picture" name="camera" />
    <Icon alt="Drivers license" name="car" />
    <Icon alt="Valid or approved" name="check" />
    <Icon alt="Text message or comments" name="comments" />
    <Icon alt="Enlarge, expand" name="expand" />
    <Icon alt="Reveal password, view" name="eye" />
    <Icon alt="Hide password" name="eye-slash" />
    <Icon alt="Mail or email" name="envelope" />
    <Icon alt="Negative review/feedback" name="frown" />
    <Icon alt="Goverment ID card" name="id" />
    <Icon alt="Input or manual entry" name="keyboard" />
    <Icon alt="FYI, info alert, idea, general notice" name="lightbulb" />
    <Icon alt="Link (account) or link (navigation)" name="link" />
    <Icon alt="Security, privacy" name="lock" />
    <Icon alt="Mediocre review/feedback" name="meh" />
    <Icon alt="Menu" name="menu" />
    <Icon alt="Passport" name="passport" />
    <Icon alt="Print" name="print" />
    <Icon alt="Hint, FAQ, help" name="question" />
    <Icon alt="Save" name="save" />
    <Icon alt="Positive review/feedback" name="smile" />
    <Icon alt="Invalid or close" name="times" />
    <Icon alt="Delete, destructive action" name="trash" />
  </div>
</div>
```

`fill` values can pull from the theme, as well as regular CSS colors and keywords

```jsx
<div>
  <Icon alt="Valid or approved" name="check" fill="primary" />

  {/* theme.colors.red, not CSS red */}
  <Icon alt="Invalid or close" name="times" fill="red" />

  {/* not in theme, fallback to CSS */}
  <Icon alt="Valid or approved" name="check" fill="salmon" />
</div>
```
