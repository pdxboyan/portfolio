import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      // If we are not on Home, navigate there first
      if (location.pathname !== "/") {
        navigate("/" + location.hash, { replace: true });
        return;
      }

      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navigate]);

  return null;
}