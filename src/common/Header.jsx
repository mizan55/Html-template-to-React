import React ,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home  from '../components/Home';
import About  from '../components/About';
import Services  from '../components/Services';
import Portfolio  from '../components/Portfolio';
import Blog  from '../components/Blog';
import Contact  from '../components/Contact';
import Blogdetails  from '../components/Blogdetails';


class Header extends Component {
    render(){
        return(
            <Router>
            <div>
                   {/* {/*<!-- Preloader Start -->*/}
                  
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/loder.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Preloader Start -->*/}
    <header>
        {/*<!-- Header Start -->*/}
        <div class="header-area">
                <div class="main-header  header-sticky">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            {/*<!-- Logo -->*/}
                            <div class="col-xl-2 col-lg-2 col-md-1">
                                <div class="logo">
                                <Link to="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-10">
                                <div class="menu-main d-flex align-items-center justify-content-end">
                                    {/*<!-- Main-menu -->*/}
                                    <div class="main-menu f-right d-none d-lg-block">
                                        <nav> 
                                            <ul id="navigation">
                                           
                                                <li>  <Link to="/">Home</Link></li>
                                                <li>  <Link to="/about">About</Link></li>
                                                <li>  <Link to="/services">Services</Link></li>
                                                <li>  <Link to="/portfolio">Portfolio</Link></li>
                                                <li><a href="#">Page</a>
                                                    <ul class="submenu">
                                                        <li><Link to="/blog">Blog</Link></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li><Link to="contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                        <a href="#" class="btn header-btn">Get Free Consultent</a>
                                    </div>
                                </div>
                            </div>   
                            {/*<!-- Mobile Menu -->*/}
                            <div class="col-12">
                                <div class="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        {/*<!-- Header End -->*/}
    </header>

        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/blogdetails' component={Blogdetails} />
          
        </Switch>

            </div>
            </Router>
            
        )
    }
}
export default Header
