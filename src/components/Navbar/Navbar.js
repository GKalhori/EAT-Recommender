import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "./Logo";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [homeClick, setHomeClick] = useState(false);
  const [toolsClick, setToolsClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setToolsClick(false);
  };
  const handleToolsClick = () => {
    setHomeClick(false);
    setToolsClick(true);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if (window.innerwidth <= 960) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <HamburgerIcon className="bg-gray-900" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavLogo to="/" className="flex gap-3 items-center">
              <Logo />
              <span className="font-semibold text-2xl md:text-3xl">
                سامانه توصیه<span>&#8239;</span>گر ابزار معماری سازمانی
              </span>
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  خانه
                </NavLinks>
              </NavItem>

              <NavItem onClick={handleToolsClick} toolsClick={toolsClick}>
                <NavLinks to="/tools" onClick={closeMobileMenu}>
                  ابزار
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>ثبت نام | ورود</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button
                      onClick={closeMobileMenu}
                      fontBig
                      primary
                      className=" bg-green-100"
                    >
                      ثبت نام | ورود
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
