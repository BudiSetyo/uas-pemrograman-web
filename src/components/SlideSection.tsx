// export function SlideSection() {
//     return (
//         <section className="mb-16">          
//           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Kesadaran Pencegahan Narkoba</h3>
//             <div className="flex justify-center">
//               <img 
//                 src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
//                 alt="Kesadaran pencegahan dan edukasi narkoba" 
//                 className="rounded-lg shadow-md max-w-full h-auto"
//               />
//             </div>
//             <p className="text-sm text-gray-600 text-center mt-4">
//               Edukasi adalah langkah pertama dalam pencegahan narkoba
//               <br></br>
//               Bagian sini nanti image nya dibikin slider aja biar bagus
//             </p>
//           </div>
//         </section>
//     )
// }

export function SlideSection() {
    return (
        <section className="mb-16">          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Kesadaran Pencegahan Narkoba</h3>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-200">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../public/pexels-photo-5699456.jpeg?cs=tinysrgb&w=800" 
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../public/pexels-photo-5699457.jpeg" 
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                        alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="../public/pexels-photo-5699458.jpeg" 
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              Edukasi adalah langkah pertama dalam pencegahan narkoba
            </p>
          </div>
        </section>
    )
}
