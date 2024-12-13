import React from "react";
function Header() {
  return (
    <>
          <header style={{background:"black"}}>
      <p style={{ textAlign: "center", color:"white"}}>Task-2 </p>

      <ul style={{ display: "flex", justifyContent: "space-evenly" , paddingBottom:"10px"}}>
        <li>Home</li>
        <li>About</li>
        <li>Overview</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      </header>
    </>
  );
}
export default Header;
