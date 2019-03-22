import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import { connect } from 'react-redux'

 class Receipt extends Component {

  render() {
    return (
      <div>
        <Header/>
      <div style={{margin:"25px"}}>
        <h1>Payment Receipt</h1>
        <h5 className="red-text">Thank you for shopping!</h5>
        <p>Hi {this.props.receipt.name}, we have received your order and are getting it ready to be shipped.  </p>
        <p>We will notify you through email when it's on its way!</p>
        <hr/>
        <p className="left">Order No. {this.props.receipt.orderno}</p>
        <p className="right">Order Date: <span id="date">{this.props.receipt.orderdate}</span></p><br/>
        <div><h5>Payment and Shipping details:</h5>
           <p><b>Payed Amount: </b>Rs. {this.props.receipt.price}</p> 
           <p><b>Payed Method: </b> Credit card</p> 
           <p><b>Delivered to: </b> {this.props.receipt.name}</p> 
           <p><b>Delivery address: </b> {this.props.receipt.address}</p> 
        </div>
      </div>
      <Footer/>
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
  return {
    receipt: store.receiptReducer,
  }
}
export default connect(mapStateToProps) (Receipt);