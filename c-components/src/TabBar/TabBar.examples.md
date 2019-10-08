```jsx
import { Icon } from 'c-components'

function TabBarItem({ icon, href, children }) {
  return (
    <a
      href={href}
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        variant: 'type.hint',
        textDecoration: 'none',
        textAlign: 'center',
        px: 1,
      }}
    >
      <Icon name={icon} alt="" width={24} height={24} sx={{ mb: 1 }} />
      {children}
    </a>
  )
}
;<TabBar>
  <TabBarItem icon="frown" href="/">
    Awful
  </TabBarItem>
  <TabBarItem icon="meh" href="/">
    Bad
  </TabBarItem>
  <TabBarItem icon="meh" href="/">
    Decent
  </TabBarItem>
  <TabBarItem icon="meh" href="/">
    Solid
  </TabBarItem>
  <TabBarItem icon="smile" href="/">
    Groovy
  </TabBarItem>
</TabBar>
```
