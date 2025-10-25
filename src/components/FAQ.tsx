import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como vou receber o e-book após a compra?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente no seu e-mail o link para download do e-book e todos os bônus em formato PDF. O acesso é instantâneo e você pode começar a ler em qualquer dispositivo."
  },
  {
    question: "Em que formato está o e-book?",
    answer: "O e-book está em formato PDF, compatível com qualquer dispositivo (computador, tablet, celular). Você pode ler online ou baixar para ler offline quando quiser."
  },
  {
    question: "Como funciona o prazo de reembolso?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeita com o conteúdo, basta solicitar o reembolso e devolvemos 100% do seu investimento, sem perguntas ou burocracias."
  },
  {
    question: "Este método funciona para mim?",
    answer: "O método 'Volte a Vestir' traz um plano prático com hábitos simples e sustentáveis, adequado para a maioria das pessoas. No entanto, os resultados dependem da sua aplicação e consistência. Cada pessoa é única e os resultados podem variar. Sempre recomendamos consultar um profissional de saúde antes de iniciar."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-verde-principal"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-neutro-escuro">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-verde-principal" />
            ) : (
              <ChevronDown className="w-5 h-5 text-verde-principal" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-neutro-claro">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;