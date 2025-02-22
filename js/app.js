// NAVBAR IS FIXED AFTER SCROLL IS GREATER THAN 800
document.addEventListener("DOMContentLoaded", function () {
    // Wait until the navbar is loaded
    let navbarInterval = setInterval(() => {
        let navbar = document.getElementById("navbar");
        if (navbar) {
            clearInterval(navbarInterval); // Stop checking once navbar is found

            var top_to_scrol_btn = document.querySelectorAll(".top_to_scrol_btn");

            window.addEventListener("scroll", () => {
                top_to_scrol_btn.forEach((e) => {
                    var a = document.body.scrollHeight - window.innerHeight;
                    var scrollProgress = (window.scrollY / a) * 99;

                    if (scrollProgress > 97) {
                        e.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
                    } else {
                        e.innerHTML = scrollProgress.toFixed(0);
                    }
                });

                if (window.scrollY > 800) {
                    navbar.classList.add("fixed-nav");
                } else {
                    navbar.classList.remove("fixed-nav");
                }
            });
        }
    }, 100); // Check every 100ms
});

// NAVBAR IS FIXED AFTER SCROLL IS GREATER THAN 800

// FOOTER COPY RIGHT YEAR CODE IS HERE
var year=document.querySelectorAll(".year")
year.forEach((E)=>{
    E.innerHTML=new Date().getFullYear()
})



// ============================== SAME CONTENT CODE WHICH IS REMAIN SAME ALL THE PAGES START ==============================
document.addEventListener("DOMContentLoaded", function () {
    try {
        let navbarContainer = document.createElement("div");
        navbarContainer.id = "navbar_container";
        document.body.prepend(navbarContainer);

        let footerContainer = document.createElement("div");
        footerContainer.id = "footer_container";
        document.body.append(footerContainer);

        if (window.location.protocol.startsWith("http")) {
            fetch("/header.html")
                .then(response => response.text())
                .then(data => {
                    navbarContainer.innerHTML = data;
                })
                .catch(error => console.error("Navbar load failed:", error));

            fetch("/footer.html")
                .then(response => response.text())
                .then(data => {
                    footerContainer.innerHTML = data;
                })
                .catch(error => console.error("Footer load failed:", error));
        } else {
            navbarContainer.innerHTML = `
                <!-- ================= HEADER START =================== -->
  <header class="header m-0 p-0  d-flex flex-column">
    <!-- ============= TOP BAR START =================== -->
    <div class="container-fluid bg m-0 px-4 py-3 d-flex flex-lg-row flex-column">
      <a href="index.html"
        class="logo text-decoration-none d-flex flex-lg-row flex-column align-items-center me-auto col-lg-6 col-12">
        <img src="assets/img/logo/logo.jpg" class="img-fluid " alt>
        <h5 class=" fs-5  text-white fw-light text_of_imrtc ps-lg-2">International
          Management Research <br>And Technology Consortium - USA
        </h5>
      </a>

      <div class="col-4 d-flex flex-row align-items-center justify-content-end  ">

        <ul class="list-unstyled d-flex text-white align-items-center justify-content-between col-4">
          <li class="bg-white p-2 col-org rounded-1 rounded-1">
            <a target="_blank" rel="noopener" href="#" class="col-org"><i class="fab fa-facebook fa-1x"
                aria-hidden="true"></i></a>
          </li>
          <li class="bg-white p-2 col-org rounded-1"><a target="_blank" rel="noopener" href="#" class="col-org"><i
                class="fab fa-x-twitter" aria-hidden="true"></i></a></li>
          <li class="bg-white p-2 col-org rounded-1"><a target="_blank" rel="noopener" href="#" class="col-org"><i
                class="fab fa-instagram" aria-hidden="true"></i></a></li>
          <li class="bg-white p-2 col-org rounded-1"><a target="_blank" rel="noopener" href="#" class="col-org"><i
                class="fab fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>

      </div>
    </div>
    <!-- ====================== TOP BAR END    ======================-->
    <!-- ====================== NAVBAR START  ======================-->
    <div class="container-fluid   d-flex flex-lg-row flex-column align-items-center top_2 " id="navbar">

      <nav class="navbar navbar-expand-lg  bg-body-tertiary  py-3">
        <div class="container-fluid  position-relative">

          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav  mx-auto d-flex justify-content-between">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <!-- ======================       Certifications nav-link start  ======================-->

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Certifications
                </a>
                <ul class="dropdown-menu dropdown-large  px-3 py-4   ">
                  <h4 class="px-1 py-3 fw-bold ">Professional Certification</h4>
                  <div class="container-fluid d-flex flex-row justify-content-around m-0 p-0">
                    <!-- ====================== ==================== Cybron Scout Certifications ====================  ======================-->
                    <div class="col-lg-3  col-md-6 m-0 border_right me-2">
                      <h6 class=" text-start ps-lg-1  border_under">Cybron & Technology Certification</h6>

                      <a class="dropdown-item" href="/cybron-scout-grade-6-certification">Cybron Scout
                        Grade 6 <br>Certification</a>
                      <a class="dropdown-item" href="/cybron-scout-grade-7-certification">Cybron Scout
                        Grade 7 <br> Certification</a>
                      <a class="dropdown-item" href="/cybron-scout-grade-8-certification">Cybron Scout
                        Grade 8 <br> Certification</a>
                      <a class="dropdown-item" href="/cybron-scout-grade-9-certification">Cybron Scout
                        Grade 9 <br> Certification</a>
                      <a class="dropdown-item" href="/cybron-scout-grade-10-certification">Cybron Scout
                        Grade 10 <br> Certification</a>
                      <a class="dropdown-item" href="/cybron-scout-grade-11-12-certification">Cybron
                        Diploma</a>


                    </div>
                    <!-- ====================== ==================== Cybron Associate Certifications ====================  ======================-->
                    <div class="col-lg-3 col-md-6 border_right me-2">
                      <h6 class=" text-start ps-lg-1   ">Management Certification</h5>
                        <a class="dropdown-item"
                          href="chrmp-certified-human-resource-management-professional.html">Certified Human Resource
                          Management <br> Professional</a>
                        <a class="dropdown-item"
                          href="camp-certified-administrative-management-professional.html">Certified Administrative
                          Management <br> Professional</a>
                        <a class="dropdown-item" href="ctmp-certified-technology-management-professional.html">Certified
                          Technology Management <br> Professional</a>
                        <a class="dropdown-item"
                          href="cahrm-certified-associate-in-human-resource-management.html">Certified Associate in
                          Human Resource <br> Management</a>

                    </div>
                    <!-- ====================== ==================== Cybron Security Professional ====================  ======================-->
                    <div class="col-lg-3 col-md-6 border_right me-2">
                      <h6 class=" text-start ps-lg-1   ">Lean Base Certification</h5>


                        <a class="dropdown-item" href="certified-lean-six-sigma-black-belt-clssbb.html">Certified lean
                          Six Sigma black <br>Belt</a>
                        <a class="dropdown-item" href="certified-lean-six-sigma-green-belt-clssgb.html">Certified lean
                          Six Sigma Green <br>Belt</a>
                        <a class="dropdown-item" href="certified-lean-six-sigma-yellow-belt-clssyb.html">Certified lean
                          Six Sigma Yellow<br>Belt
                          Belt</a>



                    </div>
                    <!-- ====================== ==================== Cybron Network ====================  ======================-->

                    <div class="col-lg-3 col-md-6">

                      <h6 class=" text-start ps-lg-1   ">Internal Audit</h5>

                        <a class="dropdown-item" href="diploma-in-internal-audit.html">Profesional Diploma In Internal
                          <br> Audit</a>


                    </div>
                  </div>
                </ul>


              </li>

              <!-- ======================       Certifications nav-link end  ======================-->

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Service
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="services.html">Major
                      Services</a></li>
                  <li><a class="dropdown-item" href="wwra.html">Worldwide Research
                      Activities</a></li>
                  <li><a class="dropdown-item" href="TrainingDevelopment.html">Management
                      & Technology Training &
                      <br>Certifications </a></li>
                  <li><a class="dropdown-item" href="Research-Paper-Review.html">Research
                      Paper Review, Evaluation &
                      Appraisals</a></li>
                  <li><a class="dropdown-item" href="Certifications.html">Curriculum
                      Endorsements & Certifications</a></li>
                  <li><a class="dropdown-item" href="Membership.html">Memberships
                    </a></li>
                  <li><a class="dropdown-item" href="Publication.html">Publications
                      Journal & Magazines </a></li>

                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Chapters
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Chapters-Partnerships.html">Authorized
                      Chapters</a></li>
                  <li><a class="dropdown-item" href="ApplyForChapters.html">Apply For
                      Chapters</a></li>
                  <li><a class="dropdown-item" href="ChaptersPorta.html">Chapters
                      Portal</a></li>
                  <li><a class="dropdown-item" href="ChapterPresidentProfile.html">Chapters
                      President Profile</a></li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Memberships
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="Membership.html">IMRTC
                      Memberships</a></li>
                  <li><a class="dropdown-item" href="Memberslogin.html">Memberships
                      Login</a></li>
                  <li><a class="dropdown-item" href="IndApp_Association.html">Association
                      Memberships [Free]</a></li>
                  <li><a class="dropdown-item" href="IndApp_RTStudent.html">Student
                      Memberships [Free]</a></li>
                  <li><a class="dropdown-item" href="IndApp_RTProf.html">Researchers /
                      Advisor <br> / Referee Memberships
                      Memberships
                      [Free]</a></li>
                  <li><a class="dropdown-item" href="IndApp_RTIndustryPartner.html">Industry
                      Partner <br> Memberships [Free]</a></li>
                  <li><a class="dropdown-item" href="IndApp_Professional_Trainer..html">Professional
                      Trainer <br> Memberships [Free]</a></li>
                  <li><a class="dropdown-item" href="IndApp_ProfessionalMemberships.html">Professional
                      Member [Free]</a></li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Partners
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="PartnerUnderChapters.html">Partners
                      From Chapters</a></li>
                  <li><a class="dropdown-item" href="Partner-Subscription.html">Apply
                      For Partnerships</a></li>
                  <li><a class="dropdown-item" href="PartnerPortal.html">Partner Portal
                    </a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Members List
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="ARRPTL.html">Advisors,
                      Researchers,<br> Referees, Professors,
                      Trainers</a>
                  </li>
                  <li><a class="dropdown-item" href="Member_Ass_TM.html">Members -
                      Technology <br> Management</a></li>
                  <li><a class="dropdown-item" href="Member_Ass_AM.html">Members -
                      Administrative <br> Management</a></li>
                  <li><a class="dropdown-item" href="Member_PT.html">Members -
                      Professional <br> Trainer</a></li>
                  <li><a class="dropdown-item" href="Member_IP.html">Members - Gloabal
                      Industry <br> Partners</a></li>
                  <li><a class="dropdown-item" href="Member_Students.html">Members -
                      Student</a></li>

                </ul>
              </li>
              <li class="nav-item ">
                <a class="nav-link " aria-current="page" href="about.html">About</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " aria-current="page" href="contact.html">Contact</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <div class=" input-group bg-transparent d-lg-flex d-none justify-content-end flex-row">
        <input type="text" class="col-5  selc bg-transparent" aria-label="Search" placeholder="Search">
        <i class="input-group-text bg-transparent border-0 text-white">
          <i class="fa fa-search dr" aria-hidden="true"></i>
        </i>
      </div>
      <button class="btn_offcanvas d-lg-none d-lg-flex navbar-toggler " type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

    </div>
    <!-- ======================  NAVBAR END  ======================-->

    <!-- ======================  MOBILE NAVBAR START    ======================-->
    <div class="offcanvas  offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">
          <img src="assets/img/logo/logo-new.png" class="img-fluid" alt>
        </h5>
        <button type="button" class="btn-close text-reset float-end" data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="mt-5">
          <ul
            class="navbar-nav  mx-auto d-flex flex-lg-row flex-column  justify-content-between  justify-content-lg-between">
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Certifications
              </a>
              <ul class="dropdown-menu">

                <li><a class="dropdown-item" href="certification-offered.html">Value
                    Certifications</a></li>

                <li><a class="dropdown-item" href="camp-certified-administrative-management-professional.html">Certified
                    Administrative Management <br>
                    Professional (CAMP)</a>
                <li><a class="dropdown-item" href="ctmp-certified-technology-management-professional.html">Certified
                    Technology Management<br> Professional
                    (CTMP)</a>
                <li><a class="dropdown-item"
                    href="cahrm-certified-associate-in-human-resource-management.html">Certified
                    Associate in Human Resource<br>
                    Management (CAHRM)</a>
                <li><a class="dropdown-item"
                    href="chrmp-certified-human-resource-management-professional.html">Certified
                    Human Resource Management
                    <br>Professional (CHRMP)</a>
                <li><a class="dropdown-item" href="certified-lean-six-sigma-black-belt-clssbb.html">Certified
                    Lean Six Sigma Black Belt</a>
                <li><a class="dropdown-item" href="certified-lean-six-sigma-green-belt-clssgb.html">Certified
                    Lean Six Sigma Green Belt</a>
                <li><a class="dropdown-item" href="certified-lean-six-sigma-yellow-belt-clssyb.html">Certified
                    Lean Six Sigma Yellow Belt</a>
                <li><a class="dropdown-item" href="diploma-in-internal-audit.html">Profesional
                    Diploma in Internal
                    Audit</a>

                <li><a class="dropdown-item" href="imrtc-certifications.html">CO-Branded
                    Certifications</a></li>

              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Service
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="services.html">Major
                    Services</a></li>
                <li><a class="dropdown-item" href="wwra.html">Worldwide
                    Research
                    Activities</a></li>
                <li><a class="dropdown-item" href="TrainingDevelopment.html">Management
                    & Technology Training &
                    <br>Certifications
                  </a></li>
                <li><a class="dropdown-item" href="Research-Paper-Review.html">Research
                    Paper Review, Evaluation &
                    Appraisals</a></li>
                <li><a class="dropdown-item" href="Certifications.html">Curriculum
                    Endorsements &
                    Certifications</a></li>
                <li><a class="dropdown-item" href="Membership.html">Memberships
                  </a></li>
                <li><a class="dropdown-item" href="Publication.html">Publications
                    Journal & Magazines
                  </a></li>

              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Chapters
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="Chapters-Partnerships.html">Authorized
                    Chapters</a></li>
                <li><a class="dropdown-item" href="ApplyForChapters.html">Apply
                    For Chapters</a></li>
                <li><a class="dropdown-item" href="ChaptersPorta.html">Chapters
                    Portal</a></li>
                <li><a class="dropdown-item" href="ChapterPresidentProfile.html">Chapters
                    President Profile</a></li>

              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Memberships
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="Membership.html">IMRTC
                    Memberships</a></li>
                <li><a class="dropdown-item" href="Memberslogin.html">Memberships
                    Login</a></li>
                <li><a class="dropdown-item" href="IndApp_Association.html">Association
                    Memberships
                    [Free]</a></li>
                <li><a class="dropdown-item" href="IndApp_RTStudent.html">Student
                    Memberships
                    [Free]</a></li>
                <li><a class="dropdown-item" href="IndApp_RTProf.html">Researchers
                    / Advisor <br> / Referee
                    Memberships Memberships
                    [Free]</a></li>
                <li><a class="dropdown-item" href="IndApp_RTIndustryPartner.html">Industry
                    Partner <br> Memberships
                    [Free]</a></li>
                <li><a class="dropdown-item" href="IndApp_Professional_Trainer..html">Professional
                    Trainer <br> Memberships
                    [Free]</a></li>
                <li><a class="dropdown-item" href="IndApp_ProfessionalMemberships.html">Professional
                    Member [Free]</a></li>

              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Partners
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="PartnerUnderChapters.html">Partners
                    From Chapters</a></li>
                <li><a class="dropdown-item" href="Partner-Subscription.html">Apply
                    For Partnerships</a></li>
                <li><a class="dropdown-item" href="PartnerPortal.html">Partner
                    Portal </a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href=".html" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Members List
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="ARRPTL.html">Advisors,
                    Researchers,<br> Referees,
                    Professors, Trainers</a>
                </li>
                <li><a class="dropdown-item" href="Member_Ass_TM.html">Members
                    - Technology <br>
                    Management</a></li>
                <li><a class="dropdown-item" href="Member_Ass_AM.html">Members
                    - Administrative <br>
                    Management</a></li>
                <li><a class="dropdown-item" href="Member_PT.html">Members
                    - Professional <br>
                    Trainer</a></li>
                <li><a class="dropdown-item" href="Member_IP.html">Members
                    - Gloabal Industry <br>
                    Partners</a></li>
                <li><a class="dropdown-item" href="Member_Students.html">Members
                    - Student</a></li>

              </ul>
            </li>
            <li class="nav-item ">
              <a class="nav-link " aria-current="page" href="about.html">About</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " aria-current="page" href="contact.html">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
    <!-- ======================  MOBILE NAVBAR END    ======================-->

    <!-- =======================TOP TO SCROLL BUTTON START  ======================-->
    <a href="#" class="top_to_scrol_btn">
      <i class="fa-solid fa-arrow-down"></i>

    </a>
    <!-- ===================== TOP TO SCROLL BUTTON END = ======================-->

  </header>
  <!-- ======================  HEADER END  ======================-->

            `;

            footerContainer.innerHTML = `
              <!-- ====================== ==================== FOOTER START ====================  ======================-->
 
  <footer class="py-5 text-white">
    <div class="container-fluid">
      <div class="row px-3">
        <!-- ====================== ==================== Get In Touch ====================  ======================-->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">GET IN TOUCH!</h5>
          <p class>Have questions or need
            assistance? Our team is here to
            help! </p>
          <p><strong>(+1) (689)
              276-4636</strong></p>
          <p>consortium@imrtc.org</p>
          <!-- ====================== Social Icons  ======================-->

        </div>

        <!-- ====================== ==================== Company Info ====================  ======================-->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">COMPANY INFO</h5>
          <ul class="list-unstyled">
            <li><a class="text-white text-decoration-none" href="about.html">About
                Us</a></li>
            <li><a class="text-white text-decoration-none" href="PartnerPortal.html">Partner
                Portal</a></li>
            <li><a class="text-white text-decoration-none" href="ARRPTL.html">Advisor</a></li>
            <li><a class="text-white text-decoration-none" href="Membership.html">Membership</a></li>

          </ul>
        </div>

        <!-- ====================== ==================== Useful Links ====================  ======================-->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">USEFUL LINKS</h5>
          <ul class="list-unstyled">
            <li><a class="text-white text-decoration-none"
                href="cahrm-certified-associate-in-human-resource-management.html">CAHRM</a></li>
            <li><a class="text-white text-decoration-none"
                href="ctmp-certified-technology-management-professional.html">CTMP</a></li>
            <li><a class="text-white text-decoration-none"
                href="chrmp-certified-human-resource-management-professional.html">CHRMP</a></li>
            <li><a class="text-white text-decoration-none" href="Certifications.html">Certification</a></li>

          </ul>
        </div>

        <!-- ====================== ==================== Newsletter Subscription ====================  ======================-->
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">NEWSLETTER</h5>
          <p>Keep update on our evolving
            courses related to Management and
            Technology. Enter your e-mail and
            subscribe to our Newsletters </p>
          <form>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Enter your email" required>
              <button class="btn1 p-2  fs-6">Send
                <a href="index.html" class="btn1-span d-flex flex-row align-items-center justify-content-center">
                  <i class="fa-solid fa-paper-plane "></i>
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- ====================== ==================== Footer Bottom ====================  ======================-->
      <div class="text-center mt-3 bg-white text-dark p-3">
        <p class="mb-0"><i class="fa-solid fa-copyright fw-lighter px-2 col-org"></i><span class="year"> 2025</span>
          International Management Research
          and Technology Consortium. USA. All
          Rights Resereved.</p>
      </div>
    </div>
  </footer>

  <!-- ====================== ==================== FOOTER END ====================  ======================-->
 
            `;
        }

    } catch (error) {
        console.error("Error in script:", error);
    }
});


//  ============================== SAME CONTENT CODE WHICH IS REMAIN SAME ALL THE PAGES END ==============================


