export function TypeSection() {
    return (
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Jenis-jenis Narkoba</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Kategori Umum:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Stimulan</strong> - Mempercepat aktivitas otak (kokain, metamfetamin)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Depresan</strong> - Memperlambat aktivitas otak (alkohol, heroin)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Halusinogen</strong> - Mengubah persepsi dan realitas (LSD, PCP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Ganja</strong> - Mempengaruhi koordinasi dan memori (marijuana)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                    <span><strong>Inhalan</strong> - Bahan kimia yang dapat dihirup (lem, bensin)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Langkah-langkah Pencegahan:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Edukasi diri tentang risiko dan konsekuensinya</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>Pilih teman yang membuat keputusan sehat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Kembangkan strategi mengatasi stres yang sehat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>Berlatih mengatakan "tidak" dengan percaya diri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-sm font-bold mr-3 mt-0.5">5</span>
                    <span>Cari bantuan dari orang dewasa terpercaya saat dibutuhkan</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    )
}
