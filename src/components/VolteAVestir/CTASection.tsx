import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  showGuarantee?: boolean;
  buttonText: string;
  priceInfo?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  showGuarantee = false,
  buttonText,
  priceInfo = false
}) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-verde-principal to-verde-secundario text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95" dangerouslySetInnerHTML={{ __html: subtitle }}>
          </p>
        )}

        {priceInfo && (
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-lg opacity-75 line-through mb-2">De R$ 197</div>
                <div className="text-5xl font-bold mb-2">R$ 47</div>
                <div className="text-sm font-bold text-laranja-cta bg-white/20 px-3 py-1 rounded-full">51% OFF</div>
                <div className="text-sm opacity-75">Pagamento único • Sem mensalidades</div>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>E-book completo "Volte a Vestir"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>6 Bônus exclusivos (R$ 358 grátis)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>Download imediato</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5" />
                  <span>7 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <Button 
          size="lg" 
          variant="cta"
          className="text-xl py-6 px-12 bg-laranja-cta hover:bg-laranja-cta/90 mb-6"
          onClick={() => window.open('https://pay.hotmart.com/U101846267U', '_blank')}
        >
          {buttonText}
        </Button>

        {showGuarantee && (
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl inline-flex items-center space-x-4">
            <Shield className="w-12 h-12 text-laranja-cta" />
            <div className="text-left">
              <div className="font-bold text-lg">Garantia de 7 Dias</div>
              <div className="text-sm opacity-75">
                Se não ficar satisfeita, devolvemos 100% do seu investimento
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center space-x-6 mt-8 text-sm opacity-75">
          <span>✅ Acesso Imediato</span>
          <span>🔒 Pagamento Seguro</span>
          <span>📱 Compatible com Mobile</span>
          <span>💰 Garantia de 7 Dias</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;