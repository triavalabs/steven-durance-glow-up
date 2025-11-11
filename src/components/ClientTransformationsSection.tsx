import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { transformations } from "@/data/transformations";
import { TransformationLightbox } from "@/components/TransformationLightbox";

export const ClientTransformationsSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Real Client Transformations
          </h2>
          <p className="text-muted-foreground text-lg">
            {transformations.length} verified results. Tap any image to zoom.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {transformations.map((transformation, index) => (
            <button
              key={transformation.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-95"
            >
              <img
                src={transformation.imageUrl}
                alt={`${transformation.clientName} — ${transformation.duration} transformation`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <Badge className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white border-0 font-semibold">
                {transformation.duration}
              </Badge>

              {transformation.verified && (
                <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm rounded-full p-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="sr-only">Verified transformation</span>
                </div>
              )}

              <span className="sr-only">
                View {transformation.clientName}'s {transformation.duration} transformation
              </span>
            </button>
          ))}
        </div>
      </div>

      <TransformationLightbox
        transformations={transformations}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default ClientTransformationsSection;
