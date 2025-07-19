import audioPesan from '../assets/audio/audio.mp3';

export function AudioSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Pesan Anti-Narkoba</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Dengarkan pesan penting tentang mengatakan tidak pada narkoba:
          </p>
          <div className="flex items-center justify-center mb-4">
            {/* Audio Only - Ganti src dengan file audio mp3/ogg jika ada, atau gunakan layanan pihak ketiga untuk YouTube audio only */}
            <audio controls className="w-full max-w-xs">
              <source src={audioPesan} type="audio/mpeg" />
              Browser Anda tidak mendukung pemutar audio.
            </audio>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic text-center">
            "Masa depan Anda lebih berharga daripada kesenangan sementara. Pilih hidup, pilih kesehatan, pilih impian Anda."
          </p>
        </div>
      </div>
    </section>
  )
}