import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-9 px-6 md:px-0 md:pt-16 md:pb-16">
      <div className="container flex items-center justify-between">
        <Logo logo="light" />

        <div className="menu-toggle md:hidden">
          <img src="/assets/shared/mobile/icon-hamburger.svg" alt="Hamburger" />
        </div>

        <nav aria-label="Header navigation" className="hidden md:block">
          <ul className="flex items-center gap-10">
            <li>
              <Link to={"/about"} className="navLink">
                OUR COMPANY
              </Link>
            </li>
            <li>
              <Link to={"/locations"} className="navLink">
                LOCATIONS
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="navLink">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
