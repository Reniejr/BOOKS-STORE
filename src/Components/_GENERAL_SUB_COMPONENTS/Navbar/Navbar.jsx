import React, { PureComponent } from 'react'
import './Navbar.scss'
import '../../../Style/_ClassStyles.scss'

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
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Best Seller</li>
                        <li>New Upcoming</li>
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
