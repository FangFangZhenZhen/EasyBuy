import React ,{Component,Fragment} from 'react' ;
export default class Price extends Component {
    render(){
          return (
              <div className='Pro_price'>
                    <p className='clear'>
                        <span className='coupon'><img src='./public/Details/coupon.png'/></span>
                        <i className='common-use'>全易购实物商品通用</i>
                    </p>
                    <div className='Price'>
                      <p id='Price'>
                        <span>价格</span>  <i>￥258</i>
                      </p>
                      <p className='promotion_price'>
                        <span className='promotion'>促销价</span>   <span className='_price'><i>￥</i>178.00</span>
                      </p>
                      <p className='zaomai'>
                        <img src="./public/Details/zaomai.png"/>
                      </p>
                    </div>

              </div>
     )
   }
}