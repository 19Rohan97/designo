import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const location = useLocation();
  const lastSegment = location.pathname.split("/").pop();

  return (
    <footer>
      {lastSegment !== "contact" && (
        <section className="px-6 -mb-[190px] md:-mb-[80px] relative">
          <div className="container bg-peach px-6 py-16 rounded-2xl flex flex-col items-center justify-center bg-[url(/assets/shared/desktop/bg-pattern-call-to-action.svg)] bg-center bg-no-repeat bg-auto md:px-14 md:py-14 lg:px-[96px] lg:py-[72px] lg:flex-row lg:justify-between lg:bg-right">
            <div className="text-white text-center lg:text-left">
              <h2 className="w-full md:max-w-[335px] md:mx-auto lg:mx-0">
                Let’s talk about your project
              </h2>
              <p className="mt-1.5 mb-8 md:mt-2.5 w-full md:max-w-[450px] md:mx-auto lg:mb-0">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <Link to={"/contact"} className="btn-dark">
              Get in touch
            </Link>
          </div>
        </section>
      )}

      <section
        className={`bg-black px-6 ${
          lastSegment !== "contact"
            ? `pt-[253px] md:pt-[166px] lg:pt-[144px]`
            : `pt-16 md:pt-[80px] lg:pt-[72px]`
        } pb-16`}
      >
        <div className="container flex flex-col items-center justify-center md:flex-row md:justify-between">
          <Logo logo="dark" />

          <hr className="border-white opacity-10 my-8 w-full md:hidden" />

          <nav>
            <ul className="flex flex-col items-center gap-8 md:flex-row">
              <li>
                <Link to={"/about"} className="footerNavLink">
                  OUR COMPANY
                </Link>
              </li>
              <li>
                <Link to={"/locations"} className="footerNavLink">
                  LOCATIONS
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="footerNavLink">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <hr className="border-white opacity-10 mt-10 mb-8 w-full hidden md:block container" />

        <div className="container">
          <div className="flex flex-col gap-10 mt-10 text-center md:flex-row md:items-end">
            <p className="text-white opacity-50 text-base font-normal leading-[26px] w-full md:max-w-[223px] md:text-left">
              <strong>Designo Central Office</strong>
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </p>

            <p className="text-white opacity-50 text-base font-normal leading-[26px] w-full md:max-w-[223px] md:text-left">
              <strong>Contact Us (Central Office)</strong>
              <Link className="block" to="tel:+1 253-863-8967">
                P : +1 253-863-8967
              </Link>
              <Link className="text-white block" to="mailto:contact@designo.co">
                M : contact@designo.co
              </Link>
            </p>

            <div className="socials">
              <Link>
                <img
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt="Facebook"
                />
              </Link>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt="YouTube"
                />
              </Link>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt="Twitter"
                />
              </Link>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt="Pinterest"
                />
              </Link>
              <Link>
                <img
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
