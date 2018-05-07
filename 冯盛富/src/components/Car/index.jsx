import React,{Component} from 'react'
import './style.css'
import Carclassify from '../Carclassify'
import Carpaixu from '../Carpaixu'

class Car extends Component{
    constructor(){
        super()
        this.state={
            currentIndex:1,
            title:[
                {
                    tit:'排序',
                    id:1
                },
                {
                    tit:'品牌',
                    id:2
                },
                {
                    tit:'价格',
                    id:3
                },
                {
                    tit:'筛选',
                    id:4
                }
            ]
        }
    }
    render(){
        const {title,currentIndex} = this.state
        const isbox1Show=currentIndex==1 ? 'block' : 'none';
        const isbox2Show=currentIndex==2 ? 'block' : 'none';
        const isbox3Show=currentIndex==3 ? 'block' : 'none';
        const isbox4Show=currentIndex==4 ? 'block' : 'none';

        return(
            <div className='car'>
                <div className='title'>
                    {
                        title.map((item,index)=>{
                            return <li ref={item.tit} onClick={this.show.bind(this,item.id,item.tit)} key={index}>{item.tit} <i className={currentIndex== item.id? 'iconfont icon-xiangxia':'iconfont icon-xiangshang'}></i></li>
                        })
                    }
                </div>
                <div className='ccc'> 
                    <Carclassify style={{"display":isbox2Show}}></Carclassify> 
                    <Carpaixu style={{'display':isbox1Show}}></Carpaixu>       
                </div>
            </div>
        )
    }
    show(id,tit){
        this.setState({
            currentIndex:id
        })

        Object.keys(this.refs).forEach((key)=>{
            this.refs[key].className=''
        })
        this.refs[tit].className='actived'
    }
}

export default Car