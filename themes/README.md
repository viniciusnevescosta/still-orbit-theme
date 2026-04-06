## Index

- [CSS](#css)
- [Tailwind](#tailwind)
- [JSON](#json)

## CSS

Use this file when you want Still Orbit as plain CSS custom properties.

### 1. Add the file to your project

Place `still-orbit.css` somewhere inside your styles folder, or keep it in `/themes` and import it from there.

### 2. Import it into your stylesheet

```css
@import "./themes/still-orbit.css";
```

### 3. Set the theme variant on the page root

For the light variant:

```html
<html data-theme="still-orbit-mist">
```

For the dark variant:

```html
<html data-theme="still-orbit-night">
```

You can also use a `.dark` class for the dark mode if your project already follows that pattern.

```html
<html class="dark">
```

### 4. Use the semantic tokens in your components

Example:

```css
.card {
  background: var(--so-bg-elevated);
  color: var(--so-text);
  border: 1px solid var(--so-border);
  box-shadow: 0 10px 30px var(--so-shadow-color);
}

.card h2 {
  color: var(--so-heading);
}

.card a {
  color: var(--so-link);
}

.card a:hover {
  color: var(--so-link-hover);
}
```

## Tailwind

Use this file when your project is based on Tailwind v4 and you want the theme through `@theme`.

### 1. Import Tailwind first

```css
@import "tailwindcss";
```

### 2. Import the Still Orbit Tailwind theme file

```css
@import "./themes/still-orbit-tailwind.css";
```

### 3. Use the exported tokens in your project

The file exposes raw palette tokens and semantic light/dark mappings through `@theme` and `@theme inline`.

You can build your own classes or component layer on top of those tokens.

Example:

```css
@layer components {
  .card {
    background: var(--color-light-bg-2);
    color: var(--color-light-text);
    border: 1px solid var(--color-light-border);
  }

  .dark .card,
  [data-theme="still-orbit-night"] .card {
    background: var(--color-dark-bg-2);
    color: var(--color-dark-text);
    border-color: var(--color-dark-border);
  }
}
```

## JSON

Use this file when you want to consume Still Orbit programmatically.

### 1. Load the JSON file

Example in JavaScript or TypeScript:

```ts
import stillOrbit from "./themes/still-orbit.json";
```

### 2. Read the theme metadata

```ts
console.log(stillOrbit.name);
console.log(stillOrbit.variants.mist.label);
console.log(stillOrbit.variants.night.label);
```

### 3. Read anchors, semantic tokens, or families

Example:

```ts
const mistBackground = stillOrbit.variants.mist.semanticSwatches.bg.value;
const nightText = stillOrbit.variants.night.semanticSwatches.text.value;
const blue400 = stillOrbit.families.blue["400"];
```

### 4. Map the values into your own system

You can transform the JSON into:

- CSS variables
- app theme objects
- design token exports
- platform-specific theme files
