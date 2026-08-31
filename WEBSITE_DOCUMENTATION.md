# The Truth - Al Haq Website Documentation

## Website URL
- **Main page**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/
- **Privacy Policy**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/privacy-policy.html
- **Support page**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/support.html

## Repository
- **GitHub repo**: https://github.com/thetruth-alhaq/TheTruth-Al-Haq
- **GitHub account**: thetruth-alhaq (organization)
- **Branch**: main
- **Pages source**: / (root)

## Files
- `index.html` - Landing page with app features (Quran, Prayer Times, Qibla, Azkar, Hadith, Tasbih)
- `privacy-policy.html` - Privacy policy for App Store submission
- `support.html` - Support page with contact email
- `app-icon.png` - App icon displayed on homepage (1.8 MB)

## GitHub Pages Configuration
- **Source**: Deploy from a branch
- **Branch**: main
- **Folder**: / (root)
- **HTTPS enforced**: Yes
- **Custom domain**: None (using default github.io subdomain)

## How GitHub Pages Was Enabled
GitHub Pages was disabled when the repo was switched from public to private, then back to public. Pages does not auto-re-enable. It was re-enabled via the GitHub API:

```bash
gh api repos/thetruth-alhaq/TheTruth-Al-Haq/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Response confirmed: status "building", then "built" after 60 seconds.

## How to Re-Enable Pages If It Goes Down Again

### Method 1: GitHub CLI (fastest)
```bash
gh api repos/thetruth-alhaq/TheTruth-Al-Haq/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

### Method 2: GitHub Website
1. Go to https://github.com/thetruth-alhaq/TheTruth-Al-Haq/settings/pages
2. Under "Build and deployment" > "Source", select "Deploy from a branch"
3. Under "Branch", select: main / (root)
4. Click Save
5. Wait 1-2 minutes for build

### Method 3: Trigger Rebuild Only (if Pages is enabled but stale)
```bash
gh api repos/thetruth-alhaq/TheTruth-Al-Haq/pages/builds -X POST
```

## Important Notes
- GitHub Pages on FREE plan only works with PUBLIC repos
- Switching repo to private disables Pages automatically
- Switching back to public does NOT re-enable Pages automatically
- You must manually re-enable Pages after making repo public again
- The website is static HTML (no backend, no database)

## App Store URLs That Depend on This Website
- **Marketing URL**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/
- **Privacy Policy URL**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/privacy-policy.html
- **Support URL**: https://thetruth-alhaq.github.io/TheTruth-Al-Haq/support.html

If this website goes down, Apple App Store submission will be rejected (URLs must be live).

## Last Updated
- August 15, 2026: Re-enabled GitHub Pages after repo visibility change caused 404
- August 31, 2026: Updated `privacy-policy.html` to disclose AdMob advertising identifier, location usage, and that the app is not a medical device and does not collect health data. Updated `index.html` availability message to "Now available on Google Play".
