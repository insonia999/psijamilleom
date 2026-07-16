import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a primeira sessão de terapia?",
      answer:
        "A primeira sessão de psicoterapia é um momento de acolhimento, onde vamos conversar livremente sobre suas demandas e expectativas e pensarmos se faz sentido nossa aliança terapêutica. É um encontro que tem como objetivo o desenho das possibilidades de trabalho e a organização do contrato terapêutico, como horários, modalidade e valores.",
    },
    {
      question: "Qual a duração e frequência das sessões?",
      answer:
        "As sessões de terapia duram em média 50 minutos e a psicoterapia inicia com uma frequência semanal, em um horário fixo acordado na construção do contrato terapêutico.",
    },
    {
      question: "Você atende convênios e planos de saúde?",
      answer:
        "No momento atendo apenas particular, mas forneço recibo para reembolso junto ao seu plano de saúde. Consulte as condições do seu convênio.",
    },
    {
      question: "Quanto tempo dura o processo terapêutico?",
      answer:
        "Não há um tempo pré-definido: cada processo terapêutico é único e acontece de acordo com a demanda e o perfil de cada pessoa. O importante é que, em diversos momentos da psicoterapia, estaremos reavaliando os objetivos e necessidades para compreender os encaminhamentos mais adequados.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white select-none">
      <div className="max-w-[1232px] mx-auto px-6">
        <div className="bg-[#f5efe7] rounded-[48px] md:rounded-[80px] px-6 py-16 md:py-20 md:px-12 lg:px-20">
          <div className="text-center max-w-[620px] mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] font-normal leading-tight text-[#4a4444] mb-3 tracking-tight">
              Dúvidas
            </h2>
            <p className="text-[#9e9282] text-[16px] md:text-[18px]">
              Respostas para as perguntas mais frequentes sobre a psicoterapia.
            </p>
          </div>

          <div className="max-w-[760px] mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border rounded-[20px] overflow-hidden transition-all duration-300 ${isOpen ? "border-[#c9b8dc]/40 shadow-sm" : "border-transparent"
                    }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className={`w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200 ${
                      isOpen ? "" : "hover:bg-[#faf6f1]/40"
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-medium text-[16.5px] md:text-[18px] text-[#9e9282]">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? "bg-[#c9b8dc] text-white" : "bg-[#f2ecf9] text-[#c9b8dc]"
                        }`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-[#9e9282] text-[16.5px] md:text-[18px] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
