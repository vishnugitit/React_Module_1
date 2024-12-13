import React, {Component} from "react";
import './footer.css'
class Footer extends Component{
   render(){
    return(
        <>
      
        <footer>
            <div>
        <h3>Company</h3>
        <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
           
        </ul>
        </div>
        <div>
        <h3>Get Help</h3>
        <ul>
    

            <li>FAQ</li>
            <li>Shipping</li>
           
            <li>Order Status</li>
            <li>Payment Options</li>
        </ul>
        </div>
        <div>
        <h3>Online Shop</h3>
        <ul>
            <li>Watch</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Dress</li>
        </ul>
        </div>
        <div>
            <h3>Follow Us</h3>
        <ul>
           
            <li>www.Ekart.com</li>
            <li>Ekart.fb</li>
            <li>Ekart.insta</li>
            <li>ekart@gmail.com</li>
        </ul>
        </div>
        </footer>
        </>
    )
   }
}
export default Footer;