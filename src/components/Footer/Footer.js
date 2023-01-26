import React from "react";

import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
} from "./Footer.elements";

function Footer() {
  const date = new Date();

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
