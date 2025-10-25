import React from 'react';
import { BookOpen, Zap, TrendingUp } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "1. Ler",
      description: "Conheça os 9 hábitos simples e práticos que vão transformar sua rotina alimentar",
      color: "text-verde-principal"
    },
    {
      icon: Zap,
      title: "2. Aplicar",
      description: "Siga o plano de 7 dias e comece a implementar os hábitos no seu dia a dia",
      color: "text-laranja-cta"
    },
    {
      icon: TrendingUp,
      title: "3. Ver Resultado",
      description: "Sinta as mudanças no seu corpo, energia e autoestima em poucas semanas",
      color: "text-azul-detalhe"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-verde-principal/5 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            Como Funciona o Método <span className="text-verde-principal">(em 3 Passos)</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-verde-principal/30"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neutro-claro to-white flex items-center justify-center shadow-md ${step.color}`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutro-escuro mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-verde-principal text-3xl">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
