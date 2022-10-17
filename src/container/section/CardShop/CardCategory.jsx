import React, {Component,Fragment} from 'react';
import Category from './Category';
import axios from 'axios';

class CardCategory extends Component{
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
        axios.get('https://api.juastudio.com/api/category')
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
               
                      return   <Category key={post.slug} slug={post.slug} name={post.name}></Category>
                    })
                }
            </Fragment>
        )
    }
}

export default CardCategory;

