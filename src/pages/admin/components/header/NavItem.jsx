import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as NextLink } from "next/link";

const NavItem = ({
  link,
  title,
  icon,
  name,
  activeNavName,
  setActiveNavName,
}) => {
  const LinkComponent = process.env.NEXT_PUBLIC_ROUTING === "react-router" ? ReactRouterLink : NextLink;

  // Ensure LinkComponent is defined before rendering
  if (!LinkComponent) {
    return null; // Or handle this case in another way
  }

  return (
    <LinkComponent to={link} href={link}>
      <a
        className={`${
          name === activeNavName
            ? "font-bold text-primary"
            : "font-semibold text-[#A5A5A5]"
        } flex items-center gap-x-2 py-2 text-lg`}
        onClick={() => setActiveNavName(name)}
      >
        {icon}
        {title}
      </a>
    </LinkComponent>
  );
};

export default NavItem;
