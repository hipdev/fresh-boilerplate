import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple boilerplate with Next.js + TailwindCSS + Shadcn + Bun + Jest + Testing Library',
  description:
    'Simple boilerplate with Next.js + TailwindCSS + Shadcn + Bun + Jest + Testing Library',
  themeColor: 'black',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-neutral-800'>{children}</body>
    </html>
  )
}
