import React from 'react';
import CardCategory from './CardShop/CardCategory';
import CardProduct from './CardShop/CardProduct';
// import {  Link } from "react-router-dom";



const Shop = () => {
   
   
        return(
            <section className="our-projects sp-one" id="shop">
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
                               
                                <CardCategory/>
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                      
                        
                            <CardProduct/>
                            
                        
                          

                       
                    </div>              

                        
                </div>

            </section>
        )
    }

export default Shop;