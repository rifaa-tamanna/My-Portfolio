"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { tech } from "@/lib/data";

export default function TechOrbit() {
  const mount = useRef<HTMLDivElement>(null);
  const icons = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    const src = icons.current;
    if (!el || !src) return;
    let alive = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.z = 9;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // shudhu bahirer wireframe sphere rakha holo, vetorer mota torus knot bad dewa holo
    group.add(
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.4, 2),
        new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.18 })
      )
    );

    const sprites: THREE.Sprite[] = [];
    const svgs = Array.from(src.querySelectorAll("svg"));
    const N = svgs.length;
    svgs.forEach((svg, i) => {
      const clone = svg.cloneNode(true) as SVGElement;
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const xml = new XMLSerializer().serializeToString(clone);
      const img = new Image();
      img.onload = () => {
        if (!alive) return;
        const c = document.createElement("canvas");
        c.width = c.height = 256;
        const g = c.getContext("2d")!;
        g.fillStyle = "rgba(15,15,25,0.92)";
        g.beginPath();
        g.arc(128, 128, 120, 0, Math.PI * 2);
        g.fill();
        g.globalAlpha = 0.6;
        g.strokeStyle = tech[i].color;
        g.lineWidth = 4;
        g.stroke();
        g.globalAlpha = 1;
        g.drawImage(img, 64, 64, 128, 128);
        const tex = new THREE.CanvasTexture(c);
        tex.colorSpace = THREE.SRGBColorSpace;
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
        const y = 1 - (i / (N - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = i * 2.399963;
        sp.position.set(Math.cos(th) * r * 2.7, y * 2.7, Math.sin(th) * r * 2.7);
        group.add(sp);
        sprites.push(sp);
      };
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
    });

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    const tilt = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      tilt.x = ((e.clientX - b.left) / b.width - 0.5) * 1.2;
      tilt.y = ((e.clientY - b.top) / b.height - 0.5) * 0.8;
    };
    el.addEventListener("pointermove", onMove);

    const clock = new THREE.Clock();
    const v = new THREE.Vector3();
    let spin = 0;
    let raf = 0;
    const tick = () => {
      if (!reduce) spin += clock.getDelta() * 0.35;
      else clock.getDelta();
      group.rotation.y += (spin + tilt.x - group.rotation.y) * 0.08;
      group.rotation.x += (tilt.y - group.rotation.x) * 0.08;
      group.updateMatrixWorld();
      for (const sp of sprites) {
        v.setFromMatrixPosition(sp.matrixWorld);
        const k = (v.z + 2.7) / 5.4;
        sp.material.opacity = 0.35 + 0.65 * k;
        sp.scale.setScalar(0.85 + 0.55 * k);
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointermove", onMove);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
        if (o instanceof THREE.Sprite) {
          o.material.map?.dispose();
          o.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <div ref={mount} className="h-full w-full" role="img" aria-label="3D tech sphere" />
      <div ref={icons} className="hidden" aria-hidden="true">
        {tech.map(({ name, Icon, color }) => (
          <Icon key={name} size={128} color={color} />
        ))}
      </div>
    </div>
  );
}