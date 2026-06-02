import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { strokeDasharray: 1000, strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    itemsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-32 bg-amber-50 text-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20">
        Our Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* SVG Path */}
        <svg
          viewBox="0 0 400 1200"
          className="absolute left-1/2 -translate-x-1/2 h-full"
          fill="none"
        >
          <path
            ref={lineRef}
            d="M200 0
               C100 150, 300 300, 200 450
               C100 600, 300 750, 200 900
               C100 1050, 300 1200, 200 1350"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* Timeline Points */}
        <div className="space-y-48 relative z-10">
          {[
            { year: "2017", text: "The idea of CodeBotix is born" },
            { year: "2019", text: "Early robotics workshops begin" },
            { year: "2021", text: "AI & robotics curriculum launched" },
            { year: "2023", text: "Thousands of students trained" },
            { year: "2025", text: "AI-powered learning platform launched" },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-[280px] shadow-lg">
                <h3 className="text-xl font-semibold text-green-400">
                  {item.year}
                </h3>
                <p className="mt-2 text-neutral-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
