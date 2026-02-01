"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, MapPin, Clock } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function StoreExperience() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".store-image", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      scale: 0.8,
      clipPath: "inset(100% 0 0 0)",
      duration: 1.5,
      ease: "power3.out",
    });
    
    gsap.to(".store-image", {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
        }
    })

    gsap.from(".store-info", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-cream relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Info */}
        <div className="space-y-8 store-info order-2 lg:order-1">
          <div className="space-y-4">
             <h3 className="text-fresh-green font-bold tracking-widest uppercase text-sm">
              Visit Us Today
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight">
              Experience the Aroma <br />
              <span className="text-bakery-red">In Person</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Step into our cozy bakery, where the smell of fresh coffee and warm bread fills the air. 
              Whether you need a quick snack or a place to relax, we have a spot for you.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl">
                <MapPin className="w-6 h-6 text-bakery-red flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-charcoal">Location</h4>
                    <p className="text-charcoal/60">4/B, Tithal Rd, Gitanjali Society, Government Colony, Valsad, Gujarat</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/50 rounded-2xl">
                <Clock className="w-6 h-6 text-fresh-green flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-bold text-charcoal">Opening Hours</h4>
                    <p className="text-charcoal/60">Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
            </div>
          </div>
        </div>



        {/* Visual */}
        <div className="relative h-[600px] w-full lg:order-2">
            <div className="store-image w-full h-full bg-white rounded-t-full relative overflow-hidden shadow-2xl">
                 <Image 
                    src="/images/image-4.png" 
                    alt="Store Interior" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-[2s]"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                     <div className="flex gap-1 text-amber-400 mb-2">
                         <Star className="fill-current w-4 h-4" />
                         <Star className="fill-current w-4 h-4" />
                         <Star className="fill-current w-4 h-4" />
                         <Star className="fill-current w-4 h-4" />
                         <Star className="fill-current w-4 h-4" />
                     </div>
                     <p className="italic text-sm text-charcoal">&quot;Best bakery in town! The croissant is to die for.&quot;</p>
                     <p className="text-xs font-bold text-bakery-red mt-2">- Sarah J.</p>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
}
