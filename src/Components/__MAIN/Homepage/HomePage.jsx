import React, { PureComponent } from 'react'
import Jumbotron from '../../HomePage_SubComponents/Jumbotron/Jumbotron'
import './HomePage.scss'
import Category from '../../HomePage_SubComponents/Categories/Category'
import Footer from '../../_GENERAL_SUB_COMPONENTS/Footer/Footer'
import PageLoader from '../../_GENERAL_SUB_COMPONENTS/PageLoader/PageLoader'
import { homeBooksAnimation, navScroll } from '../../../Utilities/OnScroll/OnScroll'


export default class HomePage extends PureComponent {

    state={
        loader: false
    }

    goToCategoryPage = (category) => {
        this.setState({loader : true})
        setTimeout(() => {
            this.props.history.push('/category/' + category)
        }, 2000)
    }

    componentDidMount(){
        window.onscroll = () => {
            homeBooksAnimation()
            navScroll()
        }
    }
    componentWillUnmount(){
        window.onscroll = () => null
    }

    render() {
        console.log(this.props)
        return (
            <div id='homepage'>
                <PageLoader loader={this.state.loader}/>
                <Jumbotron/>
                <Category
                category='fantasy'
                linkFunc={()=>this.goToCategoryPage('fantasy')}
                />
                <Category
                category='history'
                linkFunc={()=>this.goToCategoryPage('history')}
                />
                <Category
                category='horror'
                linkFunc={()=>this.goToCategoryPage('horror')}
                />
                <Category
                category='romance'
                linkFunc={()=>this.goToCategoryPage('romance')}
                />
                <Category
                category='scifi'
                linkFunc={()=>this.goToCategoryPage('scifi')}
                />
                <Footer/>
            </div>
        )
    }
}
