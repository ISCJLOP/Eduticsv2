import { Menu } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant shadow-sm transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        <Logo />
        <div className="hidden md:flex gap-6 items-center">
          <a className="font-sans text-base text-primary border-b-2 border-primary pb-1" href="#cursos">Cursos</a>
          <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#sobre-nosotros">Sobre Nosotros</a>
          <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#testimonios">Testimonios</a>
          <a className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors" href="#contacto">Contacto</a>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-heading font-semibold text-base hover:brightness-110 hover:-translate-y-1 hover:shadow-lg transition-all shadow-md active:scale-95"
          >
            Inscribirse
          </button>
        </div>
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile Menu (Optional expansion logic could go here) */}
      {isOpen && (
        <div className="md:hidden bg-surface p-6 flex flex-col gap-4 border-b border-outline-variant shadow-lg absolute w-full">
          <a className="font-sans text-base text-primary" href="#cursos" onClick={() => setIsOpen(false)}>Cursos</a>
          <a className="font-sans text-base text-on-surface-variant" href="#sobre-nosotros" onClick={() => setIsOpen(false)}>Sobre Nosotros</a>
          <a className="font-sans text-base text-on-surface-variant" href="#testimonios" onClick={() => setIsOpen(false)}>Testimonios</a>
          <a className="font-sans text-base text-on-surface-variant" href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-heading font-semibold text-base mt-2 hover:brightness-110 hover:-translate-y-1 hover:shadow-lg transition-all active:scale-95"
          >
            Inscribirse
          </button>
        </div>
      )}
    </nav>
  );
}
