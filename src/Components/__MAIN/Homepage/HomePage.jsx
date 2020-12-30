import React, { PureComponent } from 'react'
import Jumbotron from '../../HomePage_SubComponents/Jumbotron/Jumbotron'
import './HomePage.scss'
import Category from '../../HomePage_SubComponents/Categories/Category'
import {Row, Col} from 'react-bootstrap'
import Footer from '../../_GENERAL_SUB_COMPONENTS/Footer/Footer'
import PageLoader from '../../_GENERAL_SUB_COMPONENTS/PageLoader/PageLoader'
import { homeBooksAnimation } from '../../../Utilities/OnScroll/OnScroll'


export default class HomePage extends PureComponent {

    state={
        loader: false
    }

    goToCategoryPage = (category) => {
        this.setState({loader : true})
        setTimeout(() => {
            this.props.history.push('category/' + category)
        }, 2000)
    }

    componentDidMount(){
        window.onscroll = () => {
            homeBooksAnimation()
        }
    }

    render() {
        console.log(this.props)
        return (
            <div id='homepage'>
                <PageLoader loader={this.state.loader}/>
                <Jumbotron/>
                <Category
                linkFunc = {this.goToCategoryPage}
                category='fantasy'
                />
                <Category
                linkFunc = {this.goToCategoryPage}
                category='history'
                />
                <Category
                linkFunc = {this.goToCategoryPage}
                category='horror'
                />
                <Category
                linkFunc = {this.goToCategoryPage}
                category='romance'
                />
                <Category
                linkFunc = {this.goToCategoryPage}
                category='scifi'
                />
                <Footer/>
            </div>
        )
    }
}
