const ContactBar = () => {
  const links = [
    {
      link: "https://www.linkedin.com/in/emmanuel-sani-55944325a/",
      icon: "bi-linkedin",
    },
    { link: "https://www.instagram.com/design_labsng/", icon: "bi-instagram" },
    { link: "https://www.behance.net/emmanuelsani1", icon: "bi-behance" },
    {
      link: "https://www.linkedin.com/in/emmanuel-sani-55944325a/",
      icon: "bi-c-circle-fill",
    },
  ];
  return (
    <div className="absolute inset-0 z-100 w-full h-10 flex items-center justify-between px-6 lg:px-8 pt-12 pointer-events-none">
      <a className="pointer-events-none" href="/#">
        <img
          className="h-22"
          src="https://res.cloudinary.com/don03rsnm/image/upload/v1788169036/fsdgArtboard_1_copy_2_8x_q6zsw7.png"
          alt="Logo PNG"
        />
      </a>
      <div className="items-end pointer-events-auto">
        {links.map(({ link, icon }) => (
          <a className="pl-12" href={link}>
            <i
              className={`bi text-4xl ${icon} hover:text-accent-color transistion-all duration-200 ease-in-out`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactBar;
