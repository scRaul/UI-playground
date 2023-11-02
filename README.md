This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Notes

For every componen in which its meant to be used as a 'singleton' instance ( meant to edit the file itself to add data to it) and which we will be using in this project also ( SideBar.tsx for example) we should add a _Component.tsx ( e.g \_SideBar.tsx ) and use the underscored version in this project (showcase the non underscored version).
