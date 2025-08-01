import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Shield, Users, Star, Clock } from "lucide-react";

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromoModal = ({ isOpen, onClose }: PromoModalProps) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchase = () => {
    window.open('https://google.com', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="relative max-w-lg w-full bg-card border-2 border-primary neon-glow animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8 text-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2 neon-text">
              🔥 OFERTA EXCLUSIVA 🔥
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-destructive" />
              <span className="text-lg font-semibold text-destructive">
                Oferta expira em: {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl text-destructive line-through pulse-red font-bold">
                R$ 299,90
              </span>
              <span className="text-5xl font-bold pulse-blue">
                R$ 29,99
              </span>
            </div>
            <p className="text-lg text-accent font-semibold">
              🎯 DESCONTO DE 90% APENAS HOJE!
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-left">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-primary">+10.000 alunos satisfeitos</strong> já transformaram suas vidas
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-left">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-primary">Garantia de 30 dias</strong> ou seu dinheiro de volta
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-left">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-primary">Acesso vitalício</strong> + atualizações gratuitas
              </span>
            </div>
            
            <div className="flex items-center gap-3 text-left">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-primary">Pagamento 100% seguro</strong> e criptografado
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-bold text-lg py-6 neon-glow animate-pulse transform hover:scale-105 transition-all duration-300"
            >
              💳 QUERO GARANTIR MINHA VAGA AGORA!
            </Button>
            
            <p className="text-xs text-muted-foreground">
              ⚡ Apenas {Math.floor(Math.random() * 10) + 3} vagas restantes!
            </p>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <p>🔒 Pagamento processado por plataforma segura</p>
              <p>📱 Acesso imediato após o pagamento</p>
              <p>🎁 Bônus exclusivos inclusos</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};