import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="bg-peach text-white container px-6 pt-20 md:pt-[60px] md:px-14 lg:px-24 lg:pt-[139px] md:rounded-2xl bg-[url(/assets/home/desktop/bg-pattern-hero-home.svg)] bg-left md:bg-right bg-no-repeat bg-auto lg:flex relative overflow-hidden">
        <div className="w-full max-w-[540px] mx-auto lg:mx-0 relative z-[1] text-center lg:text-left lg:pb-[139px]">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p className="mt-3.5 mb-6 lg:mt-9 lg:mb-10">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link to={"/about"} className="btn-dark">
            Learn More
          </Link>
        </div>

        <img
          src="/assets/home/mobile/phone.svg"
          alt="Frame"
          className="w-full max-w-[284px] block mx-auto mt-20 md:hidden"
        />
        <img
          src="/assets/home/tablet/phone.svg"
          alt="Frame"
          className="w-full max-w-[284px] mx-auto mt-20 hidden md:block lg:hidden"
        />
        <img
          src="/assets/home/desktop/phone.svg"
          alt="Frame"
          className="w-full hidden lg:block max-w-[284px] ms-auto"
        />
      </section>

      <section className="container my-[120px] lg:my-[160px] px-6 md:px-0">
        <div className="grid services gap-y-6 gap-x-[30px] lg:grid-cols-2">
          <Link
            to="services/web-design"
            className="service bg-[url(/assets/home/mobile/image-web-design.jpg)] md:bg-[url(/assets/home/tablet/image-web-design.jpg)]  lg:bg-[url(/assets/home/desktop/image-web-design-large.jpg)] lg:row-span-2"
          >
            <h2 className="text-white relative text-center uppercase">
              Web Design
            </h2>
            <span className="viewBtn text-white relative">
              <span>View Projects</span>
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt="View More"
              />
            </span>
          </Link>

          <Link
            to="services/app-design"
            className="service bg-[url(/assets/home/mobile/image-app-design.jpg)] md:bg-[url(/assets/home/tablet/image-app-design.jpg)] lg:bg-[url(/assets/home/desktop/image-app-design.jpg)]"
          >
            <h2 className="text-white relative text-center uppercase">
              APP DESIGN
            </h2>
            <span className="viewBtn text-white relative">
              <span>View Projects</span>
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt="View More"
              />
            </span>
          </Link>

          <Link
            to="services/graphic-design"
            className="service bg-[url(/assets/home/mobile/image-graphic-design.jpg)] md:bg-[url(/assets/home/tablet/image-graphic-design.jpg)] lg:bg-[url(/assets/home/desktop/image-graphic-design.jpg)]"
          >
            <h2 className="text-white relative text-center uppercase">
              GRAPHIC DESIGN
            </h2>
            <span className="viewBtn text-white relative">
              <span>View Projects</span>
              <img
                src="/assets/shared/desktop/icon-right-arrow.svg"
                alt="View More"
              />
            </span>
          </Link>
        </div>
      </section>

      <section className="container my-[120px] md:my-[67px] lg:my-[160px] px-6 md:px-0">
        <div className="grid gap-y-20 md:gap-y-8 lg:grid-cols-3 lg:gap-x-[30px]">
          <div className="card">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="Passionate Circle"
                className="absolute top-0 left-0"
              />
              <img
                src="/assets/home/desktop/illustration-passionate.svg"
                alt="Passionate"
                className="relative"
              />
            </div>
            <div>
              <h3>PASSIONATE</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="RESOURCEFUL Circle"
                className="absolute top-0 left-0 -rotate-90"
              />
              <img
                src="/assets/home/desktop/illustration-resourceful.svg"
                alt="RESOURCEFUL"
                className="relative"
              />
            </div>
            <div>
              <h3>RESOURCEFUL</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="FRIENDLY Circle"
                className="absolute top-0 left-0 rotate-90"
              />
              <img
                src="/assets/home/desktop/illustration-friendly.svg"
                alt="FRIENDLY"
                className="relative"
              />
            </div>
            <div>
              <h3>FRIENDLY</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
