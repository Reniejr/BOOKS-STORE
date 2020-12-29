import React, { PureComponent } from 'react'
import './Category.scss'
import {Row, Col} from 'react-bootstrap'
import {fetchGet} from '../../../Utilities/Fetch/Fetch'
import { findObjbyIndex } from '../../../Utilities/General/General'

export default class Category extends PureComponent {

    state={
        booksList : [],
        randomBook : {}
    }


    getBooks = async (value) => {
       let result = await fetchGet(process.env.REACT_APP_URL_OFFLINE, 'books', null, 'category', value)
       this.setState({booksList : result}) 
       console.log(result)
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
                <Col xs={12} sm={6}>

                </Col>
                <Col xs={12} sm={6}>
                    <img src={this.state.randomBook.img} alt=""/>
                </Col>
            </Row>
        )
    }
}
