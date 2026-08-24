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

## App / Expo / Download Paths

### App Identity

- **App name:** The Truth - Al Haq
- **iOS bundle ID / Android package:** `com.alhaq.app`
- **Apple App Store ID:** `6800162514`
- **App Store URL:** `https://apps.apple.com/eg/app/the-truth-al-haq/id6800162514`
- **Expo project:** `@majmood/the-truth-al-haq`
- **Expo account:** `majmood`
- **Expo project dashboard:** https://expo.dev/accounts/majmood/projects/the-truth-al-haq
- **EAS builds dashboard:** https://expo.dev/accounts/majmood/projects/the-truth-al-haq/builds
- **App source repo:** https://github.com/APPRepo-maker/qur (local `E:\quran-app`)
- **Binary release repo:** https://github.com/thetruth-alhaq/v1.5.0-build12
- **Release tag:** `v1.5.0-build12`
- **Release ID:** `375794225`

### Permanent GitHub Release Download URLs

| Platform | File | URL |
|----------|------|-----|
| iOS | `TheTruthAlHaq.ipa` | `https://github.com/thetruth-alhaq/v1.5.0-build12/releases/download/v1.5.0-build12/TheTruthAlHaq.ipa` |
| Android | `app-release.apk` | `https://github.com/thetruth-alhaq/v1.5.0-build12/releases/download/v1.5.0-build12/app-release.apk` |

### Expo Build 12 Artifact URLs

| Platform | URL |
|----------|-----|
| iOS IPA | `https://expo.dev/artifacts/eas/gfR9yLqw3jMRDpCqI9S_Hunr3PN8cTuUWQuQ_G6X_p0.ipa` |
| Android APK | `https://expo.dev/artifacts/eas/Tobnk6hrPPZ9366RKnl5gbI7rKspFWvqrzgcszt1kL4.apk` |
| Android AAB | `https://expo.dev/artifacts/eas/ZDwdx8nCpySBP_3x8BGImJk4MvMeeHWXi02MGf-ngHo.aab` |

### TestFlight Submissions (via EAS)

| Build | Status | URL |
|-------|--------|-----|
| 12 (production) | finished | `https://expo.dev/accounts/majmood/projects/the-truth-al-haq/submissions/e7b2d731-9271-4f18-bac6-4b4ee3a1a20b` |
| 11 (production) | finished | `https://expo.dev/accounts/majmood/projects/the-truth-al-haq/submissions/1e3acb8e-64ad-486a-9fa9-32497cec104c` |
| 10 (store) | finished | `https://expo.dev/accounts/majmood/projects/the-truth-al-haq/submissions/08556074-f72e-49f4-b7c5-e23d29d9d39c` |
| 9 (store) | finished | `https://expo.dev/accounts/majmood/projects/the-truth-al-haq/submissions/6b65c01b-eb5a-4b13-9c11-c930fb754d24` |

The public TestFlight link (`https://testflight.apple.com/join/XXXXX`) must be generated in **App Store Connect** by enabling public testing for build 12.

## iOS Distribution Deep Dive

The website currently hides the direct IPA/APK download section, but the App Store button is still live.

| Method | Needs Computer? | Cost | Notes |
|--------|----------------|------|-------|
| **App Store** | No | Free | Already live. Best for normal users. Country code can be changed. |
| **TestFlight** | No | Free | Requires public invite link from App Store Connect. 90-day build expiry. |
| **AltStore / SideStore / Sideloadly** | Yes | Free | 7-day certificate with free Apple ID; paid Dev Account = 1 year. |
| **Scarlet / Feather / KSign** | No | Free | No computer, but shared certs revoked frequently. |
| **builds.io** | No | $19.99/mo per device | Managed signing, reliable, paid. |

**Current user plan:** evaluating **Scarlet** for iOS distribution; not yet implemented.

## Website Code Explanation

### `index.html` Structure

1. `<head>` — Google Translate script, meta tags, embedded CSS (dark teal theme, responsive grid, country search styles).
2. `<body>`:
   - `google_translate_element` — top-right language selector.
   - `.hero` — app icon, title, subtitle, **App Store button**, hint text, **(hidden) Developer Portfolio button**.
   - `.downloads` — **(hidden)** section with two download cards for iOS IPA and Android APK.
   - `.countries` — country search input + two country grids (English / Arabic) for localized App Store links.
   - `.features` — six feature summary cards (Quran, Prayer Times, Qibla, Azkar, Hadith, Tasbih).
   - `.links` — Privacy Policy, Support links.
   - `.footer` — copyright.
   - `<script>` includes `countries.js`.

### `countries.js` Explanation

- Loads country list and Arabic country names.
- `normalizeSearch()` strips invisible chars and diacritics for mobile/Google Translate compatibility.
- Renders country cards as links to `https://apps.apple.com/{code}/app/the-truth-al-haq/id6800162514`.
- Two grids: `country-grid` (English names) and `country-grid-ar` (Arabic names, `dir="rtl"`).
- Hardens search against errors and shows a "no results" message.

### Hidden Sections Toggle

The `.hidden` class is defined as:

```css
.hidden { display: none !important; }
```

Currently applied to:
- `<a class="portfolio-btn hidden">`
- `<section class="downloads hidden">`

To show them again, remove the `hidden` token from those class attributes in `index.html`.

## Recent Session Tasks (2026-08-24)

1. Created permanent public download links for build 12 iOS IPA and Android APK from Expo.
2. Uploaded binaries to GitHub release `thetruth-alhaq/v1.5.0-build12` (release ID `375794225`), replacing build 9 APK with build 12 APK.
3. Added download section to website with GitHub release links.
4. Removed em dashes from iOS and Android card headings.
5. Temporarily hid `Developer Portfolio` and `Download the app` sections on user request.
6. Created AI handoff docs in both app and website repos.

## Local Project Paths

| Project | Path | Repo |
|---------|------|------|
| Website | `C:\Users\pc\CascadeProjects\TheTruth-Al-Haq` | https://github.com/thetruth-alhaq/TheTruth-Al-Haq |
| Mobile app | `E:\quran-app` | https://github.com/APPRepo-maker/qur |
| Expo session | `C:\Users\pc\.expo\state.json` | — |

## Credentials & Security

- **GitHub PAT** was provided by the user, used to manage the release, then deleted. Ask the user for a fresh token if future GitHub API work is needed.
- **Expo session secret** is in `C:\Users\pc\.expo\state.json` and must not be committed.
- **Android keystore** was downloaded via Expo GraphQL during this session and deleted.
- **Apple Developer credentials** (Apple ID + app-specific password) are needed for EAS iOS submit.

## How to Update the Website

1. Edit files in `C:\Users\pc\CascadeProjects\TheTruth-Al-Haq`.
2. In PowerShell:
   ```powershell
   git add .
   git commit -m "describe change"
   git push
   ```
3. Wait 30-60 seconds for GitHub Pages to deploy.

---
