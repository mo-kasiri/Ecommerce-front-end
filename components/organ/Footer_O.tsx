import React from "react";
import FooterMobileMenu_M from "../molecule/FooterMobileMenu_M";
import FooterMiddlePart from "../molecule/FooterMiddlePart";
import AccordionAlwaysOpen from "../molecule/FooterAccordions_M";

function Footer_O() {
  return (
    <footer className="bg-primary pb-0 mb-0" style={{ position: "relative" }}>
      <FooterMiddlePart />
      <AccordionAlwaysOpen />
      <FooterMobileMenu_M />
    </footer>
  );
}

export default Footer_O;
