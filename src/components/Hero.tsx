import { PlayCircle, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative hero-gradient px-6 pb-12 pt-4 md:pt-16 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        <div className="z-10 text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0866ff]/10 px-4 py-1 rounded-full border border-primary/20">
            <Zap className="w-4 h-4 text-primary fill-primary" />
            <span className="font-mono text-xs font-semibold tracking-wider text-primary">EL FUTURO ES HOY</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[48px] font-extrabold text-on-background leading-tight tracking-tight">
            Domina la <span className="text-primary">Inteligencia</span> Artificial
          </h1>
          <p className="font-sans text-base text-on-surface-variant max-w-lg mx-auto md:mx-0 leading-relaxed">
            Aprende las herramientas que están transformando el mundo. Cursos prácticos, dinámicos y diseñados para llevarte de cero a nivel profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-vibrant-orange hover:brightness-110 text-pure-white px-8 py-4 rounded-full font-heading font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 cursor-pointer"
            >
              Ver Cursos
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vibrant-orange/10 rounded-full blur-3xl"></div>
          <img 
            alt="Estudiante entusiasmado usando laptop con elementos gráficos de IA y tecnología moderna" 
            className="w-full h-auto rounded-3xl relative z-10 shadow-2xl object-cover" 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
