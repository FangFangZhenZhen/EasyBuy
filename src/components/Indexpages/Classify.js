import React, {Component,Fragment} from 'React';
import './index.css'
import ClassifyItem from './ClassifyItem';
import axios from 'axios'
export default class Classify extends Component{
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
            this.setState({
                list:[...res.data[1]]
            })
        })
    }
    show(value){
        if(this.state.list.length>0){
            var newData = this.state.list[value].listSecondCategory
            return newData.map((item,index)=>{

                return (
                    <Fragment key={newData[index].cId}>
                        <ClassifyItem
                            title={newData[index].cname}
                            items={newData[index].thirdCategory}
                        />
                    </Fragment>
                )
            })

        }
    }
    render(){
        return(
            <Fragment>
                <div className='classify'>
                    <h3 className='goods-title'>商品分类</h3>
                    <ul className='classify'>
                        <li>女装
                            <div className='male-cloth'>
                                {this.show(0)}
                            </div>
                        </li>
                        <li>男装
                            <div className='female-cloth'>
                            {this.show(1)}
                            </div>
                        </li>
                        <li>鞋靴
                            <div className='shoes'>
                            {this.show(2)}
                            </div>
                        </li>
                        <li>家电
                            <div className='appliance'>
                            {this.show(3)}
                            </div>
                        </li>
                        <li>办公
                            <div className='office'>
                            {this.show(4)}
                            </div>
                        </li>
                        <li>箱包
                            <div className='bags'>
                            {this.show(5)}
                            </div>
                        </li>
                        <li>美妆
                            <div className='beauty'>
                            {this.show(6)}
                            </div>
                        </li>
                        <li>珠宝
                            <div className='jewelry'>
                            {this.show(7)}
                            </div>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
}