```jsx
import { RadioGroup } from 'components'
;<RadioGroup name="example" onChange={() => false}>
  <RadioOption value="first">First option</RadioOption>
</RadioGroup>
```

```jsx
import { RadioGroup } from 'components'
;<RadioGroup name="example" onChange={() => false}>
  <RadioOption
    value="first"
    sx={{
      mr: 2,
    }}
  >
    First option
  </RadioOption>
  <RadioOption value="second">Second option</RadioOption>
</RadioGroup>
```
