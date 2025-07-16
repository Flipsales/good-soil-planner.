import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Good Soil Planner",
  description: "Align Your Faith, Family & Fortune",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
