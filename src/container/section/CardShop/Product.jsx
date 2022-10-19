import React from 'react';



const Product = (props) =>{
    return(
        <div className={'col-md-3 col-sm-6 col-xs-12 projects-block-one masonry-item all '+props.cat_slug }>
            <div className="inner-box">
                <figure className="image">
                    <img src={props.thumbnail } alt=""/>
                    <div className="overlay">
                        <a className="lightbox-image option-btn" title={props.name} data-fancybox-group="example-gallery" href={props.thumbnail}>
                            <i className="fa fa-search"></i>
                        </a>                               
                    </div>
                </figure>
                <div className="caption-title">
                    <h4><a href={'/shop/'+props.slug}>{props.name }</a></h4>
                    <span>{props.category}</span>
                </div>
            </div>
        </div>
       
    )
}


export default Product;

