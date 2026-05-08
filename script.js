const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  navAnchors.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = ['inicio', 'servicios', 'productos', 'cerrajeria', 'ubicacion', 'contacto']
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { threshold: 0.45 });
sections.forEach((section) => observer.observe(section));

const copyAddressBtn = document.getElementById('copy-address');
copyAddressBtn?.addEventListener('click', async () => {
  const value = 'Calle 64 2864, 7630 Necochea, Buenos Aires';
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const fake = document.createElement('textarea');
    fake.value = value;
    document.body.appendChild(fake);
    fake.select();
    document.execCommand('copy');
    fake.remove();
  }
  copyAddressBtn.textContent = 'Dirección copiada';
});

const reasons = {
  'Consulta general': 'Hola San Manuel, quiero hacer una consulta.',
  Cerrajería: 'Hola San Manuel, necesito consultar por un trabajo de cerrajería.',
  'Stock de producto': 'Hola San Manuel, quería consultar stock de un producto.',
  'Promociones y pagos': 'Hola San Manuel, quería consultar medios de pago y promociones vigentes.'
};

document.getElementById('wa-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nombre = data.get('nombre')?.toString().trim() || 'Sin nombre';
  const motivo = data.get('motivo')?.toString() || 'Consulta general';
  const consulta = data.get('consulta')?.toString().trim() || 'Sin detalle';
  const base = reasons[motivo] || reasons['Consulta general'];

  const message = `${base}\nNombre: ${nombre}\nMotivo: ${motivo}\nConsulta: ${consulta}`;
  window.open(`https://wa.me/5492262656656?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
