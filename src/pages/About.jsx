import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="md:mb-[120px] lg:mb-[160px]">
        <div className="container bg-peach md:rounded-2xl overflow-hidden flex flex-col-reverse lg:flex-row">
          <div className="w-full flex flex-col justify-center text-center lg:text-left text-white px-6 py-[80px] md:px-[58px] md:py-16 bg-[url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)] md:bg-[url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)] bg-top-right md:bg-bottom-left lg:bg-bottom gap-8 lg:max-w-[635px] lg:py-[135px] lg:ps-24 lg:pe-[82px]">
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <div>
            <img
              src="/assets/about/mobile/image-about-hero.jpg"
              alt="About Us"
              className="block md:hidden  w-full"
            />
            <img
              src="/assets/about/tablet/image-about-hero.jpg"
              alt="About Us"
              className="hidden md:block lg:hidden"
            />
            <img
              src="/assets/about/desktop/image-about-hero.jpg"
              alt="About Us"
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>

      <section className="mb-[120px] lg:mb-[160px]">
        <div className="container md:rounded-2xl bg-[#FDF3F0] lg:flex overflow-hidden">
          <div>
            <img
              src="/assets/about/mobile/image-world-class-talent.jpg"
              alt="About Us"
              className="block md:hidden  w-full"
            />
            <img
              src="/assets/about/tablet/image-world-class-talent.jpg"
              alt="About Us"
              className="hidden md:block lg:hidden"
            />
            <img
              src="/assets/about/desktop/image-world-class-talent.jpg"
              alt="About Us"
              className="hidden lg:block"
            />
          </div>
          <div className="w-full lg:max-w-[635px] flex flex-col justify-center gap-6 text-center lg:text-left px-6 py-[80px] md:px-14 md:py-16 lg:px-24 bg-[url(assets/shared/desktop/bg-pattern-two-circles.svg)] bg-no-repeat bg-left md:bg-bottom-left">
            <h2 className="text-peach">World-class talent</h2>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>

      <section className="container mb-[120px] lg:mb-[160px] px-6 md:px-0">
        <div className="grid gap-y-12 lg:grid-cols-3 md:gap-y-[80px] lg:gap-x-[30px]">
          <div className="flex flex-col justify-center items-center">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="Passionate Circle"
                className="absolute top-0 left-0 rotate-90"
              />
              <img
                src="/assets/shared/desktop/illustration-canada.svg"
                alt="CANADA"
                className="relative"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-center mt-12 mb-8">CANADA</h3>
              <Link to="/locations" className="btn-light">
                SEE LOCATION
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="RESOURCEFUL Circle"
                className="absolute top-0 left-0"
              />
              <img
                src="/assets/shared/desktop/illustration-australia.svg"
                alt="AUSTRALIA"
                className="relative"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-center mt-12 mb-8">AUSTRALIA</h3>
              <Link to="/locations" className="btn-light">
                SEE LOCATION
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="img-container relative">
              <img
                src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                alt="UNITED KINGDOM Circle"
                className="absolute top-0 left-0 -rotate-90"
              />
              <img
                src="/assets/shared/desktop/illustration-united-kingdom.svg"
                alt="UNITED KINGDOM"
                className="relative"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-center mt-12 mb-8">UNITED KINGDOM</h3>
              <Link to="/locations" className="btn-light">
                SEE LOCATION
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[120px] lg:mb-[160px]">
        <div className="container md:rounded-2xl bg-[#FDF3F0] flex flex-col-reverse lg:flex-row overflow-hidden">
          <div className="w-full lg:max-w-[635px] flex flex-col justify-center text-center lg:text-left gap-6 px-6 py-[80px] md:px-14 md:py-16 lg:px-24 bg-[url(assets/shared/desktop/bg-pattern-two-circles.svg)] bg-no-repeat bg-bottom-left">
            <h2 className="text-peach">The real deal</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
          <div>
            <img
              src="/assets/about/mobile/image-real-deal.jpg"
              alt="About Us"
              className="block md:hidden  w-full"
            />
            <img
              src="/assets/about/tablet/image-real-deal.jpg"
              alt="About Us"
              className="hidden md:block lg:hidden"
            />
            <img
              src="/assets/about/desktop/image-real-deal.jpg"
              alt="About Us"
              className="hidden lg:block"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
