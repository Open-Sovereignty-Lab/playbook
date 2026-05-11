# Tribal Data Sovereignty Cloud Playbook

**An open-source framework helping Tribal Nations adopt major cloud platforms without ceding sovereign control over their data.**

**Live site:** [open-sovereignty-lab.github.io/playbook](https://open-sovereignty-lab.github.io/playbook/)

---

## What This Is

Tribal Nations face a fundamental paradox: modern cloud platforms can close the digital divide, but standard cloud contracts require surrendering data sovereignty. This playbook resolves that paradox through **cryptographic enforcement** — giving tribes technical, not just contractual, control over their data in the cloud.

The playbook is organized as a public documentation site backed by this repository.

### Available now

- **The framework** — a published site, a clear contribution path for non-developers, and resource categories (Guides, Templates, Tools, Case Studies) ready to receive content. See [CONTRIBUTING](./CONTRIBUTING.md) to add or revise material.

### In progress

Content is being authored externally and migrated into the repository as it is reviewed:

- **Implementation guides** — sovereignty principles, key custody, and platform-by-platform tradeoffs
- **Legal templates** — tribal data addendums for AWS, Salesforce, Azure, and GCP
- **Policy documents** — AI governance, data classification, incident response
- **Infrastructure-as-code** — Terraform sovereign landing zones
- **Cost calculators** — TCO modeling and sovereignty premium analysis
- **Case studies** — Tribal implementations sourced from the Nations themselves

Track what lands in [CHANGELOG.md](./CHANGELOG.md).

---

## The Problem We're Solving

Standard cloud contracts give providers access to tribal enrollment records, health data, cultural materials, and other sensitive information. This is not just a privacy issue — it is a **sovereignty issue**.

This playbook provides the tools for tribes to hold encryption keys outside the cloud, audit and deny every access request, revoke access instantly when consent is withdrawn, and maintain vendor independence through open data standards.

---

## Repository Structure

```
playbook/
├── site/                       # Astro + Starlight website source
│   └── src/content/docs/docs/  # all markdown surfaced on the site
│       ├── guides/             # long-form guidance
│       ├── templates/          # legal addendums, policy templates, IaC
│       ├── tools/              # calculators, scripts
│       └── case-studies/       # Tribal implementation case studies
├── infrastructure/             # raw Terraform, CloudFormation, Kubernetes
├── legal-templates/            # raw .docx/.pdf templates
├── policies/                   # raw policy artifacts
├── tools/                      # raw tool artifacts
├── examples/                   # raw example artifacts
└── .github/workflows/          # GitHub Actions for build + deploy
```

**Live site:** [open-sovereignty-lab.github.io/playbook](https://open-sovereignty-lab.github.io/playbook/) — auto-deployed from `main` whenever `site/**` changes.

---

## Who This Is For

- Tribal IT directors and CTOs
- Tribal data sovereignty officers
- Tribal legal counsel reviewing cloud contracts
- Vendors seeking to understand tribal data requirements

---

## Built With Tribal Communities

This playbook was developed in consultation with Tribal Nations and draws on real implementations. It is designed to be used by tribes, not just written about them.

---

## License

Released under the [MIT License](LICENSE) so any tribe or organization can freely use, adapt, and build on it.

---

## Questions or Partnerships

Interested in piloting this framework with your tribe or contributing to development?

**Contact:** [580strategies.com](https://580strategies.com/)

---

*A project of [Open Sovereignty Lab](https://github.com/Open-Sovereignty-Lab) — Presented at TribalNet 2026*
