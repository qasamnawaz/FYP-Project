import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Footer from './footer'

 class Notfound extends Component {
  render() {
    return (
      <div>
        <Header/>
       <div class="text-wrapper">
    <div class="title" data-content="404">
        404
    </div>

    <div class="subtitle">
        Oops, the page you're looking for doesn't exist.
    </div>

    <div class="buttons">
        <Link class="button" to="/">Go to homepage</Link>
    </div>
</div>
<Footer/>
      </div>
    )
  }
}
export default Notfound;