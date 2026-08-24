# AI Handoff — TheTruth-Al-Haq Website

> Last updated: 2026-08-24
> For the next AI / developer taking over this project.

## Project Overview

- **Website repo:** https://github.com/thetruth-alhaq/TheTruth-Al-Haq
- **Live site:** https://thetruth-alhaq.github.io/TheTruth-Al-Haq/
- **Repo is public + GitHub Pages enabled** on `main` branch, root path.
- **Local path:** `C:\Users\pc\CascadeProjects\TheTruth-Al-Haq`
- **Purpose:** Landing page for "The Truth - Al Haq" Quran app. Includes App Store / country links, privacy policy, support page, and a download section.

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main landing page with hero, App Store button, country search, download section, features, footer |
| `privacy-policy.html` | App privacy policy |
| `support.html` | Support / contact page |
| `countries.js` | Country list, Arabic country names, search logic, Google Translate compatibility |
| `app-icon.png` | App icon used in hero |

## Recent Changes (2026-08-24)

1. **Added permanent GitHub release download section**
   - iOS: `https://github.com/thetruth-alhaq/v1.5.0-build12/releases/download/v1.5.0-build12/TheTruthAlHaq.ipa`
   - Android: `https://github.com/thetruth-alhaq/v1.5.0-build12/releases/download/v1.5.0-build12/app-release.apk`
2. **Removed em dashes (`—`) from download card headings**
   - Now: `iOS build 12 (v1.5.0)` and `Android build 12 (v1.5.0)`
3. **Temporarily hidden:**
   - `Developer Portfolio` button (`<a class="portfolio-btn hidden">`)
   - `Download the app` section (`<section class="downloads hidden">`)

## How to Re-enable Hidden Sections

Edit `index.html`:
- Remove `hidden` from `<a class="portfolio-btn hidden" …>`
- Remove `hidden` from `<section class="downloads hidden">`

The CSS class `.hidden { display: none !important; }` is already in the `<style>` block.

## Important iOS Note

The **iOS IPA file cannot be installed directly** on iPhone/iPad just by downloading. Users need:
- App Store (preferred): `https://apps.apple.com/eg/app/the-truth-al-haq/id6800162514`
- TestFlight (public invite link must be created in App Store Connect)
- AltStore / SideStore / Sideloadly (requires a computer and re-sign every 7 days)
- Scarlet / Feather / KSign (no computer, but certificates get revoked frequently)

The user is currently evaluating **Scarlet** for iOS distribution.

## App Store Country Code

The App Store button uses `eg`:
`https://apps.apple.com/eg/app/the-truth-al-haq/id6800162514`
The user can change `eg` to `sa`, `ae`, `us`, etc., or use the country search section below it.

## Related Repos & Resources

- App source repo: https://github.com/thetruth-alhaq/QuranApp
- GitHub release repo (binaries): https://github.com/thetruth-alhaq/v1.5.0-build12
- Release tag: `v1.5.0-build12`
- Release ID: `375794225`
- Expo project: `@majmood/the-truth-al-haq`
- Expo account: `majmood`

## How to Deploy

The site deploys automatically via GitHub Pages on every push to `main`.

In PowerShell at the website repo:
```powershell
git add .
git commit -m "message"
git push
```

Wait 30-60 seconds for GitHub Pages to rebuild.

## Credentials

- **GitHub Personal Access Token (PAT):** provided by the user, deleted after use. Ask the user for a new token if GitHub API access is needed.
- **Expo session secret:** stored at `C:\Users\pc\.expo\state.json` (do not commit; used for GraphQL API calls).

---
