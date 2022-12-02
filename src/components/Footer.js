const Footer = () => {
    return(
        <footer class="pt-5 mt-5" style={{backgroundColor: 'darkblue', color: 'white'}}>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3">
                            <a class="me-0" href="index.html">
                                <img class="light-mode-item h-40px" src="https://www.istad.co/resources/img/logo_md.png" alt="logo" style={{width: 60}}/>
                                {/* <img class="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo" /> */}
                            </a>
                            <p class="my-3">ISTAD, built specifically for the education centers which is dedicated to teaching and involve learners. </p>
                            <ul class="list-inline mb-0 mt-3">
                                <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i class="fab fa-fw fa-facebook-f text-white" style={{color: 'white'}}></i></a> </li>
                                <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i class="fab fa-fw fa-instagram text-white"></i></a> </li>
                                <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i class="fab fa-fw fa-twitter text-white"></i></a> </li>
                                <li class="list-inline-item"> <a class="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i class="fab fa-fw fa-linkedin-in text-white"></i></a> </li>
                            </ul>
                        </div>
                    
                        <div class="col-lg-6">
                            <div class="row g-4">
                                <div class="col-6 col-md-4">
                                    <h5 class="mb-2 mb-md-4">Company</h5>
                                    <ul class="nav flex-column">
                                        <li class="nav-item"><a class="nav-link text-white" href="#">About us</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Contact us</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">News and Blogs</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Library</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Career</a></li>
                                    </ul>
                                </div>
                                                
                                <div class="col-6 col-md-4">
                                    <h5 class="mb-2 mb-md-4">Community</h5>
                                    <ul class="nav flex-column">
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Documentation</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Faq</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Forum</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Sitemap</a></li>
                                    </ul>
                                </div>

                                <div class="col-6 col-md-4">
                                    <h5 class="mb-2 mb-md-4">Teaching</h5>
                                    <ul class="nav flex-column">
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Become a teacher</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">How to guide</a></li>
                                        <li class="nav-item"><a class="nav-link text-white" href="#">Terms &amp; Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div class="col-lg-3">
                            <h5 class="mb-2 mb-md-4">Contact</h5>
                            
                            <p class="mb-2">
                                Toll free:<span class="h6 fw-light ms-2">+1234 568 963</span>
                                <span class="d-block small">(9:AM to 8:PM IST)</span>
                            </p>

                            <p class="mb-0">Email:<span class="h6 fw-light ms-2">example@gmail.com</span></p>

                            <div class="row g-2 mt-2">
                                <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                                    <a href="#"> <img src="https://eduport.webestica.com/assets/images/client/app-store.svg" alt="" /> </a>
                                </div>
                                
                                <div class="col-6 col-sm-4 col-md-3 col-lg-6">
                                    <a href="#"> <img src="https://eduport.webestica.com/assets/images/client/google-play.svg" alt="app-store" /> </a>
                                </div>
                            </div> 
                        </div> 		
                    </div>	
                    <hr class="mt-4 mb-0" />
                    <div class="py-3">
                        <div class="container px-0">
                            <div class="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
                                
                                <div class="text-primary-hover"> Copyrights <a href="#" class="text-white text-decoration-none">©2022 ISTAD</a>. All rights reserved. </div>
                            
                                <div class="justify-content-center mt-3 mt-lg-0">
                                    <ul class="nav list-inline justify-content-center mb-0">
                                        <li class="list-inline-item">
                                        
                                            <div class="dropup mt-0 text-center text-sm-end">
                                                <a class="dropdown-toggle nav-link text-white" href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="fas fa-globe me-2"></i>Language
                                                </a>
                                                <ul class="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                                                    <li><a class="dropdown-item me-4" href="#"><img class="fa-fw me-2" src="assets/images/flags/uk.svg" alt="" />English</a></li>
                                                    <li><a class="dropdown-item me-4" href="#"><img class="fa-fw me-2" src="assets/images/flags/gr.svg" alt="" />German </a></li>
                                                    <li><a class="dropdown-item me-4" href="#"><img class="fa-fw me-2" src="assets/images/flags/sp.svg" alt="" />French</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="list-inline-item"><a class="nav-link text-white" href="#">Terms of use</a></li>
                                        <li class="list-inline-item"><a class="nav-link pe-0 text-white" href="#">Privacy policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer