import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../App.css";
import { NavLink } from "react-router-dom";
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
  const [isLoggedIn, setLoggedIn] = useState(false);

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
    if (window.innerwidth <= 960) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    showButton();

    let isMounted = true;
    if (isMounted) {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("token") !== "undefined"
      )
        setLoggedIn(true);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  window.addEventListener("resize", showButton);

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem("token", "undefined");
    window.location.reload();
  };

  let loggedInUser = (
    <div className="dropdown mr-3">
      <AccountCircleIcon
        fontSize="large"
        className={"cursor-pointer text-slate-800"}
      />
      <div className="pro-btn dropdown-content">
        <NavLink
          to={"/profile"}
          className={
            "text-sm no-underline cursor-pointer p-2 flex rounded-t-md border-2 border-slate-500"
          }
        >
          <i className="fa fa-user-circle fa-fw pt-1.5 flex"></i> پروفایل
        </NavLink>

        <button
          className={`text-sm no-underline cursor-pointer p-2 w-full flex rounded-b-md border-x-2 border-b-2 border-slate-500`}
          onClick={logout}
        >
          <i className="fa fa-sign-out fa-fw pt-1.5"></i> خروج
        </button>
      </div>
    </div>
  );

  let loggedOutUser = (
    <NavBtnLink to="/login">
      <Button primary>ورود | ثبت نام</Button>
    </NavBtnLink>
  );

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
              <span className="text-xl md:text-2xl text text-slate-900">
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
                  isLoggedIn ? (
                    loggedInUser
                  ) : (
                    loggedOutUser
                  )
                ) : (
                  <NavBtnLink to="/login">
                    <Button
                      onClick={closeMobileMenu}
                      fontBig
                      primary
                      className=" bg-green-100"
                    >
                      ورود | ثبت نام
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
