import React, {Component} from 'React';
import { Row, Col } from 'antd';
import {NavLink} from 'react-router-dom';
import './main.css';
export default class Footer extends Component{
    render(){
        return (
            <div>
                {/*底部*/}
                <div className="footer-zd">
                    <img src="./img/footer-zd.jpg"/>
                </div>
                <div className="footer-bottom"></div>

                <div class="footer-middle left ">
					<ul class="left">
						<li class="title">新手入门</li>
						<li><a href="#">购物流程</a></li>
						<li><a href="#">购物流程</a></li>
						<li><a href="#">购物流程</a></li>
						<li><a href="#">购物流程</a></li>
					</ul>
					<ul class="left">
						<li class="title">支付方式</li>
						<li><a href="#">货到付款</a></li>
						<li><a href="#">网上支付</a></li>
						<li><a href="#">礼品卡支付</a></li>
						<li><a href="#">其他支付</a></li>
					</ul>
					<ul class="left">
						<li class="title">配送服务</li>
						<li><a href="#">配送进度查询</a></li>
						<li><a href="#">商品验货与签收</a></li>
					</ul>
					<ul class="left">
						<li class="title">售后保障</li>
						<li><a href="#">退换政策</a></li>
						<li><a href="#">联系客服</a></li>
					</ul>
					<ul class="left">
						<li class="title">APP更优惠</li>
                    </ul>
                    <ul class="left">
						<li class="title">加微信查订单</li>
                    </ul>
                    <div></div>
                </div>
                <div className="footer-dit">
                    <ul class="you left clear">
                        <li class="shense lv"><a href="#">泸ICP备16050468号 &nbsp;|</a></li>
                        <li class="shense lv"><a href="#">&nbsp;经营证照&nbsp; |</a></li>
                        <li class="shense lv"><a href="#">&nbsp;互联网药品信息服务资格证&nbsp; |</a></li>
                        <li class="shense lv"><a href="#">&nbsp;违反和不良信息举报电话：0527-88100253 &nbsp;|</a></li>
                        <li class="renzheng lv"><a href="#">&nbsp;沪B2-20170039&nbsp; |</a></li>
                        <li class="renzheng lv"><a href="#">&nbsp;沪公网安备 31010502002939号 &nbsp;|</a></li>
                        <li class="renzheng lv"><a href="#">&nbsp;友情链接 &nbsp;|</a></li>
                        <li class="renzheng lv"><a href="#">&nbsp;出版物经营许可证 &nbsp;|</a></li>
                        <li class="footer-mall">Copyight@ 易购网上商城 2007-2018, All Ringht Reserved</li>
                    </ul>

                </div>
                {/*底部结束*/}
            </div>
        )
    }
}