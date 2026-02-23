/**
 * Sunnyside Hero Particles
 * Creates floating gold particles in the hero background
 */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 25;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('hero-particle');
    particle.setAttribute('aria-hidden', 'true');

    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 14 + 8}s`;
    particle.style.animationDelay = `${Math.random() * 12}s`;

    container.appendChild(particle);
  }
}
