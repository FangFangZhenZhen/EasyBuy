import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom'
import './index.css'
export default class PayPage extends Component{
    render(){
        return(
            <Fragment>
                <div className='pay-header'>
                    <div className='pay-logo'>
                        <img src='./public/indexHeader/img/index-logo.png' />
                        <h3>结算页</h3>
                    </div>
                </div>
                <h2 className='check-order-msg'>填写并核对订单信息</h2>
                <div className='pay-content'>
                    <div className='pay-user-msg'>
                        <h4 className='user-msg-title'>收货人信息
                        <NavLink to='/paypage'>新增收货地址</NavLink>
                        </h4>

                        <span className='user-name on'>山宗十甫寸</span>
                        <p className='user-address'>江苏 南京市 江宁区 淳化街道学府风景花园6栋301室</p>
                        <p className='user-phone'>188****1568</p>
                    </div>

                    <div className='pay-type'>
                        <h4 className='user-msg-title'>支付方式 </h4>
                        <span className='user-name'>货到付款</span>
                        <span className='user-name on'>在线支付</span>
                    </div>

                    <div className='send-list'>
                        <h4 className='user-msg-title'>送货清单
                            <NavLink to='/shopcart'>返回购物车修改</NavLink>
                        </h4>
                       <div className='send-list-left'>
                            <span className='child-title'>配送方式</span>
                            <span className='send-method'>快递配送</span>
                            <p className='send-time'>配送时间：工作日、双休日与节假日均可送货</p>
                       </div>
                       <div className='send-list-right'>
                            <h4 className='seller-name'>商家：壹恺旗舰店</h4>
                            <div className='goods-msg'>
                                <div className='goods-img'>
                                    <img src='./public/indexHeader/img/details.png' />
                                </div>
                                <div className='goods-detail'>
                                    <p className='goods-detail-title'>壹恺 卫衣男套装3件套套春秋冬加绒加厚连帽三件套男士休闲装运动服冬季成套外套休闲</p>
                                    <p className='goods-detail-size'>颜色：1913加绒款  ( 尺码：XL )</p>
                                </div>
                                <div className='goods-price'>￥239.00</div>
                            </div>
                       </div>
                    </div>
                    <div className='seller-service'>
                        <p className='service-msg'>壹恺旗舰店7天内退货，15天内换货</p>
                        <label>商家备注:</label><input placeholder='请输入备注信息'/>
                    </div>
                </div>
                <div className='pay-order-outter'>
                    <div className='pay-order-details'>
                        <ul className='pay-order-details-list-left'>
                            <li>1件商品  总商品金额</li>
                            <li>运费:</li>
                            <li>返现:</li>
                        </ul>
                        <ul className='pay-order-details-list-right'>
                            <li>￥239.00</li>
                            <li>￥0.00</li>
                            <li>-￥0.00</li>
                        </ul>
                    </div>
                </div>

                <div className='pay-money-outter'>
                    <div className='pay-money-inner'>
                        <p className='pay-money-inner-price'>应付金额：<span>￥239.00</span></p>
                        <p className='pay-money-inner-address'>寄送至: 江苏南京市江宁区淳化街道学府风景花园6栋301室  收货人: 山宗十甫寸 175****4335</p>
                    </div>
                </div>

                <div className='submit-outter'>
                    <button>提交订单</button>
                </div>
            </Fragment>
        )
    }
}