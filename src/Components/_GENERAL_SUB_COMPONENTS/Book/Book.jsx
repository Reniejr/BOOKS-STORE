import React, { PureComponent } from 'react'
import './Book.scss'
import {Link} from 'react-router-dom'

export default class Book extends PureComponent {


    render() {
        const {bought} = this.props
        return (
            <div className='book-container'>
                <div className={`book ${bought}`}>
                    <Link>
                        <img src={this.props.cover} alt=""/>
                    </Link>
                </div>
            </div>
        )
    }
}
