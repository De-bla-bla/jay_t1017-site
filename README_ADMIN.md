Netlify Admin Setup

This project includes a simple Netlify CMS admin at `/admin` (`public/admin/index.html` and `public/admin/config.yml`). To make the admin usable online for editors, follow these steps.

1) Deploy the site to Netlify
- Push your branch or `main` to GitHub.
- Create a site in Netlify (if not already) and connect the repository.

2) Ensure Netlify build uses Node 18
- `netlify.toml` in the repo sets `NODE_VERSION = "18"`.
- In Netlify Site settings -> Build & deploy -> Environment, confirm Node version is 18.

3) Enable Netlify Identity
- In the Netlify dashboard, open your Site -> "Identity" -> "Enable Identity".
- Under "Local" registration settings choose whether to allow open signups or invite-only.

4) Enable Git Gateway (so CMS can commit to the repo)
- In Netlify dashboard -> Identity -> Services -> Git Gateway -> click "Enable Git Gateway".
- You may need to authorize or install the Netlify Git Gateway app for your Git provider.

5) Confirm `public/admin/config.yml`
- The CMS reads configuration from `/admin/config.yml` (present in the repo).
- The backend in `config.yml` is set to `git-gateway` which uses Netlify Identity + Git Gateway.

6) Invite editors or register
- In Identity -> Users, invite users or allow them to sign up.
- Once a user is confirmed, they can go to `https://<your-netlify-site>.netlify.app/admin` and click "Sign in / Open Admin".

7) Test content edits
- After login the CMS UI will load and you can edit content collections (hero, music, merch, links).
- Edits should create PRs or commits depending on Git Gateway settings.

Troubleshooting
- If the CMS shows an error about authentication, ensure Identity is enabled and Git Gateway is enabled.
- If commits fail, ensure Netlify has permissions to the repo (check Git provider app integrations) and that the connected Git user has repo access.

If you'd rather use TinaCMS instead of Netlify CMS, I can scaffold a Tina client-powered admin that uses the existing `tina/config.ts` schema; tell me which option you prefer and I'll proceed.
