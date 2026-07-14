import { motion } from "motion/react";
import { Heart, Users } from "lucide-react";

export default function Especialidades() {

  const services = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Psicoterapia individual",
      description:
        "Um encontro terapêutico sincero, pautado no vínculo entre terapeuta e acompanhade e que reconhece que o sofrimento não surge de maneira isolada, mas se constrói em tramas complexas que merecem ser escutadas com atenção, respeito e presença.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Terapia de casal",
      description:
        "Terapia para casais e pessoas em relações afetivas diversas, incluindo relações não monogâmicas. Um espaço de escuta e elaboração para pessoas que desejam compreender, estimular e repensar seus vínculos, acordos e formas de intimidade.",
    },
  ];

  return (
    <section className="py-24 bg-[#f5efe7] select-none" id="servicos">
      <div className="max-w-[1232px] mx-auto px-6">
        <div className="flex flex-col items-start gap-3 mb-16 text-left">
          <h2 className="font-serif text-[32px] md:text-[40px] font-normal leading-tight text-[#4a4444] tracking-tight">
            Atendimento e Especialidades
          </h2>
          <p className="text-[#9e9282] text-[16px] max-w-[520px] leading-relaxed">
            Psicoterapia <strong className="text-[#c9b8dc] font-semibold">presencial</strong> em Belo Horizonte ou <strong className="text-[#c9b8dc] font-semibold">online</strong>, em formatos adaptados para o seu momento de vida e necessidade específica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[920px] mx-auto">
          {services.map((svc, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white border border-white rounded-[32px] p-8 shadow-sm flex flex-col justify-between hover:scale-[1.01] hover:shadow-md transition-[transform,box-shadow] duration-500 ease-out transform-gpu will-change-transform group"
            >
              <div className="text-left flex-grow">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out transform-gpu will-change-transform group-hover:rotate-[-4deg] group-hover:scale-105">
                    {svc.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-[20px] leading-tight text-[#9e9282]">
                    {svc.title}
                  </h3>
                </div>
                <p className="text-[#bfb5a8] text-[16.5px] md:text-[18px] leading-relaxed text-justify">
                  {svc.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
