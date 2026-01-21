import { Plus } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem } = useCart();

  const handleAddItem = () => {
    addItem(item);
    toast.success(`${item.name} adicionado ao carrinho!`, {
      duration: 2000,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="group animate-slide-up overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-foreground">
          {item.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {formatPrice(item.price)}
          </span>

          <Button
            onClick={handleAddItem}
            size="sm"
            className="gradient-primary text-primary-foreground hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-float"
          >
            <Plus className="mr-1 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
