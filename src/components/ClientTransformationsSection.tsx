import { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import all 26 transformation images
import transformation1 from "@/assets/transformations/1.daniel.5mo.jpg";
import transformation2 from "@/assets/transformations/2.chris.5mo.jpg";
import transformation3 from "@/assets/transformations/3.Jay.5mo.png";
import transformation4 from "@/assets/transformations/4.matt.6mo.png";
import transformation5 from "@/assets/transformations/5.Eddie.6mo.png";
import transformation6 from "@/assets/transformations/6.anon.5mo.jpg";
import transformation7 from "@/assets/transformations/7.sean.3mo.png";
import transformation8 from "@/assets/transformations/8.jimmy.5mo.jpg";
import transformation9 from "@/assets/transformations/9.Nate.6mo.png";
import transformation10 from "@/assets/transformations/10.eric.4mo.jpg";
import transformation11 from "@/assets/transformations/11.anon.5mo.png";
import transformation12 from "@/assets/transformations/12.graysan.8weeks.jpeg";
import transformation13 from "@/assets/transformations/13.anthony.4.5mo.jpg";
import transformation14 from "@/assets/transformations/14.eric.4mo.jpg";
import transformation15 from "@/assets/transformations/15.charlie.3.5mo.jpg";
import transformation16 from "@/assets/transformations/16.igo.4mo.jpg";
import transformation17 from "@/assets/transformations/17.nick.4mo.jpg";
import transformation18 from "@/assets/transformations/18.rachel.3mo.jpg";
import transformation19 from "@/assets/transformations/19.russel.5mo.jpg";
import transformation20 from "@/assets/transformations/20.nick.3mo.jpg";
import transformation21 from "@/assets/transformations/21.thai.6mo.png";
import transformation22 from "@/assets/transformations/22.neal.3mo.jpg";
import transformation23 from "@/assets/transformations/23.anon.2.5mo.jpg";
import transformation24 from "@/assets/transformations/24.anon.4mo.jpg";
import transformation25 from "@/assets/transformations/25.kieth.4mo.png";
import transformation26 from "@/assets/transformations/26.steven.4mo.jpg";

interface Transformation {
  imageUrl: string;
  clientName: string;
  duration: string;
  verified: boolean;
}

const transformations: Transformation[] = [
  { imageUrl: transformation1, clientName: "Daniel", duration: "5 months", verified: true },
  { imageUrl: transformation2, clientName: "Chris", duration: "5 months", verified: true },
  { imageUrl: transformation3, clientName: "Jay", duration: "5 months", verified: true },
  { imageUrl: transformation4, clientName: "Matt", duration: "6 months", verified: true },
  { imageUrl: transformation5, clientName: "Eddie", duration: "6 months", verified: true },
  { imageUrl: transformation6, clientName: "Client", duration: "5 months", verified: true },
  { imageUrl: transformation7, clientName: "Sean", duration: "3 months", verified: true },
  { imageUrl: transformation8, clientName: "Jimmy", duration: "5 months", verified: true },
  { imageUrl: transformation9, clientName: "Nate", duration: "6 months", verified: true },
  { imageUrl: transformation10, clientName: "Eric", duration: "4 months", verified: true },
  { imageUrl: transformation11, clientName: "Client", duration: "5 months", verified: true },
  { imageUrl: transformation12, clientName: "Graysan", duration: "8 weeks", verified: true },
  { imageUrl: transformation13, clientName: "Anthony", duration: "4.5 months", verified: true },
  { imageUrl: transformation14, clientName: "Eric", duration: "4 months", verified: true },
  { imageUrl: transformation15, clientName: "Charlie", duration: "3.5 months", verified: true },
  { imageUrl: transformation16, clientName: "Igo", duration: "4 months", verified: true },
  { imageUrl: transformation17, clientName: "Nick", duration: "4 months", verified: true },
  { imageUrl: transformation18, clientName: "Rachel", duration: "3 months", verified: true },
  { imageUrl: transformation19, clientName: "Russel", duration: "5 months", verified: true },
  { imageUrl: transformation20, clientName: "Nick", duration: "3 months", verified: true },
  { imageUrl: transformation21, clientName: "Thai", duration: "6 months", verified: true },
  { imageUrl: transformation22, clientName: "Neal", duration: "3 months", verified: true },
  { imageUrl: transformation23, clientName: "Client", duration: "2.5 months", verified: true },
  { imageUrl: transformation24, clientName: "Client", duration: "4 months", verified: true },
  { imageUrl: transformation25, clientName: "Kieth", duration: "4 months", verified: true },
  { imageUrl: transformation26, clientName: "Steven", duration: "4 months", verified: true },
];

interface ClientTransformationsSectionProps {
  items?: Transformation[];
  maxItems?: number;
}

export default function ClientTransformationsSection({
  items = transformations,
  maxItems = 26,
}: ClientTransformationsSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const displayItems = items.slice(0, maxItems);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < displayItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const goToPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
    if (e.key === "Escape") closeLightbox();
  };

  const selectedItem = selectedIndex !== null ? displayItems[selectedIndex] : null;

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real Client Transformations
          </h2>
          <p className="text-muted-foreground text-lg">
            {displayItems.length} verified results. Tap any image to zoom.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayItems.map((item, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`${item.clientName} — ${item.duration} transformation`}
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={`${item.clientName} — ${item.duration} transformation`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* Vignette overlay to blend white edges */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_20px_rgba(0,0,0,0.5)] pointer-events-none" />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Duration Badge (bottom-left) */}
              <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                {item.duration}
              </div>

              {/* Verified Badge (top-right) */}
              {item.verified && (
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </div>
              )}

              {/* Hidden label for SEO */}
              <span className="sr-only">
                Transformation — {item.duration}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          className="max-w-5xl w-full p-0 bg-black/95 border-0"
          onKeyDown={handleKeyDown}
        >
          {selectedItem && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-black/50 rounded-full p-2 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              {selectedIndex !== null && selectedIndex > 0 && (
                <button
                  onClick={goToPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/50 rounded-full p-3 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {selectedIndex !== null && selectedIndex < displayItems.length - 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-black/50 rounded-full p-3 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Image */}
              <div className="relative w-full max-h-[80vh] flex items-center justify-center p-8">
                <img
                  src={selectedItem.imageUrl}
                  alt={`${selectedItem.clientName} — ${selectedItem.duration} transformation`}
                  className="max-w-full max-h-full object-contain"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Caption */}
              <div className="bg-black/80 text-white p-6 text-center">
                <p className="text-xl font-semibold mb-1">{selectedItem.clientName}</p>
                <p className="text-muted-foreground mb-2">{selectedItem.duration}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                  <Check className="w-4 h-4" />
                  <span>Verified result</span>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {selectedIndex !== null && `${selectedIndex + 1} / ${displayItems.length}`}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
