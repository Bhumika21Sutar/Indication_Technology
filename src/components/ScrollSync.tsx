import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sectionIds = [
  "home",
  "about-us",
  "how-it-works",
  "services",
  "blogs",
  "testimonials",
  "contact",
];

const ScrollSync = () => {
  const location = useLocation();

  // 🔹 Scroll to section when URL changes manually or on load
  useEffect(() => {
    const path = location.pathname;
    const id = path === "/" ? "home" : path.slice(1); // remove leading slash
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // 🔹 Update URL when user scrolls (without causing a route change)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const path = id === "home" ? "/" : `/${id}`;

            // ✅ Update URL manually, do NOT trigger Router
            if (window.location.pathname !== path) {
              window.history.replaceState(null, "", path);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollSync;
