import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Instagram,
  Linkedin,
  Dribbble,
  Globe,
  Copy,
  Check,
  Figma,
  GithubIcon,
} from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const email = "visualxswaroop@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px]" />

      <div className="max-w-2xl mx-auto relative z-10 px-4">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-sm tracking-[0.3em] uppercase text-accent-blue mb-4 text-center font-medium"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-center text-gradient-subtle font-display"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-center mb-10"
        >
          Have a project in mind? Let's create something amazing.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 sm:p-8 space-y-6"
        >

          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Name
            </label>

            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name"
              className="w-full bg-secondary/50 border border-foreground/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-purple/50 focus:shadow-[0_0_30px_-8px_hsla(270,85%,60%,0.3)] transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Email
            </label>

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="your@email.com"
              className="w-full bg-secondary/50 border border-foreground/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-purple/50 focus:shadow-[0_0_30px_-8px_hsla(270,85%,60%,0.3)] transition-all duration-300"
            />
          </div>

          <div>
            <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
              Message
            </label>

            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell me about your project..."
              className="w-full bg-secondary/50 border border-foreground/5 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-accent-purple/50 focus:shadow-[0_0_30px_-8px_hsla(270,85%,60%,0.3)] transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="btn-shimmer btn-gradient w-full flex items-center justify-center gap-2 text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:scale-[1.02] transition-all"
          >
            Send Message
            <Send size={16} />
          </button>

        </motion.form>

        <div className="flex justify-center mt-6">

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Email Copied!" : email}
          </button>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 mt-10"
        >

          <a
            href="https://www.instagram.com/visualx.swaroop/"
            target="_blank"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_30px_-5px_hsla(270,85%,60%,0.3)] transition-all"
          >
            <Instagram size={18} />
          </a>

          <a
            href="https://www.figma.com/@swaroopranjan"
            target="_blank"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_30px_-5px_hsla(270,85%,60%,0.3)] transition-all"
          >
            <Figma size={18} />
          </a>

          <a
            href="https://github.com/Rinku-47"
            target="_blank"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_30px_-5px_hsla(270,85%,60%,0.3)] transition-all"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/swaroop-ranjan-rout-2ba361245/"
            target="_blank"
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_30px_-5px_hsla(270,85%,60%,0.3)] transition-all"
          >
            <Linkedin size={18} />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;