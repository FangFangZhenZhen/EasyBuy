import React, {Component,Fragment} from 'React';
import GuessTitle from './GuessTitle'
import './index.css'
import GoodsItem from './GoodsItem';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
export default class GuessLike extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        axios({
            url:'http://47.92.98.104:8080/YG/index',
            method:'get'
        }).then(res=>{
            // console.log(res.data[5])
            this.setState({
                list:[...res.data[5]]
            })
        })
    }
    showList=()=>{
        return this.state.list.map((item,index)=>{
            return (
                <div key={index}>
                    <GoodsItem
                        pic={this.state.list[index].photo}
                        title={this.state.list[index].goodName}
                        price={this.state.list[index].price}
                    />
                </div>
            )
        })
    }
    render(){
        return(
            <Fragment>
                <GuessTitle />
                <div className='goods-content'>{this.showList()}</div>
            </Fragment>
        )
    }
}