# Still Orbit

A quiet, surreal color theme with mineral blues, misty neutrals, and soft amber highlights.

## Preview

| Type | Preview |
| --- | --- |
| Wallpaper | ![Still Orbit Night wallpaper](./preview/wallpaper.png) |
| Live site | ![Website](./preview/website.png) |

Still Orbit is a standalone theme for interfaces that want a calm, reflective visual language instead of neon contrast or overt fantasy. It is built around foggy neutrals, mineral blues, soft amber light, and a low-noise sense of depth.

## Variants

- **Still Orbit Mist** — Light, paper-like, soft, editorial.
- **Still Orbit Night** — Dark, reflective, cinematic, architectural.

## Design traits

- mineral blues and slate neutrals
- misty light surfaces
- warm amber accents in small doses
- restrained contrast and quiet hierarchy
- calm, surreal atmosphere

## Files

- [`still-orbit.css`](themes/still-orbit.css) — standalone CSS custom properties with semantic tokens and full family scales
- [`still-orbit.json`](themes/still-orbit.json) — ai-readable theme tokens and metadata
- [`still-orbit-tailwind.css`](themes/still-orbit-tailwind.css) — Tailwind v4-ready `@theme` tokens
- [`palette.md`](docs/palette.md) — palette reference and usage notes

## Quick look

### Core anchors

| Token | OKLCH |
| --- | --- |
| `paper` | `oklch(95.1% 0.009 78.3)` |
| `black` | `oklch(28.1% 0.016 248.4)` |
| `accent-soft` | `oklch(84.3% 0.058 66.9)` |
| `base-700` | `oklch(38.1% 0.024 248.4)` |
| `base-600` | `oklch(48.6% 0.016 251.7)` |
| `base-400` | `oklch(68.2% 0.009 67.7)` |

### Semantic swatches

| Token | Label | Mist | Night |
| --- | --- | --- | --- |
| `bg` | `Background` | `oklch(95.1% 0.009 78.3)` | `oklch(28.1% 0.016 248.4)` |
| `bg-elevated` | `Elevated` | `oklch(96.3% 0.009 78.3)` | `oklch(22.4% 0.014 253.1)` |
| `bg-subtle` | `Subtle` | `oklch(93.1% 0.014 74.4)` | `oklch(28.1% 0.016 248.4)` |
| `ui` | `UI` | `oklch(89.0% 0.020 72.6)` | `oklch(31.2% 0.023 248.6)` |
| `ui-strong` | `UI Strong` | `oklch(83.4% 0.026 69.4)` | `oklch(34.2% 0.025 246.3)` |
| `border` | `Border` | `oklch(83.4% 0.026 69.4)` | `oklch(34.2% 0.025 246.3)` |
| `border-muted` | `Border Muted` | `oklch(89.0% 0.020 72.6)` | `oklch(31.2% 0.023 248.6)` |
| `text` | `Text` | `oklch(38.1% 0.024 248.4)` | `oklch(83.4% 0.026 69.4)` |
| `text-muted` | `Text Muted` | `oklch(48.6% 0.016 251.7)` | `oklch(68.2% 0.009 67.7)` |
| `text-faint` | `Text Faint` | `oklch(68.2% 0.009 67.7)` | `oklch(61.9% 0.015 248.1)` |
| `heading` | `Heading` | `oklch(28.1% 0.016 248.4)` | `oklch(96.3% 0.009 78.3)` |
| `link` | `Link` | `oklch(50.4% 0.055 244.5)` | `oklch(64.7% 0.064 244.4)` |
| `link-hover` | `Link Hover` | `oklch(51.4% 0.050 235.6)` | `oklch(64.4% 0.052 235.5)` |
| `primary` | `Primary` | `oklch(38.1% 0.024 248.4)` | `oklch(83.4% 0.026 69.4)` |
| `primary-contrast` | `Primary Contrast` | `oklch(96.3% 0.009 78.3)` | `oklch(22.4% 0.014 253.1)` |
| `secondary` | `Secondary` | `oklch(51.4% 0.050 235.6)` | `oklch(64.4% 0.052 235.5)` |
| `accent` | `Accent` | `oklch(69.2% 0.094 57.8)` | `oklch(69.2% 0.094 57.8)` |
| `accent-soft` | `Accent Soft` | `oklch(84.3% 0.058 66.9)` | `oklch(84.3% 0.058 66.9)` |
| `success` | `Success` | `oklch(49.3% 0.024 173.1)` | `oklch(63.7% 0.028 165.1)` |
| `warning` | `Warning` | `oklch(57.4% 0.060 84.7)` | `oklch(74.3% 0.073 89.4)` |
| `danger` | `Danger` | `oklch(46.0% 0.076 31.4)` | `oklch(59.1% 0.086 37.5)` |
| `info` | `Info` | `oklch(50.4% 0.055 244.5)` | `oklch(64.7% 0.064 244.4)` |

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

- personal sites and portfolios
- blogs and editorial layouts
- landing pages with cinematic hero sections
- dashboards with a softer mood
- creative tools and note-taking apps

## License

[MIT](LICENSE)
