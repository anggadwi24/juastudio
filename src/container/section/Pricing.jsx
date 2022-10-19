import React, {Component} from 'react';
import Slider from "react-slick";
class Pricing extends Component{
    render(){
        var setting = {
            centerMode: true,
            centerPadding: '60px',
            
            slidesToShow: 1,
            // autoplay: true,
       
            slidesToScroll: 1,
        }
        return(
            <section className="pricing grey-bg" id="pricing">
                <div className="container">
                    
                    <div className="sec-title centered">
                        <div className="big-title">Pricing Table</div>
                        <h2>Website Plans And Price</h2>
                    </div>
                </div>
                <div className="outer-box">
                        <Slider {...setting} >
                        <div className="pricing-block-one">
                            <h4>Starter Website </h4>
                            <div className="price"><span>MULAI </span> 3JT<sub></sub></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>1 domain berlisensi</li>
                                        <li>Hosting Lite Speed</li>
                                        <li>Custom template</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>Basic SEO</li>
                                        <li>Admin dashboard</li>
                                        <li>6 bulan bebas biaya perbaikan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="link-btn"><a href="https://wa.me/6287774156930?text=Saya Tertarik Dengan Starter Website" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                        <div className="pricing-block-one" >
                            <h4>Advance Website</h4>
                            <div className="price"><span>MULAI</span>5JT<sub></sub></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>1 domain berlisensi</li>
                                        <li>Hosting Lite Speed</li>
                                        <li>Free Source Code</li>
                                        <li>6 bebas biaya perbaikan</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>Free SEO</li>
                                        <li>Admin dashboard</li>
                                        <li>Premium template</li>
        
                                    </ul>
                                </div>
                            </div>
                            <div className="link-btn"><a href="https://wa.me/6287774156930?text=Saya Tertarik Dengan Advance Website" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                        <div className="pricing-block-one"  >
                            <h4>Expert Website</h4>
                            <div className="price"><span>MULAI</span>10JT<sub></sub></div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>1 domain berlisensi</li>
                                        <li>Hosting Lite Speed</li>
                                        <li>Free Source Code</li>
                                        <li>6 bebas biaya perbaikan</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>Webservice</li>
                                        <li>Free SEO</li>
                                        <li>Admin dashboard</li>
                                        <li>Premium template</li>
        
                                    </ul>
                                </div>
                            </div>
                            <div className="link-btn"><a href="https://wa.me/6287774156930?text=Saya Tertarik Dengan Expert Website" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                       
                    </Slider>   
                    </div>
               
                    
            </section>
    
        )
    }
}
export default Pricing