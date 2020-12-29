import React, { PureComponent } from 'react'
import './Navbar.scss'

export default class Navbar extends PureComponent {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img src="./assets/svg/Books-Store-Logo.svg" alt=""/>
                </div>
            </nav>
        )
    }
}
