import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Aazain Khan",
  description: "Aaazain Khan's personal website",
  metadataBase: new URL("https://aazainkhan.github.io"),
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`} 
      suppressHydrationWarning
    >
      <head>
  <link rel="preconnect" href="https://static.cdn-luma.com" crossOrigin="anonymous" />
  <link rel="preconnect" href="https://static.cloudflareinsights.com" crossOrigin="anonymous" />
  <link
    rel="preload"
    href="/fonts/PPEditorialNew-UltralightItalic.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
  {/* Preload small critical CSS chunks if needed (kept minimal) */}
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
