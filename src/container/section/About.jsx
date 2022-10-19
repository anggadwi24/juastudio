import React, {Component} from 'react';
import Slider from "react-slick";
class About extends Component{
    render() {
        var setting = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: true,
            autoplay: true,
            focusOnSelect: true
        }
        return(
            <section className="about-us sp-two" id="aboutus">
            <div className="container">
                <div className="sec-title centered">
                    <div className="big-title">Cerita Tentang Kami</div>
                    <h2>Tentang Kami</h2>
                </div> 
                <div className="slick-slider-box">
                    <Slider {...setting}>
                        <div className="slide-item">
                            <div className="row">
                                <div className="col-md-6 right-column">
                                    <div className="img-box mb-30"><img src="assets/images/gallery/jua.png" alt=""/></div>
                                </div>
                                <div className="col-md-6 left-column">
                                    <div className="text-block-one mb-30">
                                        <h2>Kami adalah <b><i>creative agency </i>dengan teknologi terkini yang berbasis</b> di Bali.</h2>
                                        <div className="text">Sebagai perusahaan digital yang berfokus pada bidang teknologi, kami siap membantu kebutuhan anda dengan layanan yang kami siapkan.</div>
                                      
                                    </div>
                                </div>
                            </div>
                                    
                        </div>
                        <div className="slide-item">
                            <div className="row">
                                <div className="col-md-6 right-column">
                                    <div className="img-box mb-30"><img src="assets/images/gallery/jua.png" alt=""/></div>
                                </div>
                                <div className="col-md-6 left-column">
                                    <div className="text-block-one mb-30">
                                        <h2>Mengapa <b>Jua Studio</b> ?</h2>
                                        <div className="text">Kami siap melayani kebutuhan anda, dengan pelayanan yang terjamin dan harga yang sesuai dengan kebutuhan anda.</div>
                                       
                                    </div>
                                </div>
                            </div>
                                    
                        </div>
                        <div className="slide-item">
                            <div className="row">
                                <div className="col-md-6 right-column">
                                    <div className="img-box mb-30"><img src="assets/images/gallery/jua.png" alt=""/></div>
                                </div>
                                <div className="col-md-6 left-column">
                                    <div className="text-block-one mb-30">
                                        <h2>Kami memiliki <b>tim</b> dengan keahlian dibidangnya</h2>
                                    
                                        <div className="text">Kami menyediakan layanan pembuatan website/aplikasi bisnis/kebutuhan anda, pembuatan logo, konten website, konten sosial media, dan desain grafik lainnya. </div>
                                      
                                    </div>
                                </div>
                            </div>
                                    
                        </div>
                       
                    </Slider>
                </div>
                
            </div>
        </section>
        )
    }
}

export default About;