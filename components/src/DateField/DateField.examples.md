```jsx
<DateField
  onChange={value => console.log(value)}
  label="Date of birth"
  hint="MM/DD/YYYY"
/>
```

```jsx
import { useRef, useState, useEffect } from 'react'
function Example() {
  const ref = useRef(null)
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  useEffect(() => {
    if (ref.current && value) {
      const validity = ref.current.checkValidity()
      console.log(validity)
      setIsValid(validity)
    }
  }, [ref.current, value])

  return (
    <>
      <DateField value={value} onChange={setValue} ref={ref} />
      <p>{isValid ? 'Valid' : 'Invalid'}</p>
    </>
  )
}
;<Example />
```
