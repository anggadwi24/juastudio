import React, {Component} from 'react';


class CardProduct extends Component {
    state = {
        order:4
    }
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue);
    }
    handlePlus = () =>{
       this.setState({
            order: this.state.order+1
       },() =>{
            this.handleCounterChange(this.state.order);

       })

    }
    handeMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order-1
           },() =>{
            this.handleCounterChange(this.state.order);

            })
        }
        
    }
    render() {
        return(
           
                
                <div className='card'>
                    <div className='img-thumb-prod'>
                        <img src="https://pusat.juastudio.com/upload/product/thumbnail-TOTEBAG%20V1%20HIJAU.jfif" alt="" />
                    </div>
                    <p className='product-title'>Product</p>
                    <p className='product-price'>Product Price</p>
                    <div className='counter'>
                        <button className='minus' onClick={this.handeMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className='plus' onClick={this.handlePlus} >+</button>
                    </div>
                </div>
           
           
        );
    }
}
export default CardProduct;