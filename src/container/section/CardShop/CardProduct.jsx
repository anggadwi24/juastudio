import React, {Component,Fragment} from 'react';
import Product from './Product';
import axios from 'axios';

class CardProduct extends Component{
    state ={
        post:[]
    }
    componentDidMount(){
    //    fetch('https://api.juastudio.com/api/product')
    //         .then(response =>response.json())
    //         .then(json => {
    //             this.setState({
    //                 post:json.data
    //             })
    //         })
        axios.get('https://api.juastudio.com/api/product/best')
        .then((result)=>{
     
            this.setState({
                post:result.data.data
            })
        })
    }
    render() {
        return(
            <Fragment>
                {
                    this.state.post.map(post =>{
               
                      return   <Product key={post.slug} slug={post.slug} name={post.name} thumbnail={post.thumbnail} category={post.category} cat_slug={post.cat_slug}></Product>
                    })
                }
            </Fragment>
        )
    }
}

export default CardProduct;

