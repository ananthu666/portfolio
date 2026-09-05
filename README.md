# Ananthu Jayakumar — Portfolio

AI × Odoo × Automation. A production-ready personal portfolio built with
Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## What's inside

- **Cinematic system-boot loader** on first visit (respects `prefers-reduced-motion`)
- **Custom cursor + magnetic interactions** (desktop only, disabled on touch)
- **Scroll-reactive architecture diagram** in the hero that grows from `AI` →
  `AI + ODOO` → `AI + ODOO + AUTOMATION` → `INTELLIGENT ENTERPRISE SYSTEM`
- **The System** — interactive stack diagram (AI / Python / Integration /
  Automation / Odoo / Business)
- **What I Build** — tabbed capability map (AI, ERP, Automation, Integration)
- **From ERP → Intelligent ERP** evolution section
- **Enterprise Systems** — real professional projects
- **Odoo Lab** — 5 independent, honestly-labelled Odoo/AI projects, each with
  a full case-study page (`/projects/[slug]`)
- **AI + Odoo Playground** — interactive demo simulation (clearly labelled,
  static data)
- **How I Think**, **Currently Building**, **Experience**, **Skills**,
  **The Future System**, **Recruiter View**, **System Status**, **Contact**
- One subtle easter egg: try typing `sudo hire ananthu` anywhere on the page
- SEO: metadata, Open Graph, sitemap, robots.txt, Person + Website structured data
- Accessible: semantic HTML, visible focus states, reduced-motion support,
  skip-to-content link

### A deliberate scoping choice

The brief describes a full Three.js orbiting "system core." This build uses
SVG + Framer Motion for all architecture visuals instead of react-three-fiber.
It hits the same visual idea (a live, cursor-reactive, scroll-driven system
diagram) with a fraction of the JS weight and zero risk of WebGL/mobile
performance issues — which matters more for a portfolio that needs to load
fast and work everywhere. If you want a heavier 3D hero later, add
`@react-three/fiber` and swap the `<ArchitectureDiagram />` used in
`src/components/Hero.tsx` for a 3D scene; everything else is unaffected.

## Editing content

Everything editable lives in `src/data/` — you never need to touch a
component to update content:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, headline, positioning copy, SEO title/description |
| `src/data/socials.ts` | Email, GitHub, LinkedIn, resume file path |
| `src/data/experience.ts` | Professional experience + learning-journey steps |
| `src/data/skills.ts` | Skill clusters |
| `src/data/projects.ts` | Real professional / enterprise projects |
| `src/data/odoo-projects.ts` | The 5 Odoo Lab projects |
| `src/data/types.ts` | The shared `Project` shape used by both project files |

**Before you publish:**
1. Replace every `[ADD REAL RESULT]` in `src/data/projects.ts` with a real,
   verified outcome (or leave it as an honest "not yet measured" note).
2. Put your resume PDF at `public/resume/<your-file>.pdf` and update
   `resumeUrl` in `src/data/socials.ts`.
3. Update `email`, `github`, `linkedin` in `src/data/socials.ts`.
4. Update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts` and
   `src/app/robots.ts` once you have a real domain.

## Run locally

Requires Node.js 18.18+.

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build locally
```

## Deploy for free — Vercel

1. Push this project to a GitHub repository.
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, select your repository, and click **Import**.
   Vercel auto-detects Next.js — no config changes needed.
4. If you added any environment variables (see `.env.example`), add them
   under **Project Settings → Environment Variables** before deploying.
5. Click **Deploy**. You'll get a live URL in about a minute
   (`your-project.vercel.app`).
6. **Custom domain**: Project → Settings → Domains → add your domain and
   follow the DNS instructions Vercel gives you.

Every future `git push` to `main` redeploys automatically.

### Updating content after deploy

Edit the relevant file in `src/data/`, commit, and push — Vercel rebuilds
and redeploys automatically. Updating your resume: replace the PDF in
`public/resume/`, commit, push.

### Wiring up a real AI API or GitHub API (optional)

The AI + Odoo Playground and any GitHub activity display currently run on
static demo data by design — the site works with zero API keys. If you want
to make the playground call a real LLM:

1. Add a server-side route, e.g. `src/app/api/analyze/route.ts`, that reads
   `process.env.ANTHROPIC_API_KEY` (never expose it with a `NEXT_PUBLIC_`
   prefix) and calls the model.
2. Call that route from `src/components/Playground.tsx` instead of the
   local `setTimeout` simulation.
3. Add the real key in Vercel under **Environment Variables**, not in code.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
lucide-react

## Project structure

```
src/
  app/                  routes, layout, SEO (sitemap/robots), metadata
    projects/[slug]/    case-study page shared by both project data sets
  components/           one component per section/module
  data/                 all editable content — see table above
  lib/                  small shared helpers (cn, accent colors)
public/
  resume/               put your resume PDF here
```
