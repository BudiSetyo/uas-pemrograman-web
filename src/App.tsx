// Alan Nugraha, 240401010240, IF203, Pemrograman Web I
// Bambang Setyo Budi, 240401010242, IF203, Pemrograman Web I
// M. Syawal Saputra, 240401010071, IF203, Pemrograman Web I
import { Header, Footer, FormSection, IntroSection, SlideSection, TypeSection, NarcoticsInfoSection, HarmfulEffectsSection, YoutubeSection, AudioSection, AdditionalSupportSection } from './components';

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

        <YoutubeSection />

        <AudioSection />

        <FormSection />

        <AdditionalSupportSection />
      </main>

      <Footer />
    </div>
  )
}

export default App;