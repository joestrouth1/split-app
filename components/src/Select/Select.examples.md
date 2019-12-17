With label only:

```jsx
<Select label="Natural selection">
  <option value="">OK option</option>
  <option value="">Better option</option>
  <option value="">Best option</option>
</Select>
```

With string hint:

```jsx
<Select label="Natural selection" hint="Choose wisely.">
  <option value="">OK option</option>
  <option value="">Better option</option>
  <option value="">Best option</option>
</Select>
```

With custom hint content:

```jsx
<Select
  label="Natural selection"
  hint={
    <ul sx={{ listStyle: 'circle', p: 0, m: 0 }}>
      <li>Choices</li>
      <li>Choices</li>
      <li>Choices</li>
    </ul>
  }
>
  <option value="">OK option</option>
  <option value="">Better option</option>
  <option value="">Best option</option>
</Select>
```

With string error:

```jsx
<Select label="Natural selection" error="Whoops, wrong one.">
  <option value="">OK option</option>
  <option value="">Better option</option>
  <option value="">Best option</option>
</Select>
```
