import React,{Component, Fragment} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
class Team extends Component{
    render(){
        return (
            <Fragment>
                <section className="testimonial sp-one" style={{backgroundImage:`url('assets/images/gallery/img5.png')`}}>
                    <div className="container">
                        <OwlCarousel className=" owl-carousel owl-theme owl-nav-none owl-dot-style-three" items={1} loop={true} margin={0} nav animateOut={'fadeOut'} smartSpeed={1000} autoPlay={5000} navText={ [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]}>
                      
                            <div className="testimonial-block-one">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="author-info">
                                            <div className="image"><img src="assets/images/resource/bill_gates.jpg" alt=""/></div>
                                            <h4>Bill Gates</h4>
                                            <div className="designation">Microsoft </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="content">
                                            <div className="icon-box"><span className="icon-message"></span></div>
                                            <div className="text">Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.</div>
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-block-one">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="author-info">
                                            <div className="image"><img src="assets/images/resource/steve_jobs.jpg" alt=""/></div>
                                            <h4>Steve Jobs</h4>
                                            <div className="designation">Founder Apple Inc.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="content">
                                            <div className="icon-box"><span className="icon-message"></span></div>
                                            <div className="text">Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.</div>
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                      
                      
                        </OwlCarousel>
                    </div>
                </section>
                
                <div className="container"><div className="border-bottom"></div></div>
                <section className="our-team sp-two" id="team">
                    <div className="container">
                      
                        <div className="sec-title centered">
                            <div className="big-title">Tim Jua Studio</div>
                            <h2>Tim Kami</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6 team-block-one">
                                <div className="inner-box">
                                    <div className="image"><img src="https://media-exp1.licdn.com/dms/image/C5603AQH2tyT6Yt_64Q/profile-displayphoto-shrink_200_200/0/1662342979692?e=2147483647&v=beta&t=o5-KQ31VNjwMgMfHdwdS4U1JiETE_OnNpiZguKLYt2c" alt=""/></div>
                                    <div className="lower-content">
                                        <div className="designation"><a href='/#'>Programmer</a></div>
                                        <h4>Angga Dwi</h4>
                                        <ul className="social-link">
                                            <li><a href="https://www.facebook.com/anggadwi15">Facebook</a></li>
                                            <li><a href="https://twitter.com/an666aaa">Twitter</a></li>
                                            <li><a href="https://id.linkedin.com/in/i-kadek-angga-dwiantara-64723a232">Linkedin</a></li>
                                        </ul>
                                        <div className="overlay">
                                            <div className="designation"><a href='/#'>Programmer</a></div>
                                            <h4>Angga Dwi</h4>
                                            <div className="text"></div>
                                            <ul className="social-link">
                                                <li><a href="https://www.facebook.com/anggadwi15">Facebook</a></li>
                                                <li><a href="https://twitter.com/an666aaa">Twitter</a></li>
                                                <li><a href="https://id.linkedin.com/in/i-kadek-angga-dwiantara-64723a232">Linkedin</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 team-block-one">
                                <div className="inner-box">
                                    <div className="image"><img src="https://scontent.fdps6-1.fna.fbcdn.net/v/t1.6435-1/123833170_3636329153084596_8481072616056646109_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHhB42wO5EsMMKpT1jPkEYhZDPiUTCoNZtkM-JRMKg1m8-_EWUbve-y610KBYyLHUhMAX_rz5jtFvhInGeaHqaU&_nc_ohc=WeWHolLYjwUAX8YssZ7&_nc_ht=scontent.fdps6-1.fna&oh=00_AT-F_NnlHgTsED1JlUsnsABvKiErZ2dhughFx_ydyEmJ3w&oe=6375C5BA" alt=""/></div>
                                    <div className="lower-content">
                                        <div className="designation"><a href="/#">Designer</a></div>
                                        <h4>Diki Alwi</h4>
                                        <ul className="social-link">
                                            <li><a href="https://www.instagram.com/telapakkuda_/">Instagram</a></li>
                                            <li><a href="https://www.instagram.com/dikyyyyy_wi/">Instagram</a></li> 
                                        </ul>
                                        <div className="overlay">
                                            <div className="designation"><a href="/#">Designer</a></div>
                                            <h4>Diki Alwi</h4>
                                            <div className="text"></div>
                                            <ul className="social-link">
                                                <li><a href="https://www.instagram.com/telapakkuda_/">Instagram</a></li>
                                                <li><a href="https://www.instagram.com/dikyyyyy_wi/">Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

            </Fragment>
        )
    }
}

export default Team;