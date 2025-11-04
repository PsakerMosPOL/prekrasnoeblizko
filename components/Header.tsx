
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-stone-50 shadow-none border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center text-amber-700 mr-3">
              <i className="ri-leaf-line text-3xl"></i>
            </div>
            <div className="text-center">
              <div className="text-lg font-light text-stone-800 leading-tight tracking-wide">Прекрасное</div>
              <div className="text-base font-['Pacifico'] text-amber-700 leading-none italic">близко</div>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
              Главная
            </Link>
            <Link href="/products" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
              Товары
            </Link>
            <Link href="/categories" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
              Категории
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
              О нас
            </Link>
            <Link href="/contact" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-amber-700 transition-colors cursor-pointer">
              <i className="ri-search-line text-xl"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-amber-700 transition-colors cursor-pointer">
              <i className="ri-heart-line text-xl"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-stone-700 hover:text-amber-700 transition-colors cursor-pointer relative">
              <i className="ri-shopping-cart-line text-xl"></i>
              <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-stone-700 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
                Главная
              </Link>
              <Link href="/products" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
                Товары
              </Link>
              <Link href="/categories" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
                Категории
              </Link>
              <Link href="/about" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
                О нас
              </Link>
              <Link href="/contact" className="text-stone-700 hover:text-amber-700 transition-colors cursor-pointer font-light">
                Контакты
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
