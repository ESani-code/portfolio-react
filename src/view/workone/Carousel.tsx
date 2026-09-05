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

  const navBtnClass =
    "p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center shrink-0";

  return (
    <div className="w-full flex flex-col items-center">
      {/* Main Wrapper: Side-by-side layout for Tablets */}
      <div className="w-full flex flex-row items-center justify-center md:gap-6">
        {/* TABLET ARROW: Left (Hidden on mobile, flex on md and above) */}
        <button
          onClick={prevSlide}
          className={`${navBtnClass} hidden md:flex`}
          aria-label="Previous Slide"
        >
          <i className="bi bi-arrow-left" />
        </button>
        {/* Slider Viewport */}
        <div className="relative xs:w-80 xs:h-100 md:w-full md:h-full max-w-lg overflow-hidden rounded-xl bg-neutral-900/50">
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

          {/* Dots Overlay */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-2 rounded-full backdrop-blur-sm">
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

        {/* TABLET ARROW: Right (Hidden on mobile, flex on md and above) */}
        <button
          onClick={nextSlide}
          className={`${navBtnClass} hidden md:flex`}
          aria-label="Next Slide"
        >
          <i className="bi bi-arrow-right" />
        </button>
      </div>

      {/* MOBILE ARROWS: Bottom layout (Visible on mobile, hidden on md) */}
      <div className="flex md:hidden gap-4 mt-6">
        <button
          onClick={prevSlide}
          className={navBtnClass}
          aria-label="Previous Slide"
        >
          <i className="bi bi-arrow-left" />
        </button>

        <button
          onClick={nextSlide}
          className={navBtnClass}
          aria-label="Next Slide"
        >
          <i className="bi bi-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
