import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import festivalBg from "@/assets/festival-bg.jpg";
import dharoiBg from "@/assets/dharoi.jpg";
import poloBg from "@/assets/polo.jpg";
import vadnagarBg from "@/assets/vadnagar.jpg";

const festivals = [
  {
    name: "Dharoi",
    theme: "Water",
    path: "/festival/dharoi",
    image: dharoiBg,
    description: "Water sports & lakefront experiences",
  },
  {
    name: "Polo Forest",
    theme: "Woods",
    path: "/festival/polo",
    image: poloBg,
    description: "Trekking & forest adventures",
  },
  {
    name: "Vad Nagar",
    theme: "Wisdom",
    path: "/festival/vad",
    image: vadnagarBg,
    description: "Heritage & cultural immersion",
  },
];

const Festival = () => {
  return (
    <Layout>
      <div className="relative min-h-[80vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${festivalBg})` }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <BackButton className="mb-8" />

          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Explore the Festival
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Choose your destination and discover the magic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {festivals.map((festival) => (
              <Link
                key={festival.name}
                to={festival.path}
                className="group relative overflow-hidden rounded-2xl shadow-card card-hover"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${festival.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[320px] flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground rounded-full">
                      {festival.theme}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-2">
                    {festival.name}
                  </h2>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    {festival.description}
                  </p>
                  
                  {/* Attractions Button */}
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm text-foreground rounded-lg text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Sparkles size={16} />
                      Attractions
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Festival;
