import { Link } from "react-router-dom";

function Logo({ logo }) {
  return (
    <Link to={"/"}>
      <img src={`/assets/logo-${logo}.svg`} alt="Designo" />
    </Link>
  );
}

export default Logo;
