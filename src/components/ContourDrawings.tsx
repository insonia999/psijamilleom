import { useState, type ReactNode } from "react";
import { motion } from "motion/react";

const HOVER_TRANSITION = { duration: 0.3, ease: "easeOut" } as const;
const FADE_OUT_TRANSITION = { duration: 0.8, ease: "easeInOut" } as const;

function Drawing({ title, children }: { title: string; children: ReactNode }) {
  const [gen, setGen] = useState(0);
  const svgProps = {
    viewBox: "0 0 100 100",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  return (
    <motion.div
      className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[110px] md:h-[110px] transform-gpu"
      whileHover={{ scale: 1.05 }}
      transition={HOVER_TRANSITION}
      onMouseEnter={() => setGen(g => g + 1)}
      title={title}
    >
      {gen > 0 && (
        <motion.svg
          key={`old-${gen}`}
          {...svgProps}
          className="absolute inset-0 w-full h-full overflow-visible text-[#c9b8dc] pointer-events-none"
          initial="visible"
          animate={{ opacity: 0 }}
          transition={FADE_OUT_TRANSITION}
        >
          {children}
        </motion.svg>
      )}
      <motion.svg
        key={`new-${gen}`}
        {...svgProps}
        className="absolute inset-0 w-full h-full overflow-visible text-[#c9b8dc]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {children}
      </motion.svg>
    </motion.div>
  );
}

export default function ContourDrawings() {
  return (
    <section className="bg-white pt-0 pb-16 md:pb-24 select-none">
      <div className="max-w-[1232px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row items-center justify-center gap-6 md:gap-20 opacity-85"
        >
          <Drawing title="Apoio e Acolhimento">
            <motion.path d="M 15 50 C 20 75, 40 85, 50 85" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } } }} />
            <motion.path d="M 85 50 C 80 75, 60 85, 50 85" opacity="0.7" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.7, transition: { duration: 1, delay: 0.15, ease: "easeInOut" } } }} />
            <motion.path d="M 25 55 C 35 65, 40 70, 50 70" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" } } }} />
            <motion.path d="M 75 55 C 65 65, 60 70, 50 70" opacity="0.7" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.7, transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" } } }} />
            <motion.path d="M 50 15 L 50 22 M 35 32 L 40 34 M 65 32 L 60 34 M 50 48 L 50 43" stroke="#c3a297" strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, delay: 0.7, ease: "easeInOut" } } }} />
            <motion.circle cx="50" cy="33" r="4.5" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 1, ease: "easeOut" } } }} />
          </Drawing>

          <Drawing title="Florescer">
            <motion.path d="M 50 15 C 65 45, 65 75, 50 85 C 35 75, 35 45, 50 15 Z" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } } }} />
            <motion.path d="M 50 85 C 65 80, 80 60, 75 40 C 65 45, 55 60, 50 85 Z" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.35, ease: "easeInOut" } } }} />
            <motion.path d="M 50 85 C 35 80, 20 60, 25 40 C 35 45, 45 60, 50 85 Z" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 0.35, ease: "easeInOut" } } }} />
            <motion.path d="M 50 85 C 75 85, 95 70, 95 55 C 80 65, 65 75, 50 85 Z" opacity="0.6" strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.6, transition: { duration: 0.7, delay: 0.65, ease: "easeInOut" } } }} />
            <motion.path d="M 50 85 C 25 85, 5 70, 5 55 C 20 65, 35 75, 50 85 Z" opacity="0.6" strokeWidth="2" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.6, transition: { duration: 0.7, delay: 0.65, ease: "easeInOut" } } }} />
            <motion.circle cx="50" cy="35" r="1.5" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 1, ease: "easeOut" } } }} />
            <motion.circle cx="50" cy="50" r="1.5" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 1.1, ease: "easeOut" } } }} />
            <motion.circle cx="50" cy="65" r="1.5" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 1.2, ease: "easeOut" } } }} />
          </Drawing>

          <Drawing title="Movimento Positivo">
            <motion.path d="M 15 85 C 45 95, 65 65, 50 45 C 35 25, 20 45, 35 65 C 50 85, 75 60, 85 30" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } } }} />
            <motion.path d="M 85 30 C 80 15, 65 15, 65 15 C 65 15, 72 23, 85 30 Z" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 1.2, ease: "easeOut" } } }} />
            <motion.path d="M 85 30 C 95 25, 95 10, 95 10 C 95 10, 88 18, 85 30 Z" fill="#c3a297" stroke="none" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 1.3, ease: "easeOut" } } }} />
            <motion.circle cx="65" cy="40" r="1.5" fill="#c3a297" stroke="none" opacity="0.8" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 0.8, transition: { duration: 0.3, delay: 0.5, ease: "easeOut" } } }} />
            <motion.circle cx="45" cy="20" r="2" fill="#c3a297" stroke="none" opacity="0.8" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 0.8, transition: { duration: 0.3, delay: 0.65, ease: "easeOut" } } }} />
            <motion.circle cx="20" cy="60" r="1.5" fill="#c3a297" stroke="none" opacity="0.8" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 0.8, transition: { duration: 0.3, delay: 0.8, ease: "easeOut" } } }} />
          </Drawing>
        </motion.div>
      </div>
    </section>
  );
}
