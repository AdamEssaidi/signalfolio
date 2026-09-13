# Signalfolio

Signalfolio is the personal portfolio and engineering blog of Adam Essaidi, a Software Engineer and Full-Stack Developer based in Rabat, Morocco.

It presents professional experience, education, technical skills, and selected information systems delivered for Moroccan universities and public institutions.

## Technology

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives and custom animated components
- Content Collections and MDX

## Run locally

Use Node.js 20.9 or newer. If `pnpm` is not available on Windows, enable it first:

```powershell
corepack enable
corepack prepare pnpm@11.19.0 --activate
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Or use npm for both installation and startup:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To test the production build locally:

```bash
pnpm build
pnpm start
```

## Site URL

For local development, copy `.env.example` to `.env.local` when you want to
override the site URL. Vercel detects its production URL automatically; set
`NEXT_PUBLIC_SITE_URL` only when using a custom domain. This value is used for
canonical links, Open Graph metadata, the sitemap, and `robots.txt`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Portfolio content

The primary portfolio data is maintained in [`src/data/resume.tsx`](./src/data/resume.tsx). Blog articles are stored in [`content`](./content).

## License

Released under the MIT License. See [`LICENSE`](./LICENSE) for the complete terms and notices.
