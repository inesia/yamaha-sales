// Initialize Lucide Icons
lucide.createIcons();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Offset for navbar
            const headerOffset = 100;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    });
});

// Protect WhatsApp number from scrapers
const _0x1a = ['62', '878', '7311', '6901'];
const p = _0x1a.join('');

document.querySelectorAll('.wa-link').forEach(link => {
    // Generate URL dynamically
    const msg = link.getAttribute('data-msg');
    link.href = `https://wa.me/${p}?text=${encodeURIComponent(msg)}`;
    
    // Set visible text for human users
    const textElement = link.querySelector('.wa-text');
    if (textElement) {
        textElement.textContent = `WA: 0${p.substring(2)}`;
    }
});
