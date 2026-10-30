"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const delay = del ? 35 : text === word ? 1600 : 70;
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === "") {
        setDel(false);
        return setI((n) => n + 1);
      }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-semibold">{text}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-cyan-400" />
    </span>
  );
}