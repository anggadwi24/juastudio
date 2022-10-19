import React, {Fragment,useEffect} from 'react';


import Menu from './Menu';
import Script from '../../component/Script';
import Contact from '../section/Contact';
import ProdukDetail from './ProdukDetail';
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-246125311-1";

ReactGA.initialize(TRACKING_ID);

const Detail = ()=> {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
    return (
        <Fragment>
            
            <div className="page-wrapper">
                <Menu></Menu>
                <ProdukDetail></ProdukDetail>
                <Contact></Contact>
            </div>
            <Script></Script>
        </Fragment>
    )
}

export default Detail