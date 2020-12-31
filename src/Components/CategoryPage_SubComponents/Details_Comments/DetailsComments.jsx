import React, { PureComponent } from 'react'
import Book from '../../_GENERAL_SUB_COMPONENTS/Book/Book'
import './DetailsComments.scss'

export default class DetailsComments extends PureComponent {
    render() {
        let {selected} = this.props 
        return (
            <div className='preview'>
                <h2>{selected.title}</h2>
                <Book cover={selected.img}/>
                <p>{selected.asin}</p>
                <span>{selected.price}</span><button>Buy</button>
                <button>View Comments</button>
            </div>
        )
    }
}
