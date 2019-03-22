import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'

 class Header extends Component {
  render() {
    return (
      <div>
     <header>
        <nav className="nav-wrapper  ">
            <div className="container">
               <div className="left">
                <Link to="/" className="brand-logo ">Store</Link>
                <Link to="/" className="sidenav-trigger" data-target="slide-out">
                    <i className="fas fa-align-justify"></i>
                </Link></div>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/home" activeClassName="red">Products</NavLink></li>
                    <li><NavLink to="/cart" className=" btn-floating btn-small indigo darken-4" >
                        <i className="fas fa-shopping-cart"></i>
                    </NavLink></li>
                </ul>
                <ul className="sidenav  grey lighten-2" id="slide-out">
                <p></p>
                <li><NavLink to="/home" activeClassName="red">Products</NavLink></li>
                <li><NavLink to="/cart" activeClassName="red">Go To Cart</NavLink></li>
                   
                </ul>
            </div>
        </nav>

       
       </header> 
                

      </div>
    )
  }
}
export default Header;