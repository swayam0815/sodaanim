"use client";
import { Bounded } from "./Bounded";
import Image from "next/image";
import Button from "./Button";
import { TextSplitter } from "./TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const introTL = gsap.timeline();

    introTL
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power3.in",
        delay: 0.3,
        stagger: 0.7,
      })
      .from(
        ".hero-subheading",
        {
          opacity: 0,
          y: 30,
        },
        "+=.3",
      )
      .from(".hero-body", {
        opacity: 0,
        y: 10,
      })
      .from(".hero-button", {
        opacity: 0,
        y: 10,
        duration: ".6",
      });

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollTL
      .fromTo(
        "body",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#D9F99D",
          overwrite: "auto",
        },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(3)",
        duration: 0.5,
      })
      .from(".text-side-body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <div>
      <Bounded className="hero opacity-0">
        <View className="hero-scene pointer-events-auto sticky top-0 z-50 mt-[-100vh] hidden h-screen w-screen md:block">
          <Scene />
        </View>
        <div className="grid">
          <div className="grid h-screen place-items-center">
            <div className="grid auto-rows-min place-items-center text-center">
              <h1 className="hero-header lg:text-[13rem] text-7xl font-extrabold uppercase leading-[.8] text-orange-500 md:text-[12rem]">
                <TextSplitter
                  text="Live Gutsy"
                  wordDisplayStyle="block"
                  className="hero-header-word"
                />
              </h1>
              <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
                <h2>Soda Perfected</h2>
              </div>
              <div className="hero-body text-2xl font-normal text-sky-950">
                <p>3-5g sugar. 9g Fiber, 5 delicious flavors.</p>
              </div>
              <Button buttonText={"Shop Now!"} className="hero-button m-12" />
            </div>
          </div>

          <div className="grid text-side relative z-80 h-screen items-center gap-4 md:grid-cols-2">
            <Image
              src={"/images/all-cans-bunched.png"}
              width={800}
              height={600}
              sizes="100vw"
              className="w-full hidden"
              alt=""
            />
            <div className="">
              <TextSplitter
                text="Try all five flavors"
                className="text-side-heading text-balance text-6xl font-extrabold uppercase text-sky-950 lg:text-8xl"
              />

              <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
                <p>
                  Our soda is made with real fruit juice and a touch of cane
                  sugar. We never use artificial sweeteners or high fructose
                  corn syrup. Try all five flavors and find your favorite!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </div>
  );
}
