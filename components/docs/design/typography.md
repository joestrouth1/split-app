Text styles can be chosen from the theme by passing a `variant` to the `sx` prop.

## Title

The primary heading on a page.

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

A brief introduction to the page/section.

```jsx
<h2
  sx={{
    variant: 'type.subtitle',
  }}
>
  Save time and secure your account by uploading a picture of your ID.
</h2>
```

## Body

Used for most text in the app. Can be any length.

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

Represents the name of a form field.

```jsx
<p sx={{ variant: 'type.label' }}>First name</p>
```

## Hint

Helps users understand how to complete a form field by appearing below it. May represent validation errors if shown in red.

```jsx
<p sx={{ variant: 'type.hint' }}>Uppercase and lowercase letters (e.g. Aa)</p>
```

## Disclaimer

Fine print and legal text.

```jsx
<p sx={{ variant: 'type.disclaimer' }}>
  Legalese:
  <br />
  By clicking the ‘View my options’ button and continuing with the application
  process, you are providing Express Written Consent under the Fair Credit
  Reporting Act for FancyCredit, LLC, to obtain your consumer credit report from
  your credit profile or other information from contract Credit Bureau(s)
  associated with your prequalification for credit inquiry. FancyCredit may also
  analyze your credit report data with patterns and/or affiliates to ensure you
  are being matched to products or services which are best suited to someone in
  your situation.
</p>
```
