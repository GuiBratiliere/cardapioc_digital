export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export async function getCategories() {
  const res = await fetch("/api/tipos");
  const json = await res.json();
  return json.data;
}

export async function getMenuItems(tipoId: string) {
  const res = await fetch(`/api/pratos?category=${tipoId}`);

  const json = await res.json();
  return json.data;
}

// export const menuItems: MenuItem[] = [
//   {
//     id: "1",
//     name: "Classic Burger",
//     description:
//       "Pão artesanal, blend 180g, queijo cheddar, alface, tomate e molho especial",
//     price: 32.9,
//     image:
//       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
//     category: "burgers",
//   },
//   {
//     id: "2",
//     name: "Bacon Lovers",
//     description:
//       "Pão brioche, blend 200g, bacon crocante, queijo, cebola caramelizada",
//     price: 38.9,
//     image:
//       "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
//     category: "burgers",
//   },
//   {
//     id: "3",
//     name: "Veggie Delight",
//     description:
//       "Hambúrguer de grão-de-bico, rúcula, tomate seco e maionese vegana",
//     price: 29.9,
//     image:
//       "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
//     category: "burgers",
//   },
//   {
//     id: "4",
//     name: "Pizza Margherita",
//     description:
//       "Molho de tomate fresco, mussarela de búfala, manjericão e azeite",
//     price: 45.9,
//     image:
//       "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
//     category: "pizzas",
//   },
//   {
//     id: "5",
//     name: "Pizza Pepperoni",
//     description: "Molho especial, mussarela, pepperoni importado e orégano",
//     price: 52.9,
//     image:
//       "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
//     category: "pizzas",
//   },
//   {
//     id: "6",
//     name: "Pizza Quatro Queijos",
//     description: "Mussarela, gorgonzola, parmesão e catupiry",
//     price: 49.9,
//     image:
//       "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
//     category: "pizzas",
//   },
//   {
//     id: "7",
//     name: "Refrigerante Lata",
//     description: "Coca-Cola, Guaraná ou Sprite - 350ml",
//     price: 6.9,
//     image:
//       "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=300&fit=crop",
//     category: "bebidas",
//   },
//   {
//     id: "8",
//     name: "Suco Natural",
//     description: "Laranja, limão, maracujá ou morango - 400ml",
//     price: 12.9,
//     image:
//       "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop",
//     category: "bebidas",
//   },
//   {
//     id: "9",
//     name: "Milk Shake",
//     description: "Chocolate, morango ou ovomaltine - 500ml",
//     price: 18.9,
//     image:
//       "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
//     category: "bebidas",
//   },
//   {
//     id: "10",
//     name: "Brownie com Sorvete",
//     description: "Brownie caseiro com sorvete de creme e calda de chocolate",
//     price: 22.9,
//     image:
//       "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop",
//     category: "sobremesas",
//   },
//   {
//     id: "11",
//     name: "Petit Gateau",
//     description: "Bolo quente de chocolate com recheio cremoso e sorvete",
//     price: 26.9,
//     image:
//       "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
//     category: "sobremesas",
//   },
//   {
//     id: "12",
//     name: "Cheesecake",
//     description: "Cheesecake cremoso com calda de frutas vermelhas",
//     price: 19.9,
//     image:
//       "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
//     category: "sobremesas",
//   },
// ];
