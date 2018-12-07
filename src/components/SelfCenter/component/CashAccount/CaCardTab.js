import React, { Component } from 'react';
import { Tabs } from 'antd';
import RecoderTab from './RecoderTab';
const TabPane = Tabs.TabPane;


function callback(key) {
  console.log(key);
}

export default class CaCardTab extends Component{
   render() {
     return (
        <div className="cardtab">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="近三个月收支明细" key="1"><RecoderTab /></TabPane>
                <TabPane tab="三个月前收支明细" key="2">Content of Tab Pane 2</TabPane>
              
            </Tabs>
        </div>
     )
   }
}