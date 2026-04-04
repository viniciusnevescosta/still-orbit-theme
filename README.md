# Still Orbit

A quiet, surreal color theme with mineral blues, misty neutrals, and soft amber highlights.

## Preview

## Preview

| Type | Image |
| --- | --- |
| Wallpaper | ![Still Orbit Night wallpaper](./preview/wallpaper.png) |
| [Site preview](https://viniciusnevescosta.com) | ![Still Orbit Mist site preview](./preview/site.png) |

Still Orbit is a standalone theme meant for interfaces that want a restrained, atmospheric look instead of neon contrast or overt fantasy. It was designed around a contemplative visual mood: reflective surfaces, foggy distance, architectural calm, and warm light used sparingly.

## Variants

- **Still Orbit Mist** — light, paper-like, soft, editorial
- **Still Orbit Night** — dark, reflective, cinematic, architectural

## Design traits

- mineral blues and slate neutrals
- misty light surfaces
- warm amber accents in small doses
- low-noise contrast
- calm, surreal atmosphere

## Files

- [`still-orbit.css`](themes/still-orbit.css) — standalone CSS custom properties with semantic tokens
- [`still-orbit.json`](themes/still-orbit.json) — machine-readable theme tokens and metadata
- [`still-orbit-tailwind.css`](themes/still-orbit-tailwind.css) — Tailwind v4-ready `@theme` tokens
- [`palette.md`](docs/palette.md) — palette reference and usage notes

## Quick look

### Core anchors

| Token | Hex |
| --- | --- |
| `paper` | `#f2eee8` |
| `black` | `#232a31` |
| `base-700` | `#39444f` |
| `base-600` | `#596068` |
| `base-400` | `#9d9893` |
| `accent-soft` | `#e6c5a4` |

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

Then use the exported tokens in your own semantic mapping or directly in utilities built on top of the theme.

## Semantic intent

Still Orbit works best when most of the interface stays neutral.

- Use `base-*` and surface tokens for the bulk of the UI
- Use blue/cyan for links and cool emphasis
- Use orange/amber sparingly for highlights and calls to attention
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