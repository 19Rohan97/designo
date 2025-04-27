import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      setError(true);
    } else {
      setError(false);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      alert("Form submitted successfully!");
    }
  }

  return (
    <main>
      <section className="mb-[120px]">
        <div className="container bg-peach md:rounded-2xl px-6 py-[72px] md:px-[58px] lg:px-24 lg:py-[54px] bg-[url(/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)] md:bg-[url(/assets/contact/desktop/bg-pattern-hero-desktop.svg)] bg-no-repeat bg-top-left lg:bg-bottom-left flex flex-col lg:flow-row gap-12 md:gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center justify-center md:items-start text-center md:text-left gap-6 text-white w-full lg:max-w-[540px]">
            <h1>Contact Us</h1>
            <p className="lg:max-w-[445px]">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form className="w-full lg:max-w-[380px]" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error && name === "" && (
                <span className="error">
                  Can’t be empty
                  <img
                    src="/assets/contact/desktop/icon-error.svg"
                    alt="Error"
                  />
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && email === "" && (
                <span className="error">
                  Can’t be empty
                  <img
                    src="/assets/contact/desktop/icon-error.svg"
                    alt="Error"
                  />
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {error && phone === "" && (
                <span className="error">
                  Can’t be empty
                  <img
                    src="/assets/contact/desktop/icon-error.svg"
                    alt="Error"
                  />
                </span>
              )}
            </div>
            <div className="form-group">
              <textarea
                rows={4}
                className="form-control"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn-dark form-submit">
              Submit
            </button>
          </form>
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
              <Link to="/locations#canada" className="btn-light">
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
              <Link to="/locations#australia" className="btn-light">
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
              <Link to="/locations#united-kingdom" className="btn-light">
                SEE LOCATION
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
