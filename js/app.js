var navbar=document.getElementById("navbar")
console.log(navbar);


window.addEventListener("scroll",()=>{
  
    if(window.scrollY >100*8){
        navbar.classList.add("fixed-nav")
    }
    else{
        navbar.classList.remove("fixed-nav")
    }
  
    
})
