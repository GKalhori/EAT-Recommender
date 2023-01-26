import React from "react";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLink,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>نظرات خود را با ما در میان بگذارید</FooterSubHeading>
        <FooterLink to="/sign-up">درباره ما</FooterLink>
      </FooterSubscription>
    </FooterContainer>
  );
}

export default Footer;
