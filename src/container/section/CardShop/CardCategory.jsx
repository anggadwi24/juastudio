import React, {Fragment, useEffect,useState} from 'react';
import Category from './Category';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
const CardCategory = () => {
    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://api.juastudio.com/api/category')
        .then((result)=>{
            
           setCat(result.data.data);
          
           setLoading(false);
        })
      }, []);
   
        return(
            <Fragment>
                {loading && <Skeleton  animation="wave" />}
                {!loading && 
                  
                    cat.map((post, index) => {
                        return (
                        
                            <Category key={post.slug} slug={post.slug} name={post.name}></Category>
                          
                        );
                      })
                }
                
            </Fragment>
            
            // <Fragment>
            //     {
            //         this.state.post.map(post =>{
               
            //           return   <Category key={post.slug} slug={post.slug} name={post.name}></Category>
            //         })
            //     }
            // </Fragment>
        )
    }


export default CardCategory;

