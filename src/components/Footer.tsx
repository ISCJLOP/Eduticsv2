import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-on-background w-full py-12 text-pure-white">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-6">
        <Logo className="brightness-0 invert opacity-90 scale-90" />
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-sans text-sm text-[#e1e2e7] hover:text-[#b3c5ff] transition-colors opacity-80 hover:opacity-100" href="https://www.facebook.com/profile.php?id=61576408135775" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="font-sans text-sm text-[#e1e2e7] hover:text-[#b3c5ff] transition-colors opacity-80 hover:opacity-100" href="https://www.instagram.com/eduticstapmx/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="font-sans text-sm text-[#e1e2e7] hover:text-[#b3c5ff] transition-colors opacity-80 hover:opacity-100" href="https://wa.me/5219991423080" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
        <div className="font-sans text-sm opacity-80 text-center md:text-right">
          © {new Date().getFullYear()} EDUTICS Tapachula. Transformando el futuro con IA.
        </div>
      </div>
    </footer>
  );
}
