/**
 * Scroll ke section berdasarkan id tanpa mengubah URL (tidak ada # di route).
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Handler untuk elemen <a> / <button> agar scroll tanpa mengubah URL.
 */
export function handleScrollClick(
  e: React.MouseEvent,
  id: string
) {
  e.preventDefault();
  scrollToSection(id);
}
