import React, {Component, Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Services extends Component{
    render() {
        return(
            <Fragment>
               
                <section className="main-services sp-one" id="services" style={{backgroundImage:`url('assets/images/gallery/img4.png')`}}>
                    <div className="container">
                        <div className="sec-title centered">
                            <div className="big-title" style={{color:'#c1c1c17a'}}>Layanan Kami</div>
                            <h2 style={{color:'#efefef'}}>Layanan Kami</h2>
                        </div>
                        <OwlCarousel className="owl-carousel owl-theme owl-nav-none owl-dot-style-three" items={3} loop={true} margin={30} nav animateOut={'fadeOut'} smartSpeed={700} autoPlay={5000} navText={ [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]}>
                        
                        
                            <div className="services-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/icons/service-1.png" alt=""/>
                                    </div>
                                    <a href="/#"><h3>Website</h3></a>
                                    <div className="text">Memberikan layanan website sesuai dengan keinginan anda, dilengkapi dengan hosting,domain, basic SEO. </div>
                                    <a href="/#" className="read-more"><span className="fa fa-long-arrow-down"></span></a>
                                    <div className="overlay">
                                        <div className="image">
                                            <img src="assets/images/icons/service-1.png" alt=""/>
                                        </div>
                                        <div className="text">Hosting + Domain + Basic SEO ...</div>
                                        <a href="https://wa.me/6287774156930?text=Saya Ingin Mengenal Lebih Lanjut Tentang Layanan Website" className="read-more"><span className="fa fa-long-arrow-up"></span></a>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="services-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/icons/service-2.png" alt=""/>
                                    </div>
                                    <a href="/#"><h3>Graphic Design</h3></a>
                                    <div className="text">Memberikan layanan design sesuai dengan keinginan anda, berupa brand identity, logo, print design dan lain-lain </div>
                                    <a href="/#" className="read-more"><span className="fa fa-long-arrow-down"></span></a>
                                    <div className="overlay">
                                        <div className="image">
                                            <img src="assets/images/icons/service-2.png" alt=""/>
                                        </div>
                                        <div className="text">Brand Identity, Logo Design, dll...</div>
                                        <a href="https://wa.me/6287774156930?text=Saya Ingin Mengenal Lebih Lanjut Tentang Layanan Graphic Design" className="read-more"><span className="fa fa-long-arrow-up"></span></a>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="services-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/icons/api.png" alt=""/>
                                    </div>
                                    <a href="/#"><h3>Rest API</h3></a>
                                    <div className="text">Memberikan layanan Rest API Authorize/Authentication untuk layanan program anda</div>
                                    <a href="/#" className="read-more"><span className="fa fa-long-arrow-down"></span></a>
                                    <div className="overlay">
                                        <div className="image">
                                            <img src="assets/images/icons/api.png" alt=""/>
                                        </div>
                                        <div className="text">API Authorize/Authentication</div>
                                        <a href="https://wa.me/6287774156930?text=Saya Ingin Mengenal Lebih Lanjut Tentang Layanan Rest API" className="read-more"><span className="fa fa-long-arrow-up"></span></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="services-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <img src="assets/images/icons/instagram.png" alt=""/>
                                    </div>
                                    <a href="/#"><h3>Insta Feed</h3></a>
                                    <div className="text">Memberikan layanan Instagram Feed sesuai dengan keinginan anda </div>
                                    <a href="/#" className="read-more"><span className="fa fa-long-arrow-down"></span></a>
                                    <div className="overlay">
                                        <div className="image">
                                            <img src="assets/images/icons/instagram.png" alt=""/>
                                        </div>
                                        <div className="text">Intagram Feed...</div>
                                        <a href="https://wa.me/6287774156930?text=Saya Ingin Mengenal Lebih Lanjut Tentang Layanan Insta Feed" className="read-more"><span className="fa fa-long-arrow-up"></span></a>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                       
                        </OwlCarousel>
                    </div>
                </section>
         
            </Fragment>
            
        )
    }
}

export default Services;