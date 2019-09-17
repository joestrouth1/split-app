```jsx
import { Flex } from 'theme-ui'
import { Icon, Link } from 'c-components'
;<Flex sx={{ flexFlow: 'column nowrap' }}>
  <Card variant="radio" sx={{ mb: 3 }}>
    Nice card!
  </Card>

  <Card
    variant="radio"
    sx={{
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      flex: 1,
      mb: 3,
    }}
  >
    <Icon name="comments" alt="" fill="primary" />
    <span sx={{ variant: 'type.subtitle', color: 'grays.9' }}>
      Recommended option
    </span>
  </Card>

  <Flex sx={{ '& > * + *': { ml: 3 } }}>
    <Link
      sx={{ flex: 1, textDecoration: 'none' }}
      href="#/UI%20Components?id=card"
    >
      <Card
        variant="radio"
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Icon name="comments" alt="" fill="greens.3" />
        <span sx={{ variant: 'type.body', color: 'grays.9' }}>Text me</span>
      </Card>
    </Link>
    <Link
      sx={{ flex: 1, textDecoration: 'none' }}
      href="#/UI%20Components?id=card"
    >
      <Card
        variant="radio"
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          alignItems: 'center',
          maxWidth: '100%',
        }}
      >
        <Icon name="envelope" alt="" fill="greens.3" />
        <span sx={{ variant: 'type.body', color: 'grays.9' }}>Email me</span>
      </Card>
    </Link>
  </Flex>
</Flex>
```
