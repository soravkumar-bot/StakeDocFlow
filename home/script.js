// CARD HOVER SMOOTH (extra polish)
document.querySelectorAll('.card').forEach(card=>{
  card.addEventListener('mousemove',(e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-(y - rect.height/2)/20}deg)
      rotateY(${(x - rect.width/2)/20}deg)
      scale(1.03)
    `;
  });

  card.addEventListener('mouseleave',()=>{
    card.style.transform = 'scale(1)';
  });
});


// SCROLL FADE-IN ANIMATION
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card, .content, .cta').forEach(el=>{
  el.classList.add('fade-in');
  observer.observe(el);
});


// SMOOTH SCROLL (future-ready)
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});