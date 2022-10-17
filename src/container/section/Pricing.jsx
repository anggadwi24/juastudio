import React, {Component} from 'react';

class Pricing extends Component{
    render(){
        return(
            <section className="pricing grey-bg" id="pricing">
                <div className="container">
                    
                    <div className="sec-title centered">
                        <div className="big-title">Pricing Table</div>
                        <h2>Website Plans And Price</h2>
                    </div>
                </div>
                <div className="outer-box">
                    <div className="pricing-slider">
                        <div className="pricing-block-one">
                            <h4>Starter Website </h4>
                            <div className="price"><span>START </span> 3JT<sub></sub></div>
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
                            <div className="link-btn"><a href="/#" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                        <div className="pricing-block-one">
                            <h4>Advance Website</h4>
                            <div className="price"><span>START</span>5JT<sub></sub></div>
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
                            <div className="link-btn"><a href="/#" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                        <div className="pricing-block-one">
                            <h4>Expert Website</h4>
                            <div className="price"><span>START</span>10JT<sub></sub></div>
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
                            <div className="link-btn"><a href="/#" className="theme-btn btn-style-three">Choose Plan</a></div>
                        </div>
                       
                            
                    </div>
                </div>
                    
            </section>
    
        )
    }
}
export default Pricing