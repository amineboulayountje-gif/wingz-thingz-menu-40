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
  orders: OrderState[]; // ✅ NEW
  currentOrder: OrderState; // ✅ NEW
  setMenu: (item: MenuItem | null) => void;
  toggleSide: (side: string) => void;
  setDrink: (drink: string | null) => void;
  addOrder: () => void; // ✅ NEW
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
  // ✅ NEW STATE
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [currentOrder, setCurrentOrder] = useState<OrderState>(defaultOrder);

  const setMenu = useCallback((item: MenuItem | null) => {
    setCurrentOrder((prev) => ({ ...prev, menu: item }));
  }, []);

  const toggleSide = useCallback((side: string) => {
    setCurrentOrder((prev) => {
      const has = prev.sides.includes(side);
      if (has) return { ...prev, sides: prev.sides.filter((s) => s !== side) };
      if (prev.sides.length >= 2) return prev;
      return { ...prev, sides: [...prev.sides, side] };
    });
  }, []);

  const setDrink = useCallback((drink: string | null) => {
    setCurrentOrder((prev) => ({ ...prev, drink: prev.drink === drink ? null : drink }));
  }, []);

  // ✅ NEW FUNCTION
  const addOrder = useCallback(() => {
    if (!currentOrder.menu || currentOrder.sides.length !== 2 || !currentOrder.drink) return;

    setOrders((prev) => [...prev, currentOrder]);
    setCurrentOrder(defaultOrder);
  }, [currentOrder]);

  // ✅ UPDATED RESET
  const resetOrder = useCallback(() => {
    setOrders([]);
    setCurrentOrder(defaultOrder);
  }, []);

  const isComplete =
    !!currentOrder.menu &&
    currentOrder.sides.length === 2 &&
    !!currentOrder.drink;

  const orderSummaryText = orders.length
    ? `Hoi! Ik wil graag bestellen:\n\n${orders
        .map(
          (o, i) =>
            `🍗 Bestelling ${i + 1}:\n${o.menu?.name} (${o.menu?.price})\n🥗 ${o.sides.join(", ")}\n🥤 ${o.drink}`
        )
        .join("\n\n")}\n\nBedankt! 🙏`
    : "";

  return (
    <OrderContext.Provider
      value={{
        orders,
        currentOrder,
        setMenu,
        toggleSide,
        setDrink,
        addOrder,
        resetOrder,
        isComplete,
        orderSummaryText,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
