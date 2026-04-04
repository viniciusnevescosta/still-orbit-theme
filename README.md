# Still Orbit

A quiet, surreal color theme with mineral blues, misty neutrals, warm atmospheric accents, and restrained contrast.

## Preview

| Type | Preview |
| --- | --- |
| Wallpaper | ![Still Orbit Night wallpaper](./preview/wallpaper.png) |
| Live site | ![Website](./preview/website.png) |

Still Orbit is a standalone theme for interfaces that want a calm, reflective visual language instead of neon contrast or overt fantasy. It is built around foggy neutrals, mineral blues, soft amber light, and a low-noise sense of depth.

## Variants

- **Still Orbit Mist** — light, paper-like, soft, editorial
- **Still Orbit Night** — dark, reflective, cinematic, architectural

## Design traits

- mineral blues and slate neutrals
- misty light surfaces
- warm amber accents in small doses
- restrained contrast and quiet hierarchy
- calm, surreal atmosphere

## Files

- [`still-orbit.css`](themes/still-orbit.css) — standalone CSS custom properties with semantic tokens
- [`still-orbit.json`](themes/still-orbit.json) — machine-readable theme tokens and metadata
- [`still-orbit-tailwind.css`](themes/still-orbit-tailwind.css) — Tailwind v4-ready `@theme` tokens
- [`palette.md`](docs/palette.md) — palette reference and usage notes

## Quick look

### Core anchors

| Token | OKLCH |
| --- | --- |
| `paper` | `oklch(95.1% 0.009 78.3)` |
| `black` | `oklch(28.1% 0.016 248.4)` |
| `base-700` | `oklch(38.1% 0.024 248.4)` |
| `base-600` | `oklch(48.6% 0.016 251.7)` |
| `base-400` | `oklch(68.2% 0.009 67.7)` |
| `accent-soft` | `oklch(84.3% 0.058 66.9)` |

## Usage

### Plain CSS

```css
@import "./still-orbit.css";
```

Light theme:

```html
<html data-theme="still-orbit-mist">
```

Dark theme:

```html
<html class="dark">
```

or:

```html
<html data-theme="still-orbit-night">
```

Example:

```css
.card {
  background: var(--so-bg-elevated);
  color: var(--so-text);
  border: 1px solid var(--so-border);
  box-shadow: 0 10px 30px var(--so-shadow-color);
}

.card a {
  color: var(--so-link);
}

.card a:hover {
  color: var(--so-link-hover);
}
```

### Tailwind v4

Import the theme file before your app styles:

```css
@import "tailwindcss";
@import "./still-orbit-tailwind.css";
```

Then map the exported tokens to your own semantic classes or use them directly in utilities built on top of the theme.

## Semantic intent

Still Orbit works best when most of the interface stays neutral.

- Use `base-*` and surface tokens for the bulk of the UI
- Use blue and cyan for links and cool emphasis
- Use orange and amber sparingly for highlights and calls to attention
- Avoid oversaturating components; the theme is designed to breathe

## Recommended use cases

Still Orbit fits especially well in:

- personal sites and portfolios
- blogs and editorial layouts
- landing pages with cinematic hero sections
- dashboards with a softer mood
- creative tools and note-taking apps

## Naming

- **Theme:** Still Orbit
- **Light variant:** Still Orbit Mist
- **Dark variant:** Still Orbit Night

## Roadmap ideas

- VS Code theme
- shadcn/ui preset
- design tokens package
- syntax highlighting variants
- preview gallery

## License

[MIT](LICENSE)
