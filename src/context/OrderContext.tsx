import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

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
  // ✅ oude compatibiliteit
  order: OrderState;

  // ✅ nieuwe structuur
  currentOrder: OrderState;
  orders: OrderState[];

  setMenu: (item: MenuItem | null) => void;
  toggleSide: (side: string) => void;
  setDrink: (drink: string | null) => void;

  resetOrder: () => void;

  isComplete: boolean;
  orderSummaryText: string;
}

const defaultOrder: OrderState = {
  menu: null,
  sides: [],
  drink: null,
};

const OrderContext = createContext<OrderContextType | null>(null);

export const useOrder = () => {
  const ctx = useContext(OrderContext);

  if (!ctx) {
    throw new Error("useOrder must be used within OrderProvider");
  }

  return ctx;
};

export const OrderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // ✅ actieve bestelling
  const [currentOrder, setCurrentOrder] =
    useState<OrderState>(defaultOrder);

  // ✅ toekomstige multi-orders
  const [orders, setOrders] = useState<OrderState[]>([]);

  const setMenu = useCallback((item: MenuItem | null) => {
    setCurrentOrder((prev) => ({
      ...prev,
      menu: item,
    }));
  }, []);

  const toggleSide = useCallback((side: string) => {
    setCurrentOrder((prev) => {
      const has = prev.sides.includes(side);

      if (has) {
        return {
          ...prev,
          sides: prev.sides.filter((s) => s !== side),
        };
      }

      if (prev.sides.length >= 2) {
        return prev;
      }

      return {
        ...prev,
        sides: [...prev.sides, side],
      };
    });
  }, []);

  const setDrink = useCallback((drink: string | null) => {
    setCurrentOrder((prev) => ({
      ...prev,
      drink: prev.drink === drink ? null : drink,
    }));
  }, []);

  const resetOrder = useCallback(() => {
    setCurrentOrder(defaultOrder);
  }, []);

  const isComplete =
    !!currentOrder.menu &&
    currentOrder.sides.length === 2 &&
    !!currentOrder.drink;

  // ✅ voorlopig nog huidige order
  const orderSummaryText = currentOrder.menu
    ? `Hoi! Ik wil graag bestellen:

🍗 ${currentOrder.menu.name} (${currentOrder.menu.price})
🥗 Bijgerechten: ${
        currentOrder.sides.length
          ? currentOrder.sides.join(", ")
          : "–"
      }
🥤 Drankje: ${currentOrder.drink || "–"}

Bedankt! 🙏`
    : "";

  return (
    <OrderContext.Provider
      value={{
        // ✅ backward compatibility
        order: currentOrder,

        // ✅ nieuwe structuur
        currentOrder,
        orders,

        setMenu,
        toggleSide,
        setDrink,

        resetOrder,

        isComplete,
        orderSummaryText,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
