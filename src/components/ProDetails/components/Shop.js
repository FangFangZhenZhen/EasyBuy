import React ,{Component,Fragment} from 'react' ; 
export default class Shop extends Component {
    render(){
          return (
              <div className='shop'>
                  <p>易购旗舰店</p>
                  <ul className='clear'>
                    <li>描述 <span>4.8</span></li>
                    <li>描述 <span>4.8</span></li>
                    <li>描述 <span>4.8</span></li>
                  </ul>
                  <div className='button'>
                     <button className='margin_rigth_4px'>进店逛逛</button>
                     <button>收藏店铺</button>
                  </div>
              </div>
     )
   }
}