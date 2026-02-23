/**
 * Sunnyside Scroll Animations
 * Intersection Observer for fade-in effects
 */
function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}
