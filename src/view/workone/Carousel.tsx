import { useState, Children } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = Children.toArray(children);
  const totalSlides = items.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  if (totalSlides === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-neutral-900/50">
        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full shrink-0">
              {item}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-accent-color w-6"
                  : "bg-white/50 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          aria-label="Previous Slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          aria-label="Next Slide"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
