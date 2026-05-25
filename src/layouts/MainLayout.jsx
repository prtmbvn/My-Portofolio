// src/layouts/MainLayout.jsx

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-mono text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-[#0d1117] transition-colors duration-300">
      {/* PENTING: 
        1. 'overflow-hidden' telah dihapus agar scroll peramban bisa bekerja.
        2. Menggunakan <div> bukan <main>, karena tag <main> biasanya
           dipakai sebagai pembungkus utama konten halaman di page.jsx.
        3. Ditambahkan 'flex flex-col' agar footer/section bawah selalu di bawah.
      */}
      {children}
    </div>
  )
}
