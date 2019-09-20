```jsx
<Checkbox>Please check this box</Checkbox>
<Checkbox defaultChecked>
  This one is checked by default
</Checkbox>
<Checkbox
  defaultChecked
  onChange={(e) => alert(e.target.checked)}
>
  This one tells you when you change it
</Checkbox>
```
