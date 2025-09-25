import React from 'react';
import { Heart, Zap, Target, Smile, ShoppingBag, Users } from 'lucide-react';
import benefitsImage from '@/assets/lp-image-benefits-realistic.jpg';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Saúde em Primeiro Lugar",
      description: "Melhore seus exames, disposição e qualidade de vida de forma natural e sustentável.",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "Mais Energia e Disposição",
      description: "Sinta-se mais ativa e disposta para aproveitar a vida com sua família e amigos.",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "Resultados Duradouros",
      description: "Conquiste o peso ideal e mantenha sem efeito sanfona ou dietas restritivas.",
      color: "text-verde-principal"
    },
    {
      icon: Smile,
      title: "Autoestima Renovada",
      description: "Recupere a confiança e se sinta bem consigo mesma em qualquer situação.",
      color: "text-azul-detalhe"
    },
    {
      icon: ShoppingBag,
      title: "Vista Suas Roupas Favoritas",
      description: "Volte a usar aquelas peças que estão guardadas no armário esperando por você.",
      color: "text-laranja-cta"
    },
    {
      icon: Users,
      title: "Seja um Exemplo",
      description: "Inspire sua família e amigos com sua transformação e hábitos saudáveis.",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            Transforme Sua Vida Com o <span className="text-verde-principal">"Volta a Vestir"</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Muito mais do que perder peso, você vai <strong>redescobrir sua melhor versão</strong> 
            e construir uma vida mais saudável e feliz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={benefitsImage} 
              alt="Mulheres felizes vivenciando os benefícios da transformação" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-verde-principal text-white px-6 py-3 rounded-lg shadow-lg font-bold">
              ✨ Sua Nova Vida Te Espera!
            </div>
          </div>

          <div className="grid gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-neutro-claro/50 to-white rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md ${benefit.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutro-escuro mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
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
              Vestindo aquele vestido que você ama, sentindo-se confiante e radiante, 
              com energia para brincar com seus filhos, e sendo um exemplo de transformação 
              para todas as pessoas ao seu redor. <strong className="text-verde-principal">Esse futuro está ao seu alcance!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;