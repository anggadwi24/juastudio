import React from 'react';
import Skeleton from 'react-loading-skeleton';


const Category = (props) =>{
    return(
        <li className="filter" data-role="button" data-filter={'.'+props.slug}><span>{props.name || <Skeleton/>} </span></li>
       
    )
}


export default Category;

