import Link from "next/link";

const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    setActiveNavName(name);
  };

  return (
    <Link href={link}>
      <a
        className={`${
          name === activeNavName
            ? "font-bold text-primary"
            : "font-semibold text-[#A5A5A5]"
        } flex items-center gap-x-2 py-2 text-lg`}
        onClick={handleClick}
      >
        {icon}
        {title}
      </a>
    </Link>
  );
};

export default NavItem;
