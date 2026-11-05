# Bozemen Portfolio

Personal portfolio built with Next.js, React, TypeScript and Tailwind CSS. Includes selected work, contact links, English/Russian/Ukrainian translations and responsive navigation.

## Development

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```

```sh
pnpm lint
pnpm typecheck
pnpm build
```

Set `SITE_URL` to the public deployment URL for absolute social preview links. Local development defaults to `http://localhost:3000`.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router pages, layout and styles |
| `app/page.tsx` | Portfolio sections, translations and interactions |
| `app/layout.tsx` | Document layout, fonts and social metadata |
| `app/globals.css` | Responsive styles, colors and animations |
| `public/` | Static images served directly by the application |
| `public/favicon.svg` | Browser tab icon |
| `public/novashop-cover.png` | NovaShop project preview |
| `public/og.png` | Social sharing preview |
| `.gitignore` | Local files and build output excluded from Git |
| `.github/workflows/pages.yml` | Build checks and automatic GitHub Pages deployment |
| `eslint.config.mjs` | Next.js lint and TypeScript rules |
| `next.config.ts` | Next.js configuration |
| `package.json` | Dependencies and development commands |
| `pnpm-lock.yaml` | Exact dependency versions |
| `pnpm-workspace.yaml` | Native dependency build permissions |
| `postcss.config.mjs` | Tailwind CSS processing |
| `tsconfig.json` | TypeScript compiler settings and path aliases |
| `README.md` | Setup instructions and project map |

## Deployment

The live site is https://bozemenofficial.github.io/portfolio/ . Pushes to `main` run lint and build checks, then publish the static `out/` directory through GitHub Actions.

For another static host, run `pnpm build` and serve `out/`. Set `SITE_URL` to the origin and `NEXT_PUBLIC_BASE_PATH` to any subdirectory before building. The Pages workflow uses `/portfolio`; local development uses the root path.
