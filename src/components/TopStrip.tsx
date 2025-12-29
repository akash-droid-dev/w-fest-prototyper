import { Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const TopStrip = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="bg-foreground text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex justify-end items-center gap-6">
        <a
          href="mailto:hello@wfest.com"
          className="interactive-icon flex items-center gap-2 text-sm px-2 py-1 rounded transition-all hover:bg-primary/20"
        >
          <Mail size={16} />
          <span>hello@wfest.com</span>
        </a>
        
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="interactive-icon p-2 rounded-full transition-all hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-primary"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStrip;
