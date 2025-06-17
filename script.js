document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.animate').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    });
  });

  // FAQ toggle animation
  document.querySelectorAll('#faq details').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        gsap.fromTo(d, {height: 'auto'}, {duration: .3, height: 'auto'});
      }
    });
  });
});
