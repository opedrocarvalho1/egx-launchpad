import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra após rolar 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Mostra tooltip após 5 segundos
    const tooltipTimer = setTimeout(() => {
      if (!localStorage.getItem('egx-whatsapp-tooltip-seen')) {
        setShowTooltip(true);
        // Auto-esconde após 5 segundos
        setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem('egx-whatsapp-tooltip-seen', 'true');
        }, 5000);
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Olá! Vim do site da EGX e gostaria de saber mais sobre as soluções.');
    window.open(`https://wa.me/5543988139897?text=${message}`, '_blank');

    // Track event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        location: 'float_button'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full right-0 mb-4 mr-2"
                >
                  <div className="bg-card border border-border/50 rounded-2xl shadow-elevated p-4 max-w-xs relative">
                    <button
                      onClick={() => {
                        setShowTooltip(false);
                        localStorage.setItem('egx-whatsapp-tooltip-seen', 'true');
                      }}
                      className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Fechar"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <p className="text-sm text-foreground font-medium mb-1">
                      Precisa de ajuda?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Fale conosco pelo WhatsApp e tire suas dúvidas!
                    </p>
                    {/* Arrow */}
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-border/50 transform rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              aria-label="Abrir WhatsApp"
            >
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

              <MessageCircle className="w-7 h-7 relative z-10" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;
