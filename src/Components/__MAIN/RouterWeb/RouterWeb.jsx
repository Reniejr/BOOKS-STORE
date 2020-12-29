import React, { PureComponent } from 'react'
import './RouterWeb.scss'
import {Switch, Route} from 'react-router-dom'
import PageLoader from '../../_GENERAL_SUB_COMPONENTS/PageLoader/PageLoader'
import HomePage from '../Homepage/HomePage'
import Navbar from '../../_GENERAL_SUB_COMPONENTS/Navbar/Navbar'

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <>
            <Navbar/>
            <Switch>
                <Route path='/' exact render={(props)=><HomePage {...props}/>}/>
                <Route path='/loader' exact render={(props)=><PageLoader {...props}/>}/>
            </Switch>
            </>
        )
    }
}
    