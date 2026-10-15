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


---

# MASTER HANDOVER - The Truth - Al Haq (complete project record)

> Last updated: 2026-10-15
> Purpose: full handover document. Any AI or developer can take over 100% of this project from this file + the repo docs alone.
> Secret VALUES are intentionally NOT in git-committed files. They live in the local backup folder `E:\ALHAQ_BACKUP_2026-10-15\SECRETS_BACKUP.md`.

---

## 1. WHAT THIS PROJECT IS

- **App:** "The Truth - Al Haq" (Al Haq) - Expo / React Native Islamic utility app: full Quran audio (multiple reciters), Ruqyah Shariah, Prayer Times, Adhan alarms, Qibla compass, Azkar, Hadith, Tasbih, AdMob banner on Support Us screen.
- **Package / bundle ID:** `com.alhaq.app`
- **Current version:** 1.5.9 / Android versionCode 24 / Expo SDK 54 / RN 0.81 / AGP 8.11.0 / Gradle 8.14.3 / compile+target SDK 36.
- **User's test device:** physical Itel Android phone (primary target - always validate on it).
- **Phase:** Android-focused. Do NOT push iOS changes unless the user explicitly asks.

## 2. ALL REPOSITORIES, ACCOUNTS AND SITES

### GitHub accounts
| Account | Repos | Access |
|---|---|---|
| `thetruth-alhaq` (org/user) | `thetruth-alhaq/TheTruth-Al-Haq` (website+audio+app-ads.txt), `thetruth-alhaq/v1.5.0-build12` (old binary release repo) | PAT works (see local backup for value) |
| `APPRepo-maker` (user) | `APPRepo-maker/qur` (APP SOURCE - branch `fix/v1.5.1-android-audio`), `APPRepo-maker/My-Portfolio-Pages` (portfolio site) | needs user's APPRepo-maker PAT - the thetruth-alhaq PAT gets 403 |

### Expo / EAS accounts (history matters!)
| Account | Status |
|---|---|
| `majmood` | ORIGINAL personal Expo account. Old project `@majmood/the-truth-al-haq`. Local login session lives in `C:\Users\pc\.expo\state.json` (Browser-Flow sessionSecret - see backup). Old builds/TestFlight history belongs here. |
| `majmeds-team` | Intermediate team account tried during the keystore-migration saga (`download-keystore.js` references it). |
| `hjhj2s-team` | CURRENT team. Project `mmjm`, projectId `420d9840-b438-417a-8cd6-41bbaa962536`, `app.json` owner=`hjhj2s-team`. Builds: https://expo.dev/accounts/hjhj2s-team/projects/mmjm |
| robot `mmjm` | EAS robot account used for OTA publish; token supplied per-command as `EXPO_TOKEN`/`NEW_EXPO_TOKEN` env var - NOT stored locally. |

### Apple
- Apple ID for submit: `shegoz.customercare@gmail.com`, Team ID `9Z6XPQKN43`, App Store Connect app id `6800162514`.
- App Store listing: https://apps.apple.com/eg/app/the-truth-al-haq/id6800162514 (country code `eg` - swap for sa/ae/us or use the site country selector).
- iOS submit needs an Apple app-specific password (not stored - ask user).

### Google / AdMob / Play
- Play listing: https://play.google.com/store/apps/details?id=com.alhaq.app
- AdMob publisher: `pub-7095033876130680`; AdMob app id `5276627344` (`ca-app-pub-7095033876130680~5276627344`), banner unit `ca-app-pub-7095033876130680/7906323402`.
- `app-ads.txt`: `google.com, pub-7095033876130680, DIRECT, f08c47fec0942fa0` - live at BOTH `https://thetruth-alhaq.github.io/app-ads.txt` and `https://thetruth-alhaq.github.io/TheTruth-Al-Haq/app-ads.txt`.
- EAS submit expects `./google-service-account.json` (Play service account key) - FILE IS MISSING from the repo; ask user or export from Google Cloud/Play Console.
- Upload keystore: `E:\quran-app\alhaq-upload-keystore.jks` (+passwords in scripts + backup). SHA-256 `ae29a2817c17951f130a5abf35648f69e0aab361497d9be0217f8f8502bc11bc`, SHA-1 `68:37:52:F1:93:75:46:0F:CD:0A:1A:C7:B8:CD:18:65:8D:FD:77:69`. Play Console ACCEPTED AAB signed with it - this is the CURRENT upload key; losing it = must reset key via Play support.

### Websites dealt with
| Site | URL | Notes |
|---|---|---|
| App landing page | https://thetruth-alhaq.github.io/TheTruth-Al-Haq/ | this repo's Pages site |
| Privacy policy | .../privacy-policy.html | required by BOTH stores |
| Support page | .../support.html | |
| app-ads.txt | https://thetruth-alhaq.github.io/app-ads.txt | root-domain Pages repo too |
| Portfolio | https://apprepo-maker.github.io/My-Portfolio-Pages/ and `/cv` | minified built bundle, edit via string-replace + `?v=` cache-buster |
| LearnVexo | https://learnvexo.com | user's learning-marketplace product (visible project card + portfolio featured project) |
| Guidano | https://guidano.us | user's project - card exists but HIDDEN until asked |
| Shegoz | https://shegoz.top | user's project - card exists but HIDDEN until asked |
| Social | TikTok `@thetruth.alhaq`, Facebook `facebook.com/share/19DT53tcT9/`, Instagram `thetruthalhaq1`, YouTube `@thetruth-alhaq-tafsirkom` | icons live in the landing-page hero |

### Audio hosting (app fetches these at runtime - MUST stay deployed)
- `https://thetruth-alhaq.github.io/TheTruth-Al-Haq/audio/...`
- `audio/saudaljumah/` - 12 partial Saud Al-Jumah surahs (002,003,009,010,018,033,036,048,055,067,068,089)
- `audio/khalid1427/` - Khalid Al-Jalil 1427 partial set
- Yasser Al-Dosari full-114 = external host URLs (validated, not in repo)
- Last validation: 201/201 URLs passed.

## 3. COMPLETE WORK HISTORY (sessions, condensed but complete)

### App code history (from repo docs + sessions)
1. Built the Expo app over many versions (1.4.x -> 1.5.9). Feature docs exist for every feature: `AZKAR_COMPLETE_DOCUMENTATION.md`, `TRANSLATION_*`, `ADHAN_*`, `IOS_ADHAN_*`, `NATIVE_STOP_BUTTON_PLAN.md`, `OTA_AND_ABOUT_US_FIXES.md`, `BLACK_SCREEN_FIX.md`.
2. Reciter-audio saga: dozens of Python scrapers in repo root (`assabile*.py`, `mp3quran`, `quranbookk`, `surahquran`, `alhilal`, `alqlaid`, `koonoz`, `mazameer`, `soundcloud_*`, `yt_*`, `bismirabbika*`) were used to find WORKING audio URLs for every reciter/sheikh; hosted partial sets on the website repo for reciters without reliable full-114 sources (Saud Al-Jumah, Khalid Al-Jalil 1427). `scripts/validate-audio-urls.js` validates all URLs.
3. Adhan/prayer-alarm work: native-module fixes, `FOREGROUND_SERVICE_MEDIA_PLAYBACK`, reboot persistence; docs in `ADHAN_FIX_DOCUMENTATION.md` + `ADHAN_VERIFICATION.md`.
4. Media controls: play/pause/stop/seek/±15s, background playback, lock-screen/notification controls (Expo AV + notifee-style setup - see docs).
5. Keystore saga: original upload key lived under `majmood`; migrated to `hjhj2s-team/mmjm` by DOWNLOADING the keystore via EAS GraphQL (`scripts/download-keystore.js` - eas-cli internals, sessionSecret for old account + `NEW_EXPO_TOKEN` for new), then re-uploading (`scripts/set-hjhj2s-keystore.js` - contains the actual keystore passwords) so Play updates keep the SAME cert. v1.5.9 vc24 store AAB signed with it was ACCEPTED.
6. Play Console optimization warnings REJECTED on purpose (documented decision): `proguard-android-optimize.txt` broke audio+Prayer Times on the Itel once; `android.r8.optimizedResourceShrinking` needs AGP 8.12+; AGP 9.0 unsupported on SDK 54; Fresco warning is generic. Revisit only on Expo SDK 55+.
7. Next-AAB cleanup agreed: remove `RECORD_AUDIO` + `MODIFY_AUDIO_SETTINGS` from `app.json` (app plays audio, never records).
8. TypeScript check has PRE-EXISTING `TS1117` duplicate-key errors in `src/i18n/translations.ts` - not a blocker (Metro bundles anyway); fix by deduping language sections when convenient.
9. AdMob session (latest app work): removed `requestNonPersonalizedAdsOnly: true` in `src/screens/SupportUsScreen.tsx` (was artificially shrinking demand), added auto retry/backoff for failed banner loads (30s -> 60s -> 120s max) + kept manual Try Again. Commit `0ccabd2`. Published OTA to EAS `production` channel: update group `f0eea894-8af6-4213-b03f-fc85e65b12f8`, Android update `01a0a59e-b673-711e-ab47-6f710ded368b` (had to create `production` branch + link channel first). "No ad requests with app-ads.txt yet" = crawler delay, allow ~7 days.

### Website history (thetruth-alhaq/TheTruth-Al-Haq)
1. Pages once went 404 when repo flipped private->public; re-enabled via `gh api repos/.../pages -X POST -f "source[branch]=main" -f "source[path]=/"`.
2. Hosted app-ads.txt at root + repo site for AdMob.
3. Hosted partial-reciter audio (above).
4. `git filter-branch` stripped all `Co-Authored-By:` trailers to remove `devin-ai-integration[bot]` from Contributors; force-pushed; later branch rename main->tmp-main->main flushed remaining GitHub UI cache. API contributors = `thetruth-alhaq` only.
5. Download section evolution: App Store button -> hidden -> RESTORED with EG storefront + country selector + EN/AR country grids via `countries.js` + "Choose your country below if the store does not open" fallback (commit `6279240`). Google Play badge always kept. Permanent IPA/APK card section stays `.hidden`.
6. "Our Other Projects" section: LearnVexo visible; Guidano + Shegoz hidden (`6b54755`); Developer Portfolio card added as 2nd card.
7. Social icon row in hero (commit `b2d9574`): TikTok/FB/IG/YouTube inline SVGs with brand styling (tiktok black + cyan/red glow, fb blue, ig gradient, yt red).
8. Sadaqah Jariyah CTA banner (`f95170d`,`aa5143a`,`53471d9`): gold badge, AR headline, authentic hadith wording «من دل على خير فله مثل أجر فاعله» / "Whoever guides to a good deed will have a reward like that of its doer", ALL em-dashes removed (user hates them - "AI sign").

### Portfolio history (APPRepo-maker/My-Portfolio-Pages)
- Built/minified React bundle `assets/index-CW3UDBt9.js`; ALL edits = targeted string replacement via helper .py scripts + bump `?v=` in index.html (now v=6) to kill cache.
- The Truth card: 3 buttons (Live Website+Application, iOS App Store, Android Play) - Android button was once lost and restored (`124e6d9`).
- LearnVexo featured project added w/ Live Demo (`45c37b5`).
- Contact email `mahmoudmousa.gcs@gmail.com` -> `support@learnvexo.com` (3 spots incl. CV, `1ee4cb5`).
- CV: outdated Netlify links fixed to current sites.
- Helper scripts kept in repo root: `update_portfolio.py`, `inspect.py`, `add_project.py`, `fix_email.py`, `fix_cv.py`, `edit-portfolio.py`, `check_balance.py`.

## 4. METHODS / HOW PROBLEMS WERE SOLVED (steal these)

1. **Never claim live = changed without re-fetching.** Pages/browser cache lag 1-5 min; verify by `urllib.request.urlopen(url).read()` and string checks, then say so.
2. **Minified-bundle editing:** python helper script writes exact `str.replace(old,new)`; count occurrences before/after; bump `?v=N` cache-buster in index.html.
3. **EAS GraphQL without dashboard access:** reuse eas-cli internals (`C:\Users\pc\AppData\Roaming\npm\node_modules\eas-cli\build`) - `createGraphqlClient({sessionSecret})` or `({accessToken})` + `AccountQuery`/`GraphqlClient` to move keystores/list credentials. See `scripts/*.js`.
4. **OTA publish:** `eas update` needs channel<->branch link; create branch first if `Entity not authorized`/empty. Preview builds set `EXPO_PUBLIC_ADS_TEST=true` for test ads (eas.json).
5. **Pushes:** embed PAT in URL `https://USER:TOKEN@github.com/...` per-command, never store in remote, never commit. thetruth-alhaq PAT cannot push APPRepo-maker repos.
6. **GitHub Pages/API:** `gh api` for pages enable/build; contributors cache flushed by branch rename or filter-branch+force-push.
7. **Docs:** after every session append the same "Session Record" block to ALL md files (pattern established by user).
8. **Audio sourcing:** scrape candidate URLs with the many *.py scrapers, validate all with `scripts/validate-audio-urls.js`, host partials on the website repo when no reliable full source exists.
9. **User rules baked in:** test before claiming fixed; Android-only this phase; physical Itel validation matters; no em-dashes in UI text; record everything in md.

## 5. CREDENTIALS INVENTORY (values in local backup only)

- GitHub PAT for `thetruth-alhaq` - in backup `SECRETS_BACKUP.md`. Pushes website repo only.
- GitHub PAT for `APPRepo-maker` - NOT stored anywhere; user supplies per-push. Needed to push `qur` + portfolio (2 local commits pending: `0a3f469`, `cafd292`).
- Expo `majmood` sessionSecret - in `C:\Users\pc\.expo\state.json` (copied to backup).
- Expo robot/team token for `hjhj2s-team` - supplied as env var per command; not stored.
- Upload keystore `alhaq-upload-keystore.jks` + keystore/key passwords + alias - file in repo root (untracked!) + passwords inside `scripts/set-hjhj2s-keystore.js` + copied to backup. NEVER lose.
- Apple app-specific password - not stored; needed for iOS submit.
- `google-service-account.json` (Play submit) - missing; needed for `eas submit android`.
- No `.env` files in the repos; `EXPO_PUBLIC_*` build-time vars only.
- Tokens used inside chat/shell previously = treat as compromised; rotate.

## 6. STORE STATUS

- **Google Play:** app LIVE at package `com.alhaq.app`; store AAB v1.5.9 vc24 accepted; original upload keystore confirmed. Declarations done/tracked: foreground-service media playback (needs YouTube demo video), Data Safety declares Advertising ID (AdMob).
- **Apple App Store:** app LIVE `id6800162514` (EG storefront link used). Old TestFlight submissions (builds 9-12) under `majmood` are historical.
- **AdMob:** verified, Play-linked, serving enabled, policy clean; fill still ramping (new unit + app-ads.txt crawl - allow ~1 week); preview builds show Google TEST ads only.

## 7. FUTURE PLANS AGREED

- [ ] Itel physical test of v1.5.9: Quran + Ruqyah audio, reciter switching, play/pause/stop, seek ±15s, background playback, notification/lock-screen controls, Prayer Times, Qibla, prayer alarms surviving reboot.
- [ ] Monitor AdMob fill/app-ads.txt crawl (~1 week) before more changes.
- [ ] Keep Guidano + Shegoz hidden until user asks.
- [ ] iOS phase later (explicit go-ahead required).
- [ ] Next AAB: strip `RECORD_AUDIO`/`MODIFY_AUDIO_SETTINGS`.
- [ ] Revisit R8/AGP optimizations only on Expo SDK 55+.
- [ ] Push 2 pending doc commits to APPRepo-maker repos when user provides token.
- [ ] Rebuild/OTA whenever user confirms a fix on the Itel.

## 8. USER'S VERBATIM PROMPTS (style + rules - copy-paste for next AI)

- "read all code base first and understand all the codes 100% FIRST BEFORE DOING ANYTHING."
- "do testing before u aplly codes dont fake the fix then build on github"
- "b but make sure they are working 100% and also for ruqyiah sharaih"
- "build apk on github actions to test it first on my phone dont build on expo now" (later reversed:) "build over expo apk to test first on my phone builld over expo jnot github"
- "yest but dont push any thing for ios for now only android"
- "countinue adn keep using md to record ur work to never get lost" / "i said record ur tasks there idiot and follow it"
- "GET ME BACK C DRIVER 15 GB FREE ... MOVE WHAT U PUT THERE IN E OR SMTHG"
- "also here why did u delete dlownload on android button get it back and ios remain so 3 buttons total"
- "change this email ... to support@learnvexo.com and in cv also"
- "put tiktok elegeant tiktok icon shape up in the page ... face book elegant symbol ... share instagram symboll ... also add youtube elegant"
- "can u put with creative way up side also a pharase like حمل التطبيق وشاركه كصدقه جاريه ... with arabic and english and creative and attratvice way to push them to download and share the app with emotinal way"
- "dont say it earns you the reward websearch how to say it correctly in english related to islam"
- "delete this in arabic and english this is ai sign idiot delete it" (em-dashes)
- "document everything u did in all md files and all read me files dont exclude anything"
- "record in the same md files ... all sessions from the very start till now comprehensive 100% ... he must have full access to everything 100% and all passwords ... make new backup of everything current state now ... in rar compress small size but still contain everything 100% ... in new folder and tell me its path"
- "the secrets stay local and the winarar file be in e drivie not C drive countinue ... and also all the websitres u have deatlt wwith all the apis and secrets and acoccunts"

## 9. LOCAL PATHS

| What | Path |
|---|---|
| App source | `E:\quran-app` (remote `APPRepo-maker/qur`, branch `fix/v1.5.1-android-audio`) |
| Website | `C:\Users\pc\CascadeProjects\TheTruth-Al-Haq` |
| Portfolio | `C:\Users\pc\CascadeProjects\My-Portfolio-Pages` |
| Expo session | `C:\Users\pc\.expo\state.json` |
| Keystore | `E:\quran-app\alhaq-upload-keystore.jks` |
| Full chat histories | `C:\Users\pc\AppData\Roaming\devin\cli\summaries\history_*.md` (200+ files) |
| THIS BACKUP | `E:\ALHAQ_BACKUP_2026-10-15\` + `E:\ALHAQ_BACKUP_2026-10-15.tar.gz` |
