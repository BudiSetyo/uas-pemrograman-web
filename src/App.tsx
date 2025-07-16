import { Header, Footer, FormSection, IntroSection, SlideSection, TypeSection, NarcoticsInfoSection, HarmfulEffectsSection } from './components';
import { Mail } from 'lucide-react';
import audioPesan from './assets/audio/audio.mp3';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <main className="container mx-auto px-6 py-12">

        <IntroSection />

        <SlideSection />

        <TypeSection />

        <NarcoticsInfoSection />

        <HarmfulEffectsSection />
        {/* Audio Message */}
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

        <FormSection />


        {/* Resources Section */}
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
      </main>

      <Footer />
    </div>
  )
}

export default App;