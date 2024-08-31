import {Link} from "react-router-dom";
import FavoritesWidget from "../FavoritesWidget/FavoritesWidget";
import Logo from "../Logo/Logo";
import Section from "../Section/Section";
import SignBtn from "../SignBtn/SignBtn";
import Wrapper from "../Wrapper/Wrapper";
import "./header.scss";
import {useDispatch, useSelector} from "react-redux";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import {logOutUser} from "../../store/slices/authSlice";
import hamburger from "./hamburger.png";
import Image from "../Image/Image";
import {useState} from "react";

export const headerNav = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Agents",
    href: "/agents",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Favorites",
    href: "/favorites",
  },
  {
    name: "Properties",
    href: "/properties",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleClick = () => {
    dispatch(logOutUser());
  };

  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        onClick={handleMenuClick}
      >
        <nav className="mobile-nav">
          {headerNav.map((item) => {
            return (
              <Link key={item.name} to={item.href} className="mobile-nav-link">
                <div>{item.name}</div>
              </Link>
            );
          })}
          <div className="header-right-btn">
            {auth.auth ? (
              <LogOutBtn text={"Log out"} onClick={handleClick} />
            ) : (
              <SignBtn text={"Sign in"} />
            )}
          </div>
        </nav>
      </div>
      <header className="header">
        <Section className={"header-top"}>
          <FavoritesWidget />
        </Section>
        <Section className={"header-bottom"}>
          <Wrapper align={"center"} direction={"row"}>
            <Wrapper width={"9rem"}>
              <Logo />
            </Wrapper>
            <nav className="header-nav">
              {headerNav.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="header-nav-link"
                  >
                    <div>{item.name}</div>
                  </Link>
                );
              })}
            </nav>
          </Wrapper>

          <div className="header-right-btn">
            {auth.auth ? (
              <LogOutBtn text={"Log out"} onClick={handleClick} />
            ) : (
              <SignBtn text={"Sign in"} />
            )}
          </div>
          <div className={"hamburger"} onClick={handleMenuClick}>
            <Image src={hamburger} />
          </div>
        </Section>
      </header>
    </>
  );
};
export default Header;
