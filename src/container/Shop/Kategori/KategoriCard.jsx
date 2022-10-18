import React, {Fragment, useEffect,useState} from 'react';
import KategoriList from './KategoriList';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
const KategoriCard = () => {
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
                        
                            <KategoriList key={post.slug} slug={post.slug} name={post.name}></KategoriList>
                          
                        );
                      })
                }
                
            </Fragment>
            
            
        )
    }


export default KategoriCard;

