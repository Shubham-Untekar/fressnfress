"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Text Reveal
    tl.from(
      ".hero-text-line",
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      },
      "start"
    );

    // Image Fade In & Scale
    tl.from(
      imageRef.current,
      {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "start+=0.3"
    );

    // Parallax Effect
    gsap.to(imageRef.current, {
      yPercent: 30, // Moves down slower than scroll
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen md:h-screen md:overflow-hidden flex items-center justify-center pt-20 pb-10 md:pb-0"
      id="home"
    >
      {/* Background with noise texture */}
      <div className="absolute inset-0 bg-cream z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full z-10 relative">
        {/* Text Content */}
        <div ref={textRef} className="flex flex-col gap-6 md:gap-8">
          <div className="overflow-hidden">
            <h2 className="hero-text-line text-fresh-green font-bold tracking-widest uppercase text-sm mb-2">
              Premium Bakery
            </h2>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-text-line text-4xl md:text-7xl font-display font-extrabold text-charcoal leading-tight">
              Fresh N Fresh <br />
              <span className="text-bakery-red italic font-serif">You Can Taste</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="hero-text-line text-lg text-charcoal/70 max-w-md leading-relaxed">
              Experience the finest artisanal cakes, freshly baked breads, and daily snacks crafted with passion and premium ingredients.
            </p>
          </div>
          
          <div className="overflow-hidden pt-4">
            <div className="hero-text-line flex items-center gap-4">
              <button className="bg-bakery-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group">
                Order Now
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>
          </div>
        </div>

        {/* Hero Image / Floating Elements */}
        <div className="relative h-[50vh] md:h-[70vh] w-full flex items-center justify-center">
             {/* Using a placeholder since I can't browse for real images yet. 
                 Ideally this would be a high-quality transparent PNG of a cake or bread basket. 
             */}
            <div ref={imageRef} className="relative w-full h-full">
                 {/* Circle Background */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-gradient-to-tr from-fresh-green/10 to-bakery-red/10 blur-3xl" />
                 


                 {/* Floating Image Placeholders - Replace with Next/Image when assets are ready */}
                 <div className="relative w-[85vw] aspect-square max-w-[350px] md:max-w-[550px] md:h-[550px] animate-float rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                        src="/images/image-5.png" 
                        alt="Hero Cake" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                    />
                 </div>
                 
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 bg-white p-4 rounded-full shadow-xl animate-bounce duration-[3000ms]">
                    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 border-dashed border-bakery-red">
                        <span className="text-bakery-red font-bold text-xl">100%</span>
                        <span className="text-xs font-medium text-charcoal uppercase">Fresh</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
