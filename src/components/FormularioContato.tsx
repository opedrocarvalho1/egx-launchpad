import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { supabase } from '@/integrations/supabase/client';
import { CheckCircle2, Loader2, ArrowRight, AlertCircle } from 'lucide-react';

interface FormularioContatoProps {
  origemCta: string;
}

// Máscara de telefone
const maskPhone = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  }
  return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
};

// Validação de email
const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export default function FormularioContato({ origemCta }: FormularioContatoProps) {
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  // Form state com validação
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [faturamento, setFaturamento] = useState('');
  const [desafio, setDesafio] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{
    nome?: string;
    telefone?: string;
    email?: string;
    faturamento?: string;
    desafio?: string;
  }>({});

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('egx-form-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setNome(parsed.nome || '');
        setEmail(parsed.email || '');
        setTelefone(parsed.telefone || '');
        setFaturamento(parsed.faturamento || '');
        setDesafio(parsed.desafio || '');
      } catch (e) {
        console.error('Error loading saved form data:', e);
      }
    }
  }, []);

  // Auto-save on change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (nome || email || telefone || faturamento || desafio) {
        localStorage.setItem('egx-form-data', JSON.stringify({
          nome,
          email,
          telefone,
          faturamento,
          desafio
        }));
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [nome, email, telefone, faturamento, desafio]);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (nome.trim().length < 3) {
      newErrors.nome = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (telefone.replace(/\D/g, '').length < 10) {
      newErrors.telefone = 'Telefone inválido';
    }

    if (!email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!faturamento) {
      newErrors.faturamento = 'Selecione uma faixa de faturamento';
    }

    if (!desafio) {
      newErrors.desafio = 'Selecione um desafio';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro(null);

    if (!validateForm()) {
      setErro('Por favor, corrija os erros antes de enviar.');
      return;
    }

    setLoading(true);

    const dados = {
      nome: nome.trim(),
      telefone: telefone.replace(/\D/g, ''),
      email: email.trim().toLowerCase(),
      faturamento_anual: faturamento,
      desafio_principal: desafio,
      origem_cta: origemCta,
    };

    // Track event
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit',
        form_name: 'contact_form',
        origem_cta: origemCta
      });
    }

    const { error } = await supabase.from('leads').insert([dados]);

    if (error) {
      setErro('Erro ao enviar formulário. Tente novamente em alguns instantes.');
      console.error('Erro Supabase:', error);

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_error',
          error_message: error.message
        });
      }
    } else {
      setSucesso(true);
      // Clear localStorage
      localStorage.removeItem('egx-form-data');
      // Clear form
      setNome('');
      setTelefone('');
      setEmail('');
      setFaturamento('');
      setDesafio('');

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_success',
          form_name: 'contact_form'
        });
      }
    }

    setLoading(false);
  };

  if (sucesso) {
    return (
      <div className="text-center py-16 px-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
          Formulário enviado com sucesso!
        </h3>
        <p className="text-muted-foreground mb-8">
          Nossa equipe entrará em contato em breve.
        </p>
        <Button
          onClick={() => setSucesso(false)}
          variant="outline"
          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 h-12"
        >
          Enviar outro formulário
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {erro && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{erro}</span>
        </div>
      )}

      {/* Nome */}
      <div className="space-y-2">
        <Label htmlFor="nome" className="text-foreground font-medium text-sm">
          Nome completo *
        </Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onBlur={() => {
            if (!nome.trim()) {
              setErrors(prev => ({ ...prev, nome: 'Nome é obrigatório' }));
            } else if (nome.trim().length < 3) {
              setErrors(prev => ({ ...prev, nome: 'Nome deve ter pelo menos 3 caracteres' }));
            } else {
              setErrors(prev => ({ ...prev, nome: undefined }));
            }
          }}
          placeholder="Seu nome completo"
          className={`h-12 bg-background border-border/50 focus:border-primary rounded-xl ${errors.nome ? 'border-destructive' : ''}`}
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? 'nome-error' : undefined}
        />
        {errors.nome && (
          <p id="nome-error" className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.nome}
          </p>
        )}
      </div>

      {/* Telefone */}
      <div className="space-y-2">
        <Label htmlFor="telefone" className="text-foreground font-medium text-sm">
          Telefone (WhatsApp) *
        </Label>
        <Input
          id="telefone"
          name="telefone"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(maskPhone(e.target.value))}
          onBlur={() => {
            if (!telefone.trim()) {
              setErrors(prev => ({ ...prev, telefone: 'Telefone é obrigatório' }));
            } else if (telefone.replace(/\D/g, '').length < 10) {
              setErrors(prev => ({ ...prev, telefone: 'Telefone inválido' }));
            } else {
              setErrors(prev => ({ ...prev, telefone: undefined }));
            }
          }}
          placeholder="(11) 99999-9999"
          maxLength={15}
          className={`h-12 bg-background border-border/50 focus:border-primary rounded-xl ${errors.telefone ? 'border-destructive' : ''}`}
          aria-invalid={!!errors.telefone}
          aria-describedby={errors.telefone ? 'telefone-error' : undefined}
        />
        {errors.telefone && (
          <p id="telefone-error" className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.telefone}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground font-medium text-sm">
          Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            if (!email.trim()) {
              setErrors(prev => ({ ...prev, email: 'E-mail é obrigatório' }));
            } else if (!validateEmail(email)) {
              setErrors(prev => ({ ...prev, email: 'E-mail inválido' }));
            } else {
              setErrors(prev => ({ ...prev, email: undefined }));
            }
          }}
          placeholder="voce@empresa.com.br"
          className={`h-12 bg-background border-border/50 focus:border-primary rounded-xl ${errors.email ? 'border-destructive' : ''}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Faturamento */}
      <div className="space-y-3">
        <Label className="text-foreground font-medium text-sm">
          Em qual faixa de faturamento anual sua empresa está hoje? *
        </Label>
        <RadioGroup
          value={faturamento}
          onValueChange={(value) => {
            setFaturamento(value);
            setErrors(prev => ({ ...prev, faturamento: undefined }));
          }}
          className="space-y-2"
        >
          {[
            { value: 'ate-600k', label: 'Até R$ 600 mil' },
            { value: '600k-1.8M', label: 'R$ 600 mil - R$ 1,8 milhão' },
            { value: '1.8M-6M', label: 'R$ 1,8 milhão - R$ 6 milhões' },
            { value: '6M-12M', label: 'R$ 6 milhões - R$ 12 milhões' },
            { value: '12M-25M', label: 'R$ 12 milhões - R$ 25 milhões' },
            { value: '25M-100M', label: 'R$ 25 milhões - R$ 100 milhões' },
          ].map((opcao) => (
            <div key={opcao.value} className="flex items-center space-x-3 p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-background transition-colors cursor-pointer group">
              <RadioGroupItem value={opcao.value} id={opcao.value} className="border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary" />
              <Label htmlFor={opcao.value} className="cursor-pointer flex-1 text-muted-foreground group-hover:text-foreground transition-colors">
                {opcao.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.faturamento && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.faturamento}
          </p>
        )}
      </div>

      {/* Desafio */}
      <div className="space-y-3">
        <Label className="text-foreground font-medium text-sm">
          Qual afirmação mais representa sua realidade hoje? *
        </Label>
        <RadioGroup
          value={desafio}
          onValueChange={(value) => {
            setDesafio(value);
            setErrors(prev => ({ ...prev, desafio: undefined }));
          }}
          className="space-y-2"
        >
          {[
            { value: 'sem-clareza-margem', label: 'Faturamos, mas não temos clareza real de margem' },
            { value: 'caixa-aperta', label: 'O caixa aperta sem sabermos exatamente o porquê' },
            { value: 'crescimento-ineficiente', label: 'Crescemos, mas com aumento de custo e ineficiência' },
            { value: 'numeros-sem-decisao', label: 'Temos números, mas não conseguimos transformá-los em decisões' },
            { value: 'otimizar', label: 'Já temos clareza e queremos otimizar decisões' },
          ].map((opcao) => (
            <div key={opcao.value} className="flex items-start space-x-3 p-4 rounded-xl border border-border/50 hover:border-primary/50 bg-background transition-colors cursor-pointer group">
              <RadioGroupItem value={opcao.value} id={`desafio-${opcao.value}`} className="mt-0.5 border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary" />
              <Label htmlFor={`desafio-${opcao.value}`} className="cursor-pointer flex-1 text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                {opcao.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {errors.desafio && (
          <p className="text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.desafio}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-14 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:shadow-soft group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar formulário
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center pt-2">
        Ao enviar, você concorda com nossa{' '}
        <a href="/politica-privacidade" className="text-primary hover:underline">
          Política de Privacidade
        </a>
      </p>
    </form>
  );
}
