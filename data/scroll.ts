/**
 * Easing function — easeInOutQuart
 * Mulai lambat, akselerasi di tengah, melambat lagi di akhir.
 */
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

/**
 * Custom smooth scroll ke element berdasarkan id.
 * Menggunakan requestAnimationFrame untuk animasi yang smooth & konsisten.
 * @param id      - id element target (tanpa #)
 * @param duration - durasi animasi dalam ms (default 750ms)
 * @param offset   - jarak offset dari atas (untuk fixed navbar, default 80px)
 */
export function scrollToSection(id: string, duration = 750, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY;
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetY - start;
  let startTime: number | null = null;

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

/**
 * Handler untuk elemen <a> / <button> agar scroll tanpa mengubah URL.
 */
export function handleScrollClick(e: React.MouseEvent, id: string) {
  e.preventDefault();
  scrollToSection(id);
}
