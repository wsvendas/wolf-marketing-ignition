import wolfMentor from "@/assets/wolf-mentor.jpg";
import wolfSuccess from "@/assets/wolf-success.jpg";

const testimonials = [
  {
    name: "Carlos Eduardo",
    result: "R$ 15.000 no primeiro mês",
    quote: "Nunca pensei que conseguiria ganhar tanto dinheiro online. O curso mudou minha vida completamente!",
    image: wolfSuccess
  },
  {
    name: "Marina Silva",
    result: "R$ 32.000 em 3 meses",
    quote: "Saí do zero absoluto para ter minha própria agência de marketing digital. Inacreditável!",
    image: wolfMentor
  },
  {
    name: "Ricardo Santos",
    result: "R$ 8.500 na primeira semana",
    quote: "Aplicei as estratégias exatamente como ensinado e os resultados vieram muito rápido!",
    image: wolfSuccess
  }
];

const benefits = [
  {
    icon: "🎯",
    title: "FÓRMULA EXCLUSIVA",
    description: "Método único desenvolvido por especialistas que já faturaram milhões"
  },
  {
    icon: "📱",
    title: "ACESSO MOBILE",
    description: "Estude quando e onde quiser, direto do seu celular"
  },
  {
    icon: "🏆",
    title: "CERTIFICADO",
    description: "Certificado reconhecido para turbinar seu currículo"
  },
  {
    icon: "👥",
    title: "COMUNIDADE VIP",
    description: "Acesso exclusivo ao grupo de alunos de elite"
  },
  {
    icon: "🎁",
    title: "BÔNUS EXCLUSIVOS",
    description: "Templates, scripts e ferramentas premium inclusos"
  },
  {
    icon: "⚡",
    title: "SUPORTE DIRETO",
    description: "Tire suas dúvidas diretamente com os mentores"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
            VEJA OS RESULTADOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estes são apenas alguns dos{" "}
            <span className="text-primary font-bold neon-text">+10.000 alunos</span>
            {" "}que já transformaram suas vidas
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group bg-card rounded-xl p-6 neon-border hover:neon-glow transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover neon-border mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-primary font-bold neon-text">{testimonial.result}</p>
                </div>
              </div>
              
              <blockquote className="text-muted-foreground italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-accent text-xl">
                {"★".repeat(5)}
              </div>
              
              {/* Efeito hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 neon-text">
            O QUE VOCÊ VAI RECEBER
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 neon-border hover:neon-glow transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-lg text-primary mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de urgência */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 neon-border">
          <h3 className="text-3xl font-bold mb-4 neon-text">
            ⚠️ ATENÇÃO: VAGAS LIMITADAS!
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Para manter a qualidade do ensino, liberamos apenas{" "}
            <span className="text-destructive font-bold pulse-red">100 vagas por mês</span>
          </p>
          <div className="text-2xl font-bold text-primary neon-text">
            Restam apenas {Math.floor(Math.random() * 15) + 5} vagas!
          </div>
        </div>
      </div>
    </section>
  );
};