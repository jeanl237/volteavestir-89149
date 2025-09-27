import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutro-escuro text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-verde-principal mb-2">
              Volte a Vestir
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transforme sua vida com hábitos simples e sustentáveis. 
              Volte a usar suas roupas favoritas e reconquiste sua autoestima.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-2">Aviso Legal</h4>
                <p className="leading-relaxed">
                  Os resultados podem variar de pessoa para pessoa. Este produto não substitui 
                  o acompanhamento médico ou nutricional profissional. Consulte sempre um 
                  especialista antes de iniciar qualquer programa de emagrecimento.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-2">Informações do Produto</h4>
                <ul className="space-y-1">
                  <li>• E-book digital em formato PDF</li>
                  <li>• Download imediato após pagamento</li>
                  <li>• Suporte via plataforma Hotmart</li>
                  <li>• Garantia de 7 dias</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-400">
              © 2024 Volte a Vestir. Todos os direitos reservados. 
              <br />
              Este site não está afiliado ao Facebook, Google ou qualquer dessas empresas. 
              Vendas processadas pela plataforma Hotmart.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;