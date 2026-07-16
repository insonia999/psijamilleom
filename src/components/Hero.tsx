import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import ImageWithFallback from "./ui/ImageWithFallback";
import logo from "../assets/images/logo.png";
import fotoHero from "../assets/images/foto-hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#faf6f1] pb-8 md:pb-12 select-none">
      <div className="absolute top-0 right-0 w-[50%] h-[400px] bg-gradient-to-l from-[#faf6f1]/80 to-transparent blur-3xl pointer-events-none" />

      <div
        className="absolute top-0 inset-x-0 h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden bg-[#faf6f1]/30 pointer-events-none z-0"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)"
        }}
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply opacity-[0.07] z-0"
        />
      </div>

      <div className="relative z-10 max-w-[1232px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center pt-[95px] md:pt-[130px] lg:pt-[140px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-center lg:-translate-y-10"
        >
          <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] font-normal leading-[1.1] text-[#4a4444] mt-0 tracking-tight text-center">
            Sinta, compreenda,
            <br />
            <span className="font-serif italic text-[#c9b8dc]">transforme</span>
          </h1>

          <p className="text-[#8b8585] font-sans text-[17.5px] sm:text-[18.5px] leading-relaxed max-w-[560px] md:max-w-[620px] mt-6 text-center">
            Mais do que um lugar de respostas, a psicoterapia é um espaço de encontro, com você, com sua história e com aquilo que, aos poucos, pode se transformar.
          </p>

          <div className="flex flex-col items-center gap-4 mt-8 w-full">
            <a
              href="https://api.whatsapp.com/send?phone=5531996379693&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c9b8dc] text-white px-7 py-4 rounded-full text-[15px] font-bold tracking-wide transition-all duration-300 transform-gpu will-change-transform hover:bg-[#bba7d1] hover:shadow-lg hover:shadow-[#c9b8dc]/30 hover:-translate-y-[2px]"
            >
              <Calendar className="w-4 h-4" />
              Entre em contato
            </a>

            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#c9b8dc] uppercase mt-1">
              Atendimento presencial e online
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end w-full max-w-[520px] lg:max-w-[600px] aspect-[4/5] z-10"
        >
          <div className="absolute inset-[-20px] bg-gradient-to-tr from-[#f5efe7] to-[#f2ecf9] rounded-[48px] filter blur-xl opacity-60 mix-blend-multiply pointer-events-none -z-10" />

          <div className="relative w-full h-full p-6 md:p-8 group">
            <div
              className="absolute inset-0 w-[92%] h-[92%] ml-auto mt-auto border-[1.5px] border-[#c9b8dc] z-0 transition-transform duration-1000 ease-out rotate-0 group-hover:rotate-[6deg] group-hover:scale-[1.03] group-hover:translate-x-2 group-hover:translate-y-2 transform-gpu will-change-transform"
              style={{ borderRadius: "55% 45% 65% 35% / 45% 55% 45% 55%" }}
            />
            <div
              className="absolute inset-0 w-[95%] h-[95%] mr-auto mb-auto border border-[#e1d5eb] z-0 transition-transform duration-1000 ease-out rotate-[-4deg] group-hover:rotate-[-12deg] group-hover:scale-[1.03] group-hover:-translate-x-2 group-hover:-translate-y-2 transform-gpu will-change-transform"
              style={{
                borderRadius: "45% 55% 35% 65% / 55% 45% 55% 45%"
              }}
            />
            <div
              className="relative w-[95%] h-[95%] mx-auto my-auto overflow-hidden border-0 shadow-xl bg-[#f5efe7] z-10 transition-all duration-700"
              style={{ borderRadius: "35% 65% 45% 55% / 55% 45% 65% 45%" }}
            >
              <ImageWithFallback
                src={fotoHero}
                alt="Jamille Ovadia Moraes, psicóloga clínica em Belo Horizonte, em retrato profissional"
                className="w-full h-full object-cover object-[50%_18%] transition-transform duration-1000 ease-out group-hover:scale-[1.05] transform-gpu will-change-transform"
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
