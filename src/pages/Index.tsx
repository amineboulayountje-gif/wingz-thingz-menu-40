import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuCard";
import SidesAndDrinks from "@/components/SidesAndDrinks";
import OrderAndSocial from "@/components/OrderAndSocial";
import { OrderProvider } from "@/context/OrderContext";

const Index = () => {
  return (
    <OrderProvider>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <MenuSection />
        <SidesAndDrinks />
        <OrderAndSocial />
      </div>
    </OrderProvider>
  );
};

export default Index;
