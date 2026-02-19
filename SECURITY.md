# Security Policy

## Reporting a Vulnerability

If you find a security vulnerability in this repository — particularly in Terraform templates, CloudFormation configurations, key management scripts, or other infrastructure code — **please do not open a public GitHub issue.**

Instead, report it privately through one of the following:

- **GitHub Private Vulnerability Reporting:** Use the [Security tab](https://github.com/Open-Sovereignty-Lab/playbook/security/advisories/new) in this repository
- **Email:** Contact us through [580strategies.com](https://580strategies.com/)

Please include:
- A description of the vulnerability
- The file(s) or component(s) affected
- Steps to reproduce or a proof of concept if possible
- Potential impact

We will acknowledge your report within 5 business days and work with you on a fix before any public disclosure.

---

## Scope

This repository contains infrastructure-as-code, configuration templates, and documentation intended to help Tribal Nations implement sovereign cloud architectures. Security issues of particular concern include:

- Insecure default configurations in Terraform or CloudFormation templates
- Key management weaknesses that could undermine data sovereignty guarantees
- IAM misconfigurations that grant excessive permissions
- Hardcoded credentials or secrets

---

## Disclosure Policy

We follow responsible disclosure. We ask that you give us reasonable time to address a vulnerability before making it public, and we will credit researchers who report issues responsibly.
