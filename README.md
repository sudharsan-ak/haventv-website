# Haven TV Launcher website

Official product site for [Haven TV Launcher](https://github.com/sudharsan-ak/haventv-launcher), built with **Next.js 16, React 19 and TypeScript**.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000. The build is statically exported so no database, backend, or environment variables are required.

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

Static output is written to `out/`.

## Architecture

- `app/` contains App Router entry points, metadata, and global styles.
- `components/` contains the interactive product showcase, navigation and screenshot lightbox.
- `lib/data.ts` contains the release links and screenshot metadata.
- `public/images/` contains **11 self-hosted and optimized Haven screenshots**. No remote GitHub hotlinks are required.

The page uses the approved Haven V7 visual design with sticky responsive navigation. The review toolbar was removed for production; Mist is the default palette. The launcher theme selector still lets visitors compare Kingdom and Tide.

## Deployment

Import this GitHub repository into Vercel as a Next.js project. `next build` creates a static export (`out/`). Keep deployments separate from the Android launcher repository.

## Releases

The primary download link currently targets [Haven v1.0](https://github.com/sudharsan-ak/haventv-launcher/releases/tag/v1.0) and the release APK is hosted by GitHub. Review `lib/data.ts` when publishing newer releases.

## Screenshot credits

Product captures were provided by the developer. Some screenshots show third-party media artwork and photographic wallpaper sources (including Bing and Earth View). Verify redistribution permissions for those images before public launch.
