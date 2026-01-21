import { MapPin, Clock } from "lucide-react";

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background pb-8 pt-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmOTczMTYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-float">
            <span className="text-4xl">🍽️</span>
          </div>
          
          <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
            Sabor & Arte
          </h1>
          
          <p className="mb-6 text-muted-foreground">
            Os melhores sabores da cidade, direto para você
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-card">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Rua das Flores, 123</span>
            </div>
            
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-card">
              <Clock className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium">Aberto agora</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
