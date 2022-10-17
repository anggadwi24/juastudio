import React, {Component,Fragment} from 'react';


const Product = (props) =>{
    return(
        <div className='post'>
            <div className='img-thumb'>
                <img src={props.thumbnail} alt="" />
            </div>
            <div className='content'>
                <p className='title'>{props.title}</p>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}


export default Product;

