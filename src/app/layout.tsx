import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elias Opstad - Nettside',
  description: 'Dette er min personlige nettside',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return(
    <html lang="no">
      <body className="scroll-smooth bg-white text-grey-900">
        <Navbar />
        <main className='pt-20'>{children}</main> {/*Padding for sticky navbar*/}
      </body>
    </html>
  )
}