import React, {Component} from 'react';

class Menu extends Component{
    render() {
        return(
            <header className="main-header header-style-1 fixed-header-one">
        
            
            <div className="main-box stricky">
                <div className="container-fluid">
                    <div className="outer-container clearfix">
                       
                        <div className="logo-box">
                            <div className="logo"><a href="/"><img src="assets/images/juahitam.png" alt=""/></a></div>
                          
                        </div>
                        
                      
                        <div className="nav-outer clearfix">
                          
                            <nav className="main-menu">
                                <div className="navbar-header">
                                 
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                
                                <div className="navbar-collapse collapse scroll-nav clearfix">
                                    <ul className="navigation clearfix">
                                        
                                        <li ><a href="/" >Home</a></li>
                                        <li><a href="/#aboutus">About Us</a></li>
                                        <li><a href="/#services">Services</a></li>
                                        <li className="current"><a href="/#">Shop</a></li>
                                        <li><a href="/#team">Team</a></li>
                                        <li><a href="/#pricing">Pricing</a></li>
                                       
                                        <li><a href="/#contact">Contact</a></li>
    
                                     </ul>
                                </div>
                            </nav>
                                           
                        </div>
                      
    
                        
                        <div className="info-options">
                            <span>Contact us on:</span>
                            <ul className="social-icon-one">
                                <li><a href="https://instagram.com/juastd"><span className="fa fa-instagram"></span></a></li>
                                <li><a href="https://wa.me/6287774156930">  <span className="fa fa-whatsapp"></span></a></li>
                            </ul>
                            
                        </div>
                        
                    </div>    
                </div>
            </div>
            <div className="header-span"></div>
        
        </header>
        )
    }
}

export default Menu;