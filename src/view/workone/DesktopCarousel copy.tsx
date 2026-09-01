import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cardData } from "./GraphicWorks";

// Pixels of auto-scroll per second (marquee speed).
const AUTO_SCROLL_SPEED = 40;

type MarqueeState = {
  offsetX: number; // current translateX in px (<= 0)
  halfWidth: number; // width of a single (non-duplicated) set of cards
  dragging: boolean;
  hovering: boolean;
  startX: number;
  dragStartOffset: number;
  lastTime: number | null;
  rafId: number;
};

const DesktopCarousel = () => {
  // The element we actually transform. It renders two copies of cardData
  // back to back so we can loop seamlessly at the halfway point.
  const trackRef = useRef<HTMLDivElement>(null);

  // Every value that used to be its own useState/useRef now lives here.
  // Mutating this object never triggers a re-render — we update the DOM
  // directly instead, since none of this needs to flow back into JSX.
  const state = useRef<MarqueeState>({
    offsetX: 0,
    halfWidth: 0,
    dragging: false,
    hovering: false,
    startX: 0,
    dragStartOffset: 0,
    lastTime: null,
    rafId: 0,
  });

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const s = state.current;

    const applyTransform = (x: number) => {
      node.style.transform = `translateX(${x}px)`;
    };

    // --- Sizing ---
    const measure = () => {
      s.halfWidth = node.scrollWidth / 2;
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(node);

    // --- Auto-scroll loop ---
    const step = (time: number) => {
      if (s.lastTime === null) s.lastTime = time;
      const dt = (time - s.lastTime) / 1000;
      s.lastTime = time;

      if (!s.hovering && !s.dragging && s.halfWidth > 0) {
        let next = s.offsetX - AUTO_SCROLL_SPEED * dt;
        if (next <= -s.halfWidth) next += s.halfWidth;
        s.offsetX = next;
        applyTransform(next);
      }

      s.rafId = requestAnimationFrame(step);
    };
    s.rafId = requestAnimationFrame(step);

    // --- Hover pause (no state — just flip a flag the loop reads) ---
    const onMouseEnter = () => {
      s.hovering = true;
    };
    const onMouseLeave = () => {
      s.hovering = false;
    };

    // --- Drag ---
    const onPointerDown = (e: PointerEvent) => {
      s.dragging = true;
      s.startX = e.clientX;
      s.dragStartOffset = s.offsetX;
      node.classList.add("cursor-grabbing");
      node.classList.remove("cursor-grab");
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!s.dragging) return;

      const delta = e.clientX - s.startX;
      let next = s.dragStartOffset + delta;

      // Wrap into the [-halfWidth, 0] range so a long drag still loops
      // seamlessly instead of running off into empty space.
      if (s.halfWidth > 0) {
        while (next <= -s.halfWidth) next += s.halfWidth;
        while (next > 0) next -= s.halfWidth;
      }

      s.offsetX = next;
      applyTransform(next);
    };

    const endDrag = () => {
      s.dragging = false;
      node.classList.remove("cursor-grabbing");
      node.classList.add("cursor-grab");
    };

    node.parentElement?.addEventListener("mouseenter", onMouseEnter);
    node.parentElement?.addEventListener("mouseleave", onMouseLeave);
    node.addEventListener("pointerdown", onPointerDown);
    node.addEventListener("pointermove", onPointerMove);
    node.addEventListener("pointerup", endDrag);
    node.addEventListener("pointerleave", endDrag);
    node.addEventListener("pointercancel", endDrag);

    return () => {
      cancelAnimationFrame(s.rafId);
      resizeObserver.disconnect();
      node.parentElement?.removeEventListener("mouseenter", onMouseEnter);
      node.parentElement?.removeEventListener("mouseleave", onMouseLeave);
      node.removeEventListener("pointerdown", onPointerDown);
      node.removeEventListener("pointermove", onPointerMove);
      node.removeEventListener("pointerup", endDrag);
      node.removeEventListener("pointerleave", endDrag);
      node.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative mx-auto overflow-x-hidden overflow-y-visible py-6"
    >
      <div className="absolute left-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none backdrop-blur-md bg-linear-to-r from-black/80 to-transparent [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_100%)]" />

      <div
        ref={trackRef}
        className="flex w-fit select-none touch-pan-y cursor-grab"
      >
        {[...cardData, ...cardData].map((card, index) => (
          <div
            key={index}
            className="w-96 mx-2 h-120 relative group rounded-sm hover:scale-101 transition-all duration-300"
          >
            <img
              src={card.image}
              alt="card"
              draggable={false}
              className="w-full h-full object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center pb-8 px-4 opacity-0 rounded-sm group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm bg-linear-to-t from-black/60 via-black/20 to-transparent [mask-image:linear-gradient(to_top,rgba(0,0,0,1)_15%,rgba(0,0,0,0)_80%)]">
              <p className="text-white text-lg font-semibold text-center">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none backdrop-blur-md bg-linear-to-l from-black/80 to-transparent [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_10%,rgba(0,0,0,0)_100%)]" />
    </motion.div>
  );
};

export default DesktopCarousel;
