Text styles can be chosen from the theme by passing a `variant` to the `sx` prop.

## Title

```jsx
<h1
  sx={{
    variant: 'type.title',
  }}
>
  Scan your ID card
</h1>
```

## Subtitle

```jsx
<h2
  sx={{
    variant: 'type.subtitle',
  }}
>
  Save time and secure your account by uploading a picture of your ID.
</h2>
```

## Paragraph

```jsx
<p
  sx={{
    variant: 'type.body',
  }}
>
  We'll use your card to fill out some of the application for you, as well as to
  protect against fraud.
</p>
```

## Label

```jsx
<p sx={{ variant: 'type.label' }}>First name</p>
```

## Hint

```jsx
<p sx={{ variant: 'type.hint' }}>Uppercase and lowercase letters (e.g. Aa)</p>
```

## Disclaimer

```jsx
<p sx={{ variant: 'type.disclaimer' }}>
  Legalese:
  <br />
  By clicking the ‘Check my rates’ button and continuing with the application
  process, you are providing Express Written Consent under the Fair Credit
  Reporting Act for FancyCredit, LLC, to obtain your consumer credit report from
  your credit profile or other information from contract Credit Bureau(s)
  associated with your prequalification for credit inquiry. FancyCredit may also
  analyze your credit report data with parterns and/or affiliates to ensure you
  are being matched to products or services which are best suited to someone in
  your situation.
</p>
```
