import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class Carpaixu extends Component{
    render(){
        const {carClass} = this.props
       return(
           <div className='carpaixu'>
               {
                   carClass.map((item,index)=>{
                       return(
                           <div key={index} className='carpaixuY'>
                               {
                                   item.map((items,indexs)=>{
                                       return (
                                           <div key={indexs} className='carpaixuE'>
                                               {
                                                   items.carList.map((it,ind)=>{
                                                       return(
                                                           it.carName&&it.price ? 
                                                           <div key={ind} className='ev'>
                                                               <h6>{it.carName}</h6>
                                                               <h5>{it.price}</h5>
                                                           </div>:
                                                           ''
                                                       )
                                                   })
                                               }
                                           </div>
                                       )
                                   })
                               }
                           </div>
                       )
                   })
               }
           </div>
       )
    }
}

const mapStateToProps = (state,ownprops)=>{
    console.log(state.state.carClass)
    return{
        carClass:state.state.carClass
    }
}
export default connect(mapStateToProps)(Carpaixu)