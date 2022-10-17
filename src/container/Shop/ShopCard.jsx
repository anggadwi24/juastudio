import React, { Fragment } from 'react';
// import SkeletonCard from '../SkeletonCard';
import ProdukCard from './Produk/ProdukCard';
import Menu from './Menu';



const ShopCard = () =>{
    return(
        <Fragment>
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
                            
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                    
                        <div className="items-container row clearfix">
                            <ProdukCard/>
                            
                        
                        

                        </div>
                        <div className="load-more text-center">  <a href="/#"  className="theme-btn btn-style-three">See More</a> </div>
                    </div>              

                        
                </div>

            </section>
        </Fragment>
       
    )
}

export default ShopCard