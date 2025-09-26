import React from 'react';
import { Button } from '@/components/ui/button';
import beforeImage from '@/assets/lp-image-before.jpg';
import afterImage from '@/assets/lp-image-after.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-neutro-claro to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
              <div className="text-neutro-escuro">Volte a Usar Suas</div>
              <div className="text-verde-principal">Roupas Favoritas</div>
              <div className="text-neutro-escuro">em Poucos Meses</div>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Descubra os <strong>9 hábitos simples</strong> que vão te fazer emagrecer de forma 
              <strong className="text-verde-secundario"> natural e sustentável</strong>, 
              sem dietas malucas ou exercícios extenuantes.
            </h2>
          </div>
          <div className="flex justify-center gap-3 h-full">
            <div className="relative flex-1 max-w-[280px]">
              <img 
                src={beforeImage} 
                alt="Antes - Mulher com roupas largas" 
                className="w-full h-[450px] object-contain rounded-lg shadow-2xl bg-white"
              />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neutro-escuro text-white px-3 py-1 rounded-full text-sm font-bold">
                ANTES
              </div>
            </div>
            <div className="relative flex-1 max-w-[280px]">
              <img 
                src={afterImage} 
                alt="Depois - Mulher feliz com roupas que servem perfeitamente" 
                className="w-full h-[450px] object-contain rounded-lg shadow-2xl bg-white"
              />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-verde-principal text-white px-3 py-1 rounded-full text-sm font-bold">
                DEPOIS
              </div>
              <div className="absolute -bottom-4 -right-4 bg-laranja-cta text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                ✨ Resultado Real!
              </div>
            </div>
          </div>
        </div>
            <div className="bg-azul-detalhe/10 border-l-4 border-azul-detalhe p-6 rounded-r-lg mt-8">
              <p className="text-lg text-neutro-escuro text-center">
                <strong>⏱️ Assista ao vídeo exclusivo abaixo</strong> e descubra como milhares de mulheres 
                estão transformando seus corpos e recuperando a autoestima!
              </p>
            </div>
        
        {/* VSL Area */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-neutro-escuro mb-8">
            🎥 Assista Agora: O Segredo Para Emagrecer Sem Sofrimento
          </h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-verde-principal rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg font-semibold">ÁREA DO VSL (Video Sales Letter)</p>
              <p className="text-sm mt-2">Integre aqui seu vídeo de vendas</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => window.open('https://pay.hotmart.com/U101846267U', '_blank')}
            >
              🔥 QUERO MEU E-BOOK AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;