import React, {Component} from 'react';
import CardCategory from './CardShop/CardCategory';
import CardProduct from './CardShop/CardProduct';
class Shop extends Component{
    render() {
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
                                <CardCategory></CardCategory>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                      
                        <div className="items-container row clearfix">
                            <CardProduct/>
                            
                        
                          

                        </div>
                        <div className="load-more text-center"><a href="/#" className="theme-btn btn-style-three">See More</a></div>
                    </div>              

                        
                </div>

            </section>
        )
    }
}
export default Shop;