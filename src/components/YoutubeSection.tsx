export function YoutubeSection() {
  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Video Anti-Narkoba</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Tonton dan temukan alasan kuat untuk hidup bebas dari narkoba.
          </p>
          <div className="flex items-center justify-center mb-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/M6QcUp5smjU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-4 italic text-center">
            "Jadilah versi terbaik dari dirimu. Katakan tidak pada narkoba, katakan ya pada masa depan!"
          </p>
        </div>
      </div>
    </section>
  )
}