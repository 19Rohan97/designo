import { Link } from "react-router-dom";

function Locations() {
  return (
    <main>
      <section className="mb-[120px] lg:mb-[160px] flex flex-col gap-10 md:gap-[120px] lg:gap-8">
        <div
          id="canada"
          className="location container flex flex-col-reverse lg:gap-8 lg:flex-row md:gap-[30px]"
        >
          <div className="w-full max-w-[730px] md:rounded-2xl bg-[#FDF3F0] px-6 md:px-[74px] lg:px-[96px] py-[80px] md:py-[88px] bg-[url(/assets/shared/desktop/bg-pattern-two-circles.svg)] bg-no-repeat bg-bottom-left">
            <h2 className="mb-6 text-peach text-center md:text-left">Canada</h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-7">
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Designo Central Office</strong>
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </p>
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Contact</strong>
                <Link to="tel:+1 253-863-8967">P : +1 253-863-8967</Link>
                <Link to="mailto:contact@designo.co">
                  M : contact@designo.co
                </Link>
              </p>
            </div>
          </div>
          <div className="overflow-hidden md:rounded-2xl">
            <img
              src="/assets/locations/desktop/image-map-canada.png"
              alt="Canada"
              className="w-full h-full md:hidden lg:block"
            />
            <img
              src="/assets/locations/tablet/image-map-canada.png"
              alt="Canada"
              className="w-full h-full hidden md:block lg:hidden"
            />
          </div>
        </div>

        <div
          id="australia"
          className="location container flex flex-col-reverse nth-[2]:lg:flex-row-reverse lg:gap-8 lg:flex-row md:gap-[30px]"
        >
          <div className="w-full max-w-[730px] md:rounded-2xl bg-[#FDF3F0] px-6 md:px-[74px] lg:px-[96px] py-[80px] md:py-[88px] bg-[url(/assets/shared/desktop/bg-pattern-two-circles.svg)] bg-no-repeat bg-bottom-left">
            <h2 className="mb-6 text-peach text-center md:text-left">
              Australia
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-7">
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Designo AU Office</strong>
                <span>19 Balonne Street</span>
                <span>New South Wales 2443</span>
              </p>
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Contact</strong>
                <Link to="tel:(02) 6720 9092">P : (02) 6720 9092</Link>
                <Link to="mailto:contact@designo.au">
                  M : contact@designo.au
                </Link>
              </p>
            </div>
          </div>
          <div className="overflow-hidden md:rounded-2xl">
            <img
              src="/assets/locations/desktop/image-map-australia.png"
              alt="Australia"
              className="w-full h-full md:hidden lg:block"
            />
            <img
              src="/assets/locations/tablet/image-map-australia.png"
              alt="Australia"
              className="w-full h-full hidden md:block lg:hidden"
            />
          </div>
        </div>

        <div
          id="united-kingdom"
          className="location container flex flex-col-reverse lg:gap-8 lg:flex-row md:gap-[30px]"
        >
          <div className="w-full max-w-[730px] md:rounded-2xl bg-[#FDF3F0] px-6 md:px-[74px] lg:px-[96px] py-[80px] md:py-[88px] bg-[url(/assets/shared/desktop/bg-pattern-two-circles.svg)] bg-no-repeat bg-bottom-left">
            <h2 className="mb-6 text-peach text-center md:text-left">
              United Kingdom
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between gap-7">
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Designo UK Office</strong>
                <span>13 Colorado Way</span>
                <span>Rhyd-y-fro SA8 9GA</span>
              </p>
              <p className="flex flex-col gap-1 w-full text-center md:text-left md:max-w-1/2">
                <strong>Contact</strong>
                <Link to="tel:078 3115 1400">P : 078 3115 1400</Link>
                <Link to="mailto:contact@designo.uk">
                  M : contact@designo.uk
                </Link>
              </p>
            </div>
          </div>
          <div className="overflow-hidden md:rounded-2xl">
            <img
              src="/assets/locations/desktop/image-map-united-kingdom.png"
              alt="United Kingdom"
              className="w-full h-full md:hidden lg:block"
            />
            <img
              src="/assets/locations/tablet/image-map-united-kingdom.png"
              alt="United Kingdom"
              className="w-full h-full hidden md:block lg:hidden"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Locations;
