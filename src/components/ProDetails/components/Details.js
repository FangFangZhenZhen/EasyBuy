import React ,{Component,Fragment} from 'react' ;
import Title from './Title';
import ProPriceArea from './ProPriceArea';
import Freight from './Freight';
import Sales from './Sales';
import ProType from './ProType';
export default class Details extends Component {
    render(){
          return (
              <div className='Details'>
                  <Title/>
                  <ProPriceArea/>
                  <Freight/>
                  <Sales/>
                  <ProType/>
              </div>
     )
   }
}