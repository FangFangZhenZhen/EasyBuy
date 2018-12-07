import React, {Component} from 'React';
import store from '../../store'
import JQ from 'jquery';
import {NavLink} from 'react-router-dom'



// 获取数据
//        var L           = require('lodash') ;
//        var initalState = []

// function carts(state=initalState,action){
//     switch(action.type){
//         case "ADDTOCARTS":
//         var pos = L.findIndex(state,{id:action.data.id });
//         if(pos!==-1){
//             state[pos].quantity = state[pos].quantity+1;
//             return [...state]
//         }else{
//             acorn.data.quantity = 1;
//             return[...state,action.data]
//         }
//       default:
//          return state;
//     }
// }

import './cart.css'
// import { Badge,Switch } from 'antd';


export default class shopCart extends Component{


    state = {
        count : 1,
        count1: 1,
        count2: 1,
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
        // alert(count)
      }
      increase1 = () => {
        const count1 = this.state.count1 + 1;
        this.setState({ count1 });
        // alert(count)
      }
      increase2 = () => {
        const count2 = this.state.count2 + 1;
        this.setState({ count2 });
        // alert(count)
      }

      decline = () => {
        let count = this.state.count - 1;
        if (count < 0) {
          count = 0;
        }else{
             this.setState({ count });
        }


      };
      decline1 = () => {
        let count1 = this.state.count1 - 1;


        if (count1 < 0) {
            count1 = 0;
          }else{
               this.setState({ count1 });
          }

      };
      decline2 = () => {
        let count2 = this.state.count2 - 1;


        if (count2 < 0) {
            count2 = 0;
          }else{
               this.setState({ count2 });
          }

      };










    render(){
        if(store.getState().loginStatus){


        return(
            <div id='Allbox'>
                <div id='car-header'>

                    全部商品
                </div>
                <div id='car-nav'>
                        <div className="cart-thead">
                            <div className="cart-col t-checkbox">
                                <div className="cart-checkbox">
                                    <input type="checkbox"  name="" id="" className="allsel" value="" /> 全选
                                </div>
                            </div>
                                <div className="cart-col t-goods">商品</div>
                                <div className="cart-col t-props"></div>
                                <div className="cart-col t-prices">单价(元)</div>
                                <div className="cart-col t-quantity">数量</div>
                                <div className="cart-col t-sum">小计(元)</div>
                                <div className="cart-col t-action">操作</div>
                        </div>
                </div>
               {/*商品列表 */}


                <div id='cart-list'>

                <div className='cart-list-box'>
                    <div className='cart-list-check  cell'>
                    <input  type='checkbox' />
                    </div>
                    <div className='cart-list-sp cell'>
                        <div className='cart-list-sppic'>
                        <img src='//img.pinzhi365.com/upload/601/603/21088206/21088248/21088451/1583196_31017150_orig_5864.jpg'></img>

                        </div>
                        <div className='cart-list-spname'>
                            <p>女式连衣裙</p>
                        </div>
                    </div>
                    <div className='cart-list-spclass  cell'>
                        <p>商品分类</p>
                    </div>
                    <div className='cart-list-spprice  cell'>
                        <p className='cart-list-spprice' className='danjia'>999</p>
                    </div>
                    <div className='cart-list-spnumber '>
                        <div className='numberbox'   >

                            <a onClick={this.decline }className='numberdown' >
                            -
                            </a>

                            <input type='text'  value={this.state.count} className='inpval'
                            onChange={singlegoodsprice()} />

                            <a onClick={this.increase}  className='numberup'>
                            +
                            </a>


                        </div>
                    </div>
                    <div className='cart-list-total  cell' >
                    <p className='cart-list-totalnum'  onChange={totalprice()}>999</p>
                    </div>
                    <div className='cart-list-operation  cell'>
                    <p>删除</p>
                    </div>
                </div>
            </div>


            <div id='cart-list'>

                <div className='cart-list-box'>
                    <div className='cart-list-check  cell'>
                    <input  type='checkbox' />
                    </div>
                    <div className='cart-list-sp cell'>
                        <div className='cart-list-sppic'>
                        <img src='https://gd4.alicdn.com/imgextra/i4/856979316/TB2TCQcllDH8KJjSszcXXbDTFXa_!!856979316.jpg_400x400.jpg'></img>

                        </div>
                        <div className='cart-list-spname'>
                            <p>韩版长袖衬衣</p>
                        </div>
                    </div>
                    <div className='cart-list-spclass  cell'>
                        <p>商品分类</p>
                    </div>
                    <div className='cart-list-spprice  cell'>
                        <p className='danjia1' >119</p>
                    </div>
                    <div className='cart-list-spnumber '>
                        <div className='numberbox' >

                            <a onClick={this.decline1} className='numberdown'>
                            -
                            </a>

                            <input type='text'  value={this.state.count1}  className='inpval1' onChange={singlegoods1()}/>

                            <a onClick={this.increase1}  className='numberup'>
                            +
                            </a>

                        </div>
                    </div>
                    <div className='cart-list-total  cell'>
                    <p className='cart-list-totalnum1' >119</p>
                    </div>
                    <div className='cart-list-operation  cell'>
                    <p>删除</p>
                    </div>
                </div>
            </div>


            <div id='cart-list'>

                <div className='cart-list-box'>
                    <div className='cart-list-check  cell'>
                    <input  type='checkbox' />
                    </div>
                    <div className='cart-list-sp cell'>
                        <div className='cart-list-sppic'>
                        <img src='https://gd3.alicdn.com/imgextra/i1/25583300/O1CN01QcbSGo1aFRUsIW2lA_!!25583300.jpg'></img>

                        </div>
                        <div className='cart-list-spname'>
                            <p>蝙蝠袖T恤女</p>
                        </div>
                    </div>
                    <div className='cart-list-spclass  cell'>
                        <p>商品分类</p>
                    </div>
                    <div className='cart-list-spprice  cell'>
                        <p className='danjia2' >119</p>
                    </div>
                    <div className='cart-list-spnumber '>
                        <div className='numberbox' >

                            <a onClick={this.decline2} className='numberdown'>
                            -
                            </a>

                            <input type='text'  value={this.state.count2} className='inpval2'  onChange={singlegoods2()}/>

                            <a onClick={this.increase2}  className='numberup'>
                            +
                            </a>

                        </div>
                    </div>
                    <div className='cart-list-total  cell'>
                    <p className='cart-list-totalnum2'  >119</p>
                    </div>
                    <div className='cart-list-operation  cell'>
                    <p>删除</p>
                    </div>
                </div>
            </div>

            {/*购物车下方的全选 及商品总数   价格总计 */}
            <div id='cart-footer'>
                <div className='cart-footerinput'>
                    <input  type='checkbox'/>全选
                </div>
                <div className='cart-footercenter'>
                    <a href="javascript:void(0)">删除选中的商品</a>
                    <a href="javascript:void(0)">移到我的关注</a>
                </div>
                <div className='cart-footerright'>
                            <div className="cart-footer-price">
                                <span className="txt">总价：</span>
                                <span className="totalprice">￥1237.00</span><br></br>
                                <span className="txt">已节省：</span>
                                <span className="totalsave">-￥0.00</span>
                            </div>
                            <div className="cart-footernumber">
                                已选择
                                <em className='em'>3</em> 件商品
                                <b></b>
                            </div>
                            <div className='cart-btn'>
                            <a className='cart-btna'>结算</a>
                            </div>
                </div>

            </div>


            </div>
        )

    }else{
          return(
            <div className='cart-content'>
            <img src='../../../public/indexHeader/img/shopcart.png'/>
            <div className='cart-tips'>
                <h2>亲，您的购物车空空如也！ </h2>
                <NavLink className='login' to='/loginregister'>去登录</NavLink>
                <NavLink className='login' to='/'>去购物</NavLink>
            </div>
        </div>
          )
      }
    }
}





function totalprice() {//计算总价
    // alert(1)
   var total    = 0;  //总的价格
   var countnum = 0;  //总的数量
    // JQ('.goods-item:visible').each(function() {//可视的商品列表进行遍历，循环叠加
       //商品的复选框是选中的
            total += parseFloat(JQ('.cart-list-totalnum').html())+parseFloat(JQ('.cart-list-totalnum1').html())+parseFloat(JQ('.cart-list-totalnum2').html());


            countnum += parseInt(JQ('.inpval').val())+parseInt(JQ('.inpval1').val())+parseInt(JQ('.inpval2').val())+1;

    // });
    // console.log(parseFloat(JQ('.cart-list-totalnum1').html()))
    //赋值
    aaa(total,countnum)
}
function aaa(total,countnum){
    JQ('.totalprice').html('￥' + total.toFixed(2));
    JQ('.em').html(countnum);
}

function singlegoodsprice() { //row:当前元素

    let $dj    = parseFloat(JQ('.danjia').html());
    let inpuva = parseFloat(JQ('.inpval').val());
    let xiaoji = $dj*inpuva+$dj
    console.log(xiaoji)
    JQ('.cart-list-totalnum').html(xiaoji);
}

function singlegoods1() { //row:当前元素


         let $dj1    = parseFloat(JQ('.danjia1').html());
         let inpuva1 = parseFloat(JQ('.inpval1').val());
         let xiaoji1 = $dj1*inpuva1

    JQ('.cart-list-totalnum1').html(xiaoji1);


}
function singlegoods2() { //row:当前元素



    let $dj2    = parseFloat(JQ('.danjia2').html());
    let inpuva2 = parseFloat(JQ('.inpval2').val());
    let xiaoji2 = $dj2*inpuva2
    JQ('.cart-list-totalnum2').html(xiaoji2);


}


// export dafault carts;