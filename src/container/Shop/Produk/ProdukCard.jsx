
import React, {Fragment, useEffect,useState} from 'react';
import ProductList from './ProdukList';
import axios from 'axios';
import SkeletonCard from '../../SkeletonCard';
import {slice} from 'lodash';

const ProdukCard = () => {
    const [pro, setPro] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(8);
    const initialPosts = slice(pro, 0, index)
    const getData = ()=> {
        setLoading(true);
        axios.get('https://api.juastudio.com/api/product/best')
        .then((result)=>{
            
            setPro(result.data.data);
          
           setLoading(false);
        })
    }
    const loadMore = () => {
        setLoading(true);
        setIndex(index + 8)
        console.log(index)
        if (index >= pro.length) {
          setIsCompleted(true)
        } else {
          setIsCompleted(false)
        }
        setLoading(false);
      }
    useEffect(() => {
        getData();
      }, []);
   
        return(
            <Fragment>
               
                <div className="items-container row clearfix">
                {!loading && 
                
                 
                    
                  initialPosts.map((pro) => {
                        return (
                        
                            <ProductList key={pro.slug} slug={pro.slug} name={pro.name} thumbnail={pro.thumbnail} category={pro.category} cat_slug={pro.cat_slug}></ProductList>
                          
                        );
                      })
                     
                  
                   
                }
                 {loading && <SkeletonCard  />}
                </div>
                {!isCompleted && pro.length >= index &&
                    <div className="load-more text-center">  <button onClick={loadMore}  className="theme-btn btn-style-three">See More</button> </div>

                }
                
            </Fragment>
            
           
        )
    
}

export default ProdukCard;