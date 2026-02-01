"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChefHat, Wheat, Sparkles, CakeSlice } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: <Wheat className="w-8 h-8 text-white" />,
    title: "Fresh Daily",
    desc: "Baking starts at 4 AM every morning to ensure you get the freshest oven-warm delights.",
    color: "bg-orange-400",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Premium Ingredients",
    desc: "We source only the finest flours, chocolates, and fruits locally and globally.",
    color: "bg-bakery-red",
  },
  {
    icon: <ChefHat className="w-8 h-8 text-white" />,
    title: "Master Chefs",
    desc: "Our culinary team brings decades of experience to craft edible masterpieces.",
    color: "bg-fresh-green",
  },
  {
    icon: <CakeSlice className="w-8 h-8 text-white" />,
    title: "Custom Orders",
    desc: "From birthdays to weddings, we turn your dream cakes into delicious reality.",
    color: "bg-purple-500",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".feature-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-bakery-red/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-fresh-green/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">


        {/* Image / Visual */}
        <div className="relative h-[500px] w-full bg-cream rounded-3xl overflow-hidden shadow-2xl skew-y-3 lg:skew-y-0 transform transition-transform hover:scale-[1.02]">
            <Image 
                src="/images/image-4.png" 
                alt="Our Kitchen" 
                fill 
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" /> {/* Overlay for contrast if needed */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <ChefHat className="w-32 h-32 mb-4 drop-shadow-lg" />
                <span className="text-4xl font-display font-bold uppercase drop-shadow-lg">Our Kitchen</span>
            </div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-bakery-red font-bold tracking-widest uppercase text-sm">
              Why Choose Un
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight">
              We Bake with <br />
              <span className="text-fresh-green">Love & Passion</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              At Fresh N Fresh, we believe that every bite should be a celebration. 
              Our commitment to quality means no shortcuts, no preservatives, just pure, wholesome goodness baked to perfection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="feature-item p-4 rounded-2xl hover:bg-cream transition-colors">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center shadow-lg mb-4 transform -rotate-3`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">{feature.title}</h4>
                <p className="text-sm text-charcoal/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
