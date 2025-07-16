import { AlertTriangle } from "lucide-react";

export function IntroSection() {
    return (
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertTriangle className="mr-3 h-8 w-8 text-red-600" />
              Apa itu Narkoba?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Narkoba adalah <strong>zat kimia</strong> yang mempengaruhi cara kerja tubuh dan pikiran Anda. 
              Meskipun beberapa obat digunakan sebagai <em>obat-obatan</em> untuk mengobati penyakit, 
              yang lain digunakan secara ilegal dan dapat menyebabkan kerusakan serius pada <u>kesehatan fisik dan mental</u> Anda.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Memahami bahaya penyalahgunaan narkoba sangat penting untuk membuat keputusan yang tepat 
              dan melindungi diri Anda serta orang-orang terkasih dari efek buruk kecanduan.
            </p>
          </div>
        </section>
    )
}
