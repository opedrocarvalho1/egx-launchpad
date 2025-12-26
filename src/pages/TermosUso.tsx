import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermosUso = () => {
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
          Termos de Uso
        </h1>
        <p className="text-muted-foreground mb-12">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>

        <div className="prose prose-invert prose-primary max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site da EGX, você aceita e concorda em ficar vinculado a estes Termos de Uso.
              Se você não concorda com estes termos, não use nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">2. Descrição dos Serviços</h2>
            <p>
              A EGX oferece soluções de inteligência financeira para PMEs, incluindo análise de dados, geração
              de DRE automatizada através do anDRE, e consultoria estratégica para crescimento de negócios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">3. Uso do Site</h2>
            <h3 className="font-display text-xl font-medium text-foreground mb-3">3.1 Uso Permitido</h3>
            <p>Você concorda em usar o site apenas para fins legítimos e de acordo com estes Termos.</p>

            <h3 className="font-display text-xl font-medium text-foreground mb-3 mt-6">3.2 Uso Proibido</h3>
            <p>Você não deve:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Usar o site de maneira que viole leis ou regulamentos</li>
              <li>Transmitir material malicioso ou prejudicial</li>
              <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Fazer engenharia reversa ou descompilar qualquer parte do site</li>
              <li>Usar o site para spam ou práticas comerciais não solicitadas</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo do site, incluindo textos, gráficos, logos, ícones, imagens, e software, é
              propriedade da EGX ou de seus fornecedores de conteúdo e está protegido por leis de direitos
              autorais e outras leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">5. Conteúdo do Usuário</h2>
            <p>
              Ao enviar informações através de formulários ou outras funcionalidades do site, você concede à
              EGX uma licença para usar essas informações para os fins descritos em nossa Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">6. Isenção de Garantias</h2>
            <p>
              O site e os serviços são fornecidos "como estão" e "conforme disponíveis", sem garantias de
              qualquer tipo, expressas ou implícitas. A EGX não garante que:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>O site estará sempre disponível ou livre de erros</li>
              <li>Os defeitos serão corrigidos</li>
              <li>O site está livre de vírus ou outros componentes prejudiciais</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">7. Limitação de Responsabilidade</h2>
            <p>
              Na extensão máxima permitida por lei, a EGX não será responsável por quaisquer danos indiretos,
              incidentais, especiais, consequenciais ou punitivos, ou qualquer perda de lucros ou receitas,
              incorridos direta ou indiretamente, ou qualquer perda de dados, uso, boa vontade ou outras
              perdas intangíveis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">8. Links de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo e as
              práticas desses sites e não assumimos responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">9. Modificações</h2>
            <p>
              Reservamos o direito de modificar ou substituir estes Termos a qualquer momento. Mudanças
              significativas serão notificadas através do site. O uso continuado do site após as modificações
              constitui aceitação dos novos Termos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">10. Rescisão</h2>
            <p>
              Podemos encerrar ou suspender seu acesso ao site imediatamente, sem aviso prévio ou
              responsabilidade, por qualquer motivo, incluindo violação destes Termos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">11. Lei Aplicável</h2>
            <p>
              Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil,
              sem considerar conflitos de disposições legais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground mb-4">12. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
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

export default TermosUso;
