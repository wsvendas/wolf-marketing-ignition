import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { YouTubePlayer } from "@/components/YouTubePlayer";
import { PromoModal } from "@/components/PromoModal";

const Index = () => {
  const [showPromoModal, setShowPromoModal] = useState(false);

  const handleVideoEnd = () => {
    setShowPromoModal(true);
  };

  const closePromoModal = () => {
    setShowPromoModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section com imagens do Wolf */}
      <HeroSection />
      
      {/* Seção do vídeo */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 neon-text">
              ASSISTA E DESCUBRA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja como é possível conquistar a{" "}
              <span className="text-primary font-bold neon-text">liberdade financeira</span>
              {" "}usando o poder do marketing digital
            </p>
          </div>
          
          <YouTubePlayer onVideoEnd={handleVideoEnd} />
          
          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              ⬆️ Assista até o final e receba uma oferta especial! ⬆️
            </p>
          </div>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <TestimonialsSection />

      {/* Seção final com mais frases motivacionais */}
      <section className="py-20 relative bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 neon-text">
            "O FUTURO PERTENCE ÀQUELES QUE ACREDITAM"
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Não deixe essa oportunidade passar. Milhares já começaram sua jornada rumo ao sucesso.
            <br />
            <span className="text-primary font-bold neon-text">Agora é a sua vez!</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur rounded-xl p-8 neon-border">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold text-primary mb-4">TRANSFORMAÇÃO TOTAL</h3>
              <p className="text-muted-foreground">
                Mude sua vida financeira em 30 dias ou menos
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur rounded-xl p-8 neon-border">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-primary mb-4">MÉTODO EXCLUSIVO</h3>
              <p className="text-muted-foreground">
                Estratégias que só os grandes players conhecem
              </p>
            </div>
            
            <div className="bg-card/80 backdrop-blur rounded-xl p-8 neon-border">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-primary mb-4">RESULTADOS GARANTIDOS</h3>
              <p className="text-muted-foreground">
                Ou seu dinheiro de volta sem questionamentos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de promoção */}
      <PromoModal isOpen={showPromoModal} onClose={closePromoModal} />
    </div>
  );
};

export default Index;
