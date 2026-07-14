import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  loading = "eager",
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-tr from-[#faf6f1] via-[#f5efe7] to-[#f2ecf9] border border-[#c9b8dc]/30 overflow-hidden text-center p-8 select-none ${className}`}
        style={{ aspectRatio: "4/5" }}
      >
        <svg
          className="absolute inset-0 w-full h-full text-[#c9b8dc]/15 h-auto"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M-10,120 C30,90 40,40 110,60" />
          <path d="M-20,100 C20,70 50,30 120,40" />
          <path d="M0,110 C50,80 30,20 100,10" />
          <path d="M50,85 C55,75 52,65 50,55 C48,65 45,75 50,85" strokeWidth="1" />
          <path d="M50,75 C53,70 58,70 60,72 C55,75 51,75 50,75" strokeWidth="1" />
          <path d="M50,65 C47,60 41,60 38,62 C43,65 48,65 50,65" strokeWidth="1" />
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#c9b8dc] text-white flex items-center justify-center font-serif text-3xl italic shadow-md mb-4 border-2 border-white">
            J
          </div>
          <p className="font-serif text-[#4a4444] text-lg font-bold tracking-wide">
            Jamille Ovadia Moraes
          </p>
          <p className="text-xs text-[#c9b8dc] font-sans tracking-widest uppercase mt-1">
            Psicologia Clínica
          </p>
          <span className="text-[10px] text-[#9e9282] max-w-[200px] mt-4 leading-relaxed italic block border-t border-[#bfb5a8]/30 pt-3">
            "Sinta, compreenda, transforme"
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}
