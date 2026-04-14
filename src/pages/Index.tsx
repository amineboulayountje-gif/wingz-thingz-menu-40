import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuCard";
import SidesAndDrinks from "@/components/SidesAndDrinks";
import OrderAndSocial from "@/components/OrderAndSocial";
import { OrderProvider } from "@/context/OrderContext";

const Index = () => {
  const step2Ref = useRef<HTMLDivElement>(null);

  const goToStep2 = () => {
    step2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <OrderProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />

        <MenuSection onNext={goToStep2} />

        <div ref={step2Ref}>
          <SidesAndDrinks />
        </div>

        <OrderAndSocial />
      </div>
    </OrderProvider>
  );
};

export default Index;
