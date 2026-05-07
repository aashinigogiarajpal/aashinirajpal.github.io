document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.querySelector(".menu-btn");
  const menu=document.querySelector(".mobile-menu");
  if(btn&&menu){btn.addEventListener("click",()=>menu.classList.toggle("open"));}
  // active link
  const path=location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(a=>{
    if(a.getAttribute("href")===path) a.classList.add("active");
  });
});
