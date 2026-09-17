# Personal Resume Site

Next.js 14 App Router resume site for Adithya Borker. Content lives in `data/resume.ts`. Deploy target: Vercel.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3001
```

## Deploy checklist

### 1. Initialize git and push to GitHub

If this folder is not yet a git repo:

```bash
git init
git add .
git commit -m "Initial resume site"
```

Create a GitHub repo (empty, no README), then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

Do **not** commit `.env.local`. It is gitignored. Only `.env.example` belongs in the repo.

### 2. Import the project on Vercel

1. Go to [vercel.com](https://vercel.com) -> **Add New** -> **Project**.
2. Import the GitHub repository.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: leave default.
5. Do **not** deploy yet - set environment variables first (next step), then deploy.

### 3. Environment variables (Vercel dashboard)

**Project -> Settings -> Environment Variables**

| Variable | Scope | Notes |
|---|---|---|
| `RESEND_API_KEY` | Production, Preview | Resend API key. Server-side only. Never use `NEXT_PUBLIC_`. |
| `CONTACT_TO_EMAIL` | Production, Preview | Inbox that receives contact form messages. |
| `CONTACT_FROM_EMAIL` | Production, Preview | Verified Resend sender (e.g. `Portfolio <onboarding@resend.dev>` for testing, or your domain). |
| `UPSTASH_REDIS_REST_URL` | Production, Preview | From the Upstash Redis REST API panel. |
| `UPSTASH_REDIS_REST_TOKEN` | Production, Preview | From the Upstash Redis REST API panel. |
| `SITE_URL` | Production, Preview | Canonical URL (e.g. `https://your-domain.com`) for sitemap and Open Graph. |

**Scope guidance**

- Set all five for **Production** and **Preview** so preview deployments can exercise the contact form safely.
- **Development** is optional on Vercel; local work uses `.env.local` instead.
- After adding or changing vars, **redeploy** so the new values are picked up.

### 4. Deploy

Trigger a production deploy from the Vercel dashboard (or push to `main`). Note your production URL (e.g. `https://your-site.vercel.app`).

### 5. Verify security headers in production

Replace the URL with your production domain:

```bash
curl.exe -sI https://your-site.vercel.app
```

Confirm these response headers are present:

- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security`

Confirm `X-Powered-By` is **absent**.

### 6. Smoke-test the contact form

Submit the form on the live site once. Check that the email arrives at `CONTACT_TO_EMAIL`. If it fails, check Vercel function logs - the API never returns provider error details to the browser.

## Updating resume content

Edit only `data/resume.ts`. Add jobs, projects, or skills there; components read from that file.

After deploy, set `SITE_URL` in Vercel (Production + Preview) to your real domain so sitemap/OG URLs stay correct.
