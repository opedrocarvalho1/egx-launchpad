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
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="font-outfit bg-background min-h-screen">
      <ScrollProgress />
      <Header />
      <main id="main-content">
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
      <CookieBanner />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
