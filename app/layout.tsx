export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Good Soil Planner</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
