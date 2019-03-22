import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

class Cart extends Component {
  state={
    total:0
  }
  fun=(id)=>{
    var Data ={id:id};
    var options = {
      method: 'POST',
      body: JSON.stringify(Data),
      headers: {
          'Content-Type': 'application/json'
      }
  }
  fetch( '/delItem', options )
  .then( res => res.json())
  .then( data => {
this.props.dispatch({ type: "ADD", payload: data}) 
this.Total(); 
} )
    .catch( error => console.error('Error:', error) );
   }

   clear =()=>{
     fetch('/clear')
     .then(res =>res.text())
     .then( data => {
      this.props.dispatch({ type: "CLEAR", payload: ''});
      } )
          .catch( error => console.error('Error:', error) );
   }
   updateQuan=(id)=>{
     console.log(id);
console.log(document.getElementById(id).value);
var n =document.getElementById(id).value;
var a ={value:n,id:id}
// this.props.dispatch({ type: "QUAN", payload: a});
var options = {
  method: 'POST',
  body: JSON.stringify(a),
  headers: {
      'Content-Type': 'application/json'
  }
}
fetch( '/updatequan', options )
.then( res => res.json())
.then( data => {
this.props.dispatch({ type: "ADD", payload: data}) 
this.Total();
} )
.catch( error => console.error('Error:', error) );
   
}
componentDidMount(){
  fetch( '/carts' )
  .then( res => res.json())
  .then( data => {
    this.props.dispatch({ type: "ADD", payload: data});
  this.Total();
  } )
  .catch( error => console.error('Error:', error) );
}
Total=()=>{
  let price=0;
if(this.props.items.length !==0){

  this.props.items.map(item=>price += (item.price)*(item.quan) );
document.getElementById('subtotal').innerHTML=price;
document.getElementById('tax').innerHTML=Math.floor(price*0.01);
document.getElementById('total').innerHTML=Number(document.getElementById('subtotal').innerHTML) + Number(document.getElementById('tax').innerHTML);
this.setState({total:document.getElementById('total').innerHTML})
}
}
  render() { 

    return (
      <div>
        <Header/>
        {
          this.props.items.length === 0
              ? (
                  <div >
                      <h3 >Your Cart is Empty</h3>
                  </div>
              )
              : (
                    <div>
                  <table border={1} cellPadding="10" className="tab">
                      <tbody>
                          <tr>
                              <td className='thead' >Name</td>
                              <td className='thead'>Price</td>
                              <td className='thead'>Quantity</td>
                              <td className='thead'>Total</td>
                              <td className='thead'>Remove</td>
                          </tr>

                      </tbody>

                      <tbody >
                          {this.props.items.map( (value, index) => {
                              return (
                                  <tr key={value._id}>
                                      <td >{value.name}</td>
                                      <td className="price">Rs. {value.price} </td>
                                      <td><input type="number" min="1" defaultValue={value.quan} style={{width:'40px',border:'hidden'}} onChange={()=>this.updateQuan(value._id,)} id={value._id}></input> </td>
                                      <td id="tprice" >{value.quan*value.price} </td>                                      
                                      <td onClick={()=>this.fun(value._id)}><i className="fas fa-trash"></i></td> 
                                  </tr>
                              )
                          })}
                      </tbody>

                  </table>
                  <div style={{marginBottom:'70px'}}>
                    <br/>
                  <button className="button" onClick={this.clear}>CLEAR CART</button>
                  <h5>SUB TOTAL: Rs. <span id="subtotal"></span></h5>
                  <h5>TAX: Rs. <span id="tax"></span></h5>
                  <h5 >TOTAL: Rs. <span id="total"></span></h5>
                  <button className="button " ><Link 
                  to={{
                    pathname:'/payment',
                    total:this.state.total
                  }}
                  >Payment With Card</Link></button>             
                  </div>
              </div>
              )
                }
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (store) =>{
  return {
    items: store.cartItemsReducer,
  }
}
export default connect(mapStateToProps) (Cart);
