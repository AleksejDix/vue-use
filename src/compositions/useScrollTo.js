export default function useScrollTo() {
  const scrollTo = event => {
    event.preventDefault();
    const selector = event.currentTarget.getAttribute("href");
    const el = document.querySelector(selector);
    event.currentTarget.classList.add("active");
    if (!el) return;
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return {
    scrollTo
  };
}
