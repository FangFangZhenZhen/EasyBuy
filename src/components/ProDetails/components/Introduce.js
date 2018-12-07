import React ,{Component,Fragment} from 'react' ;
export default class Introduce extends Component {
    render(){
          return (
              <div className='introduce'>
                  <div className='introduce_pro'>
                     <p>商品详情</p>
                  </div>
                  <div className='cunhui_mom clear'>
                        <span className='mom_logo'><img src='./public/Details/mom.png'/></span>
                        <div className='logo_contain clear'>
                            <p>该商品参与了公益宝贝计划，卖家承诺每笔成交将为春晖妈妈守护孤儿捐赠0.02元，该商品已累计捐赠54笔。</p>
                            <p className='title'>善款用途简介：&nbsp;&nbsp;“春晖妈妈守护” 由北京春晖博爱儿童救助公益基金会发起并执行，旨在为缺乏亲情<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呵护的儿童提供持续专业的关爱和照料，通过回应式的教育抚育模式，...了解详情>></p>
                        </div>
                  </div>
                  <div className='brand_name'>
                        <h1>品牌名称：初穆</h1>
                        <h3>产品参数：</h3>
                        <ul className='clear'>
                            <li>
                                <p>品牌：初穆</p>
                                <p>图案：条纹</p>
                                <p>领型：圆领</p>
                                <p>颜色分类：黑色配杏色</p>
                                <p>货号：C237</p>
                                <p>袖长：长袖</p>
                                <p>销售渠道类型：纯电商（只在线上销售）</p>
                            </li>
                            <li>
                                <p>适用年龄：18-24周岁</p>
                                <p>风格：通勤</p>
                                <p>腰型：高腰</p>
                                <p>袖型：常规</p>
                                <p>裙型：A字裙</p>
                                <p>裙长：长裙</p>
                                <p>扇型：A型</p>
                            </li>
                            <li className='margin_right_0px'>
                                <p>尺码：S M L XL</p>
                                <p>通勤：复古</p>
                                <p>衣门襟：套头</p>
                                <p>组合形式：单件</p>
                                <p>年份季节：2018年冬季</p>
                                <p>款式：其他/other</p>
                                <p>材质成分：其他100%</p>
                            </li>
                        </ul>
                  </div>
              </div>
     )
   }
}