import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import ImageWithFallback from "./ui/ImageWithFallback";
import newPhoto from "../assets/images/foto-sobre.jpg";

export default function Sobre() {
  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-24 bg-white select-none" id="sobre">
      <div className="max-w-[1232px] mx-auto px-4 sm:px-6">
        <div className="bg-[#f5efe7] rounded-[48px] md:rounded-[80px] pt-12 pb-16 px-8 sm:px-12 md:pt-16 md:pb-20 md:px-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start shadow-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center group -mt-10 lg:-mt-16"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[540px] aspect-[4/5] p-6 md:p-8 mt-6 lg:mt-8">
              <div className="absolute inset-[-20px] bg-[#f2ecf9] rounded-full filter blur-3xl opacity-80 pointer-events-none -z-10" />

              <div
                className="absolute inset-0 w-[94%] h-[94%] ml-auto mb-auto border-[2px] border-dashed border-[#c9b8dc] z-0 transition-transform duration-1000 ease-out rotate-[3deg] group-hover:rotate-[-6deg] transform-gpu will-change-transform"
                style={{
                  borderRadius: "40% 60% 60% 40% / 60% 40% 50% 50%"
                }}
              />
              <div
                className="absolute inset-0 w-[90%] h-[90%] mr-auto mt-auto border-[1.5px] border-[#e1d5eb] z-0 transition-transform duration-1000 ease-out rotate-[-5deg] group-hover:rotate-[6deg] transform-gpu will-change-transform"
                style={{
                  borderRadius: "60% 40% 40% 60% / 40% 60% 60% 40%"
                }}
              />
              <div
                className="relative w-[92%] h-[92%] mx-auto my-auto overflow-hidden shadow-xl bg-[#f5efe7] z-10 transition-all duration-700"
                style={{ borderRadius: "50% 50% 40% 60% / 50% 60% 40% 50%" }}
              >
                <ImageWithFallback
                  src={newPhoto}
                  alt="Jamille Ovadia Moraes, psicóloga, em seu consultório no Centro, Belo Horizonte"
                  className="w-full h-full object-cover object-[50%_24%] transition-transform duration-1000 ease-out group-hover:scale-[1.05] transform-gpu will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>

            <p className="text-[#c9b8dc] font-serif italic text-center mt-2 text-[17px] md:text-[18.5px] leading-relaxed max-w-[460px]">
              "O paradoxo curioso é que, quando me aceito exatamente como sou, então posso mudar."
              <br />
              <span className="text-[13px] not-italic text-[#9e9282]">Carl Rogers</span>
            </p>

            <div className="mt-6 w-full max-w-[500px] lg:max-w-[540px] bg-white border border-[#f5efe7] rounded-[28px] px-7 py-7 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-[22px] h-[22px] text-[#c9b8dc]" />
                </span>
                <h3 className="font-serif text-[15.5px] md:text-[16.5px] text-[#4a4444] font-normal leading-tight">
                  Formação &amp; Especializações
                </h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-3">
                  <span className="w-6 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e1d5eb] mt-[9px]" />
                  </span>
                  <span className="text-[14px] md:text-[15px] font-medium text-[#9e9282] leading-snug">Especialista em Terapia Sistêmica de Casais e Família</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e1d5eb] mt-[9px]" />
                  </span>
                  <span className="text-[14px] md:text-[15px] font-medium text-[#9e9282] leading-snug">Formação Clínica em Terapia do Esquema</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e1d5eb] mt-[9px]" />
                  </span>
                  <span className="text-[14px] md:text-[15px] font-medium text-[#9e9282] leading-snug">
                    Especialista em Psicoterapia para Adultos Neurodivergentes
                    <span className="text-[#bfb5a8] font-normal italic"> (em andamento)</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e1d5eb] mt-[9px]" />
                  </span>
                  <span className="text-[14px] md:text-[15px] font-medium text-[#9e9282] leading-snug">
                    Formação em Psicologia Transpessoal Grofiana
                    <span className="text-[#bfb5a8] font-normal italic"> (em andamento)</span>
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="flex flex-col items-start text-left lg:pt-8 w-full px-2 sm:px-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-[#c9b8dc] text-xs font-bold tracking-[2.4px] uppercase mb-4"
            >
              FILOSOFIA &amp; TRAJETÓRIA
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[30px] md:text-[40px] font-normal leading-tight text-[#4a4444] mb-6 tracking-tight bg-gradient-to-br from-[#4a4444] to-[#8b8585] text-transparent bg-clip-text mt-8 sm:mt-0"
            >
              Facilitando seu processo de autocompreensão
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#8b8585] font-sans text-[16.5px] md:text-[18px] leading-relaxed mb-5 text-justify"
            >
              Sou Jamille Ovadia Moraes, psicóloga clínica <a href="https://cadastro.cfp.org.br/visualizar.html?profissional=hA4BvB0ztxjUmV5KcrFC5DcwIH5WRnuGOhMNnHzymPA%3D" target="_blank" rel="noopener noreferrer" className="text-[#c9b8dc] text-[14px] md:text-[15.5px] font-medium hover:text-[#bba7d1] transition-colors">(CRP-04/75728)</a> há 14 anos, com atendimento presencial em Belo Horizonte, Minas Gerais, e atendimento online para o mundo todo, e me proponho a oferecer uma escuta empática, comprometida com a ética e orientada pela singularidade de cada pessoa que encontro no espaço terapêutico. Meu processo de formação é contínuo e ancorado em uma abordagem integrativa e multidisciplinar, tendo como base a escola humanista-existencial e estudos em terapia sistêmica, terapia do esquema e terapia assistida por psicodélicos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#8b8585] font-sans text-[16.5px] md:text-[18px] leading-relaxed text-justify"
            >
              Minha prática também é atravessada por uma sensibilidade construída para além do consultório. Participei de movimentos sociais e de grupos de pesquisa e estudos em Direitos Humanos, que ampliaram minha compreensão sobre os modos como cultura e, principalmente, as dimensões de gênero e sexualidade atravessam a subjetividade e o sofrimento psíquico. Esses caminhos aprofundaram minha percepção sobre as diferentes formas de viver a identidade, os vínculos e o desejo, especialmente junto às experiências LGBTQIAPN+, com as quais tenho grande identificação.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
