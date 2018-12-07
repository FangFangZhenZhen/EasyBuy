import React, {Component} from 'React';
import {NavLink} from 'react-router-dom'
import './filter.css';
import axios from 'axios';

export default class Filter extends Component{
    // checkbox
    constructor(props) {
        super(props);
        this.state       = {
            checkValues: [],
        }
    }

    handlerCheck(e){
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
        // 数据传入Parent
        if (this.props.onChange) {
            this.props.onChange(checkValues);
        }
    }

    // 筛选排序
    clickLists(e){
        $(function(){
            $("#lists li").eq(0).addClass('activeli');
            $("#lists li a").on("click",function(){
                var _index = $("#lists li").index($(this));
                $(this).addClass('activeli').siblings().removeClass();
                $('#lists li').eq(_index).addClass('active').siblings().removeClass();
            })
        })
    }

    handleSubmit=(e)=> {
        e.preventDefault();
        var formData = {
            input1: this.refs['priceInput1'].value,
            input2: this.refs['priceInput2'].value,
        }
        var url = `${this.props.history.location.pathname}`
        console.log(url)
        axios({
            url   : `http://localhost:3000${url}?${formData.input1}&${formData.input2}`,
            method: 'get'
        }).then(res=>{
            this.setState({
                list: [...res.data]
            })
        })
    }
    render(){
        var id        = this.props.id?this.props.id:0;
        var brand     = this.props.brand?this.props.brand:0;
        var classify  = this.props.classify?this.props.classify:0;
        var sortGoods = this.props.sortGoods?this.props.sortGoods:0;
        var check     = this.props.check?this.props.check:0;

        return(
            <div className="filter-box">
                <div className="filter">
                    <div className="filter-li">
                        <ul id="lists">
                            <li><NavLink activeClassName="activefilter" exact to={`/showProduct/${id}/${brand}/${classify}/0/${check}`}>综合
                            </NavLink></li>
                            <li><NavLink activeClassName="activefilter" to={`/showProduct/${id}/${brand}/${classify}/1/${check}`}>销量
                            </NavLink></li>
                            <li><NavLink activeClassName="activefilter" to={`/showProduct/${id}/${brand}/${classify}/2/${check}`}>评论数
                            </NavLink></li>
                            <li><NavLink activeClassName="activefilter" to={`/showProduct/${id}/${brand}/${classify}/3/${check}`}>新品
                            </NavLink></li>
                            <li><NavLink activeClassName="activefilter" to={`/showProduct/${id}/${brand}/${classify}/4/${check}`}>价格
                            </NavLink></li>
                        </ul>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <input ref="priceInput1" type="text" placeholder="￥" id="input1"/>
                            <input ref="priceInput2" placeholder="￥" id="input2"/>
                            <input id="subPrice"  name ="subPrice" type="submit" value="确认" />
                        </form>
                    </div>
                    <div className="filter-check">
                        <input name="goodCheckbox" type="checkbox" value="1" onChange={this.handlerCheck.bind(this)} />
                        &nbsp;货到付款&nbsp;&nbsp;&nbsp;
                        <input name="goodCheckbox" type="checkbox" value="2" onChange={this.handlerCheck.bind(this)} />
                        &nbsp;全球购&nbsp;&nbsp;&nbsp;
                        <input name="goodCheckbox" type="checkbox" value="3" onChange={this.handlerCheck.bind(this)} />
                        &nbsp;仅显示有货&nbsp;&nbsp;&nbsp;
                        <input name="goodCheckbox" type="checkbox" value="4" onChange={this.handlerCheck.bind(this)} />
                        &nbsp;新到商品&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        )
    }
}


