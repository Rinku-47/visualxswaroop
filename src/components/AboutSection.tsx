import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Heart, Rocket } from "lucide-react";

const stats = [
  { num: "10+", label: "Projects", icon: Rocket },
  { num: "1+", label: "Years Exp.", icon: Zap },
  { num: "5+", label: "Clients", icon: Target },
  { num: "100%", label: "Passion", icon: Heart },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-[0.3em] uppercase text-accent-purple mb-4 text-center font-medium"
        >
          About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-center text-gradient-subtle font-display"
        >
          Crafting Digital Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mb-16 px-4"
        >
          I'm a creative designer and frontend developer passionate about building
          visually stunning, modern digital experiences. I bridge the gap between
          design and code — transforming ideas into polished interfaces that look
          incredible and perform flawlessly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card p-4 sm:p-6 text-center group hover:shadow-[0_0_40px_-8px_hsla(270,85%,60%,0.3)] transition-all duration-300"
            >
              <stat.icon
                size={24}
                strokeWidth={1.5}
                className="mx-auto mb-3 text-muted-foreground group-hover:text-accent-purple transition-colors duration-300"
              />
              <p className="text-3xl md:text-4xl font-bold text-gradient-primary font-display">{stat.num}</p>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
