"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ["start end", "end end"] : ["start start", "end end"],
  });

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0.05, 0.95], [25, 0]);
  const scale = useTransform(scrollYProgress, [0.05, 0.95], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0.05, 0.95], [0, -60]);
  const cardTranslate = useTransform(scrollYProgress, [0.05, 0.95], [0, -220]);

  return (
    <div
      className={isMobile ? "relative w-full h-auto py-12 px-4" : "relative w-full h-[165vh]"}
      ref={containerRef}
    >
      <div
        className={
          isMobile
            ? "relative w-full"
            : "sticky top-[120px] md:top-[140px] h-[calc(100vh-120px)] md:h-[calc(100vh-140px)] w-full flex flex-col items-center justify-start pt-6 md:pt-10 overflow-visible"
        }
      >
        <div
          className="w-full relative py-10 md:py-0"
          style={{
            perspective: "1000px",
          }}
        >
          <Header translate={translate} titleComponent={titleComponent} />
          <Card rotate={rotate} scale={scale} translate={cardTranslate}>
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-7xl mx-auto text-center relative z-20"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 10px 30px rgba(0,0,0,0.6), 0 40px 60px rgba(0,0,0,0.5), 0 90px 80px rgba(0,0,0,0.4), 0 150px 100px rgba(0,0,0,0.2), 0 240px 120px rgba(0,0,0,0.1)",
      }}
      className="max-w-7xl -mt-10 mx-auto h-auto w-full border border-white/10 p-2 md:p-4 bg-linear-to-b from-secondary-bg/90 to-primary-bg/95 rounded-[32px] shadow-2xl backdrop-blur-xl relative z-10"
    >
      {/* Decorative top green glow line inside the container */}
      <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-linear-to-r from-transparent via-[#22C55E]/40 to-transparent pointer-events-none" />

      <div className="w-full overflow-visible rounded-2xl bg-primary-bg/75 border border-white/5 p-4 sm:p-6 md:p-8 relative">
        {children}
      </div>
    </motion.div>
  );
};
