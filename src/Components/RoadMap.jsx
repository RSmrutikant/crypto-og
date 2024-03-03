import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimeLine from "./TimeLine";

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
      <TimeLine/>
    </div>
    <div className="marquee1">
    <h2 className="marquee_text_1">
    Join us as we ride the tide of decentralization, shaping the future of finance. 💰 Join us as we ride the tide of decentralization, shaping the future of finance. 💰 Join us as we ride the tide of decentralization, shaping the future of finance. 💰
    </h2>
  </div>
  <div className="marquee2">
  <h2 className="marquee_text_2">
  Get ready – the crypto wave is unstoppable! 🚀 #CryptoOGs #BitcoinRevolution Get ready – the crypto wave is unstoppable! 🚀 #CryptoOGs #BitcoinRevolution Get ready – the crypto wave is unstoppable! 🚀 #CryptoOGs #BitcoinRevolution
    </h2>
  </div>

   </div>
  );
}

export default RoadMap;
