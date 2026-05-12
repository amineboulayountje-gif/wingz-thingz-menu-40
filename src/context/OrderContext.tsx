import { createContext, useContext, useState, ReactNode } from "react";

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
}

const defaultOrder: OrderState = {
  menu: null,
  sides: [],
  drink: null,
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const ctx = useContext(OrderContext);

  if (!ctx) {
    throw new Error("useOrder must be used inside OrderProvider");
  }

  return ctx;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [currentOrder, setCurrentOrder] = useState<OrderState>(defaultOrder);

  const setMenu = (item: MenuItem | null) => {
    setCurrentOrder((prev) => ({ ...prev, menu: item }));
  };

  const toggleSide = (side: string) => {
    setCurrentOrder((prev) => {
      const exists = prev.sides.includes(side);

      if (exists) {
        return {
          ...prev,
          sides: prev.sides.filter((s) => s !== side),
        };
      }

      if (prev.sides.length >= 2) return prev;

      return {
        ...prev,
        sides: [...prev.sides, side],
      };
    });
  };

  const setDrink = (drink: string | null) => {
    setCurrentOrder((prev) => ({
      ...prev,
      drink,
    }));
  };

  const addOrder = () => {
    if (!currentOrder.menu || currentOrder.sides.length !== 2 || !currentOrder.drink) {
      return;
    }

    setOrders((prev) => [...prev, currentOrder]);

    setCurrentOrder(defaultOrder);
  };

  const resetOrder = () => {
    setOrders([]);
    setCurrentOrder(defaultOrder);
  };

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
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
