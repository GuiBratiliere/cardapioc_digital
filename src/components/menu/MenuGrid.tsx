import { MenuItem } from "@/data/menuData";
import { MenuItemCard } from "./MenuItemCard";

interface MenuGridProps {
  items?: MenuItem[];
  categoryName: string;
}

export function MenuGrid({ items = [], categoryName }: MenuGridProps) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Nenhum item disponível
      </div>
    );
  }
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-foreground">
        {categoryName}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
