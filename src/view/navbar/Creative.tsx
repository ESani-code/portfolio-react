export const CreativeLeft = () => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#graphics", label: "Graphics" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label }) => (
        <a key={href} href={href} className="links">
          {label}
        </a>
      ))}
    </div>
  );
};

export const CreativeRight = () => {
  const links = [
    { href: "#motion-designs", label: "Motion Designs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ href, label }) => (
        <a key={href} href={href} className="links">
          {label}
        </a>
      ))}
    </div>
  );
};
