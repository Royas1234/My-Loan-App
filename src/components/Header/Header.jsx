import React, { useState } from "react";
import styles from "./Header.module.css";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Logo from "../../Images/logo.svg";
import FilledBtn from "../../components/Button/FilledBtn";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" },
  ];

  const onSelectItem = (link) => {
    setSelectedItem(link);
  };

  const navItem = navItems.map((item, index) => (
    <li
      key={index}
      onClick={(e) => {
        e.preventDefault();
        navigate(item.link);
        onSelectItem(item.link);
      }}
      className={selectedItem === item.link ? styles.active : ""}
    >
      <a href={item.link}>{item.name}</a>
    </li>
  ));

  const [menu, setMenu] = useState(true);

  const menuToggle = () => {
    setMenu(!menu);
  };

  const renderMenuIcon = () => {
    const IconComponent = menu ? HiMenu : CgClose;
    return <IconComponent size={30} className={styles.menuIcon} />;
  };

  const logoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.everyHeader}>
      <header>
        <div className={styles.leftHeader}>
          <img
            src={Logo}
            alt="logo"
            className={styles.logo}
            onClick={logoHome}
          />

          <nav>
            <ul className={styles.navlist}>{navItem}</ul>
          </nav>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.registerLogin}>
            <Link to = "/create-account">Register</Link>
            <FilledBtn title={"Login"} onClick={() => navigate("/login")} />
          </div>
          <div className={styles.mdSm}>
            <button className={styles.menuBtn} onClick={menuToggle}>
              {renderMenuIcon()}
            </button>
            <ul className={!menu ? styles.menuList : styles.display}>
              {navItem}
             <Link to = "/create-account" className={styles.register}>Register</Link>
              <FilledBtn title={"Login"} onClick={() => navigate("/login")} />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
