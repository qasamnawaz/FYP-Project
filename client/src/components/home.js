import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './header'
import {Link} from 'react-router-dom'

class Home extends Component {
   componentDidMount(){
     if(this.props.products.length===0){
     document.getElementById('footer').classList.add('footer');
     }
   }
     fun=(src,value)=>{
     document.getElementById('img').src=src;
     var options = {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
          'Content-Type': 'application/json'
      }
  }
    fetch( '/addInCart', options )
  .then( res => res.text())
  .then( data => {
    document.getElementById('text').innerHTML=data;
  document.getElementById(value.id).classList.add('disabled');
  document.getElementById(value.id).innerHTML='Added in Cart';
  } )
    .catch( error => console.error('Error:', error) );

  }
  render() {
    const list = this.props.products.map((value,index)=>{
      return(
      <div className="col s12 m6 l4" key={value.id}>
    <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator responsive-image" src={value.src} alt="mobile" style={{height:'350px',width:'350px'}}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4 ">{value.name}<i className="fas fa-ellipsis-v right"></i></span>
     <button id={value.id} className="btn modal-trigger waves-effect waves-light" data-target="modal1" onClick={()=>this.fun(value.src,value)}>Add To Cart</button>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4"><span className="left"> Name: </span>{value.name}<i className="fas fa-window-close right"></i></span>
      <p className="text-darken-4 " style={{fontFamily:'monospace'}}><span className="left">Price:  </span>Rs. {value.price}</p><br/>
      <p className="text-darken-4 " style={{fontFamily:'monospace'}}><span className="left">Display:</span> {value.display} inch</p><br/>
      <p className="text-darken-4 " style={{fontFamily:'monospace'}}><span className="left">Camera: </span> {value.camera} </p><br/>
      <p className="text-darken-4 " style={{fontFamily:'monospace'}}><span className="left">Storage:</span> {value.storage}</p><br/>
      <p className="text-darken-4 " style={{fontFamily:'monospace'}}><span className="left">Battery: </span> {value.battery} mAh</p><br/>
    </div>
  </div>
      </div>
        )
    })
    return (   
      <div>
        <Header/>
        {
          this.props.products.length === 0
              ? (
                  <div >
                      <h3>Sorry, There is no product available at this time, come back later.</h3>
                  </div>
              )
              : (
                <div>
                <div className="row">
                {list}
                </div>
                </div>
              )}
        
        <div id="modal1" className="modal">
        <div className="modal-content">
        <h4 id="text"> </h4>
        <div className="row">
        <img src="" alt="mobile" id="img" className="col s12 m6 l6 responsive-image" style={{height:'300px',width:'300px'}}/>
        <div className="col s12 m5 l5"><br/>
        <Link to="/" className="btn modal-close">Continue Shopping</Link><br/><br/>
        <Link to="/cart" className="btn modal-close">Go To Cart</Link>
        </div>
        </div>
        </div>
        </div>
        <div>
        <footer className="page-footer footer-copyright"  id="footer">       
            <div className="container" style={{padding:"10px"}}>
            © 2019 Copyright 
            </div>
        </footer>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
    return {
      products: store.productsReducer,
      items: store.cartItemsReducer,
    }
  }
export default connect(mapStateToProps) (Home);
