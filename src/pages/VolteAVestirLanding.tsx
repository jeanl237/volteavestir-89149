import React from 'react';
import HeroSection from '@/components/VolteAVestir/HeroSection';
import HowItWorksSection from '@/components/VolteAVestir/HowItWorksSection';
import PresentationSection from '@/components/VolteAVestir/PresentationSection';
import BenefitsSection from '@/components/VolteAVestir/BenefitsSection';
import BonusSection from '@/components/VolteAVestir/BonusSection';
import CTASection from '@/components/VolteAVestir/CTASection';
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
      
      {/* PARTE 2 - O que você ganha (Benefícios) */}
      <BenefitsSection />
      
      {/* PARTE 3 - Como funciona (3 passos) */}
      <HowItWorksSection />
      
      {/* PARTE 4 - Apresentação do E-book */}
      <PresentationSection />
      
      {/* PARTE 5 - Bônus */}
      <BonusSection />
      
      {/* PARTE 6 - CTA 1 */}
      <CTASection 
        title="🎯 Comece Sua Transformação Hoje!"
        subtitle="Sua transformação começa agora. Clique no botão e receba acesso imediato ao método completo + todos os bônus."
        buttonText="🎁 Quero o pacote por R$27"
        priceInfo={true}
        showGuarantee={true}
      />
      
      {/* PARTE 7 - Prova Social */}
      <TestimonialsSection />
      
      {/* PARTE 8 - Urgência e Escassez */}
      <UrgencySection />
      
      {/* PARTE 9 - CTA 2 Final */}
      <CTASection 
        title="⏰ Última Chance Para Garantir Sua Oferta!"
        subtitle="O tempo está acabando. Não deixe o preço voltar ao normal e perca os bônus exclusivos."
        buttonText="🚀 Garanto minha oferta agora!"
      />
      
      {/* PARTE 10 - FAQ */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VolteAVestirLanding;