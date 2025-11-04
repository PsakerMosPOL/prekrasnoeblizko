
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://readdy.ai/api/search-image?query=Minimalist%20eco-friendly%20craft%20paper%20packaging%2C%20natural%20kraft%20paper%20boxes%20and%20bags%2C%20sustainable%20packaging%20materials%2C%20earthy%20brown%20tones%2C%20clean%20simple%20design%2C%20organic%20textures%2C%20eco%20conscious%20branding%2C%20natural%20lighting%2C%20zen%20minimalist%20aesthetic%2C%20environmentally%20friendly%20materials%2C%20simple%20elegant%20presentation&width=1920&height=1080&seq=hero-craft&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            Творчество в каждой упаковке
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
            Экологичные наборы для творчества в минималистичной крафт-упаковке. Простота, качество и забота о природе.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-none font-light text-lg transition-colors cursor-pointer whitespace-nowrap border border-amber-800">
                Смотреть наборы
              </button>
            </Link>
            <Link href="/categories">
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-none font-light text-lg transition-colors cursor-pointer whitespace-nowrap">
                Все категории
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
