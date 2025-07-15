import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          <Shield className="mr-4 h-12 w-12" />
          <h1 className="text-4xl font-bold tracking-tight">Katakan Tidak pada Narkoba</h1>
        </div>
        <p className="text-center mt-4 text-xl text-red-100">
          Edukasi • Pencegahan • Perlindungan
        </p>
      </div>
    </header>
  )
}