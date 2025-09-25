import React from 'react';
import FAQ from '@/components/FAQ';

const FAQSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            Perguntas <span className="text-verde-principal">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas para que você possa tomar a melhor decisão 
            para sua transformação.
          </p>
        </div>
        
        <FAQ />
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-azul-detalhe/10 to-verde-principal/10 p-8 rounded-2xl border border-azul-detalhe/20">
            <h3 className="text-2xl font-bold text-neutro-escuro mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Lembre-se: você tem <strong className="text-verde-principal">7 dias de garantia incondicional</strong>. 
              Se por qualquer motivo não ficar satisfeita com o conteúdo, 
              devolvemos 100% do seu investimento, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;