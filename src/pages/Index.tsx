import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problema from "@/components/sections/Problema";
import QuemSomos from "@/components/sections/QuemSomos";
import Andre from "@/components/sections/Andre";
import ComoFunciona from "@/components/sections/ComoFunciona";
import ParaQuemE from "@/components/sections/ParaQuemE";
import EstudosCaso from "@/components/sections/EstudosCaso";
import FAQ from "@/components/sections/FAQ";
import FormularioSecao from "@/components/sections/FormularioSecao";
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
        <ParaQuemE />
        <EstudosCaso />
        <FAQ />
        <FormularioSecao />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
