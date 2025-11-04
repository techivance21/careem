"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [count, setCount] = useState(0);

  // smooth count-up for "25+ Years"
  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 2000;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="relative h-[90vh] flex flex-col justify-center items-center text-center text-white">
        <Image
          src="/bg1.png"
          alt="Techivance background"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 px-4 md:px-8">
          <p className="uppercase text-pink-400 tracking-widest mb-2 text-sm">
            Welcome to Techivance
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We Are Creative Web & <br /> Digital Agency.
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white shadow-md -mt-16 z-20 relative rounded-2xl mx-4 md:mx-16 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Web Designing",
            desc: "In power departure, land procurement, liaisoning and working with state.",
            icon: "/icon1.png",
          },
          {
            title: "Web Development",
            desc: "In power departure, land procurement, liaisoning and working with state.",
            icon: "/icon2.png",
          },
          {
            title: "Web Application",
            desc: "In power departure, land procurement, liaisoning and working with state.",
            icon: "/icon3.png",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center p-4 border rounded-xl transition-all duration-300 group hover:bg-pink-50"
          >
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-pink-400 group-hover:bg-black transition-all duration-300" />
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mx-auto mb-3"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4">
          {["/client1.png", "/client2.png", "/client3.png", "/client4.png"].map(
            (img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Image
                  src={img}
                  alt={`Client ${i + 1}`}
                  width={300}
                  height={250}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </motion.div>
            )
          )}
        </div>

        <div>
          <p className="text-pink-500 uppercase font-semibold mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are you prepared to develop your businesses!
          </h2>
          <p className="text-gray-600 mb-6">
            Web designing in a strong method of simply not a main callings, be
            that as it may, in an energy for our Organization.
          </p>

          {/* Counter */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="bg-pink-500 text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold shadow-lg">
              {count}+
            </div>
            <p className="text-gray-700 font-semibold">Years Experience</p>
          </motion.div>

          {/* Features List */}
          <ul className="space-y-4">
            {[
              "Creative Ideas",
              "Quality Web Designing",
              "Marketing Solution",
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 mt-1 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">{text}</p>
                  <p className="text-gray-500 text-sm">
                    We utilize vital showcasing strategies that have been
                    demonstrated programming.
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
