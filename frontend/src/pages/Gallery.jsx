import React from "react";
import Carousel from '../components/Carousel'
import TiltedCard from '../components/TiltedCard';
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";


export default function Gallery() {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-800 pt-28 px-6">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-bold">Gallery</h1>
        <p className="text-sky-800 mt-2">
					Showcase of our labs, workshops, and projects.
				</p>


  {(() => {
    const cards = [
      {
        title: "Robotics Lab Setup",
        subtitle: "Inside our hands-on workspace and safety practices.",
        description: "Tools, kits, and stations students use every day.",
      },
      {
        title: "Arduino Basics Workshop",
        subtitle: "Wiring sensors and writing the first sketch.",
        description: "From blinking LEDs to real sensors in one session.",
      },
      {
        title: "AI Vision Demo",
        subtitle: "Detecting shapes and colors with simple models.",
        description: "Students test ideas fast and see results live.",
      },
      {
        title: "Line Follower Bot",
        subtitle: "Calibrating sensors and tuning PID on track.",
        description: "Collaboration, debugging, and ‘aha!’ moments.",
      },
      {
        title: "3D Design & Prints",
        subtitle: "From CAD to PLA—rapid iterations that teach trade‑offs.",
        description: "Designs, failures, and final glossy prints.",
      },
      {
        title: "Community Showcase",
        subtitle: "Parents and peers celebrating working prototypes.",
        description: "Confidence grows when ideas ship and inspire others.",
      },
    ];

    return (
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
        {cards.map((card, i) => (
          <CardContainer className="inter-var w-full" key={i}>
            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-sky-300/50 w-full overflow-hidden rounded-xl p-6 border-2">
              <CardItem translateZ="30" className="text-lg font-bold text-sky-900 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem as="p" translateZ="20" className="text-sky-700 text-sm mt-2 dark:text-neutral-300">
                {card.subtitle}
              </CardItem>
              <CardItem translateZ="40" rotateX={10} rotateZ={-1} className="w-full mt-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="1000"
                  width="1000"
                  className="h-52 sm:h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem as="p" translateZ="15" className="mt-3 text-sky-800 dark:text-neutral-300 text-sm">
                {card.description}
              </CardItem>
              <div className="flex items-center mt-10">
                <CardItem translateZ={10} translateX={-6} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  View album →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    );
  })()}

  <TiltedCard
    imageSrc="../insta3.png"
    altText="Workshop"
    captionText="Workshop with students of St. Patrick"
    containerHeight="300px"
    containerWidth="300px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        Workshop with students of St.Patrick
      </p>
    }
  />

  			<div style={{ height: '600px', position: 'relative' }}>
  					<Carousel
  						baseWidth={500}
  						autoplay={true}
  						autoplayDelay={1000}
  						pauseOnHover={true}
  						loop={true}
  						round={true}
  					/>
  			</div>
  


			</div>
		</div>
	);
}
