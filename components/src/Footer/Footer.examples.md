Default content:

```jsx
<Footer />
```

Custom content arrangement:

```jsx
<Footer sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
  <Footer.Copyright sx={{ color: 'primary', fontSize: 3 }} />
  <Footer.Contact
    sx={{ backgroundColor: 'primary', color: 'grays.1', px: 3, py: 2, mb: 2 }}
  />
  <button sx={{ variant: 'buttons.outline', mb: 3 }}>Click me</button>
  <Footer.Disclaimers />
</Footer>
```
