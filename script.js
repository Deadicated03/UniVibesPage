// Scroll-reveal με IntersectionObserver (πιο “επιθετικό” threshold)
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

  targets.forEach(el => io.observe(el));

  // --- ΝΕΟΣ ΚΩΔΙΚΑΣ ΓΙΑ ΤΟ FOOTER ---
  // Λειτουργία για τη φόρτωση του footer
  const loadFooter = async () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return; // Αν δεν υπάρχει placeholder, σταμάτα

    try {
      const response = await fetch('footer.html'); // Φέρνει το περιεχόμενο του footer.html
      const footerHTML = await response.text();     // Το μετατρέπει σε κείμενο (HTML)
      footerPlaceholder.innerHTML = footerHTML;     // Το εισάγει στο placeholder
    } catch (error) {
      console.error('Failed to load footer:', error);
      footerPlaceholder.innerHTML = '<p style="text-align:center; color: #888;">Could not load footer content.</p>';
    }
  };

  // Κάλεσε τη λειτουργία για να φορτώσει το footer
  loadFooter();
  // --- ΤΕΛΟΣ ΝΕΟΥ ΚΩΔΙΚΑ ---
});