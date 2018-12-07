import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component{
    render(){
        return(
            <Fragment>
                <div className='footer'>
                    <div className='inner'>
                        {/*尾部服务*/}
                        <div className='service'>
                            <div className='item'>
                                <img src='./public/indexHeader/img/footer-icon1.png' />
                                <h3>正品保证</h3>
                                <span>正品行货，放心选购</span>
                            </div>
                            <div className='item'>
                                <img src='./public/indexHeader/img/footer-icon2.png' />
                                <h3>满188包邮</h3>
                                <span>满188免运费</span>
                            </div>
                            <div className='item'>
                                <img src='./public/indexHeader/img/footer-icon3.png' />
                                <h3>售后无忧</h3>
                                <span>7天无理由退货</span>
                            </div>
                            <div className='item'>
                                <img src='./public/indexHeader/img/footer-icon4.png' />
                                <h3>准时送达</h3>
                                <span>收货时间有你做主</span>
                            </div>
                        </div>
                        {/*尾部链接*/}
                        <div className='footer-link'>
                            <dl>
                                <dt>新手入门</dt>
                                <dd><NavLink to='/'>购物流程</NavLink></dd>
                                <dd><NavLink to='/'>购物流程</NavLink></dd>
                                <dd><NavLink to='/'>购物流程</NavLink></dd>
                                <dd><NavLink to='/'>购物流程</NavLink></dd>
                            </dl>
                            <dl>
                                <dt>支付方式</dt>
                                <dd><NavLink to='/'>货到付款</NavLink></dd>
                                <dd><NavLink to='/'>网上支付</NavLink></dd>
                                <dd><NavLink to='/'>礼品卡支付</NavLink></dd>
                                <dd><NavLink to='/'>其他支付</NavLink></dd>
                            </dl>
                            <dl>
                                <dt>配送服务</dt>
                                <dd><NavLink to='/'>配送进度查询</NavLink></dd>
                                <dd><NavLink to='/'>商品验货与签收</NavLink></dd>
                            </dl>
                            <dl>
                                <dt>售后保障</dt>
                                <dd><NavLink to='/'>退换货政策</NavLink></dd>
                                <dd><NavLink to='/'>联系客服</NavLink></dd>
                            </dl>
                            <dl>
                                <dt>APP更优惠</dt>
                            </dl>
                            <dl>
                                <dt>加微信查订单</dt>
                            </dl>
                        </div>
                        {/*版权信息*/}
                        <div className='footer-copy'>
                            <p>
                                <NavLink to='/'>沪ICP备16050468号</NavLink>|
                                <NavLink to='/'>经营执照</NavLink>|
                                <NavLink to='/'>互联网药品信息服务资格证</NavLink>|
                                <span>违法和不良信息举报电话：0527-88100253</span>|
                                <span>沪B2-20170502002939号</span>|
                                <NavLink to='/'>友情链接</NavLink>|
                                <NavLink to='/'>出版物经营许可证</NavLink>
                            </p>
                            <h4>Copyright@ 易购网上商城 2007-2018，All Right Reserved</h4>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}