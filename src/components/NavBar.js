import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linkEl = links.map((link) => {
  return <a key={link} href={"#" + links}>{links}</a>
})
  return <nav>{linkEl}</nav>
}
  return <nav>{/* display an <a> tag for each link here */}</nav>;


export default NavBar;
