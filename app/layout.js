import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Luxury 5 Star Hotels & Resorts in India - Zuri Hotels & Resorts	',
//   description: 'Welcome to one of the best Luxury 5 star hotels & resorts in India for an experience ‘far beyond expectations’. And discover the true meaning of ‘Zuri’.',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
