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
  orders: OrderState[];
  currentOrder: OrderState;

  setMenu: (item: MenuItem | null) => void;
  toggleSide: (side: string) => void;
  setDrink: (drink: string | null) => void;

  addOrder: () => void;
  submitOrders: () => void;

  resetOrder: () => void;

  isComplete: boolean;
  isSubmitted: boolean;

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
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderState[]>([]);
  const [currentOrder, setCurrentOrder] =
    useState<OrderState>(defaultOrder);

  const [isSubmitted, setIsSubmitted] = useState(false);

  /* =========================
     CURRENT ORDER ACTIONS
  ========================= */

  const setMenu = useCallback((item: MenuItem | null) => {
    setCurrentOrder((prev) => ({ ...prev, menu: item }));
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

      if (prev.sides.length >= 2) return prev;

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

  /* =========================
     ADD ORDER (MULTI CART)
  ========================= */

  const addOrder = useCallback(() => {
    if (
      !currentOrder.menu ||
      currentOrder.sides.length !== 2 ||
      !currentOrder.drink
    )
      return;

    setOrders((prev) => [...prev, currentOrder]);
    setCurrentOrder(defaultOrder);
  }, [currentOrder]);

  /* =========================
     SUBMIT / CHECKOUT
  ========================= */

  const submitOrders = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  /* =========================
     RESET EVERYTHING
  ========================= */

  const resetOrder = useCallback(() => {
    setOrders([]);
    setCurrentOrder(defaultOrder);
    setIsSubmitted(false);
  }, []);

  /* =========================
     STATUS
  ========================= */

  const isComplete =
    !!currentOrder.menu &&
    currentOrder.sides.length === 2 &&
    !!currentOrder.drink;

  /* =========================
     SUMMARY TEXT (WHATSAPP)
  ========================= */

  const orderSummaryText = orders.length
    ? `Hoi! Ik wil graag bestellen:\n\n${orders
        .map(
          (o, i) =>
            `🍗 Bestelling ${i + 1}:\n${o.menu?.name} (${
              o.menu?.price
            })\n🥗 ${o.sides.join(", ")}\n🥤 ${o.drink}`
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
        submitOrders,

        resetOrder,

        isComplete,
        isSubmitted,

        orderSummaryText,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
