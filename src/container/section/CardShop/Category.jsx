import React from 'react';



const Category = (props) =>{
    return(
        <li className="filter" data-role="button" data-filter={'.'+props.slug}><span>{props.name } </span></li>
       
    )
}


export default Category;

