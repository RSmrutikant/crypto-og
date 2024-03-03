import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RoadMap() {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-anime",
        start: "top 85%",
        end: "top 15%",
        scrub: true,
        markers: false,
      },
      delay: 0,
    });

    t1.fromTo(
      ".text",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    )
      .fromTo(
        ".text-1",
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-2",
        {
          x: 400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .addLabel("start")
      .fromTo(
        ".text-3",
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-4",
        {
          x: 400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-5",
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-6",
        {
          x: 400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-7",
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-8",
        {
          x: 400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text-9",
        {
          x: -400,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
      .fromTo(
        ".text",
        {
          scale: 1,
        },
        {
          scale: 2,
        },
        "start"
      );
  }, []);
  return (
   <div style={{position: "relative"}} id="roadmap">
     <div
      className="section-3 content-anime">
      <h1 className="text">
        ROAD MAP
      </h1>
      <div className="line"></div>
      <h1 className="gsap-text text-1">
        Contract audit
      </h1>
      <h1 className="gsap-text text-2">
        Launch on pancakeswap
      </h1>
      <h1 className="gsap-text text-3">
        Ownership Renounced
      </h1>
      <h1 className="gsap-text text-4">
        Contests and Giveaways
      </h1>
      <h1 className="gsap-text text-5">
        Coinmarketcap Listing
      </h1>
      <h1 className="gsap-text text-6">
        First CEX listing
      </h1>
      <h1 className="gsap-text text-7">
        Influencers onboarding
      </h1>
      <h1 className="gsap-text text-8">
        Launching SuperWAllet Exchange with Futures
      </h1>
      <h1 className="gsap-text text-9">
        Second CEX listing
      </h1>
    </div>
    <div className="marquee1">
    <h2 className="marquee_text_1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit facere ratione ducimus sequi inventore provident commodi, est quia amet
    </h2>
  </div>
  <div className="marquee2">
  <h2 className="marquee_text_2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit facere ratione ducimus sequi inventore provident commodi, est quia amet
    </h2>
  </div>

   </div>
  );
}

export default RoadMap;
