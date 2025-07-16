import { Users, Phone, Heart } from 'lucide-react';

export function HarmfulEffectsSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Efek Berbahaya Penyalahgunaan Narkoba</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-red-50 rounded-lg">
            <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-red-800 mb-2">Kesehatan Fisik</h3>
            <p className="text-gray-700">
              Kerusakan organ, sistem kekebalan tubuh melemah, peningkatan risiko penyakit dan infeksi
            </p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-lg">
            <Users className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">Dampak Sosial</h3>
            <p className="text-gray-700">
              Hubungan rusak, masalah keluarga, kehilangan kepercayaan dan isolasi sosial
            </p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <Phone className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Kesehatan Mental</h3>
            <p className="text-gray-700">
              Depresi, kecemasan, paranoia, dan peningkatan risiko gangguan mental
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}