import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin } from "lucide-react";
import profile from "@/assets/profile.png";
import resumePdf from "@/assets/resume.pdf";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouse);
    return () => el.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsla(270,85%,60%,0.12), transparent 50%), radial-gradient(circle at 80% 20%, hsla(210,100%,60%,0.08), transparent 50%), radial-gradient(circle at 20% 80%, hsla(330,85%,60%,0.06), transparent 50%), hsl(240,15%,3%)`,
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-accent-purple/8 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/8 blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[15%] w-20 h-20 border border-accent-purple/20 rounded-xl"
      />

      <motion.div
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] w-16 h-16 border border-accent-blue/20 rounded-full"
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">

            <div className="absolute inset-0 w-40 h-40 rounded-full blur-3xl bg-accent-purple/40 animate-pulse" />

            <motion.img
              src={profile}
              alt="VisualxSwaroop Avatar"
              className="relative w-36 md:w-40 rounded-full object-cover border border-white/10 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="absolute inset-0 rounded-full border border-accent-purple/30 animate-spin-slow" />

          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm text-muted-foreground"
        >
          <Sparkles size={14} className="text-accent-purple" />
          Creative Designer & Developer
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-gradient-primary mb-4 font-display"
        >
          VisualxSwaroop
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-muted-foreground mb-3"
        >
          Graphic Designer • UI/UX Designer • Frontend Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-muted-foreground/70 italic mb-10 max-w-lg mx-auto"
        >
          Designing visuals that captivate. Building interfaces that perform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#works"
            className="btn-shimmer btn-gradient inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm hover:scale-[1.02] transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-foreground/10 text-sm hover:border-accent-purple/50 transition"
          >
            Contact Me
          </a>

          <a
            href={resumePdf}
            download="Swaroop_Resume.pdf"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-foreground/10 text-sm hover:border-accent-blue/50 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-6 mt-10"
        >
          <a
            href="https://github.com/Rinku-47"
            target="_blank"
            className="text-muted-foreground hover:text-accent-purple transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/swaroop-ranjan-rout-2ba361245/"
            target="_blank"
            className="text-muted-foreground hover:text-accent-blue transition"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;