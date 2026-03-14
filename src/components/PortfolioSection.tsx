import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { ExternalLink } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    title: "Web Design Concept",
    category: "UI Design",
    image: project1,
    tools: ["Figma"],
    link: "#"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image: project2,
    tools: ["Canva", "Photoshop"],
    link: "https://www.instagram.com/visualx.swaroop/"
  },
  {
    title: "Mobile App UI",
    category: "UI Design",
    image: project3,
    tools: ["Figma"],
    link: "#"
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: project4,
    tools: ["Photoshop"],
    link: "#"
  },
  {
    title: "Developer Portfolio",
    category: "Web Design",
    image: project5,
    tools: ["React", "Tailwind"],
    link: "https://portfolio-hx5b.onrender.com/"
  },
  {
    title: "Creative Posters",
    category: "Social Media",
    image: project6,
    tools: ["Canva", "Photoshop"],
    link: "https://www.instagram.com/visualx.swaroop/"
  },
];

const tagColors: Record<string, string> = {
  "UI Design": "bg-accent-purple/20 text-accent-purple",
  "Social Media": "bg-accent-pink/20 text-accent-pink",
  "Web Design": "bg-accent-blue/20 text-accent-blue",
  "Branding": "bg-accent-warm/20 text-accent-warm",
};

function TiltCard({ project, i, inView }: { project: typeof projects[0]; i: number; inView: boolean }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20
  });

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20
  });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className="glass-card overflow-hidden group cursor-pointer block"
    >
      <div className="aspect-[4/3] relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 via-transparent to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">

          <div>

            <span className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 ${tagColors[project.category] || "bg-primary/20 text-primary"}`}>
              {project.category}
            </span>

            <h3 className="text-lg font-bold tracking-tight text-foreground font-display">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] px-2 py-[2px] rounded bg-foreground/10 text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>

          <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">

            <div className="w-11 h-11 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
              <ExternalLink size={16} strokeWidth={1.5} className="text-primary-foreground" />
            </div>

          </div>

        </div>

      </div>
    </motion.a>
  );
}

const PortfolioSection = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="section-padding relative" ref={ref}>

      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm tracking-[0.3em] uppercase text-accent-pink mb-4 text-center font-medium"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center text-gradient-subtle font-display"
        >
          Selected Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {projects.map((project, i) => (
            <TiltCard
              key={project.title}
              project={project}
              i={i}
              inView={inView}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default PortfolioSection;