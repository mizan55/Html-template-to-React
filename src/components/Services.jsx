import React ,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Component } from 'react';
class Footer extends Component {
    render(){
        return(
            <div>
                
<main>

{/*<!-- Header Start -->*/}
<div class="slider-area ">
    <div class="slider-height2 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap">
                        <h2>My Services</h2>
                        <nav aria-label="breadcrumb ">
                            <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><a href="#">My Services</a></li> 
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/*<!-- Header End -->*/}
{/*<!-- Categories Area Start -->*/}
<section class="categories-area categories-area2  section-padding30">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-pen"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">UI/UX Design</a></h5>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-speaker"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">Digital Marketing</a></h5>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-portfolio"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">Website Design</a></h5>
                       
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-portfolio"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">Website Design</a></h5>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-speaker"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">Digital Marketing</a></h5>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-cat text-center mb-50">
                    <div class="cat-icon">
                        <span class="flaticon-pen"></span>
                    </div>
                    <div class="cat-cap">
                        <h5><a href="services.html">UI/UX Design</a></h5>
                      
                    </div>
                </div>
            </div>
         </div>
    </div>
</section>
{/*<!-- Categories Area End -->*/}
{/*<!-- Want To Work Start -->*/}
<section class="wantToWork-area w-padding2">
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-8 col-md-8">
                <div class="wantToWork-caption wantToWork-caption2">
                    <h2>Dont worry for contact i`m available</h2>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3">
                <a href="#" class="btn btn-black f-right">Contact Me Now</a>
            </div>
        </div>
    </div>
</section>
{/*<!-- Want To Work End -->*/}

{/*<!-- Contact Info Start -->*/}
<div class="contact-info-area w-padding2 bg-info" data-background="assets/img/gallery/section_bg04.jpg">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-7">
              <div class="contact-caption mb-50">
                    <h3>If Not Now, When? Let’s Work Together!</h3>
                   
                    <img src="assets/img/gallery/sin.png" alt=""/>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
                <form action="#" class="contact-wrapper">
                    <input type="text" name="name" placeholder="Full Name"/>
                    <input type="email" name="email" placeholder="Email Address"/>
                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    <button class="submit-btn2" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>
{/*<!-- Contact Info End -->*/}

</main>
                
            </div>
        )
    }
}
export default Footer

