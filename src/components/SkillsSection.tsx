import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Image,
  Figma,
  FileCode,
  Code,
  Braces,
  Wind,
  Atom,
} from "lucide-react";

const skills = [
  { name: "Canva", icon: Palette, glow: "hsla(270, 85%, 60%, 0.45)" },
  { name: "Photoshop", icon: Image, glow: "hsla(210, 100%, 60%, 0.45)" },
  { name: "UI/UX (Figma)", icon: Figma, glow: "hsla(330, 85%, 60%, 0.45)" },
  { name: "HTML", icon: FileCode, glow: "hsla(15, 90%, 55%, 0.45)" },
  { name: "CSS", icon: Code, glow: "hsla(210, 100%, 60%, 0.45)" },
  { name: "JavaScript", icon: Braces, glow: "hsla(50, 95%, 50%, 0.45)" },
  { name: "Tailwind CSS", icon: Wind, glow: "hsla(190, 90%, 50%, 0.45)" },
  { name: "React", icon: Atom, glow: "hsla(195, 90%, 55%, 0.45)" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm tracking-[0.3em] uppercase text-accent-blue mb-4 text-center font-medium"
        >
          Skills & Tools
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-gradient-subtle font-display"
        >
          My Toolkit
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}

              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: `0 0 45px -10px ${skill.glow}`,
              }}

              className="glass-card p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 cursor-default group transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 8 }}
                className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300"
              >
                <skill.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                />
              </motion.div>

              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wide">
                {skill.name}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;