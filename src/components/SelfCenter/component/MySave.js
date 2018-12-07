//我的收藏组件
import React, { Component } from 'react';
import { Tabs } from 'antd';
import {NavLink,Route,Switch} from 'react-router-dom';
import ShopAll from './MySave/ShopAll';
const TabPane = Tabs.TabPane;

function callback(key) {
}

class MySave extends Component{
   render() {
     const shop1=this.props.match.params.shop1;
     return (
        <div className="seclect">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="收藏的商品" key="1">
                      <div className="save-top">
                          <NavLink to="/selfcenter/my-save/0/0" exact>全部商品</NavLink>
                          <NavLink to="/selfcenter/my-save/1/0">美发美甲/造型()</NavLink>
                          <NavLink to="/selfcenter/my-save/2/0">文具/耗材()</NavLink>

                      </div>
                      <div className="save-btm">
                          <NavLink to="/selfcenter/my-save/0/0" >不限</NavLink>
                          <NavLink to={`/selfcenter/my-save/${shop1}/1`}>降价()</NavLink>
                          <NavLink to={`/selfcenter/my-save/${shop1}/2`}>满减()</NavLink>
                          <NavLink to={`/selfcenter/my-save/${shop1}/3`}>优惠券()</NavLink>
                      </div>
                      <ShopAll />
                </TabPane>
                <TabPane tab="收藏的店铺" key="2">暂无数据</TabPane>
                <TabPane tab="喜欢的活动"    key="3">暂无数据</TabPane>
              </Tabs>

        </div>
     )
   }
}
export default MySave;