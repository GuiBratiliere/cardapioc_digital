import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  X,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import { useState } from "react";

export function CartDrawer() {
  const {
    items,
    address,
    totalItems,
    totalPrice,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [adress, setAddress] = useState("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const sendToWhatsApp = () => {
    if (items.length === 0) {
      toast.error("Adicione itens ao carrinho primeiro!");
      return;
    }

    if (!adress.trim()) {
      toast.error("Por favor, informe seu endereço!");
      return;
    }

    const phoneNumber = "5531995259313"; // Substitua pelo número do restaurante

    let message = "🍽️ *Novo Pedido - Sabor & Arte*\n\n";
    message += "📋 *Itens do Pedido:*\n";
    message += "─────────────────\n";

    items.forEach((item) => {
      message += `\n• ${item.quantity}x ${item.name}\n`;
      message += `   ${formatPrice(item.price)} cada\n`;
      message += `   *Subtotal: ${formatPrice(item.price * item.quantity)}*\n`;
    });

    message += "\n─────────────────\n";
    message += `\n💰 *TOTAL: ${formatPrice(totalPrice)}*\n\n`;
    message += "📍 *Endereço de entrega:*\n";
    message += `${adress}\n\n`;
    message += "🕐 *Observações:*\n";
    message += "[Alguma observação?]";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full gradient-primary shadow-float hover:opacity-90 transition-all duration-300 hover:scale-110 animate-bounce-subtle"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-foreground">
              Carrinho vazio
            </h3>
            <p className="text-sm text-muted-foreground">
              Adicione itens deliciosos do nosso cardápio!
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-xl bg-muted/50 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <h4 className="font-medium text-foreground">
                        {item.name}
                      </h4>
                      <span className="text-sm font-semibold text-primary">
                        {formatPrice(item.price)}
                      </span>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Endereço de entrega
              </label>
              <textarea
                value={adress}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Rua, número, bairro, complemento..."
                className="w-full rounded-md border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                rows={2}
              />
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <Button
                onClick={sendToWhatsApp}
                className="w-full gap-2 gradient-primary text-primary-foreground hover:opacity-90 h-14 text-lg font-semibold shadow-float"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar Pedido via WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  clearCart();
                  toast.success("Carrinho limpo!");
                }}
              >
                Limpar Carrinho
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
