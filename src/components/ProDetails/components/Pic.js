import React ,{Component,Fragment} from 'react' ;
import ReactDOM from 'react-dom';
import PicItem from './PicItem';
import $ from 'jquery';
import axios from 'axios';
export default class Pic extends Component {
    constructor(){
        super()
        this.state = {
            sf:{},
            sPic:{},
            bf:{},
            bPic:{},
            bigImg:"",
            sImg:[]
        }
    }
    componentWillMount(){
        axios({
            url:"../../../../src/components/ProDetails/components/list.json",
            method:"get"
        }).then(res=>{
           this.setState({
               bigImg:res.data.shoes.bigImg,
               sImg:[...res.data.shoes.sImg]
           });
        })

    }



    componentDidMount(){
        this.setState(
            {
            sf:document.getElementsByClassName('small_glass')[0],
            sPic:document.getElementsByClassName('small-pic')[0],
            bf:document.getElementsByClassName('big_glass')[0],
            bPic:document.getElementsByClassName('big_pic')[0]
            }
        )
    }

    mouseOver=(ev)=>{
           this.state.sf.style.display='block';
           this.state.bf.style.display='block';
    }
    mouseOut=(ev)=>{
        this.state.sf.style.display='none';
        this.state.bf.style.display='none';
    }
    mouseMove=(ev)=>{
        var sf=document.getElementsByClassName('small_glass')[0];
        var spic=document.getElementsByClassName('small-pic')[0];
        var bf=document.getElementsByClassName('big_glass')[0];
        var bpic=document.getElementsByClassName('big_pic')[0];
        var bili=bpic.offsetWidth/spic.offsetWidth;
        var ev=ev||window.event;
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
    	var l=ev.clientX-spic.offsetLeft-sf.offsetWidth-sf.offsetWidth/2;
        var t=ev.clientY-spic.offsetTop-sf.offsetHeight/2-sf.offsetHeight/2;

        this.state.sf.style.width=spic.offsetWidth*bf.offsetWidth/(bpic.offsetWidth)+'px';
        this.state.sf.style.height=spic.offsetHeight*bf.offsetHeight/bpic.offsetHeight+'px';
    			if(l<0){
    				l=0;
    			}else if(l>=spic.offsetWidth-sf.offsetWidth){
    				l=spic.offsetWidth-sf.offsetWidth-2;
    			}

    			if(t<0){
    				t=0;
    			}else if(t>=spic.offsetHeight-sf.offsetHeight){
    				t=spic.offsetHeight-sf.offsetHeight-2;
    			}
    			sf.style.left=l+'px';
    			sf.style.top=t+'px';
    			bpic.style.left=-bili*l+'px';
                bpic.style.top=-bili*t+'px';
    }
    handleClick(ev){
        var bpic=document.getElementsByClassName('big_pic')[0];
        var sp=document.getElementById('small_pic');
        var $List=$('.pic-list li');
        $List.click(function(){
            $(this).addClass('border_1px_red').siblings().removeClass('border_1px_red');
        });

        sp.src=ev.target.src;
        bpic.src=ev.target.src;

    }

    showList(){
        if(this.state.sImg.length>0){
            return (
                    this.state.sImg.map((item,index)=>{
                return <PicItem key={index} img={this.state.sImg[index]}/>
                })
            )

        }
    }

    render(){

          return (
              <div className='Pro-left'>
                  <div className='small-pic' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onMouseMove={this.mouseMove}>
                   <span className='small_glass'></span>
                   <img src='//img.pinzhi365.com/upload/601/603/21088206/21088248/21088451/1590083_31209391_orig_5006.jpg' id='small_pic'/>
                  </div>
                  <ul className='pic-list clear' onClick={this.handleClick}>
                    {this.showList()}
                  </ul>
                  <div className='big_glass'>
                    <img src='//img.pinzhi365.com/upload/601/603/21088206/21088248/21088451/1590083_31209391_orig_5006.jpg' className='big_pic'/>
                  </div>
              </div>
     )
   }
}