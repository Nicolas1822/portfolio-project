import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: 'Grupo Magin',
      role: t('experience.grupomagin.role'),
      period: t('experience.grupomagin.period'),
      descriptions: [
        t('experience.grupomagin.desc1'),
        t('experience.grupomagin.desc2'),
        t('experience.grupomagin.desc3'),
        t('experience.grupomagin.desc4'),
        t('experience.grupomagin.desc5'),
      ],
      technologies: ['Laravel', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'API REST'],
    },
    {
      company: 'Comdata Group',
      role: t('experience.comdata.role'),
      period: t('experience.comdata.period'),
      descriptions: [
        t('experience.comdata.desc1'),
        t('experience.comdata.desc2'),
        t('experience.comdata.desc3'),
      ],
      technologies: ['Hardware Support', 'Software Maintenance', 'Technical Support'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{t('experience.title')}</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 top-2 glow" />

                <div
                  className={`ml-6 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  </div>
                  
                  <p className="text-primary font-medium mb-2">{exp.role}</p>
                  
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>

                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.descriptions.map((desc, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
