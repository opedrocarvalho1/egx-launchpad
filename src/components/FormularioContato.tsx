import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormularioContatoProps {
  origemCta: string;
}

export default function FormularioContato({ origemCta }: FormularioContatoProps) {
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErro(null);

    const formData = new FormData(e.currentTarget);
    
    const dados = {
      nome: formData.get('nome') as string,
      telefone: formData.get('telefone') as string,
      email: formData.get('email') as string,
      faturamento_anual: formData.get('faturamento') as string,
      desafio_principal: formData.get('desafio') as string,
      origem_cta: origemCta,
    };

    const { error } = await supabase.from('leads').insert([dados]);

    if (error) {
      setErro('Erro ao enviar formulário. Tente novamente.');
      console.error('Erro Supabase:', error);
    } else {
      setSucesso(true);
      e.currentTarget.reset();
    }
    
    setLoading(false);
  };

  if (sucesso) {
    return (
      <div className="text-center py-12 px-6 bg-primary/5 rounded-2xl border border-primary/20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          Formulário enviado com sucesso!
        </h3>
        <p className="text-muted-foreground mb-6">
          Nossa equipe entrará em contato em breve.
        </p>
        <Button
          onClick={() => setSucesso(false)}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Enviar outro formulário
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {erro && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
          {erro}
        </div>
      )}

      {/* Nome */}
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-foreground font-medium">
          Nome completo *
        </Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Seu nome"
          className="h-12"
        />
      </div>

      {/* Telefone */}
      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-foreground font-medium">
          Telefone (WhatsApp) *
        </Label>
        <Input
          id="telefone"
          name="telefone"
          type="tel"
          required
          placeholder="(11) 99999-9999"
          className="h-12"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium">
          Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="voce@empresa.com.br"
          className="h-12"
        />
      </div>

      {/* Faturamento */}
      <div className="space-y-3">
        <Label className="text-foreground font-medium">
          Em qual faixa de faturamento anual sua empresa está hoje? *
        </Label>
        <RadioGroup name="faturamento" required className="space-y-2">
          {[
            { value: 'ate-600k', label: 'Até R$ 600 mil' },
            { value: '600k-1.8M', label: 'R$ 600 mil - R$ 1,8 milhão' },
            { value: '1.8M-6M', label: 'R$ 1,8 milhão - R$ 6 milhões' },
            { value: '6M-12M', label: 'R$ 6 milhões - R$ 12 milhões' },
            { value: '12M-25M', label: 'R$ 12 milhões - R$ 25 milhões' },
            { value: '25M-100M', label: 'R$ 25 milhões - R$ 100 milhões' },
          ].map((opcao) => (
            <div key={opcao.value} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <RadioGroupItem value={opcao.value} id={opcao.value} />
              <Label htmlFor={opcao.value} className="cursor-pointer flex-1 text-foreground">
                {opcao.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Desafio */}
      <div className="space-y-3">
        <Label className="text-foreground font-medium">
          Qual afirmação mais representa sua realidade hoje? *
        </Label>
        <RadioGroup name="desafio" required className="space-y-2">
          {[
            { value: 'sem-clareza-margem', label: 'Faturamos, mas não temos clareza real de margem' },
            { value: 'caixa-aperta', label: 'O caixa aperta sem sabermos exatamente o porquê' },
            { value: 'crescimento-ineficiente', label: 'Crescemos, mas com aumento de custo e ineficiência' },
            { value: 'numeros-sem-decisao', label: 'Temos números, mas não conseguimos transformá-los em decisões' },
            { value: 'otimizar', label: 'Já temos clareza e queremos otimizar decisões' },
          ].map((opcao) => (
            <div key={opcao.value} className="flex items-start space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <RadioGroupItem value={opcao.value} id={`desafio-${opcao.value}`} className="mt-0.5" />
              <Label htmlFor={`desafio-${opcao.value}`} className="cursor-pointer flex-1 text-foreground leading-relaxed">
                {opcao.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Submit */}
      <Button type="submit" disabled={loading} className="w-full h-14 text-base font-semibold bg-primary hover:bg-accent">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar →'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Ao enviar, você concorda com nossa Política de Privacidade
      </p>
    </form>
  );
}
