import React, {Fragment} from 'react';


import Menu from './Menu';
import Script from '../../component/Script';
import Contact from '../section/Contact';
import ProdukDetail from './ProdukDetail';
const Detail = ()=> {
    
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