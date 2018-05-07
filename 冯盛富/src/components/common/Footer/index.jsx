import React,{Component} from 'react'
import './style.css'

class Header extends Component{
    render(){
        const {children} = this.props
        return(
            <div className='footer'>{children}</div>
        )
    }
}

export default Header