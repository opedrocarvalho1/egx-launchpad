import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/sections/Problema";
import QuemSomos from "@/components/sections/QuemSomos";
import Andre from "@/components/sections/Andre";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-outfit bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problema />
        <QuemSomos />
        <Andre />
        <ComoFunciona />
        {/* Próximas seções: Formulário virá na fase 3 */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
