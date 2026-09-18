# AI Handoff — TheTruth-Al-Haq Website

> Last updated: 2026-08-25
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

- App source repo: https://github.com/APPRepo-maker/qur (local `E:\quran-app`)
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
7. Android Play Store policy work: started foreground service declaration for `FOREGROUND_SERVICE_MEDIA_PLAYBACK`; began Data Safety Advertising ID declaration; identified `RECORD_AUDIO` cleanup needed for next AAB.

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

## Play Console / Android Compliance Notes

Because the website hosts the public privacy policy and support URLs used by the Play Store, these items are linked:

- **Privacy policy URL:** `https://thetruth-alhaq.github.io/TheTruth-Al-Haq/privacy-policy.html` (must stay live).
- **Data Safety form (Play Console website):** the app must declare **Advertising ID** collection due to the AdMob banner in `SupportUsScreen.tsx`. No code/website change; fill form on Play Console.
- **Foreground service media playback declaration:** requires a short YouTube video showing background Quran/Ruqyah audio playback. No website change.
- **Next AAB cleanup:** `RECORD_AUDIO` and `MODIFY_AUDIO_SETTINGS` need to be removed from `app.json` and `RECORD_AUDIO` blocked, because the app only plays audio and never records.

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

---

## Session Record — 2026-09-07/08 (current state correction + recent work)

### IMPORTANT — earlier sections of this file are outdated
- Expo project is now `hjhj2s-team/mmjm` (project ID `420d9840-b438-417a-8cd6-41bbaa962536`), NOT `majmood/the-truth-al-haq`. EAS builds: https://expo.dev/accounts/hjhj2s-team/projects/mmjm
- Current app version: **1.5.9** / Android versionCode **24**. Store AAB accepted on Google Play. Play link: `https://play.google.com/store/apps/details?id=com.alhaq.app`
- App source repo local path: `E:\quran-app` (remote `APPRepo-maker/qur`, branch `fix/v1.5.1-android-audio`).
- Old build-12 release URLs / TestFlight info below are historical only.

### This repo now also hosts app audio (used by the app at runtime)
- `audio/saudaljumah/` — 12 Saud Al-Jumah partial surahs: 002, 003, 009, 010, 018, 033, 036, 048, 055, 067, 068, 089 (96 kbps MP3). Saud Al-Jumah is PARTIAL only — no reliable complete-114 source exists.
- `audio/khalid1427/` — Khalid Al-Jalil 1427 recording (partial reciter).
- Yasser Al-Dosari full-114 URLs validated (external host, not in this repo).
- The app fetches `https://thetruth-alhaq.github.io/TheTruth-Al-Haq/audio/...` — these files must stay deployed.

### AdMob
- `app-ads.txt` present at repo root and also at the root-domain Pages repo (`thetruth-alhaq.github.io/app-ads.txt`): `google.com, pub-7095033876130680, DIRECT, f08c47fec0942fa0`.
- AdMob app `ca-app-pub-7095033876130680~5276627344` linked, verified, ad serving enabled; banner unit `ca-app-pub-7095033876130680/7906323402`.
- `no-fill` right after Play publication is normal (24–48h warm-up). Monitor AdMob reports; do not change code.

### Git history rewrite (contributors cleanup)
- `devin-ai-integration[bot]` was removed from the Contributors graph by stripping all `Co-Authored-By:` trailers via `git filter-branch` and force-pushing `main` (commit hashes changed; no tags existed).
- GitHub API `contributors` endpoint now returns only `thetruth-alhaq`. Repo-page sidebar may lag behind due to GitHub UI cache — hard-refresh/wait; data is clean.
- `README.md` added (Play Store link) which also nudged GitHub to re-render the page.

### Play Console optimization warnings — DO NOT blindly apply
- `proguard-android-optimize.txt`, `android.r8.optimizedResourceShrinking`, AGP 9.0 force-upgrade: all evaluated and rejected on the current Expo SDK 54 / AGP 8.11.0 stack (a previous attempt broke audio + Prayer Times on the Itel). See quran-app docs for the full decision record.

### Related repo updated
- `APPRepo-maker/My-Portfolio-Pages`: app card now says "Download app on Android" linking to the Play Store URL; old App Store fallback text removed.

---

## Session Record - 2026-09-18 (AdMob OTA + website/social/portfolio updates)

### App (E:\quran-app)
- `src/screens/SupportUsScreen.tsx`: removed the artificial `requestNonPersonalizedAdsOnly: true` restriction so the banner can use the full demand pool where consent allows; limited ads still apply automatically in regulated regions.
- Added automatic retry/backoff for failed banner loads: 30s, then 60s, then 120s max. Manual "Try Again" still works.
- Committed: `0ccabd2` "Ads: allow personalized demand and auto-retry failed banner loads with backoff".
- OTA published to EAS `production` channel/branch on `hjhj2s-team/mmjm` (runtime `exposdk:54.0.0`): update group `f0eea894-8af6-4213-b03f-fc85e65b12f8`, Android update ID `01a0a59e-b673-711e-ab47-6f710ded368b`. Dashboard: https://expo.dev/accounts/hjhj2s-team/projects/mmjm/updates/f0eea894-8af6-4213-b03f-fc85e65b12f8
- The EAS `production` branch had to be created and linked to the `production` channel first (it was previously empty).
- AdMob status: app verified/Ready, Google Play linked, ad serving enabled, banner unit `/7906323402`, Policy Centre clean. The "No ad requests with app-ads.txt yet" row = crawler/traffic association still populating (allow up to ~7 days); not a code problem. `app-ads.txt` reachable at https://thetruth-alhaq.github.io/app-ads.txt
- User must fully kill and reopen the app once to pull the OTA.

### Website repo (thetruth-alhaq/TheTruth-Al-Haq) - pushed to main
- `6279240` Restored iOS App Store download: App Store button (EG storefront), visible country selector, English + Arabic country grids via `countries.js`, "Choose your country below if the store does not open" fallback line. Google Play badge kept. Permanent IPA/APK download section stays hidden.
- "Our Other Projects" section: LearnVexo (`https://learnvexo.com`) visible; Guidano (`guidano.us`) and Shegoz (`shegoz.top`) cards exist but stay `.hidden` until the user asks (`6b54755`); Developer Portfolio card (`https://apprepo-maker.github.io/My-Portfolio-Pages/`) is the second visible card.
- `b2d9574` Added social icon row in the hero: TikTok (`@thetruth.alhaq`, black button with cyan/red edge glow), Facebook (`facebook.com/share/19DT53tcT9/`), Instagram (`@thetruthalhaq1`), YouTube (`@thetruth-alhaq-tafsirkom`). Inline SVGs, brand colors, hover lift/glow.
- `f95170d` + `aa5143a` + `53471d9` Added Sadaqah Jariyah CTA banner (gold badge + Arabic headline + English text), then rewrote it with the authentic hadith wording «من دل على خير فله مثل أجر فاعله» / "Whoever guides to a good deed will have a reward like that of its doer", then removed all em-dashes per user request.

### Portfolio repo (APPRepo-maker/My-Portfolio-Pages) - pushed to main
- The Truth - Al Haq project card now has 3 buttons: Live Website and Application, Download app on iOS (`apps.apple.com/eg/...id6800162514`), Download app on Android (Play link). English + Arabic country-fallback instructions kept (`124e6d9`).
- `45c37b5` Added LearnVexo as a featured project (live learning marketplace) with Live Demo -> `https://learnvexo.com`.
- `1ee4cb5` Replaced all contact email occurrences `mahmoudmousa.gcs@gmail.com` -> `support@learnvexo.com` (3 occurrences: visible text, mailto link, CV page). Verified live on `/` and `/cv`.
- Fixed outdated Netlify links in the CV page (watch + automotive projects) to current URLs.
- Asset is generated/minified JS (`assets/index-CW3UDBt9.js`); edits were done by targeted string replacement + HTML cache-buster `?v=` bumped to `?v=6` to defeat browser/Pages cache.
- Verification rule: never claim the live page changed until it is actually re-fetched; GitHub Pages + browser cache lag by a minute or more.

### Pending / next
- [ ] Itel physical test of v1.5.9 (audio, Ruqyah, controls, background playback, notification/lock-screen controls, alarms, reboot persistence).
- [ ] Monitor AdMob fill + app-ads.txt crawler status (allow up to ~1 week).
- [ ] Keep Guidano/Shegoz hidden until explicitly requested.

### Security
- GitHub/Expo tokens used in commands only; never committed. Treat previously exposed tokens as compromised and rotate.
