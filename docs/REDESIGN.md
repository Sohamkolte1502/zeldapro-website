# Zeldapro redesign branch

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production / original site (unchanged on remote until you merge) |
| `backup/pre-redesign-2026-11-26` | Frozen snapshot of the site **before** redesign work (commit `6977752`) |
| `zeldapro-redesign` | Active redesign — all visual and homepage work happens here |

**Do not delete** `backup/pre-redesign-2026-11-26`.

## Preview the redesign

```bash
git checkout zeldapro-redesign
npm install
npm run dev
```

Open `http://localhost:5173`.

## Restore the original website

**Option A — stay on main (deployed original)**

```bash
git checkout main
npm run dev
```

**Option B — reset redesign branch to backup**

```bash
git checkout zeldapro-redesign
git reset --hard backup/pre-redesign-2026-11-26
```

**Option C — recover exact pre-redesign files on a new branch**

```bash
git checkout -b my-original backup/pre-redesign-2026-11-26
```

Vercel: point production to `main` until you intentionally deploy `zeldapro-redesign`.

## Merge policy

Do **not** merge `zeldapro-redesign` into `main` until you accept the redesign in review.