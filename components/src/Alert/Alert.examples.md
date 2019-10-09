Positive and negative alerts:

```jsx
import { Flex } from 'theme-ui'
import { Icon } from 'components'
;<Flex sx={{ flexFlow: 'column nowrap', '& > * + *': { mt: 3 } }}>
  <Alert variant="positive">
    <Icon
      name="lightbulb"
      alt=""
      fill="greens.6"
      sx={{ mr: 2 }}
      width={16}
      height={16}
    />
    <span>Good news!</span>
  </Alert>
  <Alert variant="negative">
    <Icon
      name="times"
      alt=""
      fill="red"
      sx={{ mr: 2 }}
      width={16}
      height={16}
    />
    <span>Bad news!</span>
  </Alert>
</Flex>
```
