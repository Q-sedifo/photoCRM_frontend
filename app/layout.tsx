import { Geist_Mono, Roboto, Oxanium } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"
import { cn } from "@/lib/utils";
import Providers from './providers';

const oxaniumHeading = Oxanium({ subsets: ['latin'], variable: '--font-heading' });

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable, oxaniumHeading.variable)}
    >
      <body className="relative">
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
