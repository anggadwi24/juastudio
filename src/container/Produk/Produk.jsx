import React, {Component,Fragment} from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import './Produk.css';

class Produk extends Component{
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
        axios.get('https://api.juastudio.com/api/product')
        .then((result)=>{
            console.log(result.data.data);
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
               
                      return   <Product key={post.slug} title={post.name} desc={post.description} thumbnail={post.thumbnail}></Product>
                    })
                }
            </Fragment>
        )
    }
}

export default Produk;

