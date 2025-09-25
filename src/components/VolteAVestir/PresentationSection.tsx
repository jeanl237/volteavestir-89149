import React from 'react';
import { Check } from 'lucide-react';

const PresentationSection: React.FC = () => {
  const benefits = [
    "9 hábitos científicamente comprovados para emagrecimento",
    "Método 100% natural sem medicamentos ou suplementos caros",
    "Estratégias que cabem na sua rotina atual",
    "Resultados visíveis em poucas semanas",
    "Transformação duradoura sem efeito sanfona"
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            Conheça o E-book <span className="text-verde-principal">"Volta a Vestir"</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Um método revolucionário que já transformou a vida de <strong>milhares de mulheres</strong> 
            que sonhavam em voltar a usar suas roupas favoritas sem precisar se submeter a dietas 
            restritivas ou exercícios extenuantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-verde-principal/10 to-verde-secundario/10 p-6 rounded-xl border-l-4 border-verde-principal">
              <h3 className="text-2xl font-bold text-neutro-escuro mb-4">
                O Que Você Vai Descobrir:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-verde-principal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutro-claro to-white p-8 rounded-2xl shadow-xl">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-verde-principal rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-neutro-escuro">
                Mais de <span className="text-verde-principal">100 páginas</span>
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                De conteúdo prático e estratégico, desenvolvido por especialistas em 
                nutrição e comportamento alimentar.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>📱 Digital</span>
                <span>•</span>
                <span>📖 PDF</span>
                <span>•</span>
                <span>⚡ Download Imediato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-azul-detalhe/10 p-8 rounded-xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-neutro-escuro mb-4">
              💡 <span className="text-azul-detalhe">Diferencial Único:</span>
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao contrário de outros métodos que prometem milagres overnight, 
              o "Volta a Vestir" foca em <strong>mudanças graduais e sustentáveis</strong> que 
              se integram naturalmente ao seu estilo de vida atual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;