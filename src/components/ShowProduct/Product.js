import React, {Component} from 'React';
import axios from 'axios';
import { withRouter,NavLink } from 'react-router-dom';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import './product.css'

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            list : [],
            page : 1,
            limit: 25
        }
    }

    componentWillMount(){
        axios({
            url   : `http://47.92.98.104:8080/YG/showGoods?currentpage=1&pagecount=25`,
            method: 'get'
        }).then(res=>{
            console.log(1)
            this.setState({
                list: [...res.data[2]]
            })
        })
    }

    showList=()=>{
        return this.state.list.map((item,index)=>{
            return(
                <div className="product-box" key={index}>
                    <NavLink className='goods-box' to='/prodetails'></NavLink>
                    <div className="product-img">
                        <img src={'http://47.92.98.104:8080/YG/img/'+this.state.list[index].photo} />
                    </div>
                    <p className="price">￥{this.state.list[index].price}</p>
                    <p className="title">{this.state.list[index].goodName}</p>
                    <p className="shop">{this.state.list[index].shopName}</p>
                    <div className="pro_btm">
                        <div className="pro_btm_left">月成交{this.state.list[index].monthly_turnover}笔</div>
                        <div className="pro_btm_mid">评论{this.state.list[index].remark}</div>
                        <div className="pro_btm_right"><img src="./public/indexHeader/img/icon.png" /></div>
                    </div>
                </div>
            )
        })

    }

    showPages = () => {
        if (this.state.list && this.state.list[0]!= undefined) {
            var pageSum  = Math.ceil(this.state.list[0].total/this.state.limit)
            var pagesJSX = [];
            for (let i = 1; i <= pageSum; i++) {
                pagesJSX.push(
                    <PaginationItem key={i}>
                        <PaginationLink href="javascript:;" data-page={i} onClick={e=>this.changePage(e)}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
            return pagesJSX;
        } else {
            return null;
        }
    };

    changePage = e => {
        var changePage      = e.target.getAttribute('data-page');
            this.state.page = changePage;
            axios({
                url   : `http://42.92.98.104:8080/YG/showGoods?currentpage=1&pagecount=25`,
                method: 'get'
            }).then(res=>{
                this.setState({
                    list: [...res.data[2]]
                })
            })
    }

    render(){
        return(
            <div className="product_inner">
                {this.showList()}
                <div className="empty"></div>
                <div className="page_box">
                    <Pagination aria-label="Page navigation example">
                        {this.showPages()}
                    </Pagination>
                </div>
            </div>
        )
    }
}


