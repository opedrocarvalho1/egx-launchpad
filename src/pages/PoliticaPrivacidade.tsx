import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8 -ml-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao site
        </Button>

        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
          Política de Privacidade
        </h1>
        <p className="text-muted-foreground mb-12">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <div className="prose prose-invert prose-primary max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">1. Introdução</h2>
            <p>
              A EGX ("nós", "nosso" ou "nossa") está comprometida em proteger sua privacidade. Esta Política de
              Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você
              visita nosso site e utiliza nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">2. Informações que Coletamos</h2>
            <h3 className="font-display text-xl font-medium text-foreground mb-3">2.1 Informações Fornecidas por Você</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone (WhatsApp)</li>
              <li>Informações sobre sua empresa (faturamento, desafios)</li>
            </ul>

            <h3 className="font-display text-xl font-medium text-foreground mb-3 mt-6">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">3. Como Usamos Suas Informações</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às suas solicitações de contato</li>
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Enviar comunicações relevantes sobre nossos produtos</li>
              <li>Analisar e melhorar a experiência do usuário</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">4. Cookies</h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos para entender como
              você usa nosso site. Você pode controlar o uso de cookies através das configurações do seu navegador
              ou pelo nosso banner de cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">5. Compartilhamento de Informações</h2>
            <p>
              Não vendemos suas informações pessoais. Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Prestadores de serviços que nos auxiliam nas operações (ex: hospedagem, analytics)</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">6. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">7. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato conosco através do e-mail: contato@ogrupoegx.com
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">8. Retenção de Dados</h2>
            <p>
              Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos
              descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">9. Alterações a Esta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças
              significativas publicando a nova política nesta página e atualizando a data de "Última atualização".
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">10. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-none mt-3 space-y-2">
              <li>E-mail: contato@ogrupoegx.com</li>
              <li>Telefone/WhatsApp: +55 (43) 98813-9897</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
