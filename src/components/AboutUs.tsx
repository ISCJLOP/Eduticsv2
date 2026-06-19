import { Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="bg-surface py-20" id="sobre-nosotros">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vibrant-orange/10 rounded-full blur-2xl"></div>
          <img 
            alt="Colaboración en EDUTICS" 
            className="w-full h-auto rounded-3xl relative z-10 shadow-xl object-cover" 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">Nuestra Misión</span>
          </div>
          <h2 className="font-heading text-4xl md:text-[40px] font-bold text-on-background leading-tight">
            Transformando la <span className="text-primary">Educación</span> en Tapachula
          </h2>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            En EDUTICS Tapachula nos apasiona liderar la transformación del futuro educativo a través 
            de la Inteligencia Artificial. Creemos que la innovación tecnológica debe estar al alcance 
            de todos.
          </p>
          <p className="font-sans text-base text-on-surface-variant leading-relaxed">
            Nuestra misión es empoderar a estudiantes, profesionales y emprendedores con 
            herramientas tecnológicas de vanguardia, impartiendo conocimientos altamente prácticos 
            que puedan aplicarse de manera inmediata y efectiva en el mundo real.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <p className="font-heading text-3xl font-extrabold text-primary mb-1">+500</p>
              <p className="font-sans text-sm text-on-surface-variant">Estudiantes Capacitados</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-extrabold text-vibrant-orange mb-1">100%</p>
              <p className="font-sans text-sm text-on-surface-variant">Enfoque Práctico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
