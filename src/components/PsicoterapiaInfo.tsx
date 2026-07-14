import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import fotoPsicoterapia from "../assets/images/foto-psicoterapia.jpeg";

const ICON_HOVER_TRANSITION = { duration: 0.3, ease: "easeOut" } as const;
const ICON_FADE_OUT_TRANSITION = { duration: 0.8, ease: "easeInOut" } as const;

function IconCard({
  viewBox,
  label,
  children,
}: {
  viewBox: string;
  label: ReactNode;
  children: ReactNode;
}) {
  const [gen, setGen] = useState(0);
  return (
    <motion.div
      className="flex flex-col items-center text-center group w-full transform-gpu"
      whileHover={{ y: -5 }}
      transition={ICON_HOVER_TRANSITION}
      onMouseEnter={() => setGen(g => g + 1)}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-1">
        {gen > 0 && (
          <motion.svg
            key={`old-${gen}`}
            viewBox={viewBox}
            className="absolute inset-0 w-full h-full overflow-visible text-[#c9b8dc] group-hover:text-[#a18db8] transition-colors pointer-events-none"
            initial="visible"
            animate={{ opacity: 0 }}
            transition={ICON_FADE_OUT_TRANSITION}
          >
            {children}
          </motion.svg>
        )}
        <motion.svg
          key={`new-${gen}`}
          viewBox={viewBox}
          className="absolute inset-0 w-full h-full overflow-visible text-[#c9b8dc] group-hover:text-[#a18db8] transition-colors"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children}
        </motion.svg>
      </div>
      <span className="font-sans text-[14px] sm:text-[16px] font-semibold tracking-wide leading-tight">{label}</span>
    </motion.div>
  );
}

export default function PsicoterapiaInfo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="processo" className="pt-10 md:pt-14 pb-8 md:pb-12 bg-gradient-to-b from-[#faf6f1] to-white select-none">
      <div className="max-w-[1232px] mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-x-20 lg:gap-y-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-left order-1 lg:col-start-1 lg:row-start-1"
          >
            <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#c9b8dc] mb-6 tracking-tight">
              Para quem é a psicoterapia?
            </h2>
            <div className="space-y-2.5 text-[#4a4444] font-sans text-[16.5px] md:text-[18px] leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9b8dc] mt-2.5 flex-shrink-0" />
                <p>Jovens e adultos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9b8dc] mt-2.5 flex-shrink-0" />
                <p>Casais e pessoas em relações afetivas diversas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9b8dc] mt-2.5 flex-shrink-0" />
                <p>Brasileiros que moram no exterior</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c9b8dc] mt-2.5 flex-shrink-0" />
                <p>Comunidade LGBTQIAPN+</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex flex-col text-left p-8 md:p-12 rounded-[2rem] rounded-br-[4rem] overflow-hidden shadow-lg mx-auto sm:max-w-xl lg:max-w-none order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-fit"
          >
            <div className="absolute inset-0 z-0 bg-[#2b2727]">
              <motion.img
                src={fotoPsicoterapia}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={{ y: imgY, scale: 1.4 }}
                className="w-full h-full object-cover object-[50%_95%] opacity-50 mix-blend-luminosity grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9b8dc]/20 via-[#4a4444]/60 to-[#4a4444]/95" />
            </div>

            <div className="relative z-10 w-full mb-auto pb-4">
              <h2 className="font-serif text-[28px] md:text-[34px] font-bold text-[#f2ecf9] mb-6 tracking-tight drop-shadow-md">
                Para que serve a psicoterapia?
              </h2>
              <div className="space-y-6 text-white/95 font-sans text-[16.5px] md:text-[18px] leading-relaxed drop-shadow-sm font-medium">
                <p className="text-justify">
                  A psicoterapia pode ser um espaço para muitas coisas e não é preciso ter um motivo “certo” para começar.
                </p>
                <p className="text-justify">
                  Às vezes, um momento difícil, angústias, ansiedade, conflitos ou repetições que geram sofrimento podem ser o impulso para buscar esse cuidado. Em outros casos, o desejo de se conhecer melhor, fortalecer sua forma de estar no mundo ou simplesmente ter um espaço seguro para falar e ser escutade com atenção é o suficiente.
                </p>
                <p className="text-justify">
                  A psicoterapia também pode ajudar a lidar com questões de forma mais objetiva, organizando pensamentos, apoiando decisões e construindo caminhos mais sustentáveis para o dia a dia. Não se trata de oferecer respostas prontas, mas de construir, em conjunto, possibilidades interessantes de estimular, de forma criativa, mais autorregulação e saúde.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="w-full relative order-3 lg:col-start-1 lg:row-start-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-6 justify-items-center text-[#9e9282]">
              {/* Humor e Regulação Emocional */}
              <IconCard viewBox="0 0 1208.55 800.47" label={<>Humor e Regulação<br />Emocional</>}>
                <motion.path
                  d="M1,482.92c45.71-11.21,56.49-65.86,98.72-82.97,63.68-29.63,88.98,97.12,152.05,51.36,25.76-19.75,55.35-60.47,82.87-19.67,70.72,91.38,54.43-86.92,106.68-82.7,35.59,12.15,32.15,65.12,47.19,94.57,48.78,145.74,235.09,192.48,361.67,118.53,250.33-142.41,14.01-431.18-180-233.34-75.3,77.05-22.42,214.25,86.88,149.94,35.09-25.71,33.84-91.6,93.09-84.95,45.08,6.23,58.94,40.2,59.32,80.5.09,9.62-6.96,39.67-14.06,56.33"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.4, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M443.32,285.46c88.19-406.41,720.3-365.55,758.71,47.34,75.71,485.17-651.09,669.4-758.71,173.82"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, delay: 1.0, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Gênero e atravessamentos */}
              <IconCard viewBox="0 0 1200.32 861.93" label={<>Gênero e<br />atravessamentos</>}>
                <motion.circle
                  cx="597.64" cy="505.28" r="323.95"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M1197.37,340.47C502.89,275.49,682.4,887.9,1,731.59"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay: 0.9, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M1199.32,505.43c-179.31,78.3-344.69-3.41-536.86,6.68-205.24,10.77-379.82-277.98-600.1-139.05"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay: 1.3, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M565.89,136.16c43.06,231.6,288.06,167.12,431.38,61.35"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 1.7, ease: "easeInOut" } } }}
                />
                <motion.circle
                  cx="565.77" cy="49.9" r="48.9"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, delay: 2.7, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M50.88,555.18c168.17-52.37,358.18-33.33,507.73,65.23,22.86,14.95,45.08,31.5,66.54,48.13,147.84,122.14,241.39,158.69,426.52,174.26"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.3, delay: 1.7, ease: "easeInOut" } } }}
                />
                <motion.circle
                  cx="1069.33" cy="845.18" r="15.75"
                  fill="none" stroke="currentColor" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, delay: 3.0, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Sexualidade */}
              <IconCard viewBox="0 0 713.88 846.03" label="Sexualidade">
                <motion.path
                  d="M363.32,845.03c281.85-74.65,98.25-503.46-151.45-340.85-69.07,59.25-79.42,141.82-53.08,223.81,36.88,81.65,180.04,98.43,221.39,21.64,33.89-51.29,15.95-137.95-53.49-142.18-46.41-9.25-91.15,54.86-51.28,88.6,18.61,21.46,57.85,3.6,49.34-25.57"
                  fill="none" stroke="currentColor" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, pathOffset: 1, opacity: 0 }, visible: { pathLength: 1, pathOffset: 0, opacity: 1, transition: { duration: 1.3, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M195.91,519.59c79.57-94.19,230.26-124.59,321.34,21.44,9.84,17.46,28.43,22.25,41.45,7.73,81.01-90.39,194.76-269.15,139.66-532.96-1.96-9.37-5.43-18.98-21.85-12.9-176.29,42.41-352.59,234.86-393.93,407.43-14.4-133.48-36.89-303.36-162.04-358.36-4.85-3.41-14.28-2.64-17.72,9.13-21.11,72.18-69.58,132.62-88.76,205.81-44.08,162.32,27.68,362.58,151.21,474.72"
                  fill="none" stroke="currentColor" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, pathOffset: 1, opacity: 0 }, visible: { pathLength: 1, pathOffset: 0, opacity: 1, transition: { duration: 1.5, delay: 0.9, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Sofrimento Existencial */}
              <IconCard viewBox="0 0 751.8 883.62" label={<>Sofrimento<br />Existencial</>}>
                <motion.path
                  d="M547.82,1.54c-48.78-2.38-97.29,3.1-143.86,15.61-68.25,18.33-132.46,46.4-191.29,87.63-73.26,51.34-130.07,115.85-168.67,195.69C9.88,371.02-4.37,445.77,2.81,524.9c5.92,65.18,24.43,124.83,59.59,180.19,60.49,95.23,149,150.16,256.8,170.33,102.83,19.24,201.84.51,287.48-63.03,43.9-32.56,77.42-75.53,100.37-126.37,14.47-32.05,22.63-65.26,27.2-99.73"
                  fill="none" stroke="currentColor" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.3, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M721.54,429.51c-13.42-38.36-29.92-74.51-56.81-106.27-45.56-53.81-102.39-84.3-172.02-90.61-95.52-8.66-177.91,23.64-245.17,89.43-58.81,57.52-88.02,130.27-78.37,213.32,10.94,94.24,70.55,169.68,166.89,196.68,78.06,21.88,163.08-6.58,212.83-70.77,42.35-54.63,52.39-156,10.03-210.99-24.15-31.34-52.51-50.97-91.59-57.02-57.18-8.85-106.75,12.75-130.82,64.04-21.08,44.91-12.54,112.06,45.99,129.14,35.8,10.45,72.07-9.07,76.32-42.55,2.13-16.82-11.27-32.14-29.66-33.9"
                  fill="none" stroke="currentColor" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.3, delay: 0.9, ease: "easeInOut" } } }}
                />
                <motion.circle
                  cx="734.06" cy="511.08" r="16.75"
                  fill="none" stroke="currentColor" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.9, ease: "easeOut" } } }}
                />
              </IconCard>

              {/* Não Monogamia */}
              <IconCard viewBox="0 0 957.65 831.69" label="Não Monogamia">
                <motion.path
                  d="M495.93,736.74c150.37-166.23,44.02-413.09-169.06-438.84-125.21-17.25-263.53,46.64-306.91,170.58-108.08,293.46,272.06,486.42,475.82,268.42l.15-.16Z"
                  fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M557.55,490.27c154.01-27.23,228.31-214.12,159.46-346.76C670.14,32.72,538.87-17.14,425.69,6.94c-59.82,12.22-114.76,44.4-150.64,94.82-142.85,199.48,51.39,447.67,282.3,388.54l.2-.03Z"
                  fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, delay: 0.35, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M493.92,744.18c125.24,137.83,392.66,110.8,448.16-79.79,27.1-92.76,18.55-197.44-43.79-273.12-241.69-272.3-656.16,70.7-404.48,352.78l.12.13Z"
                  fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.1, delay: 0.7, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Vínculos e Comunicação */}
              <IconCard viewBox="0 0 1468.95 456.64" label={<>Vínculos e<br />Comunicação</>}>
                <motion.path
                  d="M1435.35,73.12c-227.13-12.39-290.28,52.5-449.39,193.28C717.67,460.89,565.9-36.38,10.31,3.26"
                  fill="none" stroke="currentColor" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.3, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M1467.95,429.38c-209.48,38.03-332.22-4.18-473.56-162.06C721.18-6.6,442.64,623.95,1,410.75"
                  fill="none" stroke="currentColor" strokeWidth="37" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, pathOffset: 1, opacity: 0 }, visible: { pathLength: 1, pathOffset: 0, opacity: 1, transition: { duration: 1.3, delay: 0.5, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Terapia de Casal e seus acordos */}
              <IconCard viewBox="0 0 752.5 737.5" label={<>Terapia de Casal<br />e seus acordos</>}>
                <motion.path
                  d="M201.61,133.63c-104.96,174.49,95.58,183.7,197.74,275.26,26.6,27.28,45.53,63.88,45.62,101.26-1.4,111.35-129.31,198.29-225.53,226.36"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, pathOffset: 1, opacity: 0 }, visible: { pathLength: 1, pathOffset: 0, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M182.3,171.9c59.65-2.75,80.44-65.93,71.04-115.86-45.98,4.87-87.1,83.01-71.04,115.86Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 0.7, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M533.37,736.5c-165.54-48.99-295.74-198.1-191.55-322.05,61.48-59.43,156.06-51.09,207.44-118.14,16.27-21.24,26.95-60.94,60.76-73.94,7-32.74-5.01-56.65,33.9-93.84"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.9, delay: 0.8, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M106.71,136.17c13.4,11.52,36.89,66.61,34.26,81.29l.33,1.52c9.55,6.4,25.19,19.19,34.51,25.87"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.35, delay: 1.5, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M544.07,165.73c5.29,9.55,27.15,21.44,25.95,34.64l3.28,6.12c4.1,10.52-.99,21.77,3.41,30.32,1.41,2.74,2.83,7.31,3.18,9.53"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.35, delay: 1.6, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M570.15,201.21c-40.9-6.53-84.31-59.52-78.68-91.88,41.02,13.05,98.03,38.61,78.68,91.88Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.7, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M141.29,218.98c-39.25-25.15-99.73-50.22-140.29-13.07,39.56,28.38,98.4,47.17,140.29,13.07Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.8, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M106.71,136.17C115.4,83.4,70.69,30.5,25.03,8.77c1.53,79.94,37.36,122.91,81.67,127.4Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.85, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M610.4,222.39c46.47-28.77,77.26-68.62,141.1-31.99-48.15,53.12-102.94,55.58-141.1,31.99Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.9, ease: "easeInOut" } } }}
                />
                <motion.path
                  d="M643.91,128.54c-27.66-79.24,46.63-127.54,46.63-127.54,19.22,121.17-46.63,127.54-46.63,127.54Z"
                  fill="none" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, delay: 1.95, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Autoconhecimento */}
              <IconCard viewBox="0 0 784.03 849.45" label="Autoconhecimento">
                <motion.circle
                  cx="414.32" cy="539.36" r="59.26"
                  fill="none" stroke="currentColor" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } } }}
                />
                <motion.path
                  d="M555.51,518.5c17.37-58.54-3.46-120.84-41.01-167.15-210.88-205.42-459.39,166.27-238,334.72,273.8,192.65,600.05-181.58,481.51-458.04C653.07-70.47,266.85-58.06,93.52,168.71c-216.34,274.87-30.04,669.68,318.43,679.74"
                  fill="none" stroke="currentColor" strokeWidth="21" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, pathOffset: 1, opacity: 0 }, visible: { pathLength: 1, pathOffset: 0, opacity: 1, transition: { duration: 1.6, delay: 0.3, ease: "easeInOut" } } }}
                />
              </IconCard>

              {/* Ansiedade */}
              <IconCard viewBox="0 0 1331.11 861" label="Ansiedade">
                <motion.path
                  d="M1,595.31c127.69,53.4,124.46-44.27,273.95,2.32,201.13,62.68,202,209.66,429.63,84.36,390.26-214.82-207.99-505.68-183.6-204.74,25.17,310.55,510.69-139,324.4-315.13C645.3-27.05,138.52,119.43,420.68,385.23c115.5,108.8,556.21,457.39,195.19,474.54-254.63,12.09-425.07-453.75-156.94-574.83,84.5-38.15,295.95-36.1,412.38,61.15,148,123.62,141.2,407,85.35,390.04-97.54-29.61,29.94-150.01,123.6-240.3,242.03-233.32-360.99-431.43-565.1-174.2-235.33,296.59,196.98,479.38,350.95,264.75,76.99-107.33,1.17-396.09-159.47-361.24-232.33,50.41-130.71-191.92,16.68-218.93,103.42-18.95,244.57,12.43,284.67,114.43,90.64,230.56-181.69,279.83-250.93,441.08-79.13,184.28,370.17,312.91,345.53,76.53-9.59-91.97-111.09-4.85-49.33,34.24,91.69,58.05,153.23-81.84,276.85-55.72"
                  fill="none" stroke="currentColor" strokeWidth="33" strokeLinecap="round" strokeLinejoin="round"
                  variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.8, ease: "easeInOut" } } }}
                />
              </IconCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
