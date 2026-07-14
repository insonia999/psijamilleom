# Spec: Favicon Update with SVG Flower Illustration (Dynamic Colors) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the website favicon in the browser tab bar with the second contour illustration ("Florescer" flower) from `src/components/ContourDrawings.tsx`, using transparent background and responsive styling that adapts to dark/light browser themes.

**Architecture:** Create a new SVG asset under `/public/favicon.svg` containing the flower illustration paths styled with a CSS `<style>` block. Use media queries to switch colors between light purple (dark mode) and dark purple (light mode).

**Tech Stack:** SVG, CSS Media Queries, HTML5

---

## User Review Required
None.

## Open Questions
None.

## Proposed Changes

### Assets

#### [MODIFY] [favicon.svg](file:///c:/Users/lucas/Downloads/site-jamillera/public/favicon.svg)
Modify the existing SVG file to remove the white background circle and introduce a `<style>` block with media queries for colors.

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

### Core HTML

#### [MODIFY] [index.html](file:///c:/Users/lucas/Downloads/site-jamillera/index.html)
Verify it references `/favicon.svg`.

---

## Tasks

### Task 1: Update the SVG Asset
- [ ] **Step 1: Write updated code to `public/favicon.svg`**
- [ ] **Step 2: Verify the file content by reading it back**

### Task 2: Build and Lint check
- [ ] **Step 3: Run npm run lint to ensure no TypeScript issues**
- [ ] **Step 4: Run npm run build to verify the build processes correctly**

---

## Verification Plan

### Automated Verification
- Run `npm run lint` and `npm run build`.

### Manual Verification
- Open the application locally and switch OS/Browser themes (light vs dark) to verify the favicon colors adapt seamlessly.
