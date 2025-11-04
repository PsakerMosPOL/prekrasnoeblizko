
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-amber-400 mr-3">
                <i className="ri-leaf-line text-3xl"></i>
              </div>
              <div className="text-center">
                <div className="text-lg font-light text-stone-200 leading-tight tracking-wide">Прекрасное</div>
                <div className="text-base font-['Pacifico'] text-amber-400 leading-none italic">близко</div>
              </div>
            </Link>
            <p className="text-stone-400 mb-6 leading-relaxed font-light text-sm">
              Экологичные наборы для творчества в минималистичной крафт-упаковке. Простота, качество и забота о природе в каждом продукте.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-700 hover:bg-amber-700 rounded-none transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-700 hover:bg-amber-700 rounded-none transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-700 hover:bg-amber-700 rounded-none transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-stone-700 hover:bg-amber-700 rounded-none transition-colors cursor-pointer">
                <i className="ri-pinterest-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-stone-200">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Все товары
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Категории
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-stone-200">Категории</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories/kids-crafts" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Детское творчество
                </Link>
              </li>
              <li>
                <Link href="/categories/family-crafts" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Совместное творчество
                </Link>
              </li>
              <li>
                <Link href="/categories/decorative" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Декоративные наборы
                </Link>
              </li>
              <li>
                <Link href="/categories/growing-kits" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Выращивание растений
                </Link>
              </li>
              <li>
                <Link href="/categories/terrariums" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Флорариумы
                </Link>
              </li>
              <li>
                <Link href="/categories/aromatherapy" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Ароманаборы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-stone-200">Поддержка</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Возврат и обмен
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Экологичность
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer font-light text-sm">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm font-light">
              © 2024 Прекрасное близко. Экологичное творчество для всех.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-400 hover:text-stone-200 text-sm transition-colors cursor-pointer font-light">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-200 text-sm transition-colors cursor-pointer font-light">
                Условия использования
              </a>
              <a href="#" className="text-stone-400 hover:text-stone-200 text-sm transition-colors cursor-pointer font-light">
                Экологические стандарты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
