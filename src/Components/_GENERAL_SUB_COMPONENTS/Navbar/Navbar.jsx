import React, { PureComponent } from "react";
import "./Navbar.scss";
import "../../../Style/_ClassStyles.scss";
import { Link, withRouter } from "react-router-dom";

class Navbar extends PureComponent {
  render() {
    // console.log(this.props);
    let { cartIndicator } = this.props;
    return (
      <nav>
        <div className="logo">
          <img src="./assets/svg/Books-Store-Logo.svg" alt="" />
          <p>Books Store</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Categories</li>
            <li>
              <Link to="/best-seller">Best Seller</Link>
            </li>
            <li>
              <Link to="/new-upcoming">New Upcoming</Link>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <p>{cartIndicator}</p>
          <i className="fas fa-shopping-cart"></i>
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
