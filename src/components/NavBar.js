import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <a key={index} href={`#${link}`}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
