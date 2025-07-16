export function SlideSection() {
    return (
        <section className="mb-16">          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Kesadaran Pencegahan Narkoba</h3>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Kesadaran pencegahan dan edukasi narkoba" 
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Edukasi adalah langkah pertama dalam pencegahan narkoba
              <br></br>
              Bagian sini nanti image nya dibikin slider aja biar bagus
            </p>
          </div>
        </section>
    )
}
