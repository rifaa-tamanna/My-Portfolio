import { services } from "@/lib/data";
import {
    HiCode,
    HiDesktopComputer,
    HiServer,
    HiColorSwatch,
    HiDeviceMobile,
    HiLightningBolt,
    HiDatabase,
    HiCube,
} from "react-icons/hi";

// Card er index onujayi icon boshbe. Order change korte paro.
const icons = [
    HiDesktopComputer,
    HiServer,
    HiColorSwatch,
    HiLightningBolt,
    HiCode,
    HiDeviceMobile,
    HiDatabase,
    HiCube,
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 px-6 max-w-7xl mx-auto">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 bottom-10 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

            {/* Heading */}
            <div className="mx-auto mb-16 max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                    My Services
                </span>
                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                    What I{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        Do
                    </span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" />
                <p className="mt-5 text-sm text-slate-400 sm:text-base">
                    Transforming complex problems into seamless, scalable web experiences.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((item, idx) => {
                    const Icon = icons[idx % icons.length];
                    return (
                        <div
                            key={idx}
                            className="group relative transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Gradient border glow (hover e dekha jay) */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500/50 to-cyan-400 opacity-0 blur-[1px] transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14] p-7">
                                {/* Corner glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/25" />

                                {/* Big number */}
                                <span className="absolute right-5 top-4 select-none text-5xl font-black text-white/[0.04] transition-colors duration-300 group-hover:text-white/10">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon size={26} />
                                </div>

                                <h3 className="relative mb-3 text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="relative text-sm leading-relaxed text-slate-400">
                                    {item.text}
                                </p>

                                {/* Bottom animated line */}
                                <div className="relative mt-6 h-0.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}