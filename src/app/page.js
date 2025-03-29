import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { jsonLdScriptProps } from "react-schemaorg";
import Script from "next/script";

export const metadata = {
  title: "Khasiat Jahe - Memperkuat Daya Tahan Tubuh | Produk Alami",
  description: "Jahe merupakan rempah alami yang memperkuat daya tahan tubuh. Temukan manfaat jahe untuk imunitas, anti peradangan, pencernaan, kesehatan jantung, dan meredakan mual.",
  keywords: ["jahe", "khasiat jahe", "manfaat jahe", "rempah alami", "daya tahan tubuh", "kesehatan"],
  openGraph: {
    title: "Khasiat Jahe - Memperkuat Daya Tahan Tubuh | Produk Alami",
    description: "Temukan manfaat jahe untuk imunitas, anti peradangan, dan kesehatan lainnya",
    images: [
      {
        url: "/ginger-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahe: Rempah Alami untuk Kesehatan",
      }
    ],
    type: "website",
    locale: "id_ID"
  }
};

export default function Home() {
  let first_paragraph = `Jahe merupakan rempah alami yang memperkuat daya tahan tubuh Anda. Sejak zaman penjajahan, jahe telah menjadi salah satu rempah yang paling dicari. Khasiatnya yang luar biasa membuat jahe menjadi primadona di dunia pengobatan tradisional. Jahe juga dikenal memiliki sifat anti-inflamasi dan dapat membantu meredakan mual. Dapatkan sekarang.`;
  let second_paragraph = `Jahe adalah rempah alami untuk memperkuat daya tahan tubuh anda. Penjajahan mencari rempah rempah yaa jahe salah satunya. Grab it now.`;
  let heading_product = `"Kuatkan badan anda dengan jahe"`;
  
  // Data array for benefits
  const benefits = [
    {
      id: 1,
      title: "Memperkuat Imunitas",
      description: "Jahe mengandung antioksidan yang membantu meningkatkan sistem kekebalan tubuh dan melawan infeksi.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      )
    },
    {
      id: 2,
      title: "Anti Peradangan",
      description: "Senyawa gingerol dalam jahe memiliki efek anti-inflamasi dan dapat membantu mengurangi nyeri otot.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      )
    },
    {
      id: 3,
      title: "Meredakan Mual",
      description: "Jahe efektif meredakan mual, termasuk morning sickness, mabuk perjalanan, dan efek samping kemoterapi.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      )
    },
    {
      id: 4,
      title: "Kesehatan Jantung",
      description: "Jahe dapat menurunkan kolesterol, mengatur gula darah, dan mengurangi risiko penyakit jantung.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      )
    },
    {
      id: 5,
      title: "Melancarkan Pencernaan",
      description: "Jahe membantu menggerakkan makanan dari perut ke usus halus, mengurangi kembung dan melancarkan pencernaan.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      )
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Jahe",
    "image": "/ginger-image.jpg",
    "description": "Jahe merupakan rempah alami yang memperkuat daya tahan tubuh Anda. Khasiatnya yang luar biasa membantu meningkatkan imunitas dan meredakan berbagai keluhan kesehatan.",
    "category": "Rempah Alami",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Script
        id="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <section className="hero-section flex flex-col md:flex-row min-h-[70vh] p-4 md:p-6 max-w-7xl mx-auto">
          {/* Left side - Product Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-2 md:p-4">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image 
                src="/ginger-image.jpg" 
                alt="Rempah jahe alami untuk meningkatkan daya tahan tubuh" 
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Right side - Product Description */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-2 md:p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{heading_product}</h1>
            <p className="text-gray-700 mb-6">
              {first_paragraph}
            </p>
            <p className="text-gray-700 mb-6">
              {second_paragraph}
            </p>
            <Link href="#benefits" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 self-start"
              aria-label="Pelajari manfaat jahe lebih lanjut">
              Lihat Manfaat
            </Link>
          </div>
        </section>
        
        {/* Benefits section */}
        <section id="benefits" className="bg-amber-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">5 Manfaat Utama Jahe</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <article key={benefit.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="bg-amber-100 p-4 rounded-full mb-4 animate-pulse hover:animate-ping delay-150 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      {benefit.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/manfaat-jahe" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
