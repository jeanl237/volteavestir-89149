import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O e-book 'Volte a Vestir' realmente funciona?",
    answer: "Sim! O e-book contém 9 hábitos cientificamente comprovados que promovem o emagrecimento de forma natural e sustentável. Milhares de pessoas já transformaram suas vidas seguindo essas estratégias simples."
  },
  {
    question: "Em quanto tempo vou ver os primeiros resultados?",
    answer: "Os primeiros resultados podem aparecer já na primeira semana, com melhora na disposição e redução do inchaço. A perda de peso consistente acontece gradualmente, respeitando o ritmo natural do seu corpo."
  },
  {
    question: "Preciso fazer dietas restritivas ou exercícios intensos?",
    answer: "Não! O método 'Volte a Vestir' é baseado em hábitos simples e sustentáveis. Nada de dietas malucas ou exercícios extenuantes. São pequenas mudanças que cabem na sua rotina atual."
  },
  {
    question: "O método funciona para qualquer idade?",
    answer: "Sim! Os 9 hábitos são adequados para pessoas de qualquer idade, desde que não tenham restrições médicas específicas. Sempre recomendamos consultar um profissional de saúde antes de iniciar qualquer programa."
  },
  {
    question: "E se eu não conseguir seguir todos os hábitos?",
    answer: "O método é flexível! Você pode começar com apenas alguns hábitos e ir incorporando outros gradualmente. Cada pequena mudança já faz diferença no seu processo de emagrecimento."
  },
  {
    question: "Os bônus estão inclusos no valor?",
    answer: "Sim! Todos os 6 bônus estão inclusos sem custo adicional. São materiais complementares que vão acelerar seus resultados e facilitar ainda mais sua jornada."
  },
  {
    question: "Existe garantia?",
    answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu investimento."
  },
  {
    question: "Como receberei o material?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente no seu e-mail o link para download do e-book e todos os bônus em formato PDF."
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