import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The picanha is absolutely life-changing, but the wine pairing suggestion from the gaucho was the real showstopper. Southlake finally has a serious rodizio.",
    name: "Sarah Jenkins",
    role: "Local Guide",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote:
      "Lumina isn't just a steakhouse, it's an experience. The atmosphere is electric yet refined. Perfect for our anniversary dinner.",
    name: "Michael Torres",
    role: "Sommelier",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote:
      "A vibrant fusion of flavors. The salad bar alone is worth the visit, but you come for the cuts. 10/10 service.",
    name: "Emily Chen",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
        {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Guest Experiences
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-background/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl hover:border-primary/30 transition-colors shadow-lg"
            >
              <div className="flex gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
