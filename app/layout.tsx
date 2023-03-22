import './globals.css'

export const metadata = {
  title: 'Cinex',
  description: 'Cinex movie search app',
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
