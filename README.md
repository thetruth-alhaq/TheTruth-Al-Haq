# The Truth - Al Haq

Download the app: https://play.google.com/store/apps/details?id=com.alhaq.app

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
