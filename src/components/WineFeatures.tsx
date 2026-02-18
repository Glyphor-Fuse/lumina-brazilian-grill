import { useState } from 'react';
import { motion } from "framer-motion";

export function WobbleCard({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={`mx-auto w-full relative rounded-2xl overflow-hidden ${containerClassName}`}
    >
      <div
        className={`relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden shadow-2xl ${className}`}
      >
         <div className="absolute h-full w-full left-0 top-0 bg-background/40 z-10" />
        <div className="relative z-20 h-full">{children}</div>
      </div>
    </motion.section>
  );
}

export function WineFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          
          {/* Main Card - Wine Wall */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[400px]"
            className="bg-primary/20"
          >
            <div className="absolute inset-0 z-0">
               <img src="/images/wine-wall.png" alt="Wine collection" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="max-w-md p-8 sm:p-10 relative z-20">
              <h2 className="text-left text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
                Curated by Sommeliers
              </h2>
              <p className="mt-4 text-left  text-base/6 text-foreground-200">
                Our cellar features over 200 labels, specifically chosen to complement the robust flavors of rodizio dining. From bold Malbecs to crisp Vinho Verde.
              </p>
            </div>
          </WobbleCard>
          
          {/* Secondary Card - Cocktails */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px]" className="bg-secondary/20">
             <div className="absolute inset-0 z-0">
               <img src="/images/caipirinha.png" alt="Caipirinha" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="p-8 sm:p-10 relative z-20">
              <h2 className="text-left text-balance text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-display">
                Signature Caipirinhas
              </h2>
              <p className="mt-4 text-left  text-base/6 text-foreground-200">
                Experience Brazil's national cocktail, handcrafted with premium cachaça, fresh fruits, and vibrant energy.
              </p>
            </div>
          </WobbleCard>
          
          {/* Third Card - Happy Hour */}
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[300px] lg:min-h-[400px]" className="bg-primary/10">
             <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply" />
            <div className="max-w-2xl p-8 sm:p-10 relative z-20">
              <h2 className="text-left text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-display">
                Sunset Hours at Lumina
              </h2>
              <p className="mt-4 text-left  text-base/6 text-foreground-200">
                Join us Monday through Thursday, 4 PM - 7 PM, for exclusive tastings and small plates on our patio. The perfect way to start your evening in Southlake.
              </p>
              <button className="mt-8 px-6 py-3 bg-background text-primary font-bold rounded-full hover:bg-background-100 transition-colors">
                View Drinks Menu
              </button>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default WobbleCard;
