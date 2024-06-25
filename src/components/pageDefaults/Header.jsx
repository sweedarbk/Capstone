import { useEffect, useRef, useState } from "react";
import LogoImg from "../../assets/defaultImages/wide_logo.png";
import { navBarMenu } from "../../assets/navMenu/navMenu.js";
import { CustomerNavLink, LoginLink } from "./CustomComponents.jsx";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Cart } from "../cart/Cart.jsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //menu closes when screen is clicked outside of menu
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // scroll animation
  const scrollEffect = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", scrollEffect);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutSide);
      window.removeEventListener("scroll", scrollEffect);
    };
  });

  return (
    <>
      <header className="header px-6 py-1 relative z-20 bg-black">
        <nav className="p-2 flex justify-between items-center relative bg-black text-zinc-50">
          <div className="flex items-center gap-14">
            <img src={LogoImg} alt="SWEssentials Logo Image" className="h-20" />
          </div>
          <div className="hidden lg:flex items-center justify-between gap-20">
            {navBarMenu.map((menu) => (
              <li key={menu.id} className="uppercase text-lg list-none">
                <CustomerNavLink href={menu.path}>{menu.link}</CustomerNavLink>
              </li>
            ))}
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <LoginLink>Login</LoginLink>
              <span className=""> / </span>
              <LoginLink>Register</LoginLink>
            </div>
            <div className="icon flex items-center justify-center gap-6">
              <IoSearchOutline size={23} />
              <Cart />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>
          {/* learned how to do jsc comments so that's cool. Also below is to make menu responsive on a smaller screen*/}

          <div
            ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
            } `}
          >
            {navBarMenu.map((menu) => (
              <li key={menu.id} className="uppercase list-none">
                <CustomerNavLink href={menu.path} className="text-primary-purple">{menu.link}</CustomerNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
