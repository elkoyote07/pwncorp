# PwnCorp - "The Most Secure Corp That Never Was"

A deliberately vulnerable web application built for penetration testing practice. Hack your way from zero to shell through a realistic multi-stage attack chain.

Built with Next.js. Breaks with creativity.

---

## What is this?

PwnCorp simulates **SecureCorp Industries**, a fictional company with an internal employee portal full of security misconfigurations and vulnerabilities. Your mission: go from an unauthenticated visitor to achieving **Remote Command Execution (RCE)** on the server.

This is **not** a single-exploit box. It's a chain. Each stage feeds the next — just like a real-world pentest.

## The Challenge

| Stage | Skill Tested | Difficulty |
|-------|-------------|------------|
| 1. Reconnaissance | Enumeration & OSINT | Easy |
| 2. Information Disclosure | API Fuzzing | Easy |
| 3. Sensitive Data Exposure | File Discovery | Easy-Medium |
| 4. Authentication Bypass | Credential Reuse | Easy |
| 5. Remote Code Execution | OS Command Injection | Medium |

**Goal:** Execute arbitrary commands on the server as the running user.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
git clone https://github.com/elkoyote07/pwncorp.git
cd pwncorp
pnpm install
pnpm dev
```

The app will be available at `http://localhost:3000` and accessible from your network on `http://<your-ip>:3000`.

### Recommended Setup

Run PwnCorp on a **Kali Linux** VM or any isolated environment. Point your browser (or Burp Suite) at it and start hacking.

## Rules of Engagement

1. **No peeking at the source code** — that defeats the purpose
2. Start from the landing page like a real attacker would
3. Use your favorite tools: browser DevTools, curl, Burp Suite, gobuster, etc.
4. Document your findings as you go — practice writing a pentest report

## Hints (only if you're stuck)

<details>
<summary>Hint 1 - Where to start</summary>
What's the first thing a crawler looks at?
</details>

<details>
<summary>Hint 2 - Something is leaking</summary>
Developers love leaving debug endpoints enabled.
</details>

<details>
<summary>Hint 3 - Old habits die hard</summary>
Backup files on a web server? That's never a good sign.
</details>

<details>
<summary>Hint 4 - Getting in</summary>
Sometimes the credentials are literally written down for you.
</details>

<details>
<summary>Hint 5 - The final step</summary>
Network diagnostic tools that take user input... what could go wrong?
</details>

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Intentional Vulnerabilities:** Yes.

## Disclaimer

This application is **intentionally vulnerable**. It is designed exclusively for:

- Penetration testing practice
- CTF-style challenges
- Security training and education

**DO NOT** deploy this on a production server or any public-facing environment. **DO NOT** use the techniques learned here against systems you don't own or have explicit authorization to test.

Use responsibly. Hack ethically.

## License

MIT
