import { profile } from "@/lib/data";
import { HiCode, HiLightningBolt, HiSparkles, HiUser } from "react-icons/hi";

const highlights = [
    {
        icon: HiCode,
        title: "Clean Code",
        text: "Crafting robust architectures with readable, scalable, and maintainable code.",
    },
    {
        icon: HiLightningBolt,
        title: "Fast & Responsive",
        text: "Optimizing blazing-fast performance seamlessly across all devices.",
    },
    {
        icon: HiSparkles,
        title: "Modern Design",
        text: "Engineering aesthetically pleasing, fluid, and intuitive user experiences.",
    },
];

// Nijer onujayi ei numbers gulo change koro
const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "15+", label: "Projects Done" },
    { value: "8+", label: "Happy Clients" },
];

export default function About() {
    const paragraphs = profile.about.split("\n").filter(Boolean);

    return (
        <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute right-10 top-20 -z-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* Heading */}
            <div className="mb-14 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
                    <HiUser size={14} />
                    Get to know me
                </span>
                <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                    About{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400" />
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-12">
                {/* Left: About text */}
                <div className="relative lg:col-span-7">
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/40 via-transparent to-cyan-400/30 opacity-60" />
                    <div className="relative h-full rounded-3xl border border-white/10 bg-[#0b0b14]/90 p-8 backdrop-blur-xl sm:p-10">
                        <div className="space-y-5">
                            {paragraphs.map((p, i) => (
                                <p
                                    key={i}
                                    className={
                                        i === 0
                                            ? "text-lg leading-relaxed text-slate-200 sm:text-xl"
                                            : "text-base leading-relaxed text-slate-400 sm:text-lg"
                                    }
                                >
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                                        {s.value}
                                    </div>
                                    <div className="mt-1 text-xs text-slate-400 sm:text-sm">
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Highlights */}
                <div className="flex flex-col gap-5 lg:col-span-5">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center align-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110">
                                <item.icon size={22} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">{item.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}