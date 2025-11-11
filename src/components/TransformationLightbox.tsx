import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X, CheckCircle } from "lucide-react";
import { Transformation } from "@/data/transformations";

interface TransformationLightboxProps {
  transformations: Transformation[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const TransformationLightbox = ({
  transformations,
  initialIndex,
  isOpen,
  onClose,
}: TransformationLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const current = transformations[currentIndex];

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isOpen]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/95" />
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] border-0 p-0 bg-transparent shadow-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative flex items-center justify-center h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="flex flex-col items-center gap-4 w-full">
              <img
                src={current.imageUrl}
                alt={`${current.clientName} — ${current.duration} transformation`}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
                loading="eager"
              />

              <div className="flex items-center gap-3 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold">
                  {current.clientName}
                </span>
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {current.duration}
                </Badge>
                {current.verified && (
                  <CheckCircle className="h-5 w-5 text-accent" aria-label="Verified" />
                )}
              </div>

              <p className="text-white/60 text-sm">
                {currentIndex + 1} / {transformations.length}
              </p>
            </div>
          </div>

          {/* Preload adjacent images */}
          <div className="hidden">
            {currentIndex > 0 && (
              <img
                src={transformations[currentIndex - 1].imageUrl}
                alt=""
                aria-hidden="true"
              />
            )}
            {currentIndex < transformations.length - 1 && (
              <img
                src={transformations[currentIndex + 1].imageUrl}
                alt=""
                aria-hidden="true"
              />
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
