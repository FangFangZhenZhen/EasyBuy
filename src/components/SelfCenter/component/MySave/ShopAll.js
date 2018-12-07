import React, { Component,Fragment } from 'react';
import axios from 'axios';
import ShopDetail from './ShopDetail';
export default class ShopAll extends Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }

  componentWillMount(){
    axios({
      "url":"http://47.92.98.104:8080/YG/showCollect",
      "method":"get"
    }).then(res=>{
      this.setState({
        list:[...res.data]
      })
      // console.log(...res.data);
    })
  }
  show(){
    if(this.state.list.length>0){
      return this.state.list.map((item,index)=>{
        return(
          <Fragment key={index}>
              <ShopDetail   
                img={this.state.list[index].photo}
                title={this.state.list[index].goodName}
                money={this.state.list[index].price}
              />
          </Fragment>
        )
      })
    }
  }
   render() {
    //  console.log(this.state.list)
     return (
        <div className="shop-all">
           {this.show()}
        </div>
     )
   }
}