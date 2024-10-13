gsap.from(".stag",{
  opacity:0,
  y:40,
  delay:1,
  duration:0.3,
  stagger:0.3
})
const classImg = document.querySelector('.class-img');
const circle2 = document.querySelector('.circle2');

classImg.addEventListener('mouseover', () => {
  circle2.style.backgroundColor = 'var(--theme-color)';
  circle2.style.color = 'var(--theme-black)';
});

classImg.addEventListener('mouseleave', () => {
  circle2.style.backgroundColor = 'var(--theme-black)';
  circle2.style.color = 'var(--theme-color)';

});

