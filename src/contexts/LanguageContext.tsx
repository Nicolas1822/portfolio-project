import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrollador de Software',
    'hero.description': 'Mi objetivo profesional es seguir creciendo como desarrollador, utilizando mis habilidades y experiencia para diseñar y construir aplicaciones web escalables y eficientes. Busco oportunidades que me desafíen a ampliar mis conocimientos.',
    'hero.cta': 'Contáctame',
    'hero.resume': 'Ver CV',
    
    // Skills
    'skills.title': 'Habilidades',
    'skills.technical': 'Habilidades Técnicas',
    'skills.soft': 'Habilidades Blandas',
    'skills.collaboration': 'Colaboración',
    'skills.teamwork': 'Trabajo en equipo',
    'skills.communication': 'Comunicación asertiva',
    'skills.creativity': 'Creatividad e innovación',
    'skills.learning': 'Aprendizaje constante',
    'skills.adaptability': 'Adaptabilidad',
    
    // Experience
    'experience.title': 'Experiencia Profesional',
    'experience.grupomagin.role': 'Desarrollador de Software',
    'experience.grupomagin.period': 'Oct 2023 - Ago 2024',
    'experience.grupomagin.desc1': 'Desarrollar y mejorar los sistemas de información creados por la empresa.',
    'experience.grupomagin.desc2': 'Analizar y procesar requerimientos de los clientes internos.',
    'experience.grupomagin.desc3': 'Optimización de rendimiento.',
    'experience.grupomagin.desc4': 'Desarrollo back-end con tecnologías: Laravel, MySQL, GitHub, JSON, API Rest.',
    'experience.grupomagin.desc5': 'Desarrollo front-end con tecnologías: HTML5, CSS3, JavaScript, Bootstrap, jQuery.',
    
    'experience.comdata.role': 'Etapa Productiva - Soporte Técnico',
    'experience.comdata.period': 'May 2022 - Nov 2022',
    'experience.comdata.desc1': 'Mantenimiento de software, garantizando su funcionamiento óptimo.',
    'experience.comdata.desc2': 'Soporte técnico especializado en hardware, diagnóstico de problemas y reparación de equipos.',
    'experience.comdata.desc3': 'Atención y resolución eficiente de incidencias, ofreciendo asistencia técnica oportuna.',
    
    // Education
    'education.title': 'Educación',
    'education.cun.title': 'Ingeniería de Sistemas',
    'education.cun.institution': 'Corporación Unificada Nacional de Educación Superior CUN',
    'education.cun.period': 'Ago 2024 - Actualidad',
    'education.cun.desc': 'Cursando noveno semestre',
    
    'education.docker.title': 'Fundamentos de Docker',
    'education.docker.institution': 'Platzi',
    'education.docker.period': 'Jun 2024',
    
    'education.typescript.title': 'POO y Asincronismo con TypeScript',
    'education.typescript.institution': 'Platzi',
    'education.typescript.period': 'May 2023',
    
    'education.nodejs.title': 'Escuela Backend con NodeJS',
    'education.nodejs.institution': 'Platzi',
    'education.nodejs.period': 'Mar 2023 - Abr 2023',
    
    'education.sena.title': 'Tecnólogo en ADSI',
    'education.sena.institution': 'SENA Centro de Industria y Comercio',
    'education.sena.period': 'Oct 2020 - Mar 2022',
    'education.sena.desc': 'Análisis y Desarrollo de Sistemas de Información',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.github': 'GitHub',
    
    // Languages
    'languages.title': 'Idiomas',
    'languages.spanish': 'Español - Nativo',
    'languages.english': 'Inglés - Intermedio A2',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Software Developer',
    'hero.description': 'My professional goal is to continue growing as a developer, using my skills and experience to design and build scalable and efficient web applications. I seek opportunities that challenge me to expand my knowledge.',
    'hero.cta': 'Contact Me',
    'hero.resume': 'View Resume',
    
    // Skills
    'skills.title': 'Skills',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    'skills.collaboration': 'Collaboration',
    'skills.teamwork': 'Teamwork',
    'skills.communication': 'Assertive communication',
    'skills.creativity': 'Creativity & innovation',
    'skills.learning': 'Continuous learning',
    'skills.adaptability': 'Adaptability',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.grupomagin.role': 'Software Developer',
    'experience.grupomagin.period': 'Oct 2023 - Aug 2024',
    'experience.grupomagin.desc1': 'Develop and improve information systems created by the company.',
    'experience.grupomagin.desc2': 'Analyze and process requirements from internal clients.',
    'experience.grupomagin.desc3': 'Performance optimization.',
    'experience.grupomagin.desc4': 'Back-end development with: Laravel, MySQL, GitHub, JSON, API Rest.',
    'experience.grupomagin.desc5': 'Front-end development with: HTML5, CSS3, JavaScript, Bootstrap, jQuery.',
    
    'experience.comdata.role': 'Internship - Technical Support',
    'experience.comdata.period': 'May 2022 - Nov 2022',
    'experience.comdata.desc1': 'Software maintenance, ensuring optimal performance.',
    'experience.comdata.desc2': 'Specialized hardware technical support, problem diagnosis and equipment repair.',
    'experience.comdata.desc3': 'Efficient incident resolution, providing timely technical assistance.',
    
    // Education
    'education.title': 'Education',
    'education.cun.title': 'Systems Engineering',
    'education.cun.institution': 'CUN - National Unified Corporation of Higher Education',
    'education.cun.period': 'Aug 2024 - Present',
    'education.cun.desc': 'Currently in ninth semester',
    
    'education.docker.title': 'Docker Fundamentals',
    'education.docker.institution': 'Platzi',
    'education.docker.period': 'Jun 2024',
    
    'education.typescript.title': 'OOP and Asynchronism with TypeScript',
    'education.typescript.institution': 'Platzi',
    'education.typescript.period': 'May 2023',
    
    'education.nodejs.title': 'Backend School with NodeJS',
    'education.nodejs.institution': 'Platzi',
    'education.nodejs.period': 'Mar 2023 - Apr 2023',
    
    'education.sena.title': 'Information Systems Technologist',
    'education.sena.institution': 'SENA Center of Industry and Commerce',
    'education.sena.period': 'Oct 2020 - Mar 2022',
    'education.sena.desc': 'Analysis and Development of Information Systems',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.github': 'GitHub',
    
    // Languages
    'languages.title': 'Languages',
    'languages.spanish': 'Spanish - Native',
    'languages.english': 'English - Intermediate A2',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
