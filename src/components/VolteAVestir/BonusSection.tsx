import React from 'react';
import { Gift } from 'lucide-react';
import bonusImage from '@/assets/lp-image-bonus.jpg';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      title: "Planner Semanal de Refeições Personalizável",
      description: "Template para organizar suas refeições da semana de forma prática e eficiente.",
      value: "R$ 47"
    },
    {
      title: "Guia Rápido de Substituições Inteligentes",
      description: "Lista completa de trocas saudáveis para seus alimentos favoritos sem perder o sabor.",
      value: "R$ 37"
    },
    {
      title: "Checklist de Hábitos Diários para Emagrecimento",
      description: "Ferramenta para acompanhar seus 9 hábitos diários e manter a consistência.",
      value: "R$ 27"
    },
    {
      title: "Planilha de Acompanhamento de Medidas e Progresso",
      description: "Controle detalhado da sua evolução com gráficos e métricas motivadoras.",
      value: "R$ 57"
    },
    {
      title: "Lista de Compras Inteligente para o Supermercado",
      description: "Template organizado por categoria para nunca esquecer os alimentos essenciais.",
      value: "R$ 23"
    },
    {
      title: "MEGA BÔNUS: Guia de Lanches Saudáveis para Levar",
      description: "50+ receitas práticas de lanches nutritivos para levar para o trabalho, viagem ou qualquer lugar.",
      value: "R$ 67",
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
            Receba <span className="text-verde-principal">6 Bônus Incríveis</span> 
            <br />Sem Custo Adicional!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além do e-book completo, você recebe ferramentas práticas que vão acelerar 
            seus resultados e tornar sua jornada ainda mais fácil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {bonuses.map((bonus, index) => (
              <div 
                key={index} 
                className={`relative p-6 rounded-xl shadow-lg ${
                  bonus.isMegaBonus 
                    ? 'bg-gradient-to-r from-laranja-cta to-laranja-cta/80 text-white border-2 border-laranja-cta' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {bonus.isMegaBonus && (
                  <div className="absolute -top-3 left-6 bg-neutro-escuro text-white px-4 py-1 rounded-full text-sm font-bold">
                    🔥 MEGA BÔNUS
                  </div>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-bold ${bonus.isMegaBonus ? 'text-white' : 'text-neutro-escuro'}`}>
                    {bonus.title}
                  </h3>
                  <span className={`text-lg font-bold ${bonus.isMegaBonus ? 'text-white' : 'text-verde-principal'}`}>
                    {bonus.value}
                  </span>
                </div>
                <p className={`${bonus.isMegaBonus ? 'text-white/90' : 'text-gray-600'}`}>
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <img 
              src={bonusImage} 
              alt="Materiais bônus inclusos" 
              className="w-full h-auto rounded-xl shadow-xl mb-8"
            />
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold text-neutro-escuro mb-4">
                Valor Total dos Bônus:
              </h3>
              <div className="text-3xl font-bold text-gray-400 line-through mb-2">
                R$ {totalBonusValue}
              </div>
              <div className="text-4xl font-bold text-verde-principal mb-4">
                GRÁTIS
              </div>
              <p className="text-gray-600 text-sm">
                Todos os bônus estão inclusos sem custo adicional quando você adquire 
                o e-book "Volta a Vestir" hoje!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;