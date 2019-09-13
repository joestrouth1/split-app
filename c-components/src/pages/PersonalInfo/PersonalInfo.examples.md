```jsx
<PersonalInfo
  onSubmit={e => {
    e.preventDefault()
    alert(JSON.stringify(e.target))
  }}
/>
```
