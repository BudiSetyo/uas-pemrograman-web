import { Mail } from 'lucide-react';

export function AdditionalSupportSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sumber Daya Tambahan</h2>
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Untuk informasi lebih lanjut dan dukungan, kunjungi situs web resmi Badan Narkotika Nasional:
          </p>
          <a
            href="https://bnn.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            <Mail className="mr-2 h-5 w-5" />
            Kunjungi BNN.go.id
          </a>
        </div>
      </div>
    </section>
  )
}