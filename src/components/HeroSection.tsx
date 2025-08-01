import wolfPortrait from "@/assets/wolf-portrait-1.jpg";
import wolfCelebration from "@/assets/wolf-celebration.jpg";
import wolfSuccess from "@/assets/wolf-success.jpg";
import wolfMentor from "@/assets/wolf-mentor.jpg";

const motivationalQuotes = [
  "O SUCESSO NÃO É SORTE, É ESTRATÉGIA",
  "TRANSFORME SUA VIDA EM 30 DIAS",
  "DE ZERO AO PRIMEIRO MILHÃO",
  "O MARKETING QUE REALMENTE FUNCIONA",
  "DESPERTE O EMPRESÁRIO EM VOCÊ",
  "LIBERDADE FINANCEIRA É POSSÍVEL"
];

const wolfImages = [wolfPortrait, wolfCelebration, wolfSuccess, wolfMentor];

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Efeito de partículas no fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 neon-text">
            O SEGREDO ESTÁ
            <br />
            <span className="text-accent">APÓS O VÍDEO</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O método que já transformou a vida de{" "}
            <span className="text-primary font-bold neon-text">+10.000 pessoas</span>
            <br />
            e pode transformar a sua também
          </p>
        </div>

        {/* Grid de imagens do Wolf com frases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {wolfImages.map((image, index) => (
            <div
              key={index}
              className="relative group transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-xl neon-border bg-card">
                <img
                  src={image}
                  alt={`Wolf of Wall Street ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg neon-text">
                      {motivationalQuotes[index]}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Efeito neon em volta */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </div>
          ))}
        </div>

        {/* Frases motivacionais grandes */}
        <div className="space-y-8 text-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
              "PARE DE SONHAR E COMECE A CONQUISTAR"
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra os segredos que os grandes empresários usam para dominar o mercado digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur neon-border">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary mb-2">RENDA EXTRA</h3>
              <p className="text-muted-foreground">
                Ganhe de R$ 5.000 a R$ 50.000 por mês com marketing digital
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur neon-border">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-primary mb-2">ESTRATÉGIAS COMPROVADAS</h3>
              <p className="text-muted-foreground">
                Métodos testados e aprovados por milhares de alunos
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur neon-border">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-primary mb-2">RESULTADOS RÁPIDOS</h3>
              <p className="text-muted-foreground">
                Veja os primeiros resultados em apenas 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};