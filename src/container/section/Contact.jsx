import React,{Component,Fragment} from 'react';

class Contact extends Component{
    render(){
        return (
            <Fragment>
                 <section className="map-section" id="contact">
                    <div className="home-google-map">
                    <iframe title="Jua Kopi" className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.137075400855!2d115.23960501539031!3d-8.67851219076111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241cca9e4b925%3A0x5efa8ddd57df6b4f!2sJua%20Kopi!5e0!3m2!1sid!2sid!4v1666118966728!5m2!1sid!2sid"  allowfullscreen="" style={{"width":'100%',"height":"510px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="container">
                        <div className="default-form-area ">
                            <div className="sec-title small ml-50">
                                <h2>Send Message Us</h2>
                            </div>
                            <form id="contact-form" name="contact_form" className="contact-form style-four" action="inc/sendmail.php" method="post">
                                <div className="row clearfix">
                                    <div className="col-md-12 col-sm-12 col-xs-12">        
                                        <div className="form-group style-two">
                                            <input type="text" name="form_name" className="form-control" defaultValue="" placeholder="Name" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group style-two">
                                            <input type="email" name="form_email" className="form-control required email" defaultValue="" placeholder="Email Address" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group style-two">
                                            <input type="email" name="form_subject" className="form-control required email" defaultValue="" placeholder="Subject" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="form-group style-two">
                                            <textarea name="form_message" className="form-control textarea required" placeholder=" Message"></textarea>
                                        </div>
                                    </div>                                                
                                </div>
                                <div className="contact-section-btn">
                                    <div className="form-group style-two ml-50 mr-50">
                                        <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value=""/>
                                        <button className="theme-btn btn-style-fifteen w-100" type="submit" data-loading-text="Please wait...">send message</button>
                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                        
                </section>

               
                <div className="contact-details grey-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mb-30">
                                <h4>Address:</h4>
                                <ul className="list-style-one">
                                    <li>Jln Tukad Balian XXIV No. 2</li>
                                    <li>Denpasar, Bali.</li>
                                </ul>
                                <div className="icon-box"><span className="icon-gps"></span></div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-30">
                                <h4>Quick Contact:</h4>
                                <ul className="list-style-one">
                                    <li>+6287774156930</li>
                                    <li>support@juastudio.com</li>
                                </ul>
                                <div className="icon-box"><span className="icon-telephone"></span></div>
                            </div>
                        </div>
                                
                    </div>
                </div>

               
                <section className="main-footer">
                    <div className="container">
                        <div className="container-box">
                            <div className="copyright">
                                <div className="text">© 2022 <a href="/#">Jua Studio</a>  All rights reserved.</div>
                            </div>
                           
                            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon-arrow"></span>Move to Top</div>
                        </div>
                    </div>
                </section>
    
            </Fragment>
        )
    }
}

export default Contact;