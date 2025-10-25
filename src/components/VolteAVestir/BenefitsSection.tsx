import React from 'react';
import { Heart, Zap, Target, Smile, ShoppingBag, Users } from 'lucide-react';
import benefitsImage from '@/assets/lp-image-benefits-realistic.jpg';
import benefitsImage2 from '@/assets/lp-image-benefits-2-slim.jpg';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Voltar a vestir sua roupa favorita",
      description: "Em poucas semanas você vai caber naquela roupa que tanto ama e estava guardada no armário",
      color: "text-laranja-cta",
      highlight: "✨ Resultado visível rapidamente"
    },
    {
      icon: Heart,
      title: "Rotina alimentar simples",
      description: "Método fácil de seguir, sem passar fome ou cortar grupos alimentares",
      color: "text-red-500",
      highlight: "🍽️ Sem restrições extremas"
    },
    {
      icon: Target,
      title: "Cardápios e receitas práticas",
      description: "Plano completo de 7 dias para você já começar hoje mesmo sua transformação",
      color: "text-verde-principal",
      highlight: "📋 Pronto para usar"
    },
    {
      icon: Smile,
      title: "Dicas psicológicas",
      description: "Estratégias mentais para manter a motivação e o resultado a longo prazo",
      color: "text-azul-detalhe",
      highlight: "💪 Mentalidade de sucesso"
    },
    {
      icon: Zap,
      title: "Estratégias sustentáveis",
      description: "Evite o efeito sanfona com hábitos duradouros que cabem na sua rotina",
      color: "text-yellow-500",
      highlight: "🔄 Resultado permanente"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            O Que Você Vai <span className="text-verde-principal">Conquistar</span> Com Este E-book
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Resultados reais e transformação completa com um método simples e prático
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative flex justify-center">
              <img 
                src={benefitsImage} 
                alt="Mulheres felizes vivenciando os benefícios da transformação" 
                className="w-full max-w-md h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-verde-principal text-white px-6 py-3 rounded-lg shadow-lg font-bold">
                ✨ Sua Nova Vida Te Espera!
              </div>
            </div>
            <div className="relative flex justify-center">
              <img 
                src={benefitsImage2} 
                alt="Mulher feliz experimentando roupas que servem perfeitamente" 
                className="w-full max-w-md h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-laranja-cta text-white px-6 py-3 rounded-lg shadow-lg font-bold">
                💃 Você Merece Isso!
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-verde-principal"
                >
                  <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-neutro-claro to-white flex items-center justify-center shadow-md ${benefit.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutro-escuro mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      {benefit.description}
                    </p>
                    <p className="text-sm text-verde-principal font-semibold">
                      {benefit.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-verde-principal/10 to-verde-secundario/10 p-8 rounded-2xl border border-verde-principal/20">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-neutro-escuro mb-4">
              🎯 <span className="text-verde-principal">Imagine-se daqui a 3 meses...</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Vestindo aquele vestido que você ama, sentindo-se confiante e radiante, com energia para brincar com seus filhos, e sendo um exemplo de transformação para todas as pessoas ao seu redor.<br />
              <strong className="text-verde-principal">Esse futuro está ao seu alcance!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;