

import React, {Fragment, useEffect,useState} from 'react';
import Product from './Product';
import axios from 'axios';
import SkeletonCard from '../../SkeletonCard';
import "react-loading-skeleton/dist/skeleton.css";

const CardProduct = () => {
    const [pro, setPro] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://api.juastudio.com/api/product/best')
        .then((result)=>{
            
            setPro(result.data.data);
          
           setLoading(false);
        })
      }, []);
   
        return(
            <Fragment>
                {loading && <SkeletonCard  />}
                {!loading && 
                  
                    pro.map((post, index) => {
                        return (
                        
                            <Product key={post.slug} slug={post.slug} name={post.name} thumbnail={post.thumbnail} category={post.category} cat_slug={post.cat_slug}></Product>
                          
                        );
                      })
                }
                
            </Fragment>
            
           
        )
    }


export default CardProduct;

