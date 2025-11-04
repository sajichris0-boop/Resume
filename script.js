let current = 0;
let slides = Array.from(document.querySelectorAll('.slide'));
function showSlide(idx) {
  slides.forEach((s, i) => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  slides[idx].classList.add('active');
  slides[idx].style.display = 'block';
  current = idx;
}
function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}
function prevSlide() {
  let prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}
showSlide(0);
// Magical nav button effects
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.animate([
        {boxShadow: '0 0 12px #EDBB19'},
        {boxShadow: '0 0 24px #EDBB19'},
        {boxShadow: '0 0 12px #EDBB19'}
      ], {
        duration: 850,
        iterations: 1
      });
    });
  });
});
