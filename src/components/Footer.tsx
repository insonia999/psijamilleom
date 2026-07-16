import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, AlertTriangle, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const [mapsUrl, setMapsUrl] = useState("https://www.google.com/maps/search/?api=1&query=Rua%20Tenente%20Brito%20Melo,%201355%20-%20Barro%20Preto,%20Belo%20Horizonte%20-%20MG,%2030180-070");

  useEffect(() => {
    const checkPlatform = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

      const isMobileUA = /android|iphone|ipad|ipod/i.test(userAgent);
      setIsMobile(isMobileUA);

      const isApple = /iPad|iPhone|iPod|Macintosh/i.test(userAgent);
      if (isApple) {
        setMapsUrl("https://maps.apple.com/?q=Rua%20Tenente%20Brito%20Melo,%201355%20-%20Barro%20Preto,%20Belo%20Horizonte%20-%20MG,%2030180-070");
      }
    };
    checkPlatform();
  }, []);

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile) {
      e.preventDefault();
      setShowPhoneOptions(!showPhoneOptions);
    }
  };
  return (
    <footer className="bg-white pt-6 pb-8 select-none" id="contato">
      <div className="max-w-[1232px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.95fr_0.9fr] gap-12 lg:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#c9b8dc] to-[#b6a3d4] rounded-[32px] p-8 md:p-10 text-white shadow-xl shadow-[#c9b8dc]/30 relative overflow-hidden"
          >
            <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <h3 className="font-serif text-[26px] font-normal text-white mb-4 leading-tight">
              Vamos conversar?
            </h3>
            <p className="text-[#f2ecf9] text-[15px] leading-relaxed mb-8 opacity-95">
              Tire suas dúvidas ou agende sua primeira sessão de terapia diretamente pelo WhatsApp.
              <br />
              Estou aqui para te acolher.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5531996379693&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/35 text-white border border-white/30 px-6 py-3.5 rounded-full text-[14px] font-bold tracking-wide transition-all duration-300"
            >
              <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white" stroke="none">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill="currentColor">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]" fillRule="evenodd"></path>
                    </g>
                  </g>
                </g>
              </svg>
              Chamar no WhatsApp
            </a>
          </motion.div>

          <div className="flex flex-col items-start text-left">
            <h4 className="font-serif text-[22px] text-[#4a4444] font-normal leading-tight mt-1 mb-2">
              Jamille Ovadia Moraes
            </h4>
            <div className="text-[#c9b8dc] text-[11.5px] font-bold tracking-[2px] uppercase">
              Psicóloga Clínica ·{" "}
              <a
                href="https://cadastro.cfp.org.br/visualizar.html?profissional=hA4BvB0ztxjUmV5KcrFC5DcwIH5WRnuGOhMNnHzymPA%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#bba7d1] transition-colors"
              >
                CRP-04/75728
              </a>
            </div>
            <p className="text-[#bfb5a8] text-[15px] leading-relaxed mt-4 max-w-[280px] mb-6">
              Promovendo saúde mental e bem-estar através de uma abordagem humanizada, ética e baseada em evidências.
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              <a
                href="mailto:psijamilleom@gmail.com"
                className="flex items-center gap-3.5 text-[#bfb5a8] text-[14px] hover:text-[#bba7d1] transition-colors group/mail"
              >
                <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0 group-hover/mail:bg-[#c9b8dc]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="leading-tight font-medium">
                  psijamilleom@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/jamille-ovadia-moraes-3aa04259/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-[#bfb5a8] text-[14px] hover:text-[#bba7d1] transition-colors group/linkedin"
              >
                <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0 group-hover/linkedin:bg-[#c9b8dc]/20 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="leading-tight font-medium">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start text-left w-full h-full">
            <h5 className="font-sans font-semibold text-[15px] text-[#4a4444] mb-5">
              Atendimento Presencial
            </h5>

            <div className="w-full mb-6 rounded-xl overflow-hidden shadow-sm h-[130px] border border-[#f5efe7]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=Rua%20Tenente%20Brito%20Melo,%201355%20-%20Barro%20Preto,%20Belo%20Horizonte%20-%20MG+(Consult%C3%B3rio)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Localização do Consultório no Google Maps"
              ></iframe>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 text-[#bfb5a8] text-[14px] mb-4 hover:text-[#bba7d1] transition-colors group/map"
            >
              <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0 group-hover/map:bg-[#c9b8dc]/20 transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="leading-tight font-medium">
                Rua Tenente Brito Melo, 1355 - Barro Preto
                <br />
                <span className="text-xs font-normal">Belo Horizonte - MG, 30180-070</span>
              </span>
            </a>

            <div className="flex items-center gap-3.5 text-[#bfb5a8] text-[14px] mb-4 relative group/phone">
              <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0 group-hover/phone:bg-[#c9b8dc]/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="relative">
                <a
                  href={isMobile ? "#" : "https://api.whatsapp.com/send?phone=5531996379693&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."}
                  target={isMobile ? undefined : "_blank"}
                  rel={isMobile ? undefined : "noopener noreferrer"}
                  onClick={handlePhoneClick}
                  className="leading-tight font-medium text-[#bfb5a8] hover:text-[#bba7d1] transition-colors group-hover/phone:text-[#bba7d1]"
                >
                  Telefone: (31) 99637-9693
                </a>

                {showPhoneOptions && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowPhoneOptions(false)} />
                    <div className="absolute bottom-full left-0 mb-2 bg-white border border-[#c9b8dc]/30 rounded-2xl shadow-xl p-2.5 flex flex-col gap-1.5 z-50 min-w-[210px] text-[#4a4444]">
                      <div className="px-3 py-1 text-[10px] font-bold text-[#c9b8dc] uppercase tracking-wider">
                        Como prefere falar?
                      </div>
                      <a
                        href="tel:+5531996379693"
                        onClick={() => setShowPhoneOptions(false)}
                        className="px-3 py-2 hover:bg-[#c9b8dc]/10 active:bg-[#c9b8dc]/20 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors text-[#9e9282]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c9b8dc]" />
                        Ligar (Discador)
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=5531996379693&text=Ol%C3%A1%20Jamille!%20Visitei%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setShowPhoneOptions(false)}
                        className="px-3 py-2 hover:bg-[#c9b8dc]/10 active:bg-[#c9b8dc]/20 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors text-[#9e9282]"
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#c9b8dc] fill-current">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.863-1.868-4.343-2.897-6.978-2.898-5.442 0-9.866 4.372-9.87 9.802 0 1.77.464 3.498 1.345 5.021l-.99 3.613 3.694-.97zm9.645-5.385c.297.148.477.223.522.298.045.075.045.433-.134.79-.18.358-.807.716-1.12.746-.313.03-.62.062-1.803-.404-1.428-.562-2.355-2.015-3.07-2.97-.714-.956-1.192-2.12-1.192-3.327 0-1.207.625-1.803.85-2.042.223-.238.491-.298.655-.298.164 0 .328.002.47.01.15.007.336-.057.528.397.194.457.656 1.597.716 1.716.06.119.1.258.02.417-.08.16-.12.258-.24.397-.117.14-.249.313-.356.419-.119.119-.244.249-.105.487.14.238.62.996 1.326 1.62.909.803 1.673 1.053 1.91 1.173.238.12.378.1.517-.06.14-.16.602-.702.762-.938.16-.238.318-.198.539-.119z" />
                        </svg>
                        Conversar no WhatsApp
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3.5 text-[#bfb5a8] text-[14px]">
              <div className="w-8 h-8 rounded-xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="leading-tight font-medium">
                Segunda a sexta, 08:00 às 20:00
              </span>
            </div>
          </div>

        </div>

        <div className="border-t border-[#f5efe7] mt-16 pt-7 flex flex-col items-center justify-center gap-4 select-none w-full text-center">
          <div className="flex flex-col items-center text-center gap-1 select-none max-w-[800px] mx-auto">
            <span className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-red-500">
              <AlertTriangle className="w-4 h-4 text-red-500 fill-white" />
              Atenção: Este site não oferece atendimento imediato a pessoas em crise suicida.
            </span>
            <span className="text-xs text-[#bfb5a8] mt-1">
              Em caso de crise ligue para o CVV – 188. Em caso de emergência, procure o hospital mais próximo. Havendo risco de morte, ligue imediatamente para o SAMU (telefone 192).
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-[#c9b8dc] text-[10px] tracking-[2px] font-bold mt-6 border-t border-[#f5efe7] pt-6">
          <span>© 2026 JAMILLE OVADIA MORAES</span>
          <span className="hidden sm:inline text-[#f5efe7]">|</span>
          <a
            href="/politica-de-privacidade"
            className="text-[#bfb5a8] tracking-[1px] font-medium normal-case hover:text-[#c9b8dc] transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
