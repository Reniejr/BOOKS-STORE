import React, { PureComponent } from 'react'
import './Category.scss'
import {Row, Col} from 'react-bootstrap'
import {fetchGet} from '../../../Utilities/Fetch/Fetch'
import { findObjbyIndex } from '../../../Utilities/General/General'
import {Link} from 'react-router-dom'
import Book from '../../_GENERAL_SUB_COMPONENTS/Book/Book'
import '../../../Style/_Themes.scss'

export default class Category extends PureComponent {

    state={
        booksList : [],
        randomBook : {},
        bought : ''
    }


    getBooks = async (value) => {
       let result = await fetchGet(process.env.REACT_APP_URL_OFFLINE, 'books', null, 'category', value)
       this.setState({booksList : result}) 
    //    console.log(result)
    }

    buyBook = () => {
        this.setState({bought : 'bought'})
        setTimeout(()=>{
            this.setState({bought : ''})
        }, 3000)
    }

    

    componentDidMount = async () => {
        await this.getBooks(this.props.category)
        let random = await Math.floor(Math.random()*this.state.booksList.length),
            randomBook = await findObjbyIndex(this.state.booksList, random)
        this.setState({randomBook : randomBook})
    }

    render() {
        return (
            <Row className='category'>
                <Col xs={12} sm={6} className='details'>
                    <div className="title">
                        <h3 className ={`${this.props.category}`}>
                            {this.state.randomBook.category}
                        </h3>
                        <p>{this.state.randomBook.title}</p>
                        <p>Asin : {this.state.randomBook.asin}</p>
                        <p>{this.state.randomBook.price} €</p>
                        <div className="cart-options">
                            <button onClick={()=>this.buyBook()}>Buy</button>
                            <i className="fas fa-cart-plus"></i>
                        </div>
                    </div>
                    <div className="category-list">
                        <p>Looking for another title?  Check our 
                            <Link onClick={this.props.linkFunc}> {this.state.randomBook.category} </Link>
                             list with {this.state.booksList.length} books
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={6} className='show-book'>
                    <Book cover={this.state.randomBook.img} bought={this.state.bought}/>
                </Col>
            </Row>
        )
    }
}
