import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">NGG</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Nicolas Gonzalez Gutierrez. {t('footer.rights')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:nicolas.jobs.developer@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+573232291320"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Nicolas1822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
