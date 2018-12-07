import React ,{Component,Fragment} from 'react' ; 
import Shop from './Shop'
import Introduce from './Introduce'
import '../css/appraise.css'
export default class Appraise extends Component {
    render(){
          return (
              <div className='appraise clear'>
                  <Shop/>
                  <Introduce/>
              </div>
     )
   }
}