import React, { PureComponent } from 'react'
import './Navbar.scss'
import '../../../Style/_ClassStyles.scss'
import {Link} from 'react-router-dom'

export default class Navbar extends PureComponent {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img src="./assets/svg/Books-Store-Logo.svg" alt=""/>
                    <p>Books Store</p>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            Categories
                        </li>
                        <li>
                            <Link to='/best-seller'>Best Seller</Link>
                        </li>
                        <li>
                            <Link to='/new-upcoming'>New Upcoming</Link>
                        </li>
                    </ul>
                </div>
                <div className="search-container">
                    <input type="text"/>
                    <i className="fas fa-search"></i>
                </div>
            </nav>
        )
    }
}
