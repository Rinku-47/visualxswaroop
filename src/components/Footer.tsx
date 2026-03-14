import { ArrowUp, Instagram, Linkedin, Dribbble, Globe, Figma, GithubIcon } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/visualx.swaroop/", label: "Instagram" },
  { icon: Figma, href: "https://www.figma.com/@swaroopranjan", label: "Figma" },
  { icon: GithubIcon, href: "https://github.com/Rinku-47", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/swaroop-ranjan-rout-2ba361245/", label: "LinkedIn" },
];

const links = [
  { name: "Home", href: "#" },
  { name: "Portfolio", href: "#works" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-foreground/5">

      {/* subtle gradient divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Branding */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-gradient-primary font-semibold">
              VisualxSwaroop
            </span>
          </p>

          <p className="text-xs text-muted-foreground/70 mt-1">
            Built with React + Tailwind
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social + Back to top */}
        <div className="flex items-center gap-3">

          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_25px_-6px_hsla(270,85%,60%,0.4)] hover:scale-105 transition-all duration-300"
            >
              <social.icon size={16} strokeWidth={1.5} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-[0_0_25px_-6px_hsla(270,85%,60%,0.4)] hover:scale-105 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} strokeWidth={1.5} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;