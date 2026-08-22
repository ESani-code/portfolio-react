export const DeveloperLeft = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
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

export const DeveloperRight = () => {
  const links = [
    { href: "#projects", label: "Projects" },
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
