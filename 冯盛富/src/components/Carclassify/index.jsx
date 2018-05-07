import React,{Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class Carclassify extends Component{
    render(){
        const {style , carClass} = this.props
        return(
            <div style={style} className='carclassify'>
                {
                    carClass.map((item,index)=>{
                        return(
                            <div key={index} >
                                {
                                    item.map((items,indexs)=>{
                                        return <li key={indexs}>{items.carClass}</li>
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
    return{
        carClass:state.state.carClass
    }
}

export default connect(mapStateToProps)(Carclassify)