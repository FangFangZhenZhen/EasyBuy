import React, {Component} from 'React';
import {NavLink,withRouter} from 'react-router-dom';
import axios from 'axios';
import './Nav.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import { Breadcrumb,Icon } from 'antd';

class Nav extends Component{

    // checkbox
        getInitialState() {
            return {
                checkValues: [],
            }
        }
        handleCheck(e){
        }
        handleCheck1(e) {
            var checkValues = this.state.checkValues.slice();
            var newVal      = e.target.value;
            var index       = checkValues.indexOf(newVal);
            if (index == -1) {
                checkValues.push(newVal)
            } else {
                checkValues.splice(index, 1);
            }

            this.setState({
                checkValues: checkValues,
            })
        }

    // 精确搜索
    constructor(props){
        super(props);
        this.state={
            list        : [],
            listBrand   : [],
            listClassify: [],
            listBread   : []
        }
    }

    componentWillMount(){
        axios({
            url   : `http://47.92.98.104:8080/YG/showGoods?currentpage=1&pagecount=25`,
            method: 'get'
        }).then(res=>{
            res.data[2].map((item,index)=>{
                var listBread = res.data[1][0].cname;
                this.state.listBread.push(listBread);

                var listlimit    = res.data[0][index].img;
                var listClassify = res.data[2][index].goodMarque;

                 if ( this.state.listBrand.indexOf(listlimit) == -1 && listlimit !="") {
                    this.state.listBrand.push(listlimit)
                }
                if(this.state.listClassify.indexOf(listClassify) == -1 && listClassify != undefined){
                    this.state.listClassify.push(listClassify)
                }
            })

            this.setState({
                listBread   : this.state.listBread,
                listClassify: this.state.listClassify,
                listBrand   : this.state.listBrand,
                list        : [...res.data[2]]
            })
        })
    }

    // 品牌搜索
    showList=()=>{
        var id        = this.props.match.params.id?this.props.match.params.id:0;
        var brand     = this.props.match.params.brand?this.props.match.params.brand:0;
        var classify  = this.props.match.params.classify?this.props.match.params.classify:0;
        var sortGoods = this.props.match.params.sortGoods?this.props.match.params.sortGoods:0;
        var check     = this.props.match.params.check?this.props.match.params.check:0;
        return this.state.list.map((item,index)=>{
            return(
                    <li key={index}>
                        <NavLink activeClassName="active" data-type={index} to={`/YG/showGoods?currentpage=1&pagecount=25&goodName=ZARA`}
                        >
                            <img src={'http://47.92.98.104:8080/YG/img/'+this.state.listBrand[index]}/>
                        </NavLink>
                    </li>
            )
        })
    }

    // 精确搜索-分类
    showListFl=(e)=>{
        var id        = this.props.match.params.id?this.props.match.params.id:0;
        var brand     = this.props.match.params.brand?this.props.match.params.brand:0;
        var classify  = this.props.match.params.classify?this.props.match.params.classify:0;
        var sortGoods = this.props.match.params.sortGoods?this.props.match.params.sortGoods:0;
        var check     = this.props.match.params.check?this.props.match.params.check:0;

        return this.state.list.map((item,index)=>{
            return(
                <li key={index}>
                <nav>
                    <NavLink className="nav-item nav-link" activeClassName="activeNav"  data-type={index} to={`/YG/showGoods?currentpage=1&pagecount=25&goodName=ZARA`}>
                        {this.state.listClassify[index]}
                    </NavLink>
                </nav>
                </li>
            )
        })
    }

    //点击更多收起，切换
    componentDidMount(){
        $('')
        $('.clickmore').click(function(){
            if($('.clickmore').html()=="更多"){
                $('.classify-pinpai').removeClass('maxheight');
                $('.clickmore').html('收起');
                $('.arrow').attr('type', 'up');
                $('.left-title-pp').removeClass('maxheight');
                var height = $('.classify-pinpai').height();
                $('.left-title-pp').height(height);
            }else{
                $('.classify-pinpai').addClass('maxheight');
                $('.clickmore').html('更多');
                $('.arrow').attr('type','down');
                $('.left-title-pp').removeClass('maxheight');
                $('.left-title-pp').addClass('maxheight');
            }
        })
        $('.clickmore-fl').click(function(){
            if($('.clickmore-fl').html()=="更多"){
                $('.classify-fenlei').removeClass('maxheight2');
                $('.clickmore-fl').html('收起');
                $('.arrow2').attr('type', 'up');
                $('.fl-left-title').removeClass('maxheight2');
                var height = $('.classify-fenlei').height();
                $('.fl-left-title').height(height);
            }else{
                $('.classify-fenlei').addClass('maxheight2');
                $('.clickmore-fl').html('更多');
                $('.arrow2').attr('type','down');
                $('.fl-left-title').addClass('maxheight2');
            }
        })
    }

    render(){
        return(
            <div className="nav-box">
                <div className="nav">
                    <div className="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <NavLink to='/'>当季流行 </NavLink>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="nav-classify">
                        <div className="classify-pinpai maxheight">
                            <div className="left-title left-title-pp maxheight"><p>品牌</p></div>
                            <div className="mid-title pp-mid-title">
                                <ul>
                                    {this.showList()}
                                </ul>
                            </div>
                            <div className="right-title">
                                <div className="clickmore">更多</div>
                                <Icon className="arrow" type="down"/>
                            </div>
                        </div>
                        <div className="classify-fenlei maxheight2">
                            <div className="left-title fl-left-title "><p>分类</p></div>
                            <div className="fl-mid-title">
                                <ul>
                                    {this.showListFl()}
                                </ul>
                            </div>
                            <div className="right-title-fl">
                                <div className="clickmore-fl">更多</div>
                                <Icon className="arrow2" type="down"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }


    export default withRouter(Nav)


