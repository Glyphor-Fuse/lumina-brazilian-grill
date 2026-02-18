import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star } from 'lucide-react';

interface Cut {
  id: number;
  name: string;
  description: string;
  image: string;
  winePairing: string;
  tastingNotes: string;
}

const cuts: Cut[] = [
  {
    id: 1,
    name: "Picanha",
    description: "The noble top sirloin, seasoned with sea salt.",
    image: "/images/picanha.png",
    winePairing: "Malbec Reserva",
    tastingNotes: "Bold tannins cut through the rich fat cap.",
  },
  {
    id: 2,
    name: "Cordeiro",
    description: "Succulent lamb chops marinated in fresh mint.",
    image: "/images/lamb.png",
    winePairing: "Pinot Noir",
    tastingNotes: "Earthy notes complement the gamey flavor.",
  },
  {
    id: 3,
    name: "Abacaxi",
    description: "Roasted pineapple glazed with cinnamon sugar.",
    image: "/images/pineapple.png",
    winePairing: "Late Harvest Riesling",
    tastingNotes: "Sweet acidity balances the caramelized sugar.",
  },
  {
    id: 4,
    name: "Linguiça",
    description: "Cured pork sausage with a spicy kick.",
    image: "/images/sausage.png",
    winePairing: "Syrah",
    tastingNotes: "Spicy finish matches the heat of the sausage.",
  },
];

export function GauchoCarousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            The Gaucho's Selection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hover over our signature cuts to discover the sommelier's perfect pairing.
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-6 justify-center">
          {cuts.map((cut) => (
            <motion.div
              key={cut.id}
              className="relative w-full md:w-[45%] lg:w-[24%] h-[400px] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-border/50"
              onHoverStart={() => setHoveredId(cut.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${cut.image})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />

              {/* Default Content (Meat) */}
              <motion.div
                className="absolute bottom-0 left-0 p-6 w-full"
                animate={{ opacity: hoveredId === cut.id ? 0 : 1, y: hoveredId === cut.id ? 20 : 0 }}
              >
                <h3 className="text-2xl font-bold text-foreground font-display mb-1">{cut.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{cut.description}</p>
              </motion.div>

              {/* Hover Content (Wine) */}
              <motion.div
                className="absolute inset-0 bg-primary/95 p-6 flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredId === cut.id ? 1 : 0, y: hoveredId === cut.id ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-12 h-12 text-foreground mb-4" />
                <span className="text-xs uppercase tracking-widest text-foreground/80 mb-2">Perfect Pairing</span>
                <h4 className="text-2xl font-bold text-foreground font-display mb-2">{cut.winePairing}</h4>
                <p className="text-sm text-foreground/90 italic">"{cut.tastingNotes}"</p>
                <button className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wide border-b border-border/50 pb-1 text-foreground hover:border-border transition-colors">
                  View Menu <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GauchoCarousel;
