import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuCard";
import SidesAndDrinks from "@/components/SidesAndDrinks";
import OrderAndSocial from "@/components/OrderAndSocial";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MenuSection />
      <SidesAndDrinks />
      <OrderAndSocial />
    </div>
  );
};

export default Index;
