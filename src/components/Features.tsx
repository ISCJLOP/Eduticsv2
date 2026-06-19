import { Cloud, Target, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 md:py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-6 glass-card rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-lg">
          <div className="bg-primary/10 p-4 rounded-xl">
            <Cloud className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-on-surface font-sans">100% Online</h4>
            <p className="text-sm font-sans text-on-surface-variant">Plataforma disponible 24/7</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 glass-card rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-lg">
          <div className="bg-vibrant-orange/10 p-4 rounded-xl">
            <TrendingUp className="w-8 h-8 text-vibrant-orange" />
          </div>
          <div>
            <h4 className="font-bold text-on-surface font-sans">Nivel Competitivo</h4>
            <p className="text-sm font-sans text-on-surface-variant">A la vanguardia del mercado</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 glass-card rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-lg">
          <div className="bg-tertiary/10 p-4 rounded-xl">
            <Target className="w-8 h-8 text-tertiary" />
          </div>
          <div>
            <h4 className="font-bold text-on-surface font-sans">Tus metas, nuestra prioridad</h4>
            <p className="text-sm font-sans text-on-surface-variant">Seguimiento personalizado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
