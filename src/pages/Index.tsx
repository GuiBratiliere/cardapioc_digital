import { useEffect, useState } from "react";
import { Header } from "@/components/menu/Header";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { CartDrawer } from "@/components/menu/CartDrawer";
import { getCategories, getMenuItems } from "@/data/menuData";
import { Category } from "@/data/menuData";
import { MenuItem } from "@/data/menuData";

const Index = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  // 🔹 Carregar categorias
  useEffect(() => {
    async function loadCategories() {
      const data = await getCategories();
      setCategories(data);

      if (data.length > 0) {
        setActiveCategory(data[0].id);
      }
    }

    loadCategories();
  }, []);

  // 🔹 Carregar pratos quando a categoria mudar
  useEffect(() => {
    if (!activeCategory) {
      setMenuItems([]);
      return;
    }

    getMenuItems(activeCategory)
      .then(setMenuItems)
      .catch(() => setMenuItems([]));
  }, [activeCategory]);

  const activeCategoryName =
    categories.find((c) => c.id === activeCategory)?.name || "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="pb-24">
        <MenuGrid items={menuItems} categoryName={activeCategoryName} />
      </main>

      <CartDrawer />
    </div>
  );
};

export default Index;
