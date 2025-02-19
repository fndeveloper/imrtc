// NAVBAR IS FIXED AFTER SCROLL IS GREATER THAN 800
var navbar=document.getElementById("navbar")
var top_to_scrol_btn=document.querySelectorAll(".top_to_scrol_btn")
window.addEventListener("scroll",()=>{
  top_to_scrol_btn.forEach((e)=>{
    var a=this.document.body.scrollHeight -this.window.innerHeight;
    var scrollProgress = (window.scrollY / a) * 99;


if(scrollProgress > 97){
    e.innerHTML=`  <i class="fa-solid fa-arrow-up"></i>`
}
else{
    e.innerHTML=scrollProgress.toFixed(0)
}
})
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

