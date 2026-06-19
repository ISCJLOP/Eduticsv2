import { ArrowRight, Brain, Briefcase, Code, Video, Zap } from 'lucide-react';

export default function Courses() {
  const whatsappNumber = "5219991423080";
  const getWhatsAppLink = (courseName: string) => 
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Me interesa más información acerca de ${courseName}`)}`;

  const courses = [
    {
      id: "python-ia",
      title: "Introducción al análisis de datos con Python",
      description: "Domina los fundamentos de la programación enfocada al procesamiento de grandes volúmenes de datos.",
      image: "/python-curso.jpg",
      badge: "Destacado",
      badgeColor: "bg-primary text-on-primary",
      categoryIcon: <Code className="w-4 h-4" />,
      categoryLabel: "Python & IA",
      categoryColor: "text-primary",
      level: "Básico"
    },
    {
      id: "contenido-ia",
      title: "Creación de contenido con IA en 1 día",
      description: "Optimiza tu tiempo y genera contenido de alto impacto para tus redes sociales en una sola jornada.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1lwANg7_Q1dVlbVEBfn_ErGiu9BwB21VOML29T5ROeR0WYY5F_fz4bfu4LiXnMFAHphm0SYiF-axvycx-Tgy9uzSw5fs5tTlnrbMhkrBVHSFaIbmGgpxmKpVtgE1q2BcBSRAuNM9bG1ZOu-Zxyo2Jg4gu1t8p-sTTtz2gbhe3IcSVe9IDnPIYNJiwaldjj9yeikCAr5kvnJ_zCitpM3IgGO6Lvr-K0-4NEu2qjXp1hU-0VX0jAuDC7EsA_ir6kqC-gqyYJIIYKQhf",
      badge: "Express",
      badgeColor: "bg-vibrant-orange text-pure-white",
      categoryIcon: <Zap className="w-4 h-4 fill-vibrant-orange" />,
      categoryLabel: "Taller Intensivo",
      categoryColor: "text-vibrant-orange",
      level: "Básico"
    },
    {
      id: "multimedia-ia",
      title: "Curso Avanzado de creación de contenido con IA",
      description: "Lleva tus producciones al siguiente nivel integrando herramientas de video, audio e imagen hiperrealista.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmzyH4_4rSWNZ7ZzELtQEbEsLYgh4EgewE6ghxaNpsZKzw7F4XjSD-HYC5OUvunIAQSdDeU8Gww82tjXAiePU_o8SKev8umQWp-NSTCkVitzszVzQ0rE3FlNy5vL55QasHTcQlKP9CWdZvU5WnpT1dUt3x-B4Nwrg7AEESGfGDCvCfYvsxu-KCQcdcLoHvFQ5HKRFCp4wzR0cf6fU4J17EMe_Rxy-mNg76gMaSCat1HzNdcStsBb1bMq6axNdeyC5U0ACVxgu-ZMPE",
      badge: "Nuevo",
      badgeColor: "bg-tertiary text-on-primary",
      categoryIcon: <Video className="w-4 h-4" />,
      categoryLabel: "Multimedia",
      categoryColor: "text-primary",
      level: "Avanzado"
    },
    {
      id: "ia-aplicada",
      title: "Curso Inteligencia Artificial Aplicada",
      description: "Implementa soluciones reales en tu negocio. Automatización, atención al cliente y optimización de flujos de trabajo.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7qmCU_iKQImbEVUJU3hb-dZvaEMCGHVgYXLfUw_14FVg8vH-Ip50X_r0En35rnn6X205fJ4UkEvOnvN0VZaf_heZUoy9IV_f3vu3QYkLSOq7BUT-dxF90WnELGBVc-cOwQFwODTYiOiwgflXoiHSbGlCThk4hw2SDlmpyEXQ1NvyMQxdD6dp4jGTf9TUFXlOUrCiFk407kFyfrDSqXhvj1JP7-RvBbiQ36nk44u7gUYgkF0ciPEJgAuRa7OXAihFR5Vu4qkVyLLx1",
      badge: "Certificado",
      badgeColor: "bg-tertiary text-on-primary",
      categoryIcon: <Briefcase className="w-4 h-4" />,
      categoryLabel: "Corporativo & Emprendedores",
      categoryColor: "text-tertiary",
      level: "Intermedio"
    },
    {
      id: "prompt-avanzada",
      title: "Ingeniería de Prompt Avanzada",
      description: "Aprende a hablar el lenguaje de las máquinas. Crea arquitecturas de prompts para resultados perfectos.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-Ah97S7JrvUt3ilaoDcjvKmXIti2Kj2uvP6sE1lET0hHvOt35HHc_2Yk4aaSmYmxD81zQiAxRsP48Yh7uC0K1TXPMeA8V5Ey8ZyX19MPUySNFNDOqhMHcninUeW1wcKkivaaDdZ0boAi_SKlOymhC5qYKH8bVuwmptI00xxGPg_KYuAHX_tN4aAFBnIdFZp_-oc00JFRQNnbZPsLiLXwPcM9JpBO7befGdWYfglYeZpD4LpT7H3HOWz4FB1T6eDsePKuiWq9B42O",
      badge: "Mastery",
      badgeColor: "bg-[#191c1f] text-pure-white",
      categoryIcon: <Brain className="w-4 h-4 text-vibrant-orange" />,
      categoryLabel: "Mastery",
      categoryColor: "text-vibrant-orange",
      level: "Avanzado"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="cursos">
      <div className="text-center mb-12 space-y-2">
        <h2 className="font-heading text-[32px] leading-10 font-bold text-on-surface">
          Explora Nuestros <span className="text-primary">Programas</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-sans">
          Formación especializada en Inteligencia Artificial con enfoque práctico y resultados inmediatos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="course-card-hover bg-pure-white border border-outline-variant rounded-3xl overflow-hidden flex flex-col shadow-sm">
            <div className="relative h-48 overflow-hidden">
              <img 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                src={course.image} 
              />
              <div className={`absolute top-4 right-4 ${course.badgeColor} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md`}>
                {course.badge}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className={`flex items-center gap-1.5 mb-2 ${course.categoryColor}`}>
                {course.categoryIcon}
                <span className="font-mono uppercase text-[10px] font-semibold tracking-wider">{course.categoryLabel}</span>
              </div>
              <h3 className="font-heading text-xl mb-4 leading-tight font-bold text-on-surface line-clamp-2">{course.title}</h3>
              <p className="font-sans text-sm text-on-surface-variant mb-8 flex-grow">
                {course.description}
              </p>
              <div className="mt-auto pt-4 border-t border-outline-variant">
                <div className="flex items-center justify-between mb-4">
                   <span className={`font-bold text-lg ${course.categoryColor}`}>Nivel: {course.level}</span>
                </div>
                <a 
                  href={getWhatsAppLink(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-3 rounded-xl font-heading font-semibold text-sm hover:bg-surface-tint transition-colors shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Me interesa
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
