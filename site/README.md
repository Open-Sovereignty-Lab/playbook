# OSL Playbook — Website

This folder is the published website for the Tribal Data Sovereignty Cloud Playbook. It's an [Astro](https://astro.build/) site using the [Starlight](https://starlight.astro.build/) docs theme, deployed to GitHub Pages at:

**https://open-sovereignty-lab.github.io/playbook/**

Every page on the site is a file in this folder. Adding or editing a page means adding or editing a file here — no CMS, no database. This README explains where files go, how a file's location becomes its URL, and the one structural quirk that surprises everyone (`docs/docs/`).

> **Just want to add a page?** Jump to [Adding a page](#adding-a-page). For the no-local-setup GitHub-web-editor path, see [`CONTRIBUTING.md`](../CONTRIBUTING.md).

---

## The two kinds of pages

There are exactly two kinds of pages, and they live in different places:

| Kind | Lives in | Examples | When to use |
|------|----------|----------|-------------|
| **Marketing / standalone pages** | `src/pages/` | homepage (`/`), `/about`, the 404 page | One-off, custom-designed pages. Hand-built layouts. Rare. |
| **Documentation pages** | `src/content/docs/docs/` | every guide, template, tool, case study | **Almost everything you'll add.** Markdown content that shows up in the left sidebar. |

**If you're adding playbook content, you want a documentation page.** That's the rest of this guide.

---

## Why are there two `docs` folders? (`src/content/docs/docs/`)

This is the part that confuses everyone. Yes, the path really is `.../content/docs/docs/...`, with `docs` twice. Each one means something different:

```
site/src/content/docs/docs/guides/module-0/index.md
                     ╰──┬──╯╰─┬─╯
                        │     │
        (1) framework-required   (2) our choice: the "/docs" URL section
```

**First `docs/` — required by the framework.**
Astro stores content "collections" at `src/content/<collection-name>/`. Starlight's collection is named `docs`, so its root folder *must* be `src/content/docs/`. We can't rename this without reconfiguring the whole site. Think of it as plumbing.

**Second `docs/` — our choice, and it sets the URL.**
By default Starlight would serve docs at the site **root** (`/guides/...`). But our root is already taken by the custom marketing homepage and `/about` (the `src/pages/` files above). To keep all playbook documentation tucked under a tidy `/docs/...` address — separate from the marketing pages — we put every doc inside a second `docs/` folder. **That second folder is literally the `/docs` you see in the URL.**

So:

- First `docs` = "this is the Starlight content collection" (plumbing, never changes)
- Second `docs` = "this is the `/docs` section of the website" (where your content goes)

**You will always be working inside the second one: `src/content/docs/docs/`.**

---

## File location → URL

The folder path under `src/content/docs/docs/` becomes the URL path. A file named `index.md` becomes the folder's own page; any other filename becomes a page named after the file. Everything is prefixed with the site base `/playbook`.

| File | Live URL |
|------|----------|
| `src/content/docs/docs/index.mdx` | `/playbook/docs/` |
| `src/content/docs/docs/guides/index.md` | `/playbook/docs/guides/` |
| `src/content/docs/docs/guides/example-guide.md` | `/playbook/docs/guides/example-guide/` |
| `src/content/docs/docs/guides/module-0/index.md` | `/playbook/docs/guides/module-0/` |
| `src/content/docs/docs/guides/module-0/glossary.md` | `/playbook/docs/guides/module-0/glossary/` |
| `src/content/docs/docs/templates/example-template.md` | `/playbook/docs/templates/example-template/` |

The four top-level content sections are:

- `guides/` — long-form guidance, plus the structured **Module** and **Phase** material (e.g. `guides/module-0/`, `guides/phase-1/`)
- `templates/` — reusable legal/technical templates
- `tools/` — calculators and utilities
- `case-studies/` — real-world tribal examples

> **A folder needs an `index.md`** to have its own landing page (e.g. `guides/module-0/index.md` is the Module 0 overview). Without one, the folder still works as a container but `/docs/guides/module-0/` has no page of its own.

---

## Adding a page

1. **Pick the right section folder** under `src/content/docs/docs/` (`guides/`, `templates/`, `tools/`, or `case-studies/`). For a multi-page topic, make a subfolder (like `module-0/`) with its own `index.md`.

2. **Create a `.md` file** there. The fastest start is to copy an existing example in the same section (`example-guide.md`, `example-template.md`, etc.) and replace its contents.

3. **Add the required frontmatter** at the very top. The build **fails** without `title` and `description`:

   ```markdown
   ---
   title: Data Classification for Tribal Nations
   description: How to classify tribal data by sensitivity before moving it to the cloud.
   sidebar:
     order: 2          # optional — controls position within its sidebar group (lower = higher up)
     label: Data Classes # optional — shorter label for the sidebar (defaults to title)
   ---

   Your content starts here, in normal Markdown.
   ```

4. **Make it appear in the sidebar.** Where it shows up depends on the section — see [The sidebar](#the-sidebar) below. For `templates/`, `tools/`, and `case-studies/`, new pages appear **automatically**. For `guides/` Module/Phase material, you must add the page to the sidebar config by hand.

5. **Link to repo files** (Terraform, `.docx` legal templates, etc.) using raw GitHub URLs — see `templates/example-template.md` for the pattern.

6. **Open a pull request.** The PR build validates your frontmatter. After a maintainer merges, the live site updates in ~2 minutes.

---

## The sidebar

The left-hand navigation is configured in [`astro.config.mjs`](./astro.config.mjs), in the `sidebar:` array. There are **two ways** a section gets its pages, and mixing them up causes duplicate entries (this has bitten us before):

**1. Autogenerated** — Starlight lists every page in a directory automatically:

```js
{ label: "Templates", autogenerate: { directory: "docs/templates" } },
```

Drop a new file into `templates/` and it shows up — no config change needed. We use this for **Templates, Tools, and Case Studies**.

**2. Explicit list** — you name each page (and its order) by hand:

```js
{
  label: "Module 0: Sovereignty in the Digital Age",
  items: [
    { slug: "docs/guides/module-0" },                   // the index.md
    { slug: "docs/guides/module-0/tribal-sovereignty" },
    // ...
  ],
},
```

We use this for the **Module 0** and **Phase 1–3** sections so we control the exact teaching order. When you add a page under `module-0/` or a phase, **add its `slug` to this list** or it won't appear.

> ⚠️ **The duplication gotcha.** `autogenerate` recurses into *every* subfolder. Because `module-0/` and `phase-*/` live inside `guides/`, autogenerating `docs/guides` would re-list all of that Module/Phase content that we already list by hand — showing each page twice. That's why `Guides` is an **explicit two-item list** (its landing page + the contributor reference), *not* an autogenerate. **Don't add `{ autogenerate: { directory: "docs/guides" } }`** — it will duplicate the whole Module/Phase tree.
>
> Rule of thumb: a given directory should be covered by **either** an autogenerate **or** explicit items — never both.

---

## Running it locally (optional)

You don't need this to add a page — the GitHub web editor + PR flow works fine. But to preview changes on your own machine:

```bash
cd site
npm install     # one time
npm run dev     # serve at http://localhost:4321/playbook/
```

Other commands:

| Command | What it does |
|---------|--------------|
| `npm run dev` | Live-reloading local preview |
| `npm run build` | Production build into `dist/` — run this to catch frontmatter/slug errors before pushing |
| `npm run preview` | Serve the built `dist/` to check the real output |

Deployment is automatic: merging to `main` triggers the GitHub Actions workflow in [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

---

## Folder map

```
site/
├── astro.config.mjs        # site config + the sidebar definition (edit this to change nav)
├── package.json            # dependencies and npm scripts
├── public/                 # static files served as-is (favicon, etc.)
└── src/
    ├── pages/              # standalone pages: homepage, /about, 404
    ├── components/         # reusable building blocks for the standalone pages
    ├── styles/             # theme.css — site-wide colors and typography
    ├── content.config.ts   # registers the Starlight "docs" collection (don't edit casually)
    └── content/
        └── docs/           # (1) the Starlight collection root — required name
            └── docs/       # (2) the "/docs" URL section — YOUR CONTENT GOES HERE
                ├── index.mdx        # the /docs landing page
                ├── guides/          # guides + Module/Phase material
                ├── templates/
                ├── tools/
                └── case-studies/
```

When in doubt, you're almost always adding a `.md` file inside `src/content/docs/docs/<section>/`.
