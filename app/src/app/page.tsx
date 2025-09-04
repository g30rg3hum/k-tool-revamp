import Carousel from "@/components/pages/home/carousel";
import HeroButton from "@/components/pages/home/hero-button";
import { CONTENT_STYLES } from "@/constants/styles";
import clsx from "clsx";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="relative overflow-hidden">
        {/* Background shape */}
        <motion.div
          animate={{
            scaleX: [1.05, 1.1, 1, 1.05],
            scaleY: [1.05, 1, 1.1, 1.05],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <Image
            src="/images/shapes/wave-haikei.svg"
            alt="Wave shape"
            className="w-full h-full object-cover opacity-20"
            width={1000}
            height={1000}
          />
        </motion.div>
        {/* Content */}
        <div
          className={clsx(
            "flex flex-col items-center min-h-screen gap-9",
            CONTENT_STYLES
          )}
        >
          {/* Text */}
          <div className="flex flex-col items-center w-full">
            <span className="text-center w-max px-3 rounded-md bg-neutral mb-6">
              Precision engineering
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold space-y-3 text-center mb-3">
              <span className="block">Your vision.</span>
              <span className="block text-primary font-serif font-semibold">
                Our <span className="">precision.</span>
              </span>
              <span className="block">Your success.</span>
            </h2>
            <p className="max-w-lg text-center mb-6">
              We specialise in building advanced, complex tooling and
              mold-making that meet the highest standards of precision and
              quality and act as the foundation for tomorrow&apos;s technology.
            </p>
            <HeroButton />
          </div>
          {/* Carousel */}
          <Carousel />
        </div>
      </div>
      <div className="h-[1000px]">Testing 123</div>
    </div>
  );
}
