import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Nav } from "@/components/nav"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nikhil Swaraj - Software Developer",
  description: "Software Developer & Cyber Security Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1B2A4A] text-white min-h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

