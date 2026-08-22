export const CreativeLeft = () => {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#designs", label: "Designs" },
    { href: "#media", label: "Media" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="links">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export const CreativeRight = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="links">
          {link.label}
        </a>
      ))}
    </div>
  );
};
