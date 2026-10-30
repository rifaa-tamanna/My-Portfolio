"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";
import { HiExternalLink } from "react-icons/hi";
import { X, ZoomIn } from "lucide-react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    name: string;
  } | null>(null);

  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>

          <p className="text-sm text-slate-400 sm:text-base">
            A selection of full stack applications built with care and
            precision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40"
            >
              {/* Clickable Project Screenshot */}
              <button
                type="button"
                onClick={() =>
                  setSelectedImage({
                    src: project.image,
                    name: project.name,
                  })
                }
                aria-label={`Preview ${project.name} screenshot`}
                className={`group/image relative h-60 w-full cursor-zoom-in overflow-hidden bg-gradient-to-tr ${project.hue}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} homepage screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/image:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/30">
                    {project.name}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/image:bg-black/40">
                  <div className="translate-y-3 rounded-full border border-white/20 bg-black/50 p-4 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/image:translate-y-0 group-hover/image:opacity-100">
                    <ZoomIn size={26} />
                  </div>
                </div>
              </button>

              {/* Project Information */}
              <div className="flex items-center justify-between p-6 sm:p-8">
                <div>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-violet-400">
                    {project.type}
                  </span>

                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
                  <HiExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-4 top-4 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedImage.name} full screenshot`}
          >
            <p className="mb-4 text-center text-sm font-semibold tracking-wide text-white sm:text-base">
              {selectedImage.name}
            </p>

            <div className="relative h-[75vh] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0e0e13] shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={`${selectedImage.name} full homepage screenshot`}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Click outside the image or press ✕ to close
            </p>
          </div>
        </div>
      )}
    </>
  );
}
