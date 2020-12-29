import React, { PureComponent } from 'react'
import Jumbotron from '../../HomePage_SubComponents/Jumbotron/Jumbotron'
import './HomePage.scss'
import Category from '../../HomePage_SubComponents/Categories/Category'

export default class HomePage extends PureComponent {

    componentDidMount(){
    }

    render() {
        return (
            <div id='homepage'>
                <Jumbotron/>
                <Category
                category='fantasy'
                />
            </div>
        )
    }
}
