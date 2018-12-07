import React, {Component,Fragment} from 'React';
import {NavLink} from 'react-router-dom'
import './index.css'
import axios from 'axios'
import GoodsListItem from './GoodsListItem';
export default class HotGoods extends Component{
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
            // console.log(res.data[2])
            this.setState({
                list:[...res.data[2]]
            })
        })
    }

    showItem(){
        // console.log(this.state.newGoods.imgs)
        if(this.state.list.length>0){
           return this.state.list.map((item,index)=>{
                return (
                    <Fragment key={index}>
                        <GoodsListItem
                        pic={this.state.list[index].photo}
                        title={this.state.list[index].goodName}
                        />
                    </Fragment>
                )
            })
        }
    }
    render(){
        return(
            <div>
                <div className='new-goods'>
                    <div className='ng-inner'>
                        <h3>
                            热卖商品
                            <NavLink to='/showProduct'>更多</NavLink>
                        </h3>
                        <div className='goods-list'>

                            {this.showItem()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}