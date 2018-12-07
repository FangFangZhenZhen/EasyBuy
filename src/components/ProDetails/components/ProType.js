import React ,{Component,Fragment} from 'react' ;
import {NavLink} from 'react-router-dom'
import $ from 'jquery';
export default class ProType extends Component {
    constructor(){
        super()
        this.state={
            goodsnum:1
        }
    }
    increase=(e)=>{
        this.setState({
            goodsnum:this.state.goodsnum+1
        })
        if(this.state.goodsnum>=100){
            this.setState({
                goodsnum:100
            })
        }
    }
    reduce=(e)=>{
        this.setState({
            goodsnum:this.state.goodsnum-1
        });
        if(this.state.goodsnum<=0){
            this.setState({
                goodsnum:0
            })
        }
    }
    handleClick(ev){
        var $span=$('.Pro_size span');
        $span.click(function(){
            $(this).addClass('border_1px_red').siblings().removeClass('border_1px_red')
        })
    }
    addToMyCart = (product, e) => {
        this.props.addToCartFunc(product);
      };
    render(){
          return (
            <div className='Pro_type'>
                <ul>
                    <li className='Pro_size' onClick={()=>this.handleClick()} >
                        <b>尺码</b>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                    </li>
                    <li className='Pro_color'>
                         <b>颜色种类</b>
                         <span><img  src='https://img.alicdn.com/imgextra/i3/503533256/O1CN011ZvI2uPkKCxFwSw_!!503533256.jpg_400x400.jpg_.webp'/></span>
                    </li>
                    <li className='Pro_number'>
                        <b>数量</b>
                        <input type='text'  className='Price_input' value={this.state.goodsnum}/>
                        <span className='increase' onClick={this.increase}>+</span>
                        <span className='reduce' onClick={this.reduce}>-</span>
                        <i>件</i>
                        <span className='save'>库存 <i>8961</i>件</span>
                    </li>
                    <li className='Pro_button'>
                      <NavLink className='Pro_buy' to='/paypage'>立即购买</NavLink>
                      <button className='Pro_car' onClick={e => this.addToMyCart(product, e)}>加入购物车</button>
                    </li>
                </ul>
            </div>
     )
   }
}