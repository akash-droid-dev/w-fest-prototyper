import { useState } from "react";
import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ItineraryPageProps {
  title: string;
  subtitle: string;
  theme: string;
  data: Array<{
    day: number;
    dayExperience: string;
    culturalNight: string;
  }>;
}

const ItineraryPage = ({ title, subtitle, theme, data }: ItineraryPageProps) => {
  const [selectedDay, setSelectedDay] = useState<typeof data[0] | null>(null);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-muted via-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <BackButton className="mb-8" />

          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              {title}
            </h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          {/* Table Header */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-4 mb-4 px-4">
              <div className="col-span-1">
                <span className="font-serif text-lg font-bold text-secondary">DAY</span>
              </div>
              <div className="col-span-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  <span className="font-serif text-lg font-bold text-secondary">
                    DAY EXPERIENCE (9:00–12:30 + 4:00–6:00)
                  </span>
                </div>
              </div>
              <div className="col-span-5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  <span className="font-serif text-lg font-bold text-secondary">
                    CULTURAL NIGHT (7:30–9:30)
                  </span>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              {data.map((item, index) => (
                <div
                  key={item.day}
                  onClick={() => setSelectedDay(item)}
                  className={`grid grid-cols-12 gap-4 px-4 py-4 cursor-pointer transition-all hover:bg-primary/5 ${
                    index % 2 === 0 ? "bg-muted/30" : ""
                  }`}
                >
                  <div className="col-span-1 flex items-center justify-center">
                    <span className="font-bold text-lg text-foreground">{item.day}</span>
                  </div>
                  <div className="col-span-6">
                    <p className="text-foreground">{item.dayExperience}</p>
                  </div>
                  <div className="col-span-5">
                    <p className="text-foreground">{item.culturalNight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedDay} onOpenChange={() => setSelectedDay(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              Day {selectedDay?.day} - {theme}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-secondary mb-2">
                <span>☀️</span> Day Experience
              </h4>
              <p className="text-foreground/80 pl-7">{selectedDay?.dayExperience}</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-secondary mb-2">
                <span>🌙</span> Cultural Night
              </h4>
              <p className="text-foreground/80 pl-7">{selectedDay?.culturalNight}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

// Dharoi Itinerary Data (16 days shown in reference)
const dharoiData = [
  { day: 1, dayExperience: "Festival Orientation + Safety Briefing + Lakefront Walk", culturalNight: "Welcome Night + Folk Fusion" },
  { day: 2, dayExperience: "Power Boat Ride Slots + Beach Games", culturalNight: "Garba/Raas Night" },
  { day: 3, dayExperience: "Kayaking + Canoeing (rotation)", culturalNight: "Dayro (Storytelling)" },
  { day: 4, dayExperience: "Jet Ski demo (subject feasibility) + Tug of War", culturalNight: "Street Theatre (Bhavai)" },
  { day: 5, dayExperience: "Zorbing (subject feasibility) + Box Cricket", culturalNight: "Instrumental Night" },
  { day: 6, dayExperience: "Cycling Trail + Sunset Deck Photo Hour", culturalNight: "Dandiya Social" },
  { day: 7, dayExperience: "Sunday Carnival + Family Games", culturalNight: "Open Mic Night" },
  { day: 8, dayExperience: "Dragon Boat (subject feasibility) + Relay Races", culturalNight: "Tribal Dance Night" },
  { day: 9, dayExperience: "Parasailing (subject feasibility) + Volleyball", culturalNight: "Sufi/Qawwali Night" },
  { day: 10, dayExperience: "Pottery / Clay DIY + Kite Making", culturalNight: "Sugam Sangeet" },
  { day: 11, dayExperience: "Rope Course / Obstacle Games", culturalNight: "Comedy / Mimicry Night" },
  { day: 12, dayExperience: "Nature Photography Walk + Best Shot Contest", culturalNight: "Heritage Costume Night" },
  { day: 13, dayExperience: "Beach Volleyball + Frisbee Social", culturalNight: "Lokgeet Night" },
  { day: 14, dayExperience: "Sunday Tambola + Kids Zone + Movie Under the Stars", culturalNight: "Movie Under the Stars" },
  { day: 15, dayExperience: "Power Boat + Fishing Experience Demo (no catch / local tie-up)", culturalNight: "Acoustic Band Night" },
  { day: 16, dayExperience: "Kayaking Sprint Challenge + Board Games", culturalNight: "Garba Remix Night" },
];

const poloData = [
  { day: 1, dayExperience: "Festival Orientation + Trail Safety + Eco Rules", culturalNight: "Welcome Night + Folk Fusion" },
  { day: 2, dayExperience: "Guided Nature Walk (Intro Trail) + Forest Games", culturalNight: "Garba/Raas Night" },
  { day: 3, dayExperience: "Trekking Trail 1 + Photography Basics", culturalNight: "Dayro Night" },
  { day: 4, dayExperience: "Rope Course / Obstacle Line", culturalNight: "Street Theatre (eco theme)" },
  { day: 5, dayExperience: "Survival Skills Workshop (knots/shelter)", culturalNight: "Instrumental Camp Night" },
  { day: 6, dayExperience: "MTB/Cycling Trail + Birdwatching Hour", culturalNight: "Dandiya Social" },
  { day: 7, dayExperience: "Sunday Carnival (Forest Edition)", culturalNight: "Open Mic + Campfire Jam" },
  { day: 8, dayExperience: "Adventure Race (teams + checkpoints)", culturalNight: "Tribal Dance Night" },
  { day: 9, dayExperience: "Zipline (if feasible) + Box Cricket", culturalNight: "Sufi/Qawwali Night" },
  { day: 10, dayExperience: "Clay/Leaf Art Workshop + Bamboo DIY", culturalNight: "Sugam Sangeet" },
  { day: 11, dayExperience: "Orienteering / Map Hunt + Tug of War", culturalNight: "Comedy Night" },
  { day: 12, dayExperience: "Trekking Trail 2 + Sunset Viewpoint", culturalNight: "Heritage Costume Night" },
  { day: 13, dayExperience: "Star Gazing Prep + Astronomy Talk", culturalNight: "Lok geet Night" },
  { day: 14, dayExperience: "Sunday Family Trek + Kids Nature Bingo", culturalNight: "Movie Under the Stars" },
  { day: 15, dayExperience: "Rock Climbing/Bouldering Site", culturalNight: "Acoustic Band Night" },
  { day: 16, dayExperience: "Photography Walk + Best Shot Contest", culturalNight: "Garba Remix Night" },
];

const vadnagarData = [
  { day: 1, dayExperience: "Festival Orientation + Heritage Walk (Intro Loop)", culturalNight: "Welcome Night + Folk Fusion" },
  { day: 2, dayExperience: "City Selfie Trail + Craft Demo", culturalNight: "Garba/Raas Night" },
  { day: 3, dayExperience: "Guided Heritage & Museum Walk + Photo Hour", culturalNight: "Dayro Night" },
  { day: 4, dayExperience: "Local Games (Kho-Kho / Pitthu)", culturalNight: "Street Theatre (heritage comedy)" },
  { day: 5, dayExperience: "Pottery / Clay Workshop", culturalNight: "Instrumental Night" },
  { day: 6, dayExperience: "Cycling Trail (city circuit) + Kite Making", culturalNight: "Dandiya Social" },
  { day: 7, dayExperience: "Sunday Carnival + Family Games", culturalNight: "Open Mic Night" },
  { day: 8, dayExperience: "City Illumination Walk (preview route) + Quiz", culturalNight: "Tribal Dance Night" },
  { day: 9, dayExperience: "Pickleball / Box Cricket", culturalNight: "Sufi/Qawwali Night" },
  { day: 10, dayExperience: "Folk Art Workshop (Warli / local motifs)", culturalNight: "Sugam Sangeet" },
  { day: 11, dayExperience: "Talent Workshops (dance/music basics)", culturalNight: "Comedy Night" },
  { day: 12, dayExperience: "Heritage Photography Walk + Contest", culturalNight: "Heritage Costume Night" },
  { day: 13, dayExperience: "Rangoli + Mehendi", culturalNight: "Lokgeet Night" },
  { day: 14, dayExperience: "Sunday Mega Tambola + Kids Zone", culturalNight: "Movie Under the Stars" },
  { day: 15, dayExperience: "Flea Market Launch Prep + Vendor Curation", culturalNight: "Acoustic Band Night" },
  { day: 16, dayExperience: "Flea Market Day 1 + Street Food Court", culturalNight: "Garba Remix Night" },
];

export const DharoiItinerary = () => (
  <ItineraryPage
    title="W Fest - Dharoi"
    subtitle="DHAROI (WATER) — 32-DAY ITINERARY • Water sports + lakefront experiences + aero highlights + evening culture"
    theme="Dharoi"
    data={dharoiData}
  />
);

export const PoloItinerary = () => (
  <ItineraryPage
    title="W Fest - Polo Forest"
    subtitle="POLO FOREST (WOODS) — 32-DAY ITINERARY • Trekking + survival + forest trails + adventure + eco-cultural nights"
    theme="Polo Forest"
    data={poloData}
  />
);

export const VadnagarItinerary = () => (
  <ItineraryPage
    title="W Fest - Vad Nagar"
    subtitle="VADNAGAR (WISDOM) — 32-DAY ITINERARY • Heritage + culture + learning + flea market + city illumination walks"
    theme="Vadnagar"
    data={vadnagarData}
  />
);
