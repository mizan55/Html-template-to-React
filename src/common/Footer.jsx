import React ,{ Component } from 'react';
// import { Component } from 'react';
class Footer extends Component {
    render(){
        return(
            <div>
                  <footer>
        {/*<!-- Footer Start-->*/}
        <div class="footer-area">
            <div class="container">
               <div class="footer-top footer-padding">
                   <div class="row justify-content-center">
                       <div class="col-lg-6">
                            <div class="footer-top-cap text-center">
                                <img src="assets/img/logo/logo2_footer.png" alt=""/>
                                <span><a href="#">mizanurrashed.cu@gmail.com</a></span>
                                <p>University of Chittagong</p>
                                <p>Session  2012-2013</p>
                            </div>
                       </div>
                   </div>
               </div>
                <div class="footer-bottom">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-xl-9 col-lg-8">
                            <div class="footer-copy-right">
                                <p>{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Mizanur Rashed
  {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                            {/*<!-- Footer Social -->*/}
                            <div class="footer-social f-right">
                                <a>Stay Connected</a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fas fa-globe"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        {/*<!-- Footer End-->*/}
    </footer>
    {/*<!-- Scroll Up -->*/}
    <div id="back-top" >
        <a title="Go to Top" href="#"> <i class="fas fa-level-up-alt"></i></a>
    </div>

            </div>
        )
    }
}
export default Footer
