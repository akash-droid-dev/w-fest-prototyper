import Layout from "@/components/Layout";
import BackButton from "@/components/BackButton";
import { Camera, Video, Image } from "lucide-react";

const Media = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] bg-muted flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <BackButton className="mb-8" />

          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera size={28} className="text-primary" />
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                <Video size={28} className="text-secondary" />
              </div>
              <div className="w-16 h-16 rounded-full bg-festival-purple/10 flex items-center justify-center">
                <Image size={28} className="text-festival-purple" />
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Coming Soon
            </p>
            <p className="text-foreground/70">
              Our media gallery featuring photos, videos, and highlights from W Festival will be available soon. 
              Stay tuned for stunning visuals from all three destinations!
            </p>

            <div className="mt-12 p-8 bg-card rounded-2xl shadow-soft">
              <p className="text-sm text-muted-foreground">
                The festival runs from <strong className="text-primary">26 January</strong> to <strong className="text-primary">28 February, 2026</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
