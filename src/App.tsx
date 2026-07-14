import Header from "./components/Header";
import Hero from "./components/Hero";
import PsicoterapiaInfo from "./components/PsicoterapiaInfo";
import Sobre from "./components/Sobre";
import ContourDrawings from "./components/ContourDrawings";
import Especialidades from "./components/Especialidades";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";

export default function App() {
  if (window.location.pathname === "/politica-de-privacidade") {
    return <PoliticaPrivacidade />;
  }

  return (
    <div className="relative min-h-screen bg-white text-[#4a4444] font-sans antialiased selection:bg-[#f2ecf9] selection:text-[#c9b8dc] overflow-x-hidden">
      <Header />
      <main id="top">
        <Hero />
        <PsicoterapiaInfo />
        <Sobre />
        <ContourDrawings />
        <Especialidades />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
