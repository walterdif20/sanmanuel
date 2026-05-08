const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

const copyAddressBtn = document.getElementById('copy-address');
copyAddressBtn?.addEventListener('click', async () => {
  await navigator.clipboard.writeText('Calle 64 2864, 7630 Necochea, Buenos Aires');
  copyAddressBtn.textContent = 'Dirección copiada';
});

const waNumber = '5492262656656';
const reasons = {
  'Consulta general': 'Hola San Manuel, quiero hacer una consulta.',
  'Cerrajería': 'Hola San Manuel, necesito consultar por un trabajo de cerrajería.',
  'Stock de producto': 'Hola San Manuel, quería consultar stock de un producto.',
  'Promociones y pagos': 'Hola San Manuel, quería consultar medios de pago y promociones vigentes.'
};

document.getElementById('wa-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const nombre = data.get('nombre')?.toString().trim();
  const motivo = data.get('motivo')?.toString() || 'Consulta general';
  const consulta = data.get('consulta')?.toString().trim();
  const base = reasons[motivo] || reasons['Consulta general'];
  const msg = `${base}\nNombre: ${nombre}\nMotivo: ${motivo}\nConsulta: ${consulta}`;
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
