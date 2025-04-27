import { Link, useParams } from "react-router-dom";
import serviceData from "../../data/data.json";

function Service() {
  const { service } = useParams();

  const currentService = serviceData.find(
    (sv) => sv.id.toLowerCase() === service
  );

  // If the service doesn't exist, show a 404 or error message
  if (!currentService) {
    return (
      <section className="px-6 mb-24 md:mb-[110px] lg:mb-[160px] md:px-0">
        <div className="container grid gap-x-[30px] gap-y-8 lg:grid-cols-3">
          <h2 className="text-peach">Service not found</h2>
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="mb-24 md:mb-[120px] lg:mb-[160px]">
        <div
          className={`container bg-peach text-white text-center flex flex-col gap-6 md:rounded-2xl py-[105px] px-6 md:py-16 lg:px-[190px] bg-[url(/assets/web-design/desktop/bg-pattern-intro-web-design.svg)] bg-no-repeat  bg-top-right md:bg-center lg:bg-right`}
        >
          <h1>{currentService.name}</h1>
          <p className="max-w-[400px] mx-auto">{currentService.description}</p>
        </div>
      </section>

      <section className="px-6 mb-24 md:mb-[110px] lg:mb-[160px] md:px-0">
        <div className="container grid gap-x-[30px] gap-y-8 lg:grid-cols-3">
          {currentService.projects.map((project) => (
            <div className="project" key={project.title}>
              <div className="imgContainer">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="infoContainer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-[120px] lg:my-[160px] px-6 md:px-0">
        <div className="grid services gap-y-6 gap-x-[30px] lg:grid-cols-2">
          {serviceData.map(
            (srvce) =>
              srvce.id !== service && (
                <Link
                  key={srvce.name}
                  to={`/services/${srvce.id.toLowerCase()}`}
                  className={`service ${
                    srvce.id === "web-design" &&
                    "bg-[url(/assets/home/mobile/image-web-design.jpg)] md:bg-[url(/assets/home/tablet/image-web-design.jpg)] lg:bg-[url(/assets/home/desktop/image-web-design-large.jpg)"
                  } ${
                    srvce.id === "app-design" &&
                    "bg-[url(/assets/home/mobile/image-app-design.jpg)] md:bg-[url(/assets/home/tablet/image-app-design.jpg)] lg:bg-[url(/assets/home/desktop/image-app-design-large.jpg)"
                  } ${
                    srvce.id === "graphic-design" &&
                    "bg-[url(/assets/home/mobile/image-graphic-design.jpg)] md:bg-[url(/assets/home/tablet/image-graphic-design.jpg)] lg:bg-[url(/assets/home/desktop/image-graphic-design-large.jpg)"
                  }]`}
                >
                  <h2 className="text-white relative text-center uppercase">
                    {srvce.name}
                  </h2>
                  <span className="viewBtn text-white relative">
                    <span>View Projects</span>
                    <img
                      src="/assets/shared/desktop/icon-right-arrow.svg"
                      alt="View More"
                    />
                  </span>
                </Link>
              )
          )}
        </div>
      </section>
    </main>
  );
}

export default Service;
