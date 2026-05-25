import '@/app/globals.css'
import MainLayout from '@/layouts/MainLayout'
import Navbar from '@/components/Navbar'
import SocialSidebar from '@/components/SocialSidebar'

export default function RootLayout({ children }) {
  return (
    // 1. TAMBAHKAN 'scroll-smooth' DI SINI
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* 2. TAMBAHKAN WARNA DASAR DI BODY AGAR TEMA BEKERJA OPTIMAL */}
      <body className="bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <MainLayout>
          <Navbar />
          <SocialSidebar />
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
