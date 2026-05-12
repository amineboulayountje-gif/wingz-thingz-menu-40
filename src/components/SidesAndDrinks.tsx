import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export interface MenuItem {
  name: string;
  price: string;
  image: string;
}

export interface OrderState {
  menu: MenuItem | null;
  sides: string[];
  drink: string | null;
}

interface OrderContextType {
  orders: OrderState[];
  currentOrder: OrderState;

  setMenu: (item: MenuItem | null) => void;
  toggleSide: (side: string) => void;
  setDrink: (drink: string | null) => void;

  addOrder: () => void;
  resetOrder: () => void;

  isComplete: boolean;
  orderSummaryText: string;
}

const defaultOrder: OrderState = {
  menu: null,
  sides: [],
  drink: null,
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [currentOrder, setCurrentOrder] = useState<OrderState>(defaultOrder);

  /* =========================
     SAFE UPDATERS
  ========================= */

  const setMenu = useCallback((item: MenuItem | null) => {
    setCurrentOrder((prev) => ({
      ...prev,
      menu: item,
    }));
  }, []);

  const toggleSide = useCallback((side: string) => {
    setCurrentOrder((prev) => {
      const safeSides = prev.sides ?? [];

      const exists = safeSides.includes(side);

      return {
        ...prev,
        sides: exists
          ? safeSides.filter((s) => s !== side)
          : safeSides.length >= 2
          ? safeSides
          : [...safeSides, side],
      };
    });
  }, []);

  const setDrink = useCallback((drink: string | null) => {
    setCurrentOrder((prev) => ({
      ...prev,
      drink: prev.drink === drink ? null : drink,
    }));
  }, []);

  /* =========================
     ADD ORDER (FIXED SAFE PUSH)
  ========================= */

  const addOrder = useCallback(() => {
    if (!currentOrder.menu) return;
    if (currentOrder.sides.length !== 2) return;
    if (!currentOrder.drink) return;

    const newOrder: OrderState = {
      menu: currentOrder.menu,
      sides: [...currentOrder.sides],
      drink: currentOrder.drink,
    };

    setOrders((prev) => [...prev, newOrder]);

    setCurrentOrder(defaultOrder);
  }, [currentOrder]);

  /* =========================
     RESET
  ========================= */

  const resetOrder = useCallback(() => {
    setOrders([]);
    setCurrentOrder(defaultOrder);
  }, []);

  /* =========================
     DERIVED STATE
  ========================= */

  const isComplete =
    !!currentOrder.menu &&
    currentOrder.sides.length === 2 &&
    !!currentOrder.drink;

  const orderSummaryText = orders
    .filter(Boolean) // 🔥 FIX: removes undefined entries
    .map((o, i) => {
      if (!o) return "";
      return `Order ${i + 1}: ${o.menu?.name}`;
    })
    .join("\n");

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
