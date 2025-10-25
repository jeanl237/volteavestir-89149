import React from 'react';
import { Button } from '@/components/ui/button';
import beforeImage from '../../assets/lp-image-before.jpg';
import afterImage from '../../assets/lp-image-after.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-neutro-claro to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
              <div className="text-neutro-escuro">Volte a Vestir:</div>
              <div className="text-verde-principal">o método natural</div>
              <div className="text-neutro-escuro">para recuperar seu corpo e autoestima</div>
              <div className="text-gray-600 text-2xl md:text-3xl mt-2">— sem dietas extremas</div>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              E-book prático com estratégias fáceis + plano de 7 dias — projeto pensado para quem quer <strong className="text-verde-secundario">resultados reais e sustentáveis</strong>.
            </h2>
            <p className="text-base md:text-lg text-gray-500 italic">
              Criado com método testado e baseado em práticas nutricionais e comportamentais comprovadas.
            </p>
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
                <strong>⏱️ Assista ao vídeo exclusivo abaixo e descubra como milhares de mulheres</strong><br />
                estão transformando seus corpos e recuperando a autoestima!
              </p>
            </div>
        
        {/* VSL Area */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 mx-auto max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-neutro-escuro mb-8">
            🎥 Assista Agora: O Segredo Para<br />
            Emagrecer Sem Sofrimento
          </h3>
          <div className="relative rounded-lg overflow-hidden" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
            <iframe 
              src="https://player.vimeo.com/video/1125915003?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
              title="APERTE O PLAY⬇️⬇️"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
          <div className="text-center mt-6">
            <Button 
              size="lg" 
              variant="cta"
              onClick={() => window.open('https://pay.hotmart.com/U101846267U', '_blank')}
            >
              🎁 Quero o e-book + bônus (R$27)
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              🔒 Entrega Digital Imediata • Garantia 7 dias — Reembolso Total
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;