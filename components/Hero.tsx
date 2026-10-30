import AnimatedName from "./AnimatedName";
import Typewriter from "./Typewriter";
import HeroPhoto from "./HeroPhoto";
import { profile } from "@/lib/data";
import { HiDownload, HiMail } from "react-icons/hi";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 px-6 max-w-7xl mx-auto mt-5">
            <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
                <div className="lg:col-span-7 space-y-6">

                    <div className="space-y-2">
                        <p className="text-slate-400 font-medium">Hello, I am</p>
                        <AnimatedName text={profile.name} />
                    </div>

                    <div className="text-xl sm:text-2xl font-medium text-slate-300">
                        I am a <Typewriter words={profile.roles} />
                    </div>

                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                        {profile.intro}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="/resume.pdf"
                            download="Resume.pdf"
                            className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            <HiDownload size={16} />
                            <span>Download Resume</span>
                        </a>
                        <a
                            href="#contact"
                            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2"
                        >
                            <HiMail size={16} />
                            <span>Get in Touch</span>
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                    <HeroPhoto src={profile.photo} name={profile.name} />
                </div>
            </div>
        </section>
    );
}