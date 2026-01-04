import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const { t } = useLanguage();

  const education = [
    {
      title: t('education.cun.title'),
      institution: t('education.cun.institution'),
      period: t('education.cun.period'),
      description: t('education.cun.desc'),
      isCurrent: true,
    },
    {
      title: t('education.docker.title'),
      institution: t('education.docker.institution'),
      period: t('education.docker.period'),
      isCertification: true,
    },
    {
      title: t('education.typescript.title'),
      institution: t('education.typescript.institution'),
      period: t('education.typescript.period'),
      isCertification: true,
    },
    {
      title: t('education.nodejs.title'),
      institution: t('education.nodejs.institution'),
      period: t('education.nodejs.period'),
      isCertification: true,
    },
    {
      title: t('education.sena.title'),
      institution: t('education.sena.institution'),
      period: t('education.sena.period'),
      description: t('education.sena.desc'),
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{t('education.title')}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((item, index) => (
            <div
              key={item.title}
              className={`card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 group ${
                item.isCurrent ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.isCertification ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 leading-tight">{item.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{item.institution}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-medium">
                        Actual
                      </span>
                    )}
                  </div>
                  
                  {item.description && (
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
