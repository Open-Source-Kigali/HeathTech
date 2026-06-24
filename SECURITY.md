
# Security Policy

## Supported Versions

| Branch | Supported |
|---|---|
| `main` | ✅ Yes |
| `development` | ✅ Yes |
| Older branches | ❌ No |

---

## Reporting a Vulnerability

**Do NOT report security vulnerabilities through public GitHub issues.**

Report vulnerabilities by:
1. Opening a **private security advisory** on GitHub under **Security → Advisories**
2. Or contacting a maintainer directly

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact

You will receive a response within **48 hours**.

---

## Security Principles

- Access tokens stored in memory only — never localStorage
- Refresh tokens stored in httpOnly cookies set by the backend
- Role-based access control enforced on all routes
- Patient data never returned to unauthorized users
- Passwords hashed with bcrypt — never stored in plain text
