import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, AlertCircle } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';

const UrgencySection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-neutro-escuro to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <AlertCircle className="w-8 h-8 text-laranja-cta" />
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-laranja-cta">ATENÇÃO:</span> Oferta Por Tempo Limitado!
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Esta é uma <strong className="text-laranja-cta">oportunidade única</strong> que não vai durar para sempre. 
          O preço promocional e os bônus exclusivos são <strong>apenas para as próximas horas!</strong>
        </p>

        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Clock className="w-6 h-6 text-laranja-cta" />
            <h3 className="text-2xl font-bold">Tempo Restante Para Garantir Sua Oferta:</h3>
          </div>
          <CountdownTimer initialHours={0} initialMinutes={15} initialSeconds={0} />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-500/20 border border-red-500 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3 text-red-300">❌ Se Você Perder Esta Oferta:</h4>
            <ul className="text-left space-y-2 text-sm">
              <li>• Preço volta para R$ 197,00 (valor normal)</li>
              <li>• Perde os R$ 597,00 em bônus exclusivos</li>
              <li>• Continua frustrada com dietas que não funcionam</li>
              <li>• Roupas continuam guardadas no armário</li>
            </ul>
          </div>
          
          <div className="bg-verde-principal/20 border border-verde-principal p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-3 text-verde-principal">✅ Se Você Agir Agora:</h4>
            <ul className="text-left space-y-2 text-sm">
              <li>• E-book completo por apenas R$ 27,00 (86% OFF)</li>
              <li>• Todos os 6 bônus inclusos (R$ 597,00 grátis)</li>
              <li>• Acesso imediato ao método</li>
              <li>• Transformação garantida em semanas</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-verde-principal/20 to-verde-secundario/20 p-8 rounded-2xl border border-verde-principal/30 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            🎯 <span className="text-verde-principal">Decisão Inteligente = Transformação Garantida</span>
          </h3>
          <p className="text-lg leading-relaxed">
            Enquanto outras pessoas continuam tentando dietas da moda e fórmulas mágicas, 
            você pode estar <strong className="text-laranja-cta">dando o primeiro passo</strong> para a transformação 
            real e duradoura que tanto deseja.
          </p>
        </div>

        <Button 
          size="lg" 
          variant="cta"
          className="text-xl py-6 px-12"
          onClick={() => window.open('https://pay.hotmart.com/U101846267U?checkoutMode=10', '_blank')}
        >
          🔥 SIM! QUERO MINHA TRANSFORMAÇÃO AGORA!
          <br />
          <span className="text-sm opacity-90">Clique aqui e garante sua oferta antes que acabe</span>
        </Button>

        <p className="text-sm text-gray-300 mt-4">
          ⚡ Acesso imediato após confirmação do pagamento • 🔒 Compra 100% segura
        </p>
      </div>
    </section>
  );
};

export default UrgencySection;