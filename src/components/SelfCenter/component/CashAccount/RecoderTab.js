import React, { Component } from 'react';
import { Table } from 'antd';

const columns = [{
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '金额',
    dataIndex: 'money',
    key: 'money',
  }, {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  }, {
    title: '备注',
    dataIndex: 'beizhu',
    key: 'beizhu',
  }
];

const data = [{
    key: '1',
    time: '2018/11/22/11:00',
    money: 32,
    action: '转入',
    beizhu: '暂无'
  }];

export default class RecoderTab extends Component{
   render() {
     return (
        <div>
            <Table columns={columns} dataSource={data} className="recodertab"/>
            <p>提示：系统仅显示您两年之内的余额明细，更早的余额明细请联系客服咨询</p>
        </div>

     )
   }
}