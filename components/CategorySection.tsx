
'use client';

import Link from 'next/link';

export default function CategorySection() {
  const categories = [
    {
      title: 'Наборы для детского творчества',
      description: 'Развивающие творческие наборы в эко-упаковке',
      image: 'https://readdy.ai/api/search-image?query=Children%20art%20craft%20supplies%20in%20sustainable%20kraft%20paper%20packaging%20with%20green%20clover%20leaf%20logo%2C%20minimalist%20eco-friendly%20design%20with%20branded%20clover%20symbol%2C%20natural%20brown%20cardboard%20boxes%2C%20simple%20clean%20presentation%20with%20logo%20branding%2C%20organic%20materials%2C%20environmentally%20conscious%20kids%20products%2C%20earthy%20tones%2C%20zero%20waste%20packaging&width=400&height=300&seq=cat1-craft-logo&orientation=landscape',
      link: '/categories/kids-crafts'
    },
    {
      title: 'Совместное творчество',
      description: 'Семейные наборы в минималистичной упаковке',
      image: 'https://readdy.ai/api/search-image?query=Family%20craft%20kit%20in%20minimalist%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20eco-friendly%20brown%20paper%20boxes%20with%20branded%20clover%20symbol%2C%20simple%20sustainable%20design%2C%20natural%20materials%2C%20clean%20presentation%20with%20logo%20branding%2C%20environmentally%20conscious%20family%20products%2C%20organic%20textures%2C%20zero%20waste%20approach&width=400&height=300&seq=cat2-craft-logo&orientation=landscape',
      link: '/categories/family-crafts'
    },
    {
      title: 'Декоративные наборы',
      description: 'Элегантные материалы в крафт-упаковке',
      image: 'https://readdy.ai/api/search-image?query=DIY%20decoration%20kit%20in%20elegant%20kraft%20paper%20packaging%20with%20green%20clover%20leaf%20logo%2C%20minimalist%20brown%20cardboard%20design%20with%20branded%20clover%20symbol%2C%20sustainable%20materials%2C%20clean%20aesthetic%20with%20logo%20branding%2C%20eco-friendly%20presentation%2C%20natural%20textures%2C%20simple%20elegant%20boxes%2C%20zero%20waste%20packaging&width=400&height=300&seq=cat3-craft-logo&orientation=landscape',
      link: '/categories/decorative'
    },
    {
      title: 'Наборы для выращивания',
      description: 'Экологичные наборы для домашнего сада',
      image: 'https://readdy.ai/api/search-image?query=Plant%20growing%20kit%20in%20sustainable%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20eco-friendly%20seed%20packets%20with%20branded%20clover%20symbol%2C%20natural%20brown%20paper%20boxes%2C%20minimalist%20garden%20design%20with%20logo%20branding%2C%20organic%20materials%2C%20environmentally%20conscious%20presentation%2C%20earthy%20sustainable%20packaging&width=400&height=300&seq=cat4-craft-logo&orientation=landscape',
      link: '/categories/growing-kits'
    },
    {
      title: 'Наборы для флорариумов',
      description: 'Создайте сад в натуральной упаковке',
      image: 'https://readdy.ai/api/search-image?query=Terrarium%20kit%20in%20minimalist%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20sustainable%20brown%20cardboard%20boxes%20with%20branded%20clover%20symbol%2C%20eco-friendly%20botanical%20supplies%2C%20natural%20materials%20presentation%20with%20logo%20branding%2C%20clean%20simple%20design%2C%20environmentally%20conscious%20gardening%20products%2C%20organic%20textures&width=400&height=300&seq=cat5-craft-logo&orientation=landscape',
      link: '/categories/terrariums'
    },
    {
      title: 'Ароманаборы',
      description: 'Натуральные ароматы в эко-упаковке',
      image: 'https://readdy.ai/api/search-image?query=Natural%20aromatherapy%20kit%20in%20sustainable%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20minimalist%20brown%20paper%20boxes%20with%20branded%20clover%20symbol%2C%20eco-friendly%20essential%20oil%20presentation%20with%20logo%20branding%2C%20organic%20materials%2C%20clean%20simple%20design%2C%20environmentally%20conscious%20wellness%20products%2C%20earthy%20packaging&width=400&height=300&seq=cat6-craft-logo&orientation=landscape',
      link: '/categories/aromatherapy'
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Категории товаров
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Выберите идеальный набор в экологичной упаковке
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <div className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group border border-stone-200">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-light text-stone-800 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-stone-600 mb-4 font-light text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center text-amber-700 font-light text-sm">
                    Посмотреть товары
                    <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
