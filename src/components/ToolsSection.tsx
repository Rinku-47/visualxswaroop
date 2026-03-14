import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Image, Figma, Wind, Atom, Braces, } from "lucide-react";

const tools = [
  { name: "Canva", icon: Palette, color: "hsla(270, 85%, 60%, 0.5)" },
  { name: "Photoshop", icon: Image, color: "hsla(210, 100%, 60%, 0.5)" },
  { name: "Figma", icon: Figma, color: "hsla(330, 85%, 60%, 0.5)" },
  { name: "Tailwind", icon: Wind, color: "hsla(190, 90%, 50%, 0.5)" },
  { name: "React", icon: Atom, color: "hsla(195, 90%, 55%, 0.5)" },
  { name: "JavaScript", icon: Braces, color: "hsla(50, 95%, 50%, 0.5)" },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm tracking-[0.3em] uppercase text-accent-pink mb-4 text-center font-medium"
        >
          Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-gradient-subtle font-display"
        >
          Tools I Use
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 50px -10px ${tool.color}`,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-5 flex flex-col items-center gap-3 cursor-default group aspect-square justify-center"
            >
              <tool.icon
                size={32}
                strokeWidth={1.5}
                className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
              />
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
