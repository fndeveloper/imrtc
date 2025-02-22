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

// NAVBAR AUTOMATICALY APPLY ALL THE PAGES START
document.addEventListener("DOMContentLoaded", function () {
    // NAVBAR START
    try {
           let navbarContainer = document.createElement("div");
           let footerContainer = document.createElement("div");

        navbarContainer.id = "navbar_container";
      
        
       
        document.body.prepend(navbarContainer);
           fetch("/header.html")
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => console.error("Navbar load failed:", error));
    } catch (error) {
        console.error("Error in navbar script:", error);
    }
    // NAVBAR END
    try {
      
        let footerContainer = document.createElement("div");
     footerContainer.id = "footer_container";

     document.body.append(footerContainer);

// FOOTER START
     fetch("/footer.html")
         .then(response => response.text())
         .then(data => {
            footerContainer.innerHTML = data;
         })
         .catch(error => console.error("Navbar load failed:", error));
 } catch (error) {
     console.error("Error in navbar script:", error);
 }
    // FOOTER END
});
// NAVBAR AUTOMATICALY APPLY ALL THE PAGES END


