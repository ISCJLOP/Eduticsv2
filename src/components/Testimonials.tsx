import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Rivera",
      role: "Desarrollador Junior",
      content: "El curso de Python enfocado a IA fue un antes y un después en mi carrera. La metodología es 100% práctica y ahora automatizo tareas en mi trabajo que me tomaban horas.",
      course: "Analisis de datos con Python",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Mariana López",
      role: "Especialista de Marketing",
      content: "El Taller de 1 día de IA para contenido ahorró la mitad de mi tiempo semana a semana en la agencia. Las herramientas enseñadas son de punta y las apliqué desde el día uno.",
      course: "Creación de contenido Express",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Daniela Torres",
      role: "Productora Audiovisual",
      content: "Tomé el Curso Avanzado de creación de contenido Multimedia y revolucionó mis tiempos de entrega. Integrar video y audio hiperrealista ha subido la calidad de todas mis producciones.",
      course: "Multimedia con IA",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Fernando García",
      role: "Emprendedor / CEO",
      content: "Implementé IA Aplicada en mi negocio y optimicé el flujo de atención al cliente. El enfoque en resultados reales es justo lo que necesitaba para escalar mis procesos.",
      course: "IA Aplicada para Negocios",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jorge Mendoza",
      role: "Consultor Tecnológico",
      content: "La Ingeniería de Prompt Avanzada es de otro nivel. Aprender la arquitectura detrás de un buen prompt me permitió ofrecer mejores integraciones de IA a mis clientes corporativos.",
      course: "Ingeniería de Prompt (Élite)",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="bg-pure-white py-20" id="testimonios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-[32px] leading-10 font-bold text-on-surface">
            Lo que dicen <span className="text-primary">nuestros estudiantes</span>
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto">
            Descubre cómo nuestros cursos de Inteligencia Artificial han impulsado las carreras de cientos de profesionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-surface-container-low p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant hover:border-primary/20 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vibrant-orange text-vibrant-orange" />
                ))}
              </div>
              <p className="font-sans text-sm text-on-surface-variant italic mb-8 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-heading font-bold text-on-surface mb-1">{testimonial.name}</p>
                  <p className="font-sans text-[10px] font-semibold tracking-wider text-primary border border-primary/20 px-2.5 py-0.5 bg-primary/5 rounded-full inline-block">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
