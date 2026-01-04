import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Phone, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'ng33446@gmail.com',
      href: 'mailto:ng33446@gmail.com',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+57 323 229 1320',
      href: 'tel:+573232291320',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'GitHub Profile',
      href: 'https://github.com/ng33446',
      external: true,
    },
  ];

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">{t('contact.title')}</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
                className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{contact.label}</h3>
                <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
                  {contact.value}
                  {contact.external && <ExternalLink className="w-3 h-3" />}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              {t('contact.email')} →{' '}
              <a href="mailto:ng33446@gmail.com" className="text-primary hover:underline">
                ng33446@gmail.com
              </a>
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 glow"
              onClick={() => window.open('mailto:ng33446@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
