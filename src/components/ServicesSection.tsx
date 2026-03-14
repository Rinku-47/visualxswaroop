import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Share2, Layers, Code, Sparkles, FileVideoIcon } from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description: "Eye-catching visuals, posters, banners, and marketing collateral that elevate your brand.",
    icon: Palette,
    gradient: "from-accent-purple/20 to-accent-blue/5",
    glow: "hsla(270, 85%, 60%, 0.4)",
  },
  {
    title: "Social Media Design",
    description: "Scroll-stopping content designed for engagement across all social platforms.",
    icon: Share2,
    gradient: "from-accent-pink/20 to-accent-purple/5",
    glow: "hsla(330, 85%, 60%, 0.4)",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that users love. From wireframes to high-fidelity prototypes.",
    icon: Layers,
    gradient: "from-accent-blue/20 to-accent-purple/5",
    glow: "hsla(210, 100%, 60%, 0.4)",
  },
  {
    title: "Frontend Development",
    description: "Pixel-perfect, responsive websites built with modern frameworks like React and Tailwind.",
    icon: Code,
    gradient: "from-accent-blue/20 to-accent-pink/5",
    glow: "hsla(210, 100%, 60%, 0.4)",
  },
  {
    title: "Branding",
    description: "Complete brand identities — logos, color systems, typography, and guidelines.",
    icon: Sparkles,
    gradient: "from-accent-warm/20 to-accent-purple/5",
    glow: "hsla(330, 85%, 60%, 0.4)",
  },
  {
    title: "Video Editing",
    description: "Creating engaging video content for social media and other platforms.",
    icon: FileVideoIcon,
    gradient: "from-accent-warm/20 to-accent-purple/5",
    glow: "hsla(330, 85%, 60%, 0.4)",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm tracking-[0.3em] uppercase text-accent-purple mb-4 text-center font-medium"
        >
          Services
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-gradient-subtle font-display"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.15), 0 0 40px -8px ${service.glow}`,
                transition: { duration: 0.3 },
              }}
              className="glass-card p-6 sm:p-8 group cursor-default relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
                  <service.icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
