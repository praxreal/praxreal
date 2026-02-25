function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.hidden').forEach(el=>{
  observer.observe(el);
});
