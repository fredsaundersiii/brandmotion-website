// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
document.querySelectorAll('#year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Contact form -> mailto (no backend needed for static hosting)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`New project inquiry from ${name || 'website visitor'}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      '',
      message,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:fred@brandmotionsf.com?subject=${subject}&body=${body}`;
  });
}
