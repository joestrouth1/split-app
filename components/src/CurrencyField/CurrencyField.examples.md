```jsx
const hint = `The total amount you make per year before taxes. Include tips, bonuses, and any other income you’d like to be considered for this loan.`
;<CurrencyField label="Individual annual income" hint={hint} />
```

```jsx
import { useState } from 'react'
const hint = `The total amount you make per year before taxes. Include tips, bonuses, and any other income you’d like to be considered for this loan.`
function Example() {
  const [income, setIncome] = useState('')

  return (
    <>
      <CurrencyField
        label="Individual annual income"
        hint={hint}
        onChange={setIncome}
      />
      Value: {income}
    </>
  )
}
;<Example />
```
