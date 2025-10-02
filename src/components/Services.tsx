import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mockup from '../assets/phonemock.png';
import mockup1 from '../assets/downloaded-file (1).jpeg';
import mockup2 from '../assets/downloaded-file (2) green full.jpeg';
import mockup3 from '../assets/downloaded-file.jpeg';
import mockup4 from '../assets/downloaded-file.png';
import mockup5 from '../assets/ecom.png';
import mockup6 from '../assets/mobile.jpeg';

const images = [
  mockup,
  mockup1,
  mockup2,
  mockup3,
  mockup4,
  mockup5,
  mockup6,
];

export default function ParallaxScroller() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={scrollRef} className="relative h-[300vh] bg-black">
      {/* Sticky element in viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 px-10"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[80vw] h-[80vh] bg-neutral-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
