import React, { Fragment } from 'react';
import Script from '../../component/Script';
import ProdukCard from './Produk/ProdukCard';
import Menu from './Menu';
import KategoriCard from './Kategori/KategoriCard';
import Contact from '../section/Contact';
import { Helmet } from 'react-helmet';

const ShopCard = () =>{
    return(
        <Fragment>
            <Helmet>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <title>Shop | Jua Studio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>

            

            <meta name="description" content="Jual Totebag Bali"/> 
            <meta name="keywords" content="slingbag, tsuno bag, totebag"/>
            <meta name="revisit-after" content="2 days"/>
            <meta name="robots" content="all,index,follow"/>
            <meta name="MSSmartTagsPreventParsing" content="TRUE"/>
            <meta name="author" content="Jua Studio Shop"/>
            <meta name="copyright" content="Jua Studio Shop"/>
            <meta property="og:title" content="Jua Studio Shop"/>
            <meta property="og:description" content="Belanja Totebag Dibali"/>
            <meta property="og:image" content="https://pusat.juastudio.com/src/assets/img/jua.png"/>
            <meta property="og:url" content="https://www.juastudio.com/"/>
            <meta property="og:site_name" content="juastudio.com"/>
            <meta property="og:see_also" content="https://www.juastudio.com"/>
            </Helmet>
            <Menu></Menu>
            <section className="our-projects sp-one">
                <div className="container">
                    <div className="sec-title">
                        <div className="big-title">Shop</div>
                        <h2>Shop</h2>
                    </div>
                </div>

            
                <div className="masonry-gallery ml-25 mr-25">
                    <div className="container">
                    
                        <div className="filters">
                            <ul className="filter-tabs-three filter-btns clearfix">
                                <li className="active filter" data-role="button" data-filter=".all"><span>View All </span></li>
                                <KategoriCard></KategoriCard>
                                    
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                    
                       
                            <ProdukCard/>
                            
                        
                        

                    </div>              

                        
                </div>

            </section>
            <Contact></Contact>
            <Script></Script>
        </Fragment>
       
    )
}

export default ShopCard