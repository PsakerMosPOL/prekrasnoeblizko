
'use client';

import Link from 'next/link';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Набор для рисования на камнях',
      price: '2 490 ₽',
      originalPrice: '2 890 ₽',
      image: 'https://readdy.ai/api/search-image?query=Rock%20painting%20art%20kit%20with%20painted%20stones%20as%20ladybugs%20and%20bees%2C%20red%20ladybugs%20with%20black%20spots%20and%20yellow%20bees%20with%20black%20stripes%2C%20natural%20stones%20painted%20as%20insects%2C%20craft%20supplies%20in%20minimalist%20kraft%20paper%20packaging%20with%20green%20clover%20leaf%20logo%20on%20brown%20cardboard%20box%2C%20sustainable%20art%20materials%2C%20clean%20simple%20presentation%2C%20environmentally%20conscious%20design%20with%20branded%20packaging&width=300&height=300&seq=prod1-rocks-logo&orientation=squarish',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Набор для росписи деревянной шкатулки "Memories"',
      price: '3 750 ₽',
      originalPrice: null,
      image: 'https://readdy.ai/api/search-image?query=Wooden%20jewelry%20box%20painting%20kit%20in%20sustainable%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20minimalist%20brown%20paper%20box%20with%20wooden%20box%20inside%2C%20eco-friendly%20art%20supplies%2C%20natural%20materials%20presentation%20with%20branded%20green%20clover%20logo%20on%20cardboard%2C%20simple%20clean%20design%2C%20environmentally%20conscious%20craft%20kit%2C%20organic%20cardboard%20packaging&width=300&height=300&seq=prod2-memories-logo&orientation=squarish',
      badge: 'Эксклюзив'
    },
    {
      id: 3,
      name: 'Набор для создания флорариума',
      price: '1 890 ₽',
      originalPrice: '2 200 ₽',
      image: 'https://readdy.ai/api/search-image?query=Complete%20terrarium%20kit%20in%20sustainable%20kraft%20packaging%20with%20green%20clover%20leaf%20logo%2C%20minimalist%20brown%20cardboard%20box%20with%20branded%20green%20clover%20symbol%2C%20eco-friendly%20botanical%20supplies%20with%20glass%20container%2C%20natural%20materials%20presentation%2C%20simple%20clean%20design%20with%20logo%20branding%2C%20environmentally%20conscious%20gardening%20kit%2C%20organic%20textures&width=300&height=300&seq=prod3-terrarium-logo&orientation=squarish',
      badge: 'Скидка'
    },
    {
      id: 4,
      name: 'Набор "Лавандовое окно"',
      description: 'Три керамических горшочка в декоративном кашпо с почвой и семенами лаванды',
      price: '2 650 ₽',
      originalPrice: null,
      image: 'https://readdy.ai/api/search-image?query=Lavender%20window%20garden%20kit%20with%20three%20small%20ceramic%20pots%20in%20decorative%20planter%20box%2C%20lavender%20seeds%20packets%2C%20potting%20soil%20bags%2C%20all%20in%20minimalist%20kraft%20paper%20packaging%20with%20green%20clover%20leaf%20logo%20on%20brown%20cardboard%2C%20sustainable%20brown%20cardboard%20presentation%20with%20branded%20clover%20symbol%2C%20eco-friendly%20gardening%20supplies%2C%20natural%20materials%2C%20clean%20aesthetic%20design&width=300&height=300&seq=prod4-lavender-logo&orientation=squarish',
      badge: 'Новинка'
    }
  ];

  return (
    <section className="py-20 bg-white" data-product-shop>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-stone-800 mb-4">
            Рекомендуемые товары
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Популярные наборы в экологичной упаковке
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group border border-stone-200">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-none text-xs font-light text-white ${
                      product.badge === 'Хит продаж' ? 'bg-amber-700' :
                      product.badge === 'Скидка' ? 'bg-stone-700' :
                      product.badge === 'Новинка' ? 'bg-stone-600' :
                      product.badge === 'Эксклюзив' ? 'bg-amber-800' :
                      'bg-amber-800'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="aspect-square overflow-hidden bg-stone-50 relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-none shadow-sm transition-colors">
                      <i className="ri-heart-line text-stone-600 hover:text-amber-700"></i>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-light text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-sm text-stone-600 mb-3 font-light leading-relaxed">
                      {product.description}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-light text-stone-900">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-stone-500 line-through font-light">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-none font-light text-sm transition-colors whitespace-nowrap border border-amber-800">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-none font-light text-lg transition-colors cursor-pointer whitespace-nowrap border border-amber-800">
              Все товары
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
