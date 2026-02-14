// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== FORM HANDLER =====
function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const btn = document.getElementById('submitBtn');
    const note = document.getElementById('formNote');

    btn.textContent = '¡Enviado!';
    btn.style.background = '#2BB875';
    note.textContent = '✓ Te contactaremos pronto a ' + email;
    note.style.color = 'var(--accent)';

    // mailto fallback
    window.location.href = 'mailto:hola@camposync.com.mx?subject=Demo CampoSync&body=Hola, me interesa una demo de CampoSync. Mi correo: ' + encodeURIComponent(email);

    setTimeout(() => {
        btn.textContent = 'Solicitar Demo';
        btn.style.background = '';
    }, 4000);
}

// ===== NAV SCROLL =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 15, 13, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 15, 13, 0.8)';
    }
    lastScroll = currentScroll;
});
