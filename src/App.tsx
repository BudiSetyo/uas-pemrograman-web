import { Header } from './components';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800">Selamat Datang di Aplikasi Edukasi Narkoba</h2>
        <p className="mt-4 text-gray-600">
          Aplikasi ini bertujuan untuk memberikan informasi dan edukasi tentang bahaya narkoba serta cara pencegahannya.
        </p>
        {/* Additional content can be added here */}
      </main>
    </div>
  )}

  export default App;