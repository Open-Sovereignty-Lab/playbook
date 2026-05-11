---
title: Example Guide — How to Adapt This Page
description: A reference example showing the structure expected of guide pages. Replace this content when authoring a real guide.
sidebar:
  order: 1
  label: Example Guide
---

This is a reference page demonstrating the structure of a guide. **Replace this entire file** when authoring a real guide; do not delete it without adding an alternative reference doc.

## Section heading

Use H2 headings (`##`) for top-level sections within a guide. The right-hand table of contents auto-populates from H2 and H3 headings.

### Subsection

H3 headings appear as nested entries in the right-hand TOC.

## Code blocks

Fenced code blocks are syntax-highlighted automatically:

```hcl
resource "aws_s3_bucket" "tribal_data" {
  bucket = "tribal-sovereign-data"
}
```

## Links to repo artifacts

When a page describes a downloadable artifact (terraform module, legal template, etc.), link to it via raw GitHub URL:

> [Download `aws-tribal-data-addendum.docx` →](https://github.com/Open-Sovereignty-Lab/playbook/raw/main/legal-templates/aws-tribal-data-addendum.docx)

## Cross-links to other docs

Link to other docs with site-relative URLs that include the `/playbook/` base path:

> See the [Templates section](/playbook/docs/templates/) for downloadable contract addendums.
