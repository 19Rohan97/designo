import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #united-kingdom)
    if (location.hash) {
      // Scroll to the element with the ID specified in the hash
      const element = document.getElementById(location.hash.slice(1)); // Remove the '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If there's no hash, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
