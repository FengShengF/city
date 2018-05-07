import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import ReactDom from 'react-dom'

class City extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }
    }
    render() {
        const { arr } = this.state
        const { city } = this.props
        return (
            <div className='city'>
                <div className='head'>
                    <span>请选择你的城市</span>
                    <span onClick={this.proCity.bind(this)}> > </span>
                </div>
                <div>
                    {
                        arr && arr.map((item, ind) => {
                            return <li key={ind} onClick={this.fn2.bind(this, item)}>{item}</li>
                        })
                    }
                </div>
                {
                    city.map((item, ind) => {
                        return (
                            <div key={ind} className='evev'>
                                <p>{item.letter}</p>
                                {
                                    item.city.map((items, index) => {
                                        return <li key={index} ref={items.name} onClick={(e) => { this.fn(items.name, e) }}>{items.name}</li>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    fn2(ev) {
        const { arr } = this.state
        this.refs[ev].className = ''
        const num = arr.indexOf(ev)
        arr.splice(num, 1)
        this.forceUpdate()
    }
    fn(ev, e) {
        const { arr } = this.state
        if (arr.indexOf(ev) == -1) {
            e.target.className = 'sele'
            arr.push(ev)
            this.forceUpdate()
        } else {
            e.target.className = ''
            const num = arr.indexOf(ev)
            arr.splice(num, 1)
        }
        this.forceUpdate()
    }
    proCity() {
        this.props.history.push('/procity')
    }

}

const mapStateToProps = (state,ownprop)=>{
    return{
        city:state.state.city
    }
}
export default connect(mapStateToProps)(City)