import React, { useState, useEffect } from 'react';
// import CardCategory from './CardShop/CardCategory';
import Category from './CardShop/Category';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from '../SkeletonCard';
import {slice} from 'lodash';
import Product from './CardShop/Product';



const Shop = () => {
   
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pro, setPro] = useState([]);

    const [loadingPro, setLoadingPro] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(8);
    const initialPosts = slice(pro, 0, index)

 
    // Filter change handler
  

    useEffect(() => {
        getData();
        setLoading(true);
        axios.get('https://api.juastudio.com/api/category')
        .then((result)=>{
            
           setCat(result.data.data);
          
           setLoading(false);
        })
      }, []);
    const getData = ()=> {
        setLoadingPro(true);
        axios.get('https://api.juastudio.com/api/product/best')
        .then((result)=>{
            
            setPro(result.data.data);
          
            setLoadingPro(false);
        })
    }
    const loadMore = () => {
        setLoadingPro(true);
        setIndex(index + 8)
        console.log(index)
        if (index >= pro.length) {
          setIsCompleted(true)
        } else {
          setIsCompleted(false)
        }
        setLoadingPro(false);
      }


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
                                {loading && <Skeleton  animation="wave" />}
                                {!loading && 
                                    
                                    
                                    cat.map((post, index) => {
                                        return (
                                        
                                            <Category key={post.slug}  slug={post.slug} name={post.name}></Category>
                                        
                                        );
                                    })
                            
                                }
                               
                                
                                
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="items-container row clearfix">
                        
                        {!loadingPro && 
                
                 
                    
                            initialPosts.map((pro) => {
                                return (
                                
                                    <Product key={pro.slug} slug={pro.slug} name={pro.name} thumbnail={pro.thumbnail} category={pro.category} cat_slug={pro.cat_slug}></Product>
                                    
                                );
                                })
                            
                            
                            
                        }
                        {loadingPro && <SkeletonCard  />}

              

                        </div>  
                        
                     {!isCompleted && pro.length >= index &&
                         <div className="load-more text-center">  <button onClick={loadMore}  className="theme-btn btn-style-three">See More</button> </div>

                     }  

                       
                    </div>              

                        
                </div>

            </section>
        )
    }

export default Shop;