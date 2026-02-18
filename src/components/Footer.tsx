import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-4xl font-display font-black uppercase text-foreground">Lumina</h3>
            <p className="text-muted-foreground leading-relaxed">
              A boutique rodizio experience in the heart of Southlake. Celebrating the vibrant spirit of Brazil with every cut.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/5 flex items-center justify-center hover:bg-primary hover:text-foreground transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-wider">Visit Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p>
                  1234 Southlake Blvd<br />
                  Southlake, TX 76092
                </p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p>(817) 555-0123</p>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <p>reservations@luminagrill.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-wider">Hours</h4>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-foreground">4:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-foreground">4:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-foreground">11:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-wider">Join the Club</h4>
            <p className="text-muted-foreground text-sm">
              Subscribe for exclusive wine tasting events and seasonal menu updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/5 border border-border/10 rounded-md px-4 py-2 w-full text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-4 py-2 bg-primary text-foreground rounded-md font-bold hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/5 pt-8 text-center text-sm text-muted-foreground/50">
          <p>&copy; {new Date().getFullYear()} Lumina Brazilian Grill. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
