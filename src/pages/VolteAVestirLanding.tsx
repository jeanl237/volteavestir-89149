import React from 'react';
import HeroSection from '@/components/VolteAVestir/HeroSection';
import PresentationSection from '@/components/VolteAVestir/PresentationSection';
import BonusSection from '@/components/VolteAVestir/BonusSection';
import CTASection from '@/components/VolteAVestir/CTASection';
import BenefitsSection from '@/components/VolteAVestir/BenefitsSection';
import TestimonialsSection from '@/components/VolteAVestir/TestimonialsSection';
import UrgencySection from '@/components/VolteAVestir/UrgencySection';
import FAQSection from '@/components/VolteAVestir/FAQSection';
import Footer from '@/components/VolteAVestir/Footer';

const VolteAVestirLanding: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags would go in head */}
      
      {/* PARTE 1 - Header/Hero/VSL */}
      <HeroSection />
      
      {/* PARTE 2 - Apresentação do E-book */}
      <PresentationSection />
      
      {/* PARTE 3 - Bônus */}
      <BonusSection />
      
      {/* PARTE 4 - CTA 1 */}
      <CTASection 
        title="🎯 Não Deixe Mais Um Dia Passar Sem Agir!"
        subtitle="Sua transformação começa agora. Clique no botão abaixo e tenha acesso imediato ao método que vai mudar sua vida."
        buttonText="🔥 QUERO MEU E-BOOK AGORA POR R$ 27!"
        priceInfo={true}
      />
      
      {/* PARTE 5 - Benefícios */}
      <BenefitsSection />
      
      {/* PARTE 6 - Prova Social */}
      <TestimonialsSection />
      
      {/* PARTE 7 - CTA 2 */}
      <CTASection 
        title="✨ Junte-se às Milhares de Mulheres Que Já Se Transformaram!"
        subtitle="Não fique de fora dessa revolução.<br />Seus sonhos estão a apenas um clique de distância."
        buttonText="💎 SIM! QUERO MINHA TRANSFORMAÇÃO!"
        showGuarantee={true}
      />
      
      {/* PARTE 8 - Urgência e Escassez */}
      <UrgencySection />
      
      {/* PARTE 9 - CTA 3 Final */}
      <CTASection 
        title="⏰ Última Chance Para Garantir Sua Oferta!"
        subtitle="O tempo está acabando. Não deixe o preço voltar ao normal e perca os bônus exclusivos."
        buttonText="🚀 GARANTO MINHA OFERTA AGORA!"
      />
      
      {/* PARTE 10 - FAQ */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VolteAVestirLanding;