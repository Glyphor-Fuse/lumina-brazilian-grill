import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-grill.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 text-primary font-bold tracking-[0.3em] uppercase text-sm md:text-base"
        >
          Southlake, Texas
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-foreground mb-6 tracking-tight leading-none"
        >
          LUMINA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto"
        >
          Where the vibrant spirit of Brazil meets the refined soul of a boutique wine bar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-primary text-foreground text-lg font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_-5px_var(--primary)]">
            View Rodizio Menu
          </button>
          <button className="px-8 py-4 bg-transparent border border-border/20 text-foreground text-lg font-medium rounded-full hover:bg-background/10 transition-all backdrop-blur-sm">
            Book a Table
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 animate-bounce"
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
}

export default Hero;
