import React from 'react';
import { Gift } from 'lucide-react';
import bonusImage from '@/assets/lp-image-bonus-new.png';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "🎁 BÔNUS 1: Plano de 7 Dias de Receitas",
      description: "PDF pronto para imprimir com cardápio completo, lista de ingredientes e modo de preparo detalhado para você começar imediatamente.",
      value: "R$ 47",
      isMegaBonus: false
    },
    {
      title: "🎁 BÔNUS 2: Checklist Diário + Guia Prático",
      description: "Checklist para acompanhar seus hábitos todos os dias + guia em PDF com dicas práticas e estratégias para manter a motivação.",
      value: "R$ 50",
      isMegaBonus: true
    }
  ];

  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-neutro-claro to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-laranja-cta text-white px-6 py-3 rounded-full font-bold text-lg mb-6">
            <Gift className="w-6 h-6" />
            <span>BÔNUS EXCLUSIVOS INCLUSOS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            Receba <span className="text-verde-principal">2 Bônus Digitais</span> 
            <br />Que Aumentam Seu Sucesso!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além do e-book completo "Volte a Vestir", você recebe materiais práticos 
            que vão acelerar seus resultados desde o primeiro dia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className={`relative p-8 rounded-xl shadow-lg ${
                  bonus.isMegaBonus 
                    ? 'bg-gradient-to-r from-laranja-cta to-laranja-cta/80 text-white border-2 border-laranja-cta' 
                    : 'bg-white border-2 border-verde-principal/30'
                }`}
              >
                {bonus.isMegaBonus && (
                  <div className="absolute -top-3 left-6 bg-neutro-escuro text-white px-4 py-1 rounded-full text-sm font-bold">
                    ⭐ DESTAQUE
                  </div>
                )}
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-3 ${bonus.isMegaBonus ? 'text-white' : 'text-neutro-escuro'}`}>
                    {bonus.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${bonus.isMegaBonus ? 'text-white/90' : 'text-gray-600'}`}>
                    {bonus.description}
                  </p>
                </div>
                <div className={`text-xl font-bold ${bonus.isMegaBonus ? 'text-white' : 'text-verde-principal'}`}>
                  Valor: {bonus.value}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <img 
              src={bonusImage} 
              alt="Materiais bônus inclusos" 
              className="w-full h-auto rounded-xl shadow-xl mb-8"
            />
            
            <div className="bg-white p-8 rounded-xl shadow-xl text-center border-2 border-verde-principal">
              <h3 className="text-2xl font-bold text-neutro-escuro mb-4">
                💰 Valor Total do Pacote Completo
              </h3>
              <div className="mb-6">
                <div className="text-lg text-gray-500 mb-2">E-book "Volte a Vestir"</div>
                <div className="text-2xl font-bold text-gray-400 line-through">R$ 197</div>
              </div>
              <div className="mb-6">
                <div className="text-lg text-gray-500 mb-2">+ Bônus digitais</div>
                <div className="text-2xl font-bold text-gray-400 line-through">R$ {totalBonusValue}</div>
              </div>
              <div className="border-t-2 border-gray-200 pt-4 mb-4">
                <div className="text-sm text-gray-500 mb-2">Valor total normal:</div>
                <div className="text-3xl font-bold text-gray-400 line-through mb-4">
                  R$ {197 + totalBonusValue}
                </div>
              </div>
              <div className="bg-gradient-to-r from-verde-principal to-verde-secundario text-white p-6 rounded-lg">
                <div className="text-lg mb-2">🎉 Seu Preço Hoje:</div>
                <div className="text-5xl font-bold mb-2">R$ 27</div>
                <div className="text-sm opacity-90">Pagamento único • Acesso imediato • Bônus inclusos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;