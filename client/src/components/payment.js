import React, { Component } from 'react'
import Header from './header'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class Payment extends Component {
 
  componentDidMount(){
    var d = new Date();
    var month =["January","February","March","April","May","June","July","August","September","October", "November", "December"]
    var m = month[d.getMonth()];
    var da=d.getDate();
    var y=d.getFullYear();
   this.setState({date:m+'-'+da+'-'+y});
 if(this.props.location.total ===undefined){
  document.getElementById('footer').classList.add('footer');
 }
  }
handleSubmit=(e)=>{
  e.preventDefault();
  var alpha = /^[a-zA-Z\s-, ]+$/;
  let address =this.refs.address.value;
  let city =this.refs.city.value;
  let email =this.refs.email.value;
  let country =this.refs.country.value;
  let name =this.refs.name.value;
  let number =this.refs.number.value;
  let cvv =this.refs.cvv.value;
  let month =this.refs.month.value;
  let year =this.refs.year.value; 
  if( city==="" ||  country==="" || name==="" ||  cvv===""){
    document.getElementById('msg').innerHTML="Please fill all fields";
    return
  } 
if(address==='' ){
document.getElementById('address').innerHTML="Please Enter Shipping address";
}

if(email==='' ){
document.getElementById('email').innerHTML="Please Enter Email address";
}

if(number==='' ){
document.getElementById('number').innerHTML="Please Enter Credit card number";
}

  if(!name.match(/^[a-zA-Z\s-, ]+$/)){
document.getElementById('name').innerHTML="Name must consists only caharcters";
return;
  }

  if(!city.match(/^[a-zA-Z\s-, ]+$/)){
document.getElementById('city').innerHTML="City name must consists only caharcters";
return;
  }

  if(!country.match(/^[a-zA-Z\s-, ]+$/)){
document.getElementById('country').innerHTML="Country name must consists only caharcters";
return;
  }

  if (cvv.length!==3 || !cvv.match(/^[0-9\s]*$/)){ 
    document.getElementById('cvv').innerHTML="Security code must only consits of three numbers";
  return;   
  }

if(month==="month"){
  document.getElementById('select').innerHTML="Please select a month";
  return;
}

if(year==="year"){
  document.getElementById('select').innerHTML="Please select a year";
  return;
}

document.getElementById('receipt').classList.remove("hide");

let detail ={address:address,city:city,email:email,country:country,name:name,number:number,cvv:cvv,month:month,year:year,price:this.props.location.total,orderno:Math.floor(Math.random()*10000000000),orderdate:this.state.date}
var options = {
  method: 'POST',
  body: JSON.stringify(detail),
  headers: {
      'Content-Type': 'application/json'
  }
}
fetch( '/payment', options )
.then( res => res.json())
.then( data => {
this.props.dispatch({ type: "RECEIPT", payload: data}) 
} )
.catch( error => console.error('Error:', error) );

fetch('/clear')
     .then(res =>res.text())
     .then( data => {
      } )
          .catch( error => console.error('Error:', error) );

}

  render() {
    return (
      <div>
        <Header/>
        {
          this.props.location.total ===undefined
          ?
          (
            
            <div>
            <h5>You have not Select any Item.</h5>
           <Link to="/cart"><input type="button" value="Go To Cart" className="btn"></input></Link>
          </div>
          )
          :(

 <div>
 <h4>Payment With Card</h4>
 <h5 id="msg" className="red"> </h5>
 <form className="row" onSubmit={this.handleSubmit} >
 <div className="col s12 m6 l6">
 <fieldset>
<legend><h4>Shipping Address</h4></legend>
<label><h5 className="left">Street address:</h5><br />
<input type="text" name="address" required placeholder="Street Address" ref="address"/></label><br />
<h5 id="address" className="red"> </h5>
<label><h5 className="left">City:</h5><br />
<input type="text" name="city" required placeholder="City" ref="city"/></label><br />
<h5 id="city" className="red"> </h5>
<label><h5 className="left">Country</h5><br />
<input type="text" name="country" required placeholder="Country" ref="country"/></label>
<h5 id="country" className="red"> </h5>
<label><h5 className="left">Email</h5><br />
<input type="email" name="email" required placeholder="email" ref="email"/></label>
<h5 id="email" className="red"> </h5>
</fieldset>
</div>
<div className="col s12 m6 l6">
<fieldset>
<legend><h4>Credit Card details</h4></legend>
<label><h5 className="left">Name on Card:</h5><br />
<input type="text" name="card-name" required placeholder="Card holder's Name" ref="name"/></label><br />
<h5 id="name" className="red"> </h5>
<label><h5 className="left">Card Number:</h5><br />
<input type="number" name="card-number" required ref="number" placeholder="Card Number"/></label><br />
<h5 id="number" className="red"> </h5>
<label><h5 className="left">Security code</h5><br />
<input type="number"  name="cvv" required placeholder="CVV" ref="cvv" /></label>
<h5 id="cvv" className="red"> </h5>
<label ><h5 className="left">Expiry Date:</h5 ><br /><br/>
<div className="row">
<select className="browser-default col s12 m6 l6" id="month" ref="month" defaultValue="Month">
<option  value="month">Month</option>
<option value="January">January</option>
<option value="January">February</option>
<option value="March">March</option>
<option value="March">April</option>
<option value="May">May</option>
<option value="June">June</option>
<option value="July">July</option>
<option value="August">August</option>
<option value="September">September</option>
<option value="October">October</option>
<option value="November">November</option>
<option value="December">December</option>
</select>
<select className="browser-default col s12 m6 l6" id="year" ref="year" defaultValue="Year">
<option  value="year">Year</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
</select>
<h5 id="select" className="red"> </h5>
</div>
</label>
</fieldset>
 </div>
 <button  className="button" style={{margin:'15px'}}>Pay Rs. {this.props.location.total}</button>
 </form>
 <button  className="button hide" style={{margin:'15px'}} id="receipt"><Link to="/receipt"> Show Receipt</Link></button>
</div>
          )
        }
  <div>
        <footer className="page-footer footer-copyright " id="footer" >       
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
    items: store.receiptReducer,
  }
}
export default connect(mapStateToProps) (Payment);