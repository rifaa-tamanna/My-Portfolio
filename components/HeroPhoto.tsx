"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[10%] animate-float">
        <div className="absolute -inset-1 animate-spinSlow rounded-[2.2rem] bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#e879f9,#8b5cf6)] opacity-80 blur-[2px]" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20 bg-[#07070d]">
          {failed ? (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-violet-700/50 to-cyan-500/30 font-bold text-6xl text-white">
              RT
            </div>
          ) : (
            <Image
              height={400}
              width={400}
              src={src}
              alt={name}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 animate-float rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3 text-xs shadow-xl [animation-delay:2s]">
        <p className="font-semibold text-white text-sm">MERN + Next.js</p>
        <p className="text-slate-400">TypeScript ready</p>
      </div>
    </div>
  );
}