import React, {Component} from 'React';
// import { Nav, NavItem, NavLink} from 'reactstrap';
import { Modal,Tabs} from 'antd';
import './order.css';
import {fetchList,orderDetail,toggle,fetchListIn,fetchAll} from '../../action/order';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Axios from 'axios';

const mapStateToProps = state => {
    return {
        lists:state.lists,
        list:state.list,
        modal: state.modal,
        // orderState:state.orderState,
        // chose:state.chose
    };
  };
class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            page:1,
            orderState:1,
            chose:0
        }
    }
    handlerOrder=(e)=>{
        var id=e.target.getAttribute("data-order");
        this.props.orderDetail(id);
    }
    componentDidMount(){
        this.props.fetchListIn({page:1});
    }
    showList=()=>{
        var list=this.props.lists;
        return list.map((item,i)=>{
            var price=(list[i].subtotal*list[i].goodCount).toFixed(2);
            var text="";
            if(list[i].orderStatus==1){
                text="待付款";
            }else if(list[i].orderStatus==2){
                text="待收货";
            }else if(list[i].orderStatus==3){
                text="待评价";
            }
            return  (
                <tbody key={i} className="order-body">
                   <tr className="order-date">
                       <td colSpan="4">
                            {list[i].createDate}
                            <span className="order-num">订单号：{list[i].orderNo}</span>
                       </td>
                     </tr>
                     <tr className="order-det">
                         <td className="order-border">
                            <ul className="order-det-d">
                                <li className="order-img">
                                    <img src={'http://47.92.98.104:8080/YG/img/'+list[i].photo}/>
                                </li>
                                <li className="order-img-det">
                                    {list[i].goodName}
                                </li>
                                <li className="order-qu">
                                    x{list[i].goodCount}
                                </li>
                                <li className="order-server">
                                    申请售后
                                </li>
                            </ul>
                         </td>
                         <td className="order-border">
                            <p>总额 ¥ {price}</p>
                            <p>在线支付</p>
                         </td>
                         <td className="order-border"><p>{text} </p><p onClick={this.handlerOrder} data-order={list[i].orderNo} ref="order">订单详情</p></td>
                         <td className="order-border"><p>查看发票</p><NavLink className="order-btn" to='/paypage' >立即购买</NavLink></td>
                     </tr>
                     <tr className="space"></tr>
                 </tbody>
            )
        })
    }
    showOrder=()=>{
        // if(this.props.list.length>0){

            var price=(this.props.list.subtotal*this.props.list.goodCount).toFixed(2);
            var text="";
            if(this.props.list.orderStatus==1){
                text="待付款";
            }else if(this.props.list.orderStatus==2){
                text="待收货";
            }else if(this.props.list.orderStatus==3){
                text="待评价";
            }
            return (
                <Modal visible={this.props.modal}  title="订单详情" onOk={this.props.toggle} onCancel={this.props.toggle}>
                        <div className="orderDetail-img">
                            <img src={'http://47.92.98.104:8080/YG/img/'+this.props.list.photo}/>
                            <p>商品单价：{this.props.list.subtotal}</p>
                            <p>商品数量：{this.props.list.goodCount}</p>
                            <p>总额：{price}</p>
                            <p>实付款：{price}</p>
                            <p>交易状态:{text}</p>
                        </div>
                </Modal>
            )
        // }
    }
    handlerState=(e)=>{
        var orderS=e.target.getAttribute('data-state');

        this.setState({
            orderState:orderS,
        },()=>{
            this.props.fetchList(this.state.orderState);
        });
    }

    // handleValue=(e)=>{
    //     var valueS=e.target.value;
    //     this.setState({
    //         orderState:this.state.orderState,
    //         chose:valueS
    //     },()=>{
    //         console.log(this.state.orderState,this.state.chose)
    //         this.props.fetchList({page:this.state.page,orderState:this.state.orderState,chose:valueS});
    //     });

    // }
    handlerAllOrder=(e)=>{
        this.props.fetchAll();
    }
    handlerPage=(e)=>{
        var str=e.target.getAttribute('data-page');
        if(str=="last"&&this.state.page>1){
            this.setState({
                page:this.state.page-1
            },()=>{
                this.props.fetchListIn({page:this.state.page})
            })
        }else if(str=="last"&&this.state.page==1){
            this.setState({
                page:1
            },()=>{
                this.props.fetchListIn({page:1})
            })
        }else if(str=="next"&&this.props.lists.length>0){
            this.setState({
                page:this.state.page+1
            },()=>{
                this.props.fetchListIn({page:this.state.page})
            })
        }else{
            // this.setState(prevState=>({
            //     page:prevState.page
            // }))
            this.props.fetchListIn({page:this.state.page})
        }
    }
    render(){
        return(
            <div className="order-bg">
                <div>
                    <ul className="order-list">
                        <li className="order-it">
                            <p  className="order-li" onClick={this.handlerAllOrder}>全部订单</p>
                        </li>
                        <li className="order-it">
                            <p  className="order-li" onClick={this.handlerState} data-state="1">待付款</p>
                        </li>
                        <li className="order-it">
                            <p  className="order-li" onClick={this.handlerState} data-state="2">待收货</p>
                        </li>
                        <li className="order-it">
                            <p className="order-li" onClick={this.handlerState} data-state="3">待评价</p>
                        </li>
                        <li className="order-la">
                            <p  className="order-li" onClick={this.handlerAllOrder}>我的常购商品</p>
                        </li>
                    </ul>
                </div>
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <td className="order-sel-m">
                                    <select className="order-sel" >
                                    {/*onClick={this.handleValue}*/}
                                        <option value="0">近三个月的订单</option>
                                        <option value="1">近两个月的订单</option>
                                        <option value="2">近一个月的订单</option>
                                        <option value="3">2018年的订单</option>
                                    </select>
                                    <span>订单详情</span>
                                </td>
                                {/*<td>订单详情</td>*/}
                                <td className="order-p">金额</td>
                                <td className="order-p">全部状态</td>
                                <td className="order-p">操作</td>
                            </tr>
                        </thead>
                        {this.showList()}
                    </table>
                    <div className="order-page">
                        <span className="order-last" onClick={this.handlerPage} data-page="last">上一页</span>
                        <span className="order-n">{this.state.page}</span>
                        <span className="order-next" onClick={this.handlerPage} data-page="next">下一页</span>
                    </div>
                    {this.showOrder()}
                </div>
            </div>
        )
    }
}
export default connect(
    mapStateToProps,
    { fetchList,orderDetail,toggle,fetchListIn,fetchAll}
  )(Order);