import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('egx-cookie-consent');
    if (!consent) {
      // Delay para não aparecer imediatamente
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('egx-cookie-consent', 'accepted');
    setIsVisible(false);

    // Ativa GTM/Analytics se necessário
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent',
        consent_type: 'accepted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('egx-cookie-consent', 'rejected');
    setIsVisible(false);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent',
        consent_type: 'rejected'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/98 backdrop-blur-xl rounded-2xl border border-border/50 shadow-elevated p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-2">
                        Cookies e Privacidade
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Usamos cookies essenciais e analíticos para melhorar sua experiência.
                        Ao continuar navegando, você concorda com nossa{' '}
                        <a href="/politica-privacidade" className="text-primary hover:underline">
                          Política de Privacidade
                        </a>
                        {' '}e nossos{' '}
                        <a href="/termos-uso" className="text-primary hover:underline">
                          Termos de Uso
                        </a>.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsVisible(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label="Fechar banner"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mb-4 p-4 bg-background rounded-xl border border-border/30"
                    >
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium text-foreground mb-1">Cookies Essenciais</p>
                            <p>Necessários para o funcionamento básico do site (sempre ativos).</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <div>
                            <p className="font-medium text-foreground mb-1">Cookies Analíticos</p>
                            <p>Nos ajudam a entender como você usa o site para melhorar a experiência.</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={acceptCookies}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
                    >
                      Aceitar todos
                    </Button>
                    <Button
                      onClick={rejectCookies}
                      variant="outline"
                      className="border-border/50 hover:bg-muted rounded-full"
                    >
                      Rejeitar não essenciais
                    </Button>
                    <Button
                      onClick={() => setShowDetails(!showDetails)}
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground rounded-full"
                    >
                      {showDetails ? 'Ocultar' : 'Ver'} detalhes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
