import TechOrbit from "./TechOrbit";
import { tech } from "@/lib/data";

export default function TechStack() {
    return (
        <section id="tech" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Left: text + tech cards */}
                <div className="min-w-0 space-y-6 lg:col-span-5">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                            {tech.length}+ Technologies
                        </span>
                        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                            Tech Stack &{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Tools
                            </span>
                        </h2>
                        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" />
                    </div>

                    <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                        I work across the full JavaScript ecosystem, specializing in modern
                        React architectures, serverless Backends, and responsive styling.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2 sm:gap-4">
                        {tech.map((t) => {
                            const Icon = t.Icon;
                            return (
                                <div
                                    key={t.name}
                                    className="group relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:p-3.5"
                                >
                                    {/* Brand color glow */}
                                    <div
                                        className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                                        style={{ backgroundColor: t.color }}
                                    />

                                    <div className="relative flex items-center gap-2.5 sm:gap-3">
                                        <div
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0b0b14] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-10 sm:w-10"
                                            style={{ color: t.color }}
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <span className="min-w-0 truncate text-xs font-medium text-slate-200 transition-colors group-hover:text-white sm:text-sm">
                                            {t.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right: orbit */}
                <div className="relative min-w-0 lg:col-span-7">
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/40 via-transparent to-cyan-400/30 opacity-60" />

                    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b14]/70 backdrop-blur-xl sm:h-[420px]">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[90px]" />

                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }}
                        />

                        <div className="relative h-full w-full">
                            <TechOrbit />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}