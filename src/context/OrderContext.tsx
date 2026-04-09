import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

interface OrderState {
  menu: MenuItem | null;
  sides: string[];
  drink: string | null;
}

interface OrderContextType {
  order: OrderState;
  setMenu: (item: MenuItem | null) => void;
  toggleSide: (side: string) => void;
  setDrink: (drink: string | null) => void;
  resetOrder: () => void;
  isComplete: boolean;
  orderSummaryText: string;
}

const defaultOrder: OrderState = { menu: null, sides: [], drink: null };

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [order, setOrder] = useState<OrderState>(defaultOrder);

  const setMenu = useCallback((item: MenuItem | null) => {
    setOrder((prev) => ({ ...prev, menu: item }));
  }, []);

  const toggleSide = useCallback((side: string) => {
    setOrder((prev) => {
      const has = prev.sides.includes(side);
      if (has) return { ...prev, sides: prev.sides.filter((s) => s !== side) };
      if (prev.sides.length >= 2) return prev; // max 2
      return { ...prev, sides: [...prev.sides, side] };
    });
  }, []);

  const setDrink = useCallback((drink: string | null) => {
    setOrder((prev) => ({ ...prev, drink: prev.drink === drink ? null : drink }));
  }, []);

  const resetOrder = useCallback(() => setOrder(defaultOrder), []);

  const isComplete = !!order.menu && order.sides.length === 2 && !!order.drink;

  const orderSummaryText = order.menu
    ? `Hoi! Ik wil graag bestellen:\n\n🍗 ${order.menu.name} (${order.menu.price})\n🥗 Bijgerechten: ${order.sides.length ? order.sides.join(", ") : "–"}\n🥤 Drankje: ${order.drink || "–"}\n\nBedankt! 🙏`
    : "";

  return (
    <OrderContext.Provider value={{ order, setMenu, toggleSide, setDrink, resetOrder, isComplete, orderSummaryText }}>
      {children}
    </OrderContext.Provider>
  );
};
