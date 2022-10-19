import React, { Fragment } from 'react';
import Menu from './Detail/Menu';
import Contact from './section/Contact';
const NoPage = () =>{
    return (
        <Fragment>
            <Menu></Menu>
            <section className="about-us sp-two" id="aboutus" style={{marginTop:'300px',marginBottom:'300px'}}>
                <div className="container">
                    <div className="sec-title centered">
                        <div className="big-title">404 NOT FOUND</div>
                        <h2>404 NOT FOUND</h2>
                    </div> 
                </div>
             </section>
            <Contact></Contact>
        </Fragment>
    )
}

export default NoPage