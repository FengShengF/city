import React, { Component } from 'react'
import routers from '../../router'
import { NavLink, Route, Switch,Redirect } from 'react-router-dom'
import './style.css'

import Header from '../common/Header'
import Content from '../common/Content'
import Footer from '../common/Footer'

class Index extends Component {
    render() {
        return (
            <div className='content'>
                <Header></Header>
                <Content>
                    <Switch>
                        {
                            routers.ROUTER.map((item, idx) => {
                                return <Route exact path={item.path} key={idx} component={item.component}></Route>
                            })
                        }
                         <Route exact path='/' render={() => {
                            return <Redirect to='/home' />
                        }}></Route> 
                    </Switch>
                </Content>
                <Footer>
                    {
                        routers.NAV.map((item, idx) => {
                            return <NavLink to={item.to} key={idx}  activeClassName={item.active}>{item.title}</NavLink>
                        })
                    }
                </Footer>
            </div>
        )
    }
}

export default Index

