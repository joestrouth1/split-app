```jsx
import { RadioOption } from 'components'
;<RadioGroup
  label="Nice field"
  name="apply-now"
  value="initial"
  onChange={() => console.log('test')}
  sx={{ flexFlow: 'column nowrap' }}
>
  <RadioOption value="first">First option</RadioOption>
</RadioGroup>
```

```jsx
import { RadioOption, RadioGroup } from 'components'
import React from 'react'
const Example = () => {
  const [value, setValue] = React.useState('first')

  return (
    <RadioGroup
      name="Example"
      value={value}
      onChange={e => setValue(e.target.value)}
      label="Make a choice"
      sx={{
        flexFlow: 'row nowrap',
      }}
    >
      <RadioOption value="first" sx={{ mr: 2 }}>
        First option
      </RadioOption>
      <RadioOption value="second">Second option</RadioOption>
    </RadioGroup>
  )
}
;<Example />
```
