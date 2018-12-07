import React, {Component} from 'React';
import {Swtich, Route, Router, HashHistory, Link,NavLink,ReactDOM} from 'react-router-dom';
import style from './tategory.css'
import { Layout, Menu, Breadcrumb, Icon,Modal,Button,Pagination  } from 'antd';
import axios from 'axios'
import Contentcom from './Content'
const {  Content,  Sider } = Layout;
const SubMenu              = Menu.SubMenu;
export default  class Tatagory extends Component {
    constructor(props){
        super(props)
        this.state={
            api          : "http://localhost:3000",
            getdata      : [],
            content      : [],
            title        : '',
            img          : [],
            visible      : false,
            contentPath  : '',
            contentHeader: '',
            isOpen       : false,
            iconType     : 'plus-circle'
        }
    }
    componentDidMount=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/activity`,
          }).then(res=>{
              this.setState({
                contentHeader: '常见问题',
                getdata      : res.data.activity1
              })
          });
    }
    componentWillReceiveProps=(newprops,newstate)=>{
        // console.log(newprops.condata)
        this.setState({
          getdata: newprops.condata
        })
    }
    handleOk = (e) => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    }

    handleCancel = (e) => {
      // console.log(e);
      this.setState({
        visible: false,
      });
    }
    getactivity_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/activity`,
          }).then(res=>{
              this.setState({
                getdata: res.data.activity1
              })
          });
          var conpath = this.refs.activity_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '大促活动中心'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)

    }
    getaccount_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account1,
              })
          });
          var conpath = this.refs.account_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaccount_2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account2
              })
          });
          var conpath = this.refs.account_2.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaccount_3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account3
              })
          });
          var conpath = this.refs.account_3.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaccount_4=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account4
              })
          });
          var conpath = this.refs.account_4.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaccount_5=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account5
              })
          });
          var conpath = this.refs.account_5.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaccount_6=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/account`,
          }).then(res=>{
              this.setState({
                getdata: res.data.account6
              })
          });
          var conpath = this.refs.account_6.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '账户与安全'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getbuy_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/buy`,
          }).then(res=>{
              this.setState({
                getdata: res.data.buy1
              })
          });
          var conpath = this.refs.buy_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '购买指南'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getbuy_2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/buy`,
          }).then(res=>{
              this.setState({
                getdata: res.data.buy2
              })
          });
          var conpath = this.refs.buy_2.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '购买指南'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getbuy_3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/buy`,
          }).then(res=>{
              this.setState({
                getdata: res.data.buy3
              })
          });
          var conpath = this.refs.buy_3.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '购买指南'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getbuy_4=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/buy`,
          }).then(res=>{
              this.setState({
                getdata: res.data.buy4
              })
          });
          var conpath = this.refs.buy_4.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '购买指南'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getpayment_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/payment`,
          }).then(res=>{
              this.setState({
                getdata: res.data.payment1
              })
          });
          var conpath = this.refs.payment_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '付款问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getpayment_2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/payment`,
          }).then(res=>{
              this.setState({
                getdata: res.data.payment2
              })
          });
          var conpath = this.refs.payment_2.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '付款问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getpayment_3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/payment`,
          }).then(res=>{
              this.setState({
                getdata: res.data.payment3
              })
          });
          var conpath = this.refs.payment_3.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '付款问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getlogistics_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/logistics`,
          }).then(res=>{
              this.setState({
                getdata: res.data.logistics1
              })
          });
          var conpath = this.refs.logistics_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '发货物流问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getlogistics_2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/logistics`,
          }).then(res=>{
              this.setState({
                getdata: res.data.logistics2
              })
          });
          var conpath = this.refs.logistics_2.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '发货物流问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getlogistics_3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/logistics`,
          }).then(res=>{
              this.setState({
                getdata: res.data.logistics3
              })
          });
          var conpath = this.refs.logistics_3.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '发货物流问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getlogistics_4=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/logistics`,
          }).then(res=>{
              this.setState({
                getdata: res.data.logistics4
              })
          });
          var conpath = this.refs.logistics_4.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '发货物流问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_1=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket1
              })
          });
          var conpath = this.refs.aftermarket_1.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_2=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket2
              })
          });
          var conpath = this.refs.aftermarket_2.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_3=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket3
              })
          });
          var conpath = this.refs.aftermarket_3.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_4=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket4
              })
          });
          var conpath = this.refs.aftermarket_4.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_5=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket5
              })
          });
          var conpath = this.refs.aftermarket_5.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getaftermarket_6=()=>{
        axios({
            method: 'get',
            url   : `${this.state.api}/aftermarket`,
          }).then(res=>{
              this.setState({
                getdata: res.data.aftermarket6
              })
          });
          var conpath = this.refs.aftermarket_6.props.children;
          this.setState({
            contentPath  : conpath,
            contentHeader: '退款&售后问题'
          },()=>{
            // setState为异步处理 所以不能直接打印出改变的值需要在回调函数中打印
            // console.log(this.state.contentPath)
          });
          // console.log(conpath)
    }
    getdetail=(value)=>{
      var con = this.state.content;
          con.unshift(value.content)
      this.setState({
        content: con,
        title  : value.title,
        visible: true,
        img    : value.img
      })
        // console.log(this.state.img)
    }
    //改变图标（展示不用）
    // changeIcon=()=>{
    //   var isOpen = this.state.isOpen
    //   if(!isOpen){
    //     this.setState({
    //       iconType: 'minus-circle',
    //       isOpen  : true
    //     })
    //   }
    //   if(isOpen){
    //     this.setState({
    //       iconType: 'plus-circle',
    //       isOpen  : false
    //     })
    //   }
    // }
    onChangePage=(value)=>{
      console.log(value) //当前页码
    }
    render() {
        return (
          <Layout style={{ minHeight: '80vh' , width :'70%',margin:"0 auto",position: 'relative',top:"-50px",background:"transparent"}}>
            <Sider

            >
              <div className="helpCenter_tatelogo" style={{borderRadius:"10px 10px 0 0 "}}> <Icon type="book" style={{color:'white'}}/><span style={{color:'white'}} >知识分类</span></div>
              <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{borderRadius:"0 0 10px 0 "}}>
              <SubMenu

                    key   = "activity"
                    title = {<span><Icon type={this.state.iconType}/><span>大促活动中心</span></span>}

                >
                  <Menu.Item ref="activity_1" key="activity_1" onClick={this.getactivity_1}>2018年双十一大促</Menu.Item>
                </SubMenu>
                <SubMenu
                  key   = "account"
                  title = {<span><Icon type="plus-circle" /><span>账户与安全</span></span>}
                >
                  <Menu.Item ref="account_1" key="account_1" onClick={this.getaccount_1}>账户与安全汇总类目</Menu.Item>
                  <Menu.Item ref="account_2" key="account_2" onClick={this.getaccount_2}>账户注册</Menu.Item>
                  <Menu.Item ref="account_3" key="account_3" onClick={this.getaccount_3}>忘记密码</Menu.Item>
                  <Menu.Item ref="account_4" key="account_4" onClick={this.getaccount_4}>账户无法登录</Menu.Item>
                  <Menu.Item ref="account_5" key="account_5" onClick={this.getaccount_5}>账户注销</Menu.Item>
                  <Menu.Item ref="account_6" key="account_6" onClick={this.getaccount_6}>个人资料修改</Menu.Item>
                </SubMenu>
                <SubMenu
                  key   = "buy"
                  title = {<span><Icon type="plus-circle" /><span>购买指南</span></span>}
                >
                  <Menu.Item ref="buy_1" key="buy_1" onClick={this.getbuy_1}>购买指南汇总类目</Menu.Item>
                  <Menu.Item ref="buy_2" key="buy_2" onClick={this.getbuy_2}>会员体系</Menu.Item>
                  <Menu.Item ref="buy_3" key="buy_3" onClick={this.getbuy_3}>订单管理</Menu.Item>
                  <Menu.Item ref="buy_4" key="buy_4" onClick={this.getbuy_4}>确认收货</Menu.Item>
                </SubMenu>
                <SubMenu
                  key   = "payment"
                  title = {<span><Icon type="plus-circle" /><span>付款问题</span></span>}
                >
                  <Menu.Item ref="payment_1" key="payment_1" onClick={this.getpayment_1}>付款问题汇总类目</Menu.Item>
                  <Menu.Item ref="payment_2" key="payment_2" onClick={this.getpayment_2}>付款方式</Menu.Item>
                  <Menu.Item ref="payment_3" key="payment_3" onClick={this.getpayment_3}>付款不成功</Menu.Item>
                </SubMenu>
                <SubMenu
                  key   = "logistics"
                  title = {<span><Icon type="plus-circle" /><span>发货物流问题</span></span>}
                >
                  <Menu.Item ref="logistics_1" key="logistics_1" onClick={this.getlogistics_1}>发货物流汇总类目</Menu.Item>
                  <Menu.Item ref="logistics_2" key="logistics_2" onClick={this.getlogistics_2}>物流查询</Menu.Item>
                  <Menu.Item ref="logistics_3" key="logistics_3" onClick={this.getlogistics_3}>验货与签收</Menu.Item>
                  <Menu.Item ref="logistics_4" key="logistics_4" onClick={this.getlogistics_4}>物流服务</Menu.Item>
                </SubMenu>
                <SubMenu
                  key   = "aftermarket"
                  title = {<span><Icon type="plus-circle" /><span>退款&售后问题</span></span>}
                >
                  <Menu.Item ref="aftermarket_1" key="aftermarket_1" onClick={this.getaftermarket_1}>退款&售后问题汇总</Menu.Item>
                  <Menu.Item ref="aftermarket_2" key="aftermarket_2" onClick={this.getaftermarket_2}>没有收到商品</Menu.Item>
                  <Menu.Item ref="aftermarket_3" key="aftermarket_3" onClick={this.getaftermarket_3}>收到商品有问题</Menu.Item>
                  <Menu.Item ref="aftermarket_4" key="aftermarket_4" onClick={this.getaftermarket_4}>退换修</Menu.Item>
                  <Menu.Item ref="aftermarket_5" key="aftermarket_5" onClick={this.getaftermarket_5}>急速退款</Menu.Item>
                  <Menu.Item ref="aftermarket_6" key="aftermarket_6" onClick={this.getaftermarket_6}>退款去向</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ background:'#fff',marginLeft:"10px",borderRadius:"10px 10px 10px 0 "}}>
              <Content style={{ margin: '0 16px'}}>
                <Breadcrumb style={{ margin: '16px 0',borderBottom:".5px solid",paddingBottom:"10px" }}>
                  <Breadcrumb.Item >{this.state.contentHeader}</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.contentPath}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 5, background: '#fff', minHeight: 360 }}>
                <Modal
          title    = {this.state.title}
          visible  = {this.state.visible}
          onOk     = {this.handleOk}
          onCancel = {this.handleCancel}
          width    = '60%'
          style    = {{overflow:"hidden"}}
          footer   = {null}
        >
            <Contentcom content={this.state.content} img={this.state.img} />
        </Modal>
                <ul >

                {
                    this.state.getdata.map((value,key)=>{
                        return(
                          <li className="helpCenter_listStyle" key={key} onClick={this.getdetail.bind(this,value)}><span >{value.title}</span></li>
                        )
                    })
                }
                <Pagination defaultCurrent={1} defaultPageSize={5} onChange={this.onChangePage} total={this.state.getdata.length} showTotal={total => `共有 ${total} 条数据`}  style={{marginLeft:"30%",marginTop:"50px"}}/>
                </ul>
                </div>
              </Content>
            </Layout>
          </Layout>
        );
      }
    }