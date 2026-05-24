# Contributing to the Tribal Data Sovereignty Cloud Playbook

Thank you for your interest in contributing. This playbook exists to give Tribal Nations practical, trustworthy tools — and that only works if the community behind it is honest, rigorous, and rooted in real tribal experience.

You don't need to be a developer to contribute. Policy experience, legal expertise, lived experience working in tribal IT, and knowledge of specific tribal data initiatives are all valuable here.

---

## Who Should Contribute

- **Tribal IT staff and data sovereignty officers** — you know what actually works in practice
- **Technologists** with cloud infrastructure, security, or DevOps experience
- **Attorneys** familiar with tribal law, federal Indian law, or SaaS contracting
- **Policy practitioners** working in Indigenous data governance

If you're unsure whether your contribution fits, open a General Feedback issue and ask. We'd rather hear from you than not.

---

## Ways to Contribute

### 1. Report an inaccuracy
If something in the playbook is technically wrong, legally outdated, or misrepresents a tribal example — please tell us. Use the **Report Inaccurate Content** issue template.

### 2. Suggest a case study
Know of a Tribal Nation doing interesting work on data sovereignty, cloud infrastructure, or data governance? Use the **Suggest a Case Study** issue template. We want real examples, not hypotheticals.

### 3. Request a template or tool
Need a legal template, Terraform config, or cost calculator that doesn't exist yet? Use the **Request a Template or Tool** issue template.

### 4. Submit a pull request
If you want to contribute content directly:

1. Fork the repository
2. Create a branch: `git checkout -b your-branch-name`
3. Make your changes
4. Open a pull request with a clear description of what you changed and why

All pull requests to `main` require review before merging.

### 5. Add a page to the website

Every page on the website is a markdown file in this repo under `site/src/content/docs/docs/`. Adding a page is the same as editing one.

> **New to the site's structure?** [`site/README.md`](site/README.md) is the full reference — it explains where files go, how a file's path becomes its URL, why there are two nested `docs/` folders, and how the sidebar is wired (including how to avoid duplicate nav entries). The quick version is below.

**Easy path (no local setup):**

1. Browse to a similar page on the live site (e.g., an existing guide).
2. Click **"Edit this page on GitHub"** in the page footer.
3. Edit the file in GitHub's web editor (or use it as a template — copy the content into a new file in the same folder).
4. Click **"Propose changes"** → opens a pull request.
5. The PR build will validate your frontmatter. A maintainer will review and merge.
6. The site updates within ~2 minutes of merge.

**Local preview (optional):**

```bash
cd site
npm install        # one-time
npm run dev        # serves http://localhost:4321/playbook/
```

**Page conventions:**

- Every page needs a `title` and `description` in frontmatter (the build will fail without them).
- Pages live in section folders: `guides/`, `templates/`, `tools/`, `case-studies/`.
- Use `sidebar.order: N` in frontmatter to control the order pages appear in the left nav.
- When linking to repo artifacts (terraform files, .docx legal templates, etc.), use raw GitHub URLs — see `templates/example-template.md` for the pattern.

---

## Standards for Contributions

**Accuracy first.** Every factual claim should be verifiable. If you're adding technical guidance, it should reflect tested configurations — not theoretical ones.

**Tribal voices matter.** Content about a specific Tribal Nation should be sourced from that nation's own published materials, official statements, or direct consultation. Don't speak for communities without their input.

**Cite your sources.** Add references for statistics, legal citations, and platform-specific technical details. Include a date where information may change (e.g., pricing, product features).

**Plain language.** Tribal IT staff and leaders will use these materials directly. Avoid jargon where plain language works just as well.

---

## What We Won't Accept

- Content that misrepresents tribal sovereignty or treats it as a compliance checkbox
- Vendor promotional content disguised as neutral guidance
- Unverified claims about specific tribal nations
- Code that hasn't been tested or reviewed for security

---

## Questions?

Open a General Feedback issue or reach out through [580strategies.com](https://580strategies.com/).
