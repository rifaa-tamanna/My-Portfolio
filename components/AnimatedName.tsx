export default function AnimatedName({ text }: { text: string }) {
  let n = 0;
  return (
    <h1 aria-label={text} className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white [perspective:600px]">
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="mr-3 inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => (
            <span
              key={ci}
              aria-hidden="true"
              className="inline-block animate-rise"
              style={{ animationDelay: `${200 + n++ * 60}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}