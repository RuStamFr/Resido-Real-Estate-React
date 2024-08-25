import {Link} from "react-router-dom";
import FavoritesWidget from "../FavoritesWidget/FavoritesWidget";
import Logo from "../Logo/Logo";
import Section from "../Section/Section";
import SignBtn from "../SignBtn/SignBtn";
import Wrapper from "../Wrapper/Wrapper";
import "./header.scss";
import AddPropertyBtn from "../AddPropertyBtn/AddPropertyBtn";
import {useDispatch, useSelector} from "react-redux";
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import {logOutUser} from "../../store/slices/authSlice";
const Header = () => {
  const headerNav = [
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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleClick = () => {
    dispatch(logOutUser());
  };
  return (
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
          <AddPropertyBtn text={" Add Property"} />

          {auth.auth ? (
            <LogOutBtn text={"Log out"} onClick={handleClick} />
          ) : (
            <SignBtn text={"Sign in"} />
          )}
        </div>
      </Section>
    </header>
  );
};
export default Header;
