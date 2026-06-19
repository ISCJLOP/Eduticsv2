import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [buttonText, setButtonText] = useState('Enviar Mensaje');
  const [buttonStyle, setButtonStyle] = useState('bg-primary');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText('Enviando...');
    
    const form = e.target as HTMLFormElement;
    
    // Use FormData to extract values
    const data = new FormData(form);
    
    try {
      const scriptURL = import.meta.env.VITE_APPSCRIPT_WEBHOOK_URL || 'https://script.google.com/macros/s/AKfycbwRTrnoQQWBdTyNBeC_KPCplc1-Kf7QlF9ZzVTCCnvv0bqMx7SVHoqgfJmkFeiZbNYR/exec'; 
      
      await fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' });

      setButtonText('¡Enviado con éxito!');
      setButtonStyle('bg-tertiary');
      
      setTimeout(() => {
        setButtonText('Enviar Mensaje');
        setButtonStyle('bg-primary');
        form.reset();
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar:', error);
      setButtonText('Error. Intenta de nuevo.');
      setButtonStyle('bg-red-500');
      
      setTimeout(() => {
        setButtonText('Enviar Mensaje');
        setButtonStyle('bg-primary');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-container-low py-20" id="contacto">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h2 className="font-heading text-[48px] leading-[56px] tracking-tight font-extrabold text-on-surface">
            ¿Listo para <span className="text-vibrant-orange">comenzar</span>?
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-md">
            Déjanos tus datos y un asesor se pondrá en contacto contigo para resolver todas tus dudas sobre nuestros programas académicos.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 bg-pure-white rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-sans text-sm text-on-surface-variant">Llámanos</p>
                <p className="font-sans font-bold text-on-surface">+52 1 999 142 3080</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-pure-white rounded-2xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-vibrant-orange/10 flex items-center justify-center text-vibrant-orange">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-sans text-sm text-on-surface-variant">Correo</p>
                <p className="font-sans font-bold text-on-surface">contacto@edutics.mx</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl shadow-xl w-full max-w-lg mx-auto md:mx-0">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold tracking-wider text-on-surface-variant uppercase">Nombre</label>
                <input 
                  required
                  name="Nombre"
                  className="w-full bg-surface-bright border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-sans text-sm" 
                  placeholder="Tu nombre" 
                  type="text" 
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-xs font-semibold tracking-wider text-on-surface-variant uppercase">Email</label>
                <input 
                  required
                  name="Email"
                  className="w-full bg-surface-bright border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-sans text-sm" 
                  placeholder="correo@ejemplo.com" 
                  type="email" 
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold tracking-wider text-on-surface-variant uppercase">Teléfono</label>
              <input 
                required
                name="Telefono"
                className="w-full bg-surface-bright border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-sans text-sm" 
                placeholder="962 000 0000" 
                type="tel" 
              />
            </div>
            <div className="space-y-1">
              <label className="font-mono text-xs font-semibold tracking-wider text-on-surface-variant uppercase">Mensaje</label>
              <textarea 
                required
                name="Mensaje"
                className="w-full bg-surface-bright border border-outline-variant rounded-xl p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none font-sans text-sm" 
                placeholder="¿En qué podemos ayudarte?" 
                rows={4}
              ></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className={`w-full ${buttonStyle} text-on-primary py-4 rounded-full font-heading font-semibold text-base shadow-lg transition-all active:scale-[0.98] mt-2 disabled:opacity-70`}
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
