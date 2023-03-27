import React, { useState } from "react";
import styled from "styled-components";
import Styles from "../Components/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isshow, setIsshow] = useState(false);

  return (
    <>
      <nav className={Styles.navbar}>
        <div className={Styles.logo}>
          <Image
            src="/images/logo.jpeg"
            width="20"
            height="20"
            alt="logo"
            className={Styles.logoImage}
          ></Image>
        </div>

        <div className={`${Styles["nav__menu"]} ${isshow && Styles.showMenu}`}>
          <ul className={Styles["nav__list"]}>
            <li>
              <Link href="#home" className={Styles["nav__link"]}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={Styles["nav__link"]}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className={Styles["nav__link"]}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#menu" className={Styles["nav__link"]}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="#contact" className={Styles["nav__link"]}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={Styles["nav__toggle"]}
          onClick={() => setIsshow(!isshow)}
        >
         <div className={Styles.line}></div>
         <div className={Styles.line}></div>
         <div className={Styles.line}></div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
