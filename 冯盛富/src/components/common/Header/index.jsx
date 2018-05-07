import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <span onClick={this.push.bind(this)}>北京市</span>
            </div>
        )
    }
    push() {
        this.props.history.push({
            pathname: '/city'
        })
    }
}

export default withRouter(Header)