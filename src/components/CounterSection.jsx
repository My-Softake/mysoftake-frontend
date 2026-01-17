"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineEmojiHappy,
} from "react-icons/hi";

// Number Animation Logic
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const CounterSection = () => {
  const stats = [
    {
      id: 1,
      label: "Projects Delivered",
      value: 200,
      suffix: "+",
      icon: <HiOutlineBriefcase />,
    },
    {
      id: 2,
      label: "Team Members (3 nationalities)",
      value: 60,
      suffix: "+",
      icon: <HiOutlineGlobeAlt />,
    },
    {
      id: 3,
      label: "saved by cloud customers",
      prefix: "$",
      value: 20,
      suffix: "m +",
    },
    {
      id: 4,
      label: "5 star AWS customer reviews",
      value: 95,
      suffix: "%",
      icon: <HiOutlineEmojiHappy />,
    },
  ];

  return (
    <section className="md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
              className="flex flex-col justify-center items-center h-[180px] md:h-[220px]"
            >
              {/* Counter Value */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 mb-3 flex items-center justify-center tracking-tighter">
                {stat.prefix && <span className="pr-1">{stat.prefix}</span>}
                <AnimatedNumber value={stat.value} />
                <span className="pl-2">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p> {stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
