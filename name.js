const navBar=document.querySelector("nav"),
menuBtn=document.querySelectorAll(".menu-icon"),
overlay=document.querySelector(".overlay");
menuBtn.forEach(menuBtn =>{
    menuBtn.addEventListener("click",() =>{
      navBar.classList.toggle("open") ;
    });
});
overlay.addEventListener("click",()=>{
    navBar.classList.remove("open");

});