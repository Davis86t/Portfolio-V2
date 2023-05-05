import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html className="h-full" lang="en">
      <Head />
      <body className="h-full w-[100%] overflow-x-hidden bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
