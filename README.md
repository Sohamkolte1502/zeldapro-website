# Zeldapro website

Enterprise marketing site (React + TypeScript + Vite). Contact forms (including **General Enquiry** at `/contact/general-enquiry`) POST JSON to `VITE_FORM_ENDPOINT`. A small Node API in `server/` sends submissions via Nodemailer using SMTP settings from `.env`.

### Local contact form + email

1. Copy `.env.example` to `.env` and fill in SMTP values (`SMTP_HOST`, `SMTP_EMAIL`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO`). For Gmail, use your address as `SMTP_EMAIL` and an [App Password](https://support.google.com/accounts/answer/185833) as `SMTP_PASS`.
2. Keep `VITE_FORM_ENDPOINT=/api/contact` so Vite proxies to the API (see `vite.config.ts`).
3. In one terminal: `npm run server`
4. In another: `npm run dev`
5. Submit a form; the API emails `MAIL_TO` with `replyTo` set to the visitor’s business email.

Production: deploy the static site and run the contact API separately (or behind your reverse proxy at the same `/api/contact` path). Set `VITE_FORM_ENDPOINT` to the public API URL at build time.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
