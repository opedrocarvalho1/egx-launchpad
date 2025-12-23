import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-outfit bg-background min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Próximas seções virão nas fases seguintes */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
