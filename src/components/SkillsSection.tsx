import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Users, Lightbulb, BookOpen, RefreshCw, MessageCircle } from 'lucide-react';

const technicalSkills = [
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'TypeScript', 'Bootstrap', 'Semantic UI', 'jQuery'] },
  { category: 'Backend', skills: ['Node.js', 'Express.js', 'AdonisJS', 'Laravel', 'PHP', 'Java'] },
  { category: 'Database', skills: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'] },
  { category: 'Tools & Others', skills: ['Git', 'GitHub', 'Docker', 'Postman', 'API REST', 'MVC', 'Hexagonal Architecture', 'Clean Code', 'SOLID'] },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  const softSkills = [
    { icon: Users, label: t('skills.collaboration') },
    { icon: Code, label: t('skills.teamwork') },
    { icon: MessageCircle, label: t('skills.communication') },
    { icon: Lightbulb, label: t('skills.creativity') },
    { icon: BookOpen, label: t('skills.learning') },
    { icon: RefreshCw, label: t('skills.adaptability') },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{t('skills.title')}</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              {t('skills.technical')}
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((category) => (
                <div key={category.category} className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300">
                  <h4 className="text-sm font-medium text-primary mb-4">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              {t('skills.soft')}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-medium text-foreground">{skill.label}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 card-gradient rounded-xl p-6 border border-border">
              <h4 className="text-lg font-semibold mb-4">{t('languages.title')}</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('languages.spanish')}</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{t('languages.english')}</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
