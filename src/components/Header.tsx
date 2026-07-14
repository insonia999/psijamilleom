import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#f5efe7]/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1232px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <div className="flex flex-col select-none mr-4">
          <a href="#top" className="font-serif text-[12.5px] sm:text-[18px] text-[#4a4444] tracking-tight sm:tracking-wide font-bold transition-colors duration-300 mb-0.5 w-fit whitespace-nowrap hover:text-[#a18db8]">
            Psicóloga Jamille Ovadia Moraes
          </a>
          <span className="font-sans text-[8.5px] sm:text-[11px] text-[#a18db8] tracking-[2px] font-semibold inline-block w-fit whitespace-nowrap">
            PSICOLOGIA CLÍNICA &nbsp;·&nbsp;{" "}
            <a
              href="https://cadastro.cfp.org.br/visualizar.html?profissional=hA4BvB0ztxjUmV5KcrFC5DcwIH5WRnuGOhMNnHzymPA%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#bba7d1] transition-colors"
            >
              CRP-04/75728
            </a>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" aria-label="Navegação Principal">
          <a
            href="#processo"
            className="text-[#4a4444] text-[13px] font-medium hover:text-[#c9b8dc] transition-colors duration-300 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm hover:bg-white whitespace-nowrap"
          >
            O processo
          </a>
          <a
            href="#sobre"
            className="text-[#4a4444] text-[13px] font-medium hover:text-[#c9b8dc] transition-colors duration-300 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm hover:bg-white whitespace-nowrap"
          >
            Sobre mim
          </a>
          <a
            href="#servicos"
            className="text-[#4a4444] text-[13px] font-medium hover:text-[#c9b8dc] transition-colors duration-300 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm hover:bg-white whitespace-nowrap"
          >
            Serviços
          </a>
          <a
            href="#faq"
            className="text-[#4a4444] text-[13px] font-medium hover:text-[#c9b8dc] transition-colors duration-300 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm hover:bg-white whitespace-nowrap"
          >
            Dúvidas
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551993425951&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 bg-[#a18db8] hover:bg-[#8e7ca3] text-white px-4 py-2 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-sm transform-gpu will-change-transform hover:shadow-lg hover:shadow-[#a18db8]/40 hover:-translate-y-[1px] whitespace-nowrap"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#4a4444] hover:text-[#c9b8dc] transition-colors bg-white/80 backdrop-blur-sm rounded-md shadow-sm"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 w-full bg-white border-b border-[#f5efe7] px-6 py-6 flex flex-col gap-4 shadow-lg animate-fade-in-down z-40">
          <a
            href="#processo"
            onClick={() => setIsOpen(false)}
            className="text-[#4a4444] text-[15px] font-medium border-b border-[#faf6f1] pb-2 hover:text-[#c9b8dc]"
          >
            O processo
          </a>
          <a
            href="#sobre"
            onClick={() => setIsOpen(false)}
            className="text-[#4a4444] text-[15px] font-medium border-b border-[#faf6f1] pb-2 hover:text-[#c9b8dc]"
          >
            Sobre mim
          </a>
          <a
            href="#servicos"
            onClick={() => setIsOpen(false)}
            className="text-[#4a4444] text-[15px] font-medium border-b border-[#faf6f1] pb-2 hover:text-[#c9b8dc]"
          >
            Serviços
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-[#4a4444] text-[15px] font-medium border-b border-[#faf6f1] pb-2 hover:text-[#c9b8dc]"
          >
            Dúvidas
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551993425951&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-[#a18db8] text-white py-3 rounded-full text-center text-[15px] font-bold tracking-wider hover:bg-[#8e7ca3] transition-colors mt-2"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
