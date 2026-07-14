# Spec: Favicon Update with SVG Flower Illustration (Dynamic Colors)

## Goal
Replace the website's favicon in the browser tab bar with the second contour illustration ("Florescer" flower) from `src/components/ContourDrawings.tsx`, using transparent background and responsive styling that adapts to dark/light browser themes.

## Scope
- Create `public/favicon.svg` with the SVG path details of the "Florescer" drawing.
- Style the SVG using CSS media queries (`@media (prefers-color-scheme: light)`) so that it displays in light purple (`#c9b8dc`) in dark mode, and dark purple (`#796191`) in light mode.
- Update `index.html` to load the new SVG favicon: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`.

## Proposed Changes
### `public/favicon.svg` [NEW]
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <style>
    /* Default / Dark mode: Light purple and rose */
    .flower-path {
      stroke: #c9b8dc;
    }
    .flower-dot {
      fill: #c3a297;
    }

    /* Light mode override: Darker purple and darker rose */
    @media (prefers-color-scheme: light) {
      .flower-path {
        stroke: #796191;
      }
      .flower-dot {
        fill: #a0847b;
      }
    }
  </style>

  <g class="flower-path" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M 50 15 C 65 45, 65 75, 50 85 C 35 75, 35 45, 50 15 Z" />
    <path d="M 50 85 C 65 80, 80 60, 75 40 C 65 45, 55 60, 50 85 Z" />
    <path d="M 50 85 C 35 80, 20 60, 25 40 C 35 45, 45 60, 50 85 Z" />
    <path d="M 50 85 C 75 85, 95 70, 95 55 C 80 65, 65 75, 50 85 Z" opacity="0.6" stroke-width="2" />
    <path d="M 50 85 C 25 85, 5 70, 5 55 C 20 65, 35 75, 50 85 Z" opacity="0.6" stroke-width="2" />
  </g>
  <circle class="flower-dot" cx="50" cy="35" r="1.5" />
  <circle class="flower-dot" cx="50" cy="50" r="1.5" />
  <circle class="flower-dot" cx="50" cy="65" r="1.5" />
</svg>
```

### `index.html` [MODIFY]
```diff
-<link rel="icon" type="image/png" href="/favicon.png" />
+<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Verification
- Open the application locally and switch OS/Browser themes (light vs dark) to verify the favicon colors adapt seamlessly.
