import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import BackgroundScene from "@/components/BackgroundScene";
import { profile } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07070d] text-slate-100 overflow-x-hidden">
      <BackgroundScene />
      <Navbar />

      <Hero />

      <Reveal delay={100}>
        <About />
      </Reveal>

      <Reveal delay={100}>
        <Services />
      </Reveal>

      <Reveal delay={100}>
        <TechStack />
      </Reveal>

      <Reveal delay={100}>
        <Projects />
      </Reveal>

      <Reveal delay={100}>
        <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Have a project in mind or looking for a developer? Send me a message!
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12">
            <ContactForm />
          </div>
        </section>
      </Reveal>

      <footer className="border-t border-white/10 py-12 px-6 backdrop-blur-xl bg-[#07070d]/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} <span className="text-white font-medium">{profile.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}