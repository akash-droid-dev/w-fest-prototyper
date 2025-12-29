import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { Droplets, Trees, Landmark } from "lucide-react";
import dharoiImg from "@/assets/dharoi.jpg";
import poloImg from "@/assets/polo.jpg";
import vadnagarImg from "@/assets/vadnagar.jpg";

const cityPricing = [
  { name: "Dharoi", price: 1200, icon: Droplets, color: "text-festival-blue" },
  { name: "Polo Forest", price: 1400, icon: Trees, color: "text-festival-green" },
  { name: "Vad Nagar", price: 1350, icon: Landmark, color: "text-festival-purple" },
];

const tourPackages = [
  {
    city: "Dharoi",
    cityImage: dharoiImg,
    packages: [
      {
        title: "Water Paradise – Dharoi",
        duration: "2 Days / 1 Night",
        description: "Aquatic experiences + lakefront views + guided activities.",
        price: 5499,
      },
      {
        title: "Complete Waterfront – Dharoi",
        duration: "3 Days / 2 Nights",
        description: "Premium water-sports + sunset experiences + comfort stay.",
        price: 9499,
      },
    ],
  },
  {
    city: "Polo Forest",
    cityImage: poloImg,
    packages: [
      {
        title: "Nature Retreat – Polo Forest",
        duration: "2 Days / 1 Night",
        description: "Guided treks + birdwatching + heritage ruins exploration.",
        price: 5999,
      },
      {
        title: "Adventure Expedition – Polo Forest",
        duration: "3 Days / 2 Nights",
        description: "Trekking + trails + outdoor adventure + camping vibe.",
        price: 8999,
      },
    ],
  },
  {
    city: "Vadnagar",
    cityImage: vadnagarImg,
    packages: [
      {
        title: "Heritage Explorer – Vadnagar",
        duration: "2 Days / 1 Night",
        description: "Heritage walk + stepwells + local culture immersion.",
        price: 4999,
      },
      {
        title: "Cultural Immersion – Vadnagar",
        duration: "3 Days / 2 Nights",
        description: "Workshops + heritage circuits + local experiences.",
        price: 7499,
      },
    ],
  },
];

const TourPackage = () => {
  const navigate = useNavigate();

  const handleBookPackage = (cityName: string, packageTitle: string, price: number) => {
    navigate("/book-tickets", {
      state: {
        preselectedCity: cityName === "Vadnagar" ? "Vad Nagar" : cityName,
        selectedPackage: packageTitle,
        preselectedAmount: price,
      },
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-muted">
        <div className="container mx-auto px-4 py-8">
          <BackButton className="mb-8" />

          {/* City Pricing Section */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                City Pricing
              </h1>
              <p className="text-muted-foreground">Daily entry rates for each destination</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {cityPricing.map((city) => (
                <div
                  key={city.name}
                  className="bg-card rounded-2xl p-8 shadow-soft text-center card-hover"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${city.color}`}>
                    <city.icon size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {city.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary">
                    ₹{city.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">per person / day</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tour Packages Section */}
          <section>
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Tour Packages
              </h2>
              <p className="text-muted-foreground">Complete packages with accommodation & experiences</p>
            </div>

            {tourPackages.map((cityGroup) => (
              <div key={cityGroup.city} className="mb-12">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
                  {cityGroup.city} Packages
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {cityGroup.packages.map((pkg) => (
                    <div
                      key={pkg.title}
                      className="bg-card rounded-2xl overflow-hidden shadow-card card-hover"
                    >
                      {/* Package Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={cityGroup.cityImage}
                          alt={pkg.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Package Content */}
                      <div className="p-6">
                        <h4 className="font-serif text-2xl font-bold text-primary mb-2">
                          {pkg.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {pkg.duration}
                        </p>
                        <p className="text-foreground/80 mb-4">
                          {pkg.description}
                        </p>
                        <p className="text-3xl font-bold text-primary mb-6">
                          ₹{pkg.price.toLocaleString()}
                        </p>
                        
                        <button
                          onClick={() => handleBookPackage(cityGroup.city, pkg.title, pkg.price)}
                          className="w-full py-3 px-6 rounded-full gradient-button text-primary-foreground font-semibold transition-all hover:opacity-90 hover:shadow-glow"
                        >
                          BOOK PACKAGE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TourPackage;
