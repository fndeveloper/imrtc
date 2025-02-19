// NAVBAR IS FIXED AFTER SCROLL IS GREATER THAN 800
var navbar=document.getElementById("navbar")

window.addEventListener("scroll",()=>{
  
    if(window.scrollY >100*8){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
  })
// NAVBAR IS FIXED AFTER SCROLL IS GREATER THAN 800

// FOOTER COPY RIGHT YEAR CODE IS HERE
var year=document.querySelectorAll(".year")
year.forEach((E)=>{
    E.innerHTML=new Date().getFullYear()
})

// FOOTER COPY RIGHT YEAR CODE IS HERE

