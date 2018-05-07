import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.css'


class Procity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            provinceCity:this.props.provinceCity,
            shiqu: []
        }
    }
    componentWillMount() {
        const {shiqu,provinceCity} = this.state
        console.log(provinceCity)
        Object.keys(provinceCity.city).forEach(function (key) {
            shiqu.push(provinceCity.city[key])
        })
    }
    render() {
        const { provinceCity,shiqu } = this.state

        return (
            <div className='procity'>
                <div className='left'>
                    {
                        provinceCity.provinceArr.map((item, ind) => {
                            return (
                                <div key={ind}>
                                    <p>{item.letter}</p>
                                    {
                                        item.province.map((items, indexs) => {
                                            return <li key={indexs} ref={items.name} onClick={(e)=>{this.addClassLeft(e,items.name)}}>{items.name}</li>
                                        })
                                    }
                                </div>

                            )
                        })
                    }
                </div>
                <div className='right'>
                    {
                        shiqu.length!=0 && shiqu.map((item,index)=>{
                            return(
                                <div key={index} className='rightEv'>
                                    {
                                        item.map((items,ind)=>{
                                            return <li key={ind}>{items.name}</li>
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
    addClassLeft(e,ev){
        Object.keys(this.refs).forEach((key)=>{
            this.refs[key].className = ''
        })
         e.target.className='actived'
    }
}

const mapStateToProps = (state,ownprop)=>{
    return{
        provinceCity:state.state.provinceCity
    }
}

export default connect(mapStateToProps)(Procity)