export function NarcoticsInfoSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Jenis Narkoba dan Efeknya</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Jenis Narkoba</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Efek Jangka Pendek</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Efek Jangka Panjang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Stimulan</td>
                <td className="border border-gray-300 px-4 py-3">Detak jantung meningkat, kewaspadaan, kecemasan</td>
                <td className="border border-gray-300 px-4 py-3">Masalah jantung, kecanduan, psikosis</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Depresan</td>
                <td className="border border-gray-300 px-4 py-3">Kantuk, kebingungan, pernapasan melambat</td>
                <td className="border border-gray-300 px-4 py-3">Kerusakan organ, kecanduan, risiko overdosis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Halusinogen</td>
                <td className="border border-gray-300 px-4 py-3">Halusinasi, panik, paranoia</td>
                <td className="border border-gray-300 px-4 py-3">Psikosis persisten, kerusakan otak</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Ganja</td>
                <td className="border border-gray-300 px-4 py-3">Koordinasi terganggu, masalah memori</td>
                <td className="border border-gray-300 px-4 py-3">Masalah pernapasan, gangguan kognitif</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}