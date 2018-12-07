import React ,{Component,Fragment} from 'react' ; 
export default class Freight extends Component {
    render(){
          return (
              <div className='Pro_freight'>
                    <span className='freight'>运费</span>
                    <span className='address'>广东深圳<i>至</i>杭州</span>
                    <span className='express'>快递：<i>0.00</i></span>
              </div>
     )
   }
}