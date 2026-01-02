import { Link } from "react-router-dom";
import BounceCards from "../components/BounceCards";
import TrueFocus from '../components/TrueFocus';


export default function FirstPage() {
  const reviewSnippets = [
    {
      name: "Priya S.",
      text: "Hands-on kits made my son love robotics!",
      stars: 5,
    },
    {
      name: "Rohit K.",
      text: "Clear progression from basics to real builds.",
      stars: 5,
    },
    {
      name: "Aisha M.",
      text: "AI concepts finally made sense to my daughter.",
      stars: 5,
    },
    {
      name: "Daniel P.",
      text: "Great mentors and visible outcomes.",
      stars: 5,
    },
    {
      name: "Meera R.",
      text: "Loved the 3D design + robotics combo.",
      stars: 5,
    },
  ];

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale",
    
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  const Star = ({ filled = true }) => (
    <svg
      aria-hidden
      className={`h-4 w-4 ${filled ? "fill-yellow-400" : "fill-gray-300"}`}
      viewBox="0 0 20 20"
    >
      <path d="M10 15.27l-5.18 3.05 1.58-5.81L1 8.97l6.02-.52L10 3l2.98 5.45 6.02.52-5.4 3.54 1.58 5.81z" />
    </svg>
  );

  const GearIcon = () => (
    <svg className="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9.4 4a7.4 7.4 0 00-.14-1.4l2.02-1.57-2-3.46-2.43.98a7.44 7.44 0 00-2.42-1.4l-.37-2.58h-4l-.38 2.58a7.44 7.44 0 00-2.42 1.4l-2.43-.98-2 3.46 2.02 1.57c-.06.46-.1.93-.1 1.4 0 .47.04.94.1 1.4L.87 15.97l2 3.46 2.43-.98c.72.59 1.55 1.07 2.42 1.4l.38 2.58h4l.37-2.58c.87-.33 1.7-.81 2.42-1.4l2.43.98 2-3.46-2.02-1.57c.1-.46.14-.93.14-1.4z" />
    </svg>
  );

  const ChipIcon = () => (
    <svg className="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 3h6v2h2v2h2v6h-2v2h-2v2H9v-2H7v-2H5V7h2V5h2V3zm1 6v6h4V9h-4z" />
    </svg>
  );

  const SensorIcon = () => (
    <svg className="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 019 9h-2a7 7 0 10-14 0H3a9 9 0 019-9zm0 4a5 5 0 015 5h-2a3 3 0 10-6 0H7a5 5 0 015-5z" />
    </svg>
  );

  const WaveIcon = () => (
    <svg className="h-6 w-6 text-brand-green" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4 2.5 4 5 4" strokeWidth="2" stroke="currentColor" fill="none" />
    </svg>
  );

  return (
    <div className="w-full bg-pink-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-purple-50 to-indigo-100" />
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e5e7eb" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* WHAT DOES CODEBOTIX DO */}
        <div className="relative w-full px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="ml-0 md:ml-[100px]">
              <p className="inline-flex items-center gap-2 rounded-full bg-purple-200 text-purple-900 px-3 py-1 text-xs font-semibold">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Real hardware. Age-appropriate AI. Project-first learning.
              </p>
              <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1.05]">
                <span className="block text-6xl md:text-7xl lg:text-8xl">Robots. AI. 3D.</span>
                <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Built by kids.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
                CodeBotix helps middle and high school students turn curiosity into
                real engineering — they build with sensors, motors, and vision,
                and learn how machines see, hear, and decide.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="px-6 py-3 rounded-xl bg-purple-300 text-purple-900 font-semibold hover:scale-[1.02] transition">
                  What is CodeBotix?
                </Link>
                <Link to="/gallery" className="px-6 py-3 rounded-xl border border-purple-200 hover:border-purple-400 font-semibold hover:bg-purple-50 transition">
                  See real student builds
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] bg-white">
                <img src="/insta3.png" alt="Students building robots at CodeBotix" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-purple-900 text-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-300 text-purple-900 font-bold">AI</span>
                <span className="text-sm leading-tight">
                  Guided builds in our
                  <br /> student-friendly AI Lab
                </span>
              </div>
            </div>
          </div>

          {/* Robotic components strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { icon: <SensorIcon />, label: "Sensors" },
              { icon: <GearIcon />, label: "Motors & Gears" },
              { icon: <ChipIcon />, label: "Microcontrollers" },
              { icon: <WaveIcon />, label: "Computer Vision" },
              { icon: <GearIcon />, label: "3D Design" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                {item.icon}
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AI & ROBOTICS (stats) */}
      <section className="w-full bg-yellow-100 px-10 py-10">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Why teach AI & Robotics now?
              </h2>
              <p className="mt-4 text-gray-700 max-w-prose">
                Early, hands-on STEM builds confident problem solvers. Kids learn to
                think like engineers: breaking problems, iterating designs, and
                validating with real hardware — not just simulations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <p className="text-4xl font-extrabold">~11%</p>
                <p className="mt-1 text-sm text-gray-500">Projected growth in STEM jobs by 2032</p>
                <p className="mt-3 text-xs text-gray-400">Source: U.S. Bureau of Labor Statistics (2023, STEM occupations)</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <p className="text-4xl font-extrabold">~2.2×</p>
                <p className="mt-1 text-sm text-gray-500">Higher median wage in STEM vs overall</p>
                <p className="mt-3 text-xs text-gray-400">Source: U.S. Bureau of Labor Statistics (2023)</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <p className="text-4xl font-extrabold">Top growth</p>
                <p className="mt-1 text-sm text-gray-500">AI/ML & Robotics roles among fastest growing</p>
                <p className="mt-3 text-xs text-gray-400">Source: World Economic Forum — Future of Jobs (2023)</p>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                <p className="text-4xl font-extrabold">Mindset</p>
                <p className="mt-1 text-sm text-gray-500">Logical thinking, creativity, and engineering rigor</p>
                <p className="mt-3 text-xs text-gray-400">Built through structured, project-first practice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA sections to About, Gallery, AI (big, non-boxy) */}
      <section className="w-full px-6 py-24">
        <div className="w-full space-y-12">
          {/* About section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-50 to-cyan-100">
            <div className="absolute inset-0 opacity-20" aria-hidden>
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
              </svg>
            </div>
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Who we are — turning explorers into innovators
              </h3>
              <p className="mt-3 md:mt-4 text-lg md:text-xl text-gray-700 max-w-3xl">
                A structured path: explorer → builder → innovator. Real hardware, real outcomes.
                See how CodeBotix mentors guide kids to present projects with confidence.
              </p>
              <div className="mt-8">
                <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-300 text-cyan-900 font-bold hover:scale-[1.02] transition">
                  Learn our story
                  <span className="text-xl">›</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-100 to-lime-50">
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              
              <TrueFocus className="justify-start"
sentence="Building Moments"
manualMode={false}
blurAmount={5}
borderColor="lime-500"
animationDuration={2}
pauseBetweenAnimations={1}
/>
              <p className="mt-3 md:mt-4 text-lg md:text-xl text-gray-700 max-w-3xl">
                Peek into our gallery: line followers, arm mechanisms, shape detection,
                and student-designed enclosures. Curiosity becomes engineering.
              </p>
              <div className="mt-8 flex justify-center">
                <BounceCards
                  className="custom-bounceCards"
                  images={images}
                  containerWidth={900}
                  containerHeight={400}
                  animationDelay={1}
                  animationStagger={0.08}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={true}
                  
                />
              </div>
              <div className="mt-5 flex justify-center">
                <Link to="/gallery" className="inline-flex items-center gap-3 px-7 py-3 rounded-2xl border border-gray-300 font-bold hover:border-lime-500 hover:bg-lime-50 transition">
                  View More
                  <span className="text-xl">›</span>
                </Link>
              </div>
            </div>
          </div>

          {/* AI Lab section */}
          <div className="relative overflow-hidden rounded-3xl bg-violet-900 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(167,139,250,0.15),transparent_40%)]" aria-hidden />
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Try the AI Lab — a mentor that never tires
              </h3>
              <p className="mt-3 md:mt-4 text-lg md:text-xl text-violet-200 max-w-3xl">
                Plan wiring, identify components, and debug with friendly guidance.
                The AI Lab complements instructors and boosts independent thinking.
              </p>
              {/* AI Lab preview video */}
            <div className="mt-6">
              <video
                src="/AILABVIDEO.mp4"
                className="block mx-auto w-full h-auto max-w-xl sm:max-w-2xl md:max-w-3xl rounded-2xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
              <div className="mt-8">
                <Link to="/ai" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet-300 text-violet-900 font-bold hover:scale-[1.02] transition">
                  Explore AI Lab
                  <span className="text-xl">›</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full px-6 py-24 bg-orange-50">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            From curiosity to confidence
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "My daughter now explains how sensors and motors work together. The progress is tangible.",
                by: "Parent, Grade 7",
              },
              {
                quote:
                  "I built a line-following robot and a vision project that detects shapes!",
                by: "Student, Grade 8",
              },
              {
                quote:
                  "Structured, outcome-driven. Students present capstone projects with confidence.",
                by: "School Partner",
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} />
                  ))}
                </div>
                <p className="mt-4 text-gray-700">“{t.quote}”</p>
                <p className="mt-4 font-semibold">— {t.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google reviews ticker */}
      <section className="w-full px-6 py-16 bg-black text-white">
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-extrabold">What parents say on Google</h3>
            <div className="flex items-center gap-1 text-yellow-400" aria-label="Average rating 5 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>

          <div className="marquee bg-white/5 rounded-2xl border border-white/10">
            <div className="marquee__track">
              {[...reviewSnippets, ...reviewSnippets].map((r, i) => (
                <div key={i} className="mx-3 my-3 min-w-[280px] rounded-xl bg-white text-black px-4 py-3 shadow-sm flex items-center gap-3">
                  <div className="flex items-center gap-1 text-yellow-400 shrink-0">
                    {Array.from({ length: r.stars }).map((_, s) => (
                      <Star key={s} />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold">{r.name} · <span className="text-gray-500">Google</span></p>
                    <p className="text-gray-700">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-xs text-neutral-400">Reviews are illustrative snippets for layout. Contact us to see more.</p>
        </div>
      </section>
    </div>
  );
}
