"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

const CAKES = [
  {
    id: 1,
    name: "Red Velvet Bliss",
    description:
      "Layers of cocoa buttermilk sponge with cream cheese frosting.",
    price: "₹450",
    image: "/images/Red Velvet Bliss.avif",
    accent: "bg-red-500",
    color: "bg-stone-100",
  },
  {
    id: 2,
    name: "Exotic Fruit Tart",
    description: "Seasonal fresh fruits on vanilla custard and glazed brioche.",
    price: "₹350",
    image: "/images/Exotic Fruit Tart.jpg",
    accent: "bg-orange-400",
    color: "bg-orange-50",
  },
  {
    id: 3,
    name: "Belgian Chocolate",
    description: "Rich dark chocolate ganache with hazelnut crunch.",
    price: "₹500",
    image: "/images/Belgian Chocolate.jpg",
    accent: "bg-amber-700",
    color: "bg-amber-50",
  },
  {
    id: 4,
    name: "Matcha Cheese",
    description: "Japanese matcha green tea infused cheesecake base.",
    price: "₹400",
    image: "/images/Matcha Cheese.webp",
    accent: "bg-green-600",
    color: "bg-green-50",
  },
];

export default function CakeShowcase() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        const sections = gsap.utils.toArray(".cake-panel");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            anticipatePin: 1, // Smooths out the pinning entry
            // snap: 1 / (sections.length - 1), // Removed to prevent "jerk" feeling on trackpads
            end: () =>
              "+=" +
              (window.innerWidth < 768
                ? window.innerHeight * 2
                : scrollContainer.offsetWidth),
            invalidateOnRefresh: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-cream overflow-hidden flex flex-col pt-20"
      id="cakes"
    >
      <div className="absolute top-10 left-6 md:left-10 z-10 text-charcoal">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Signature Cakes
        </h2>
        <p className="md:hidden text-charcoal/50 text-sm mt-1">
          Scroll Down to Explore ↓
        </p>
      </div>

      {/* 
          Mobile: Native horizontal scroll with snap 
          Desktop: GSAP Pin & Scrub (overflow hidden by container)
       */}
      <div ref={scrollContainerRef} className="flex h-full w-[400%]">
        {CAKES.map((cake, idx) => (
          <div
            key={idx}
            className={`cake-panel w-[100vw] h-screen flex items-center justify-center relative shrink-0 ${cake.color}`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
              {/* Cake Visual */}
              <div className="relative aspect-square w-full max-w-[300px] md:max-w-none mx-auto md:order-last">
                <div className="absolute inset-0 bg-white/50 rounded-full blur-3xl scale-90" />
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={cake.image}
                    alt={cake.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-4 md:space-y-8 order-1 md:order-2 text-center md:text-left">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase ${cake.accent}`}
                >
                  Signature Series
                </span>
                <h3 className="text-4xl md:text-7xl font-display font-bold text-charcoal">
                  {cake.name}
                </h3>
                <p className="text-lg md:text-xl text-charcoal/70 max-w-md mx-auto md:mx-0">
                  {cake.description}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-6">
                  <span className="text-3xl font-bold text-charcoal">
                    {cake.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
