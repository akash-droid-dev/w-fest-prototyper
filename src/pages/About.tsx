import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import dharoiBg from "@/assets/dharoi.jpg";
import poloBg from "@/assets/polo.jpg";
import vadnagarBg from "@/assets/vadnagar.jpg";

const aboutSlides = [
  {
    title: "About Dharoi, Gujarat",
    background: dharoiBg,
    content: `Dharoi is a serene destination nestled around the Dharoi Dam on the Sabarmati River in Mehsana district, Gujarat. Known for its expansive reservoir and tranquil surroundings, Dharoi offers a perfect blend of natural beauty and adventure. The dam, built in 1978, serves as a lifeline for irrigation and drinking water in the region while also becoming a recreational hub.

Visitors can enjoy water-based activities like boating, kayaking, and jet skiing against a backdrop of the Aravalli hills. The area is a haven for birdwatchers, especially during migratory seasons. With well-maintained gardens, scenic viewpoints, and a peaceful ambiance, Dharoi is an ideal getaway for families, nature lovers, and adventure enthusiasts alike.

The W Fest at Dharoi celebrates the theme of WATER, offering unique aquatic experiences, lakefront cultural evenings, and eco-friendly tourism that highlights Gujarat's commitment to sustainable development.`,
  },
  {
    title: "About Polo Forest, Gujarat",
    background: poloBg,
    content: `Polo Forest, located in the Sabarkantha district of Gujarat, is a hidden archaeological and ecological treasure. This ancient site, dating back to the 10th-15th century, features remnants of Jain and Hindu temples, stepwells, and fortifications, all enveloped by dense deciduous forests.

The forest is part of the Vijaynagar range and is crisscrossed by the Harnav River, adding to its scenic charm. Polo Forest is a paradise for trekkers, nature photographers, and history buffs. The area is home to diverse flora and fauna, including leopards, sloth bears, and over 275 species of birds.

The W Fest at Polo Forest embodies the theme of WOODS, offering immersive forest trails, survival workshops, heritage walks among ancient ruins, and eco-cultural nights under the stars. It's a journey into Gujarat's rich past intertwined with its natural splendor.`,
  },
  {
    title: "About Vadnagar, Gujarat",
    background: vadnagarBg,
    content: `Vadnagar is one of the oldest continuously inhabited towns in India, with a history spanning over 2,500 years. Located in Mehsana district, Gujarat, this ancient town is mentioned in texts from the times of Alexander the Great and Hiuen Tsang.

The town is renowned for its architectural marvels, including the iconic Kirti Toran (Gateway of Fame), the ancient Sharmistha Lake with its 12 stepwells, and Buddhist monasteries dating back to the 1st century CE. Vadnagar is also the birthplace of India's Prime Minister, Shri Narendra Modi, adding to its contemporary significance.

The W Fest at Vadnagar celebrates WISDOM, offering heritage walks, cultural workshops, traditional craft demonstrations, and illumination walks through the historic streets. It's a journey through time, connecting visitors with India's profound cultural and intellectual heritage.`,
  },
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length);
  };

  const slide = aboutSlides[currentSlide];

  return (
    <Layout>
      <div className="relative min-h-[80vh]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slide.background})` }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          <BackButton className="mb-8" />

          <div className="max-w-4xl mx-auto">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-card animate-fade-in">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {slide.title}
              </h1>
              
              <div className="prose prose-lg max-w-none text-foreground/80">
                {slide.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 px-6 py-3 bg-card/90 backdrop-blur-sm rounded-lg text-foreground hover:bg-card transition-colors"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {aboutSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center gap-2 px-6 py-3 bg-card/90 backdrop-blur-sm rounded-lg text-foreground hover:bg-card transition-colors"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
