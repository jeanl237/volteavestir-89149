import React from 'react';
import { Star, Quote } from 'lucide-react';
import beforeAfterImage from '@/assets/lp-image-testimonial-mirror.jpg';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      result: "Perdeu 15kg em 4 meses",
      text: "Depois de tentar várias dietas sem sucesso, finalmente encontrei algo que funciona de verdade! Os 9 hábitos são simples e se encaixaram perfeitamente na minha rotina de mãe. Hoje visto tamanho 40 novamente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "42 anos", 
      result: "Perdeu 22kg em 6 meses",
      text: "O que mais me impressionou foi não sentir que estava fazendo dieta. As mudanças foram tão graduais que nem percebi quando começei a emagrecer. Agora tenho energia para correr atrás dos meus filhos!",
      rating: 5
    },
    {
      name: "Carla Santos",
      age: "28 anos",
      result: "Perdeu 18kg em 5 meses",
      text: "Eram 3 anos tentando emagrecer após a gravidez. Com o Volte a Vestir consegui não só perder peso, mas também manter! Minha autoestima voltou e me sinto incrível.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-neutro-claro to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutro-escuro mb-6">
            <span className="text-verde-principal">Resultados Reais</span> de Quem Já Transformou Sua Vida
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-verde-principal to-verde-secundario mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das milhares de mulheres que já conquistaram o corpo dos sonhos 
            com o método "Volte a Vestir".
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={beforeAfterImage} 
              alt="Transformação antes e depois - resultado real" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <div className="absolute -top-4 -left-4 bg-laranja-cta text-white px-4 py-2 rounded-full font-bold shadow-lg">
              🔥 Transformação Real
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-verde-principal">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-verde-principal mr-3" />
                <div>
                  <h4 className="font-bold text-neutro-escuro">Júlia Ferreira</h4>
                  <p className="text-sm text-gray-500">39 anos - Perdeu 25kg</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Era a terceira vez que tentava emagrecer depois dos 35. Desta vez foi diferente - 
                não foi uma dieta, foi uma mudança de estilo de vida. Hoje uso roupas que nem 
                sonhava que voltaria a vestir!"
              </p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-verde-principal/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-verde-principal">10.000+</div>
                <div className="text-sm text-gray-600">Mulheres transformadas</div>
              </div>
              <div className="bg-laranja-cta/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-laranja-cta">95%</div>
                <div className="text-sm text-gray-600">Taxa de satisfação</div>
              </div>
              <div className="bg-azul-detalhe/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-azul-detalhe">4.8/5</div>
                <div className="text-sm text-gray-600">Avaliação média</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-bold text-neutro-escuro">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.age}</div>
                <div className="text-sm font-semibold text-verde-principal mt-1">
                  ✅ {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;