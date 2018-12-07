import React, {Component,Fragment} from 'React';
import Classify from './Classify'
import Slider from './Slider'
import './index.css'
export default class ClassifySlider extends Component{
    render(){
        return(
            <Fragment>
                {/*商品分类和轮播部分开始*/}
                <div className='classify-slider'>
                    <div className='cs-inner'>
                        <Classify />
                        <div className='slider-content'>
                            <Slider/>
                        </div>
                    </div>
                </div>
                {/*商品分类和轮播部分结束*/}
            </Fragment>
        )
    }
}