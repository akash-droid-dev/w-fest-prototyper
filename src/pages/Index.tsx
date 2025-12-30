import { Link } from "react-router-dom";
import { Ticket, Compass, Music, Users } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
        </div>
        
       
      </section>

      {/* Action Tiles - Positioned below hero, above Experience section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <Link
              to="/book-tickets"
              className="flex-1 group card-hover bg-card rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-button flex items-center justify-center">
                <Ticket size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Book Your Experience
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure your spot at W Festival
              </p>
            </Link>

            <Link
              to="/festival"
              className="flex-1 group card-hover bg-card rounded-2xl p-8 shadow-soft text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-teal flex items-center justify-center">
                <Compass size={28} className="text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                Explore Festival
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover all three magical destinations
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">OUR</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">EXPERIENCE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-festival-blue/10 flex items-center justify-center">
                <span className="text-4xl">💧</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Water</h3>
              <p className="text-muted-foreground">
                Dharoi - Experience thrilling water sports and serene lakefront activities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-festival-green/10 flex items-center justify-center">
                <span className="text-4xl">🌲</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Woods</h3>
              <p className="text-muted-foreground">
                Polo Forest - Explore ancient ruins amidst lush green forests
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-festival-purple/10 flex items-center justify-center">
                <span className="text-4xl">📜</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">Wisdom</h3>
              <p className="text-muted-foreground">
                Vadnagar - Discover rich heritage and ancient wisdom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">OUR</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">ARTISTS</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Aditya", surname: "Gadhavi" },
              { name: "Salim", surname: "Sulaiman" },
              { name: "Shankar", surname: "Mahadevan" },
              { name: "Kailash", surname: "Kher" },
            ].map((artist, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden shadow-soft card-hover"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Users size={48} className="text-muted-foreground/50" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground italic">{artist.surname}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Festival Highlights</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🎵", label: "Live Music" },
              { icon: "🎭", label: "Cultural Shows" },
              { icon: "🏄", label: "Water Sports" },
              { icon: "🌿", label: "Nature Trails" },
              { icon: "🍲", label: "Local Cuisine" },
              { icon: "🎨", label: "Art Workshops" },
              { icon: "📷", label: "Photography" },
              { icon: "⛺", label: "Camping" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl text-center shadow-soft card-hover"
              >
                <span className="text-4xl mb-2 block">{item.icon}</span>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
