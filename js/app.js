document.addEventListener("DOMContentLoaded", function () {
  // Check for navbar until it exists
  let navbarInterval = setInterval(() => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
          clearInterval(navbarInterval); // Stop checking once navbar is found

          const btnOffcanvas = document.querySelector(".btn_offcanvas");
          const top_to_scrol_btn = document.querySelectorAll(".top_to_scrol_btn");

          // Function to handle scroll effects
          function handleScroll() {
              // --- Scroll Progress Button ---
              top_to_scrol_btn.forEach((e) => {
                  const maxScroll = document.body.scrollHeight - window.innerHeight;
                  const scrollProgress = (window.scrollY / maxScroll) * 99;

                  if (scrollProgress > 97) {
                      e.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
                  } else {
                      e.innerHTML = scrollProgress.toFixed(0);
                  }
              });

              // --- Fixed Navbar and Offcanvas Button Opacity ---
              if (window.scrollY > 300) {
                  btnOffcanvas.classList.add("opacity-1");
                  btnOffcanvas.classList.remove("opacity-0");
                  navbar.classList.add("fixed-nav");
              } else {
                  btnOffcanvas.classList.remove("opacity-1");
                  btnOffcanvas.classList.add("opacity-0");
                  navbar.classList.remove("fixed-nav");
              }
          }

          // Scroll event
          window.addEventListener("scroll", handleScroll);

          // Also check scroll position on page load
          handleScroll();
      }
  }, 100); // Check every 100ms until navbar is found
});


// FOOTER COPY RIGHT YEAR CODE IS HERE
var year=document.querySelectorAll(".year")
year.forEach((E)=>{
    E.innerHTML=new Date().getFullYear()
})





// ================================ DIAL COUNTRY CODE START ================================
const input = document.querySelector("#phone");
if(input){
window.intlTelInput(input, {
  initialCountry: "us",
  loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855") // for formatting/placeholders etc
});
}
// ================================ DIAL COUNTRY CODE END ================================
var tab=document.querySelector("#myTable")
if(tab) {
$(document).ready(function () {

  
  // Initialize DataTable
  var table = $('#myTable').DataTable({
    "paging": false,      // Enable pagination
    "pageLength": 5,     // Show 5 rows per page
    "searching": true,   // Enable search
    // "info": true,        // Show table info
    "lengthMenu": [1,3,6], // Entries dropdown values
    "dom": 'lrtip', // Removes the "Show entries" dropdown 
    "info": false,        // ❌ Hide "Showing X to Y of Z entries"
 "dom": 'frtp' 
  });

  $('#searchBox').on('keyup', function () {
    table.search(this.value).draw();
});
});
}

// BLOG SEARCH HERE
var search_blog=document.getElementById("search_blog")
if(search_blog)
search_blog.addEventListener("input", () => {
  let searchValue = document.getElementById("search_blog").value.toLowerCase();
  var cards = document.querySelectorAll(".card_of_blog");
  if(cards){

  cards.forEach(card => {
      let title = card.querySelector(".card_title_blog").innerText.toLowerCase();
      if (title.includes(searchValue)) {
          card.style.display = "block";
      } else {
          card.style.display = "none";
          cards.innerHTML="Blog Not Found"
      }
  });
}
});

// training_event_card_header START
var abc=document.getElementById("search_training_event_card");
if(abc)
abc.addEventListener("input",()=>{
  var training_event_card_header=document.querySelectorAll(".training_event_cards")
  var search_training_event_card=document.getElementById("search_training_event_card").value.toLowerCase()

  

  training_event_card_header.forEach(edf=>{
// console.log(edf);

    var title=edf.querySelector(".training_event_card_header").textContent.toLowerCase()
    // var title = edf.querySelector(".training_event_card_header").textContent.toLowerCase().trim();
        
   
    if(title.includes(search_training_event_card)){
     edf.style.display = "block";
  
    }
    else{
  // console.log("e");
  edf.style.display = "none";
    }
  })
})
// training_event_card_header END
document.querySelectorAll('.knowledge_area_dropdown  .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        console.log(e);
        
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      const targetOffset = target.offsetTop;
      const targetHeight = target.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll position to center the element in the viewport
      const scrollPosition = targetOffset - (viewportHeight / 2) + (targetHeight / 2);
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    });
  });
  