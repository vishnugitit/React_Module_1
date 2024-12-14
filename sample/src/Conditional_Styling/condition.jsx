import React, { Component } from "react";
import './condition.css'
const products = [
  {
    productName: "Motorola G85 5G",
    productPrice: "Price: ₹20,000",
    productRate: "Rating: 4.4",
    prductInfo: "",
    productAvailability: false,
    productStatus: "Available",
  },
  {
    productName: "Lenovo ThinkPad",
    productPrice: "Price: ₹65,000",
    productRate: "Rating: 4.2",
    prductInfo: "",
    productAvailability: true,
    productStatus: "Available",
  },
  {
    productName: "Canon EOS 1500D DSLR",
    productPrice: "Price: ₹42,000",
    productRate: "Rating: 4.5",
    prductInfo: "",
    productAvailability: false,
    productStatus: "Available",
  },
  {
    productName: "SONY Bravia X74L ",
    productPrice: "Price: ₹55,000",
    productRate: "Rating: 4.6",
    prductInfo: "",
    productAvailability: true,
    productStatus: "Available",
  },
  {
    productName: "SAMSUNG 301 L",
    productPrice: "Price: ₹40,000",
    productRate: "Rating: 4.3",
    prductInfo: "",
    productAvailability: false,
    productStatus: "Available",
  },
  {
    productName: "Blue Star 1 Ton ",
    productPrice: "Price: ₹ 51,5000",
    productRate: "Rating: 4.1",
    prductInfo: "",
    productAvailability: true,
    productStatus: "Available",
  },
];
class Condition extends Component {
  render() {
    return (
      <>
        <p style={{ textAlign: "center" }}>Task-3</p>
        <section>
            
            <div className="layout1" style={{display:"flex", justifyContent:"space-around"}}>
            {/* MOBILE */}
          <div className="mobile" style={{display:"flex",  gap:"50px"}}>
         <div className="model"></div>
         <div>
            <p>{products[0].productName}</p>
            <p>{products[0].productPrice}</p>
            <p> {products[0].productRate}</p>
            <p> {products[0].prductInfo}</p>
            <p>{products[0].productAvailability}</p>
            <p
              style={
                products[0].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >
         
              {products[0].productStatus}
            </p>
            </div>
          </div>
          {/* LAPTOP */}
          <div className="laptop" style={{display:"flex",  gap:"50px"}} >
            <div className="model"></div>
            <div>
            <p>{products[1].productName}</p>
            <p>{products[1].productPrice}</p>
            <p> {products[1].productRate}</p>
            <p> {products[1].prductInfo}</p>
            <p>{products[1].productAvailability}</p>
            <p
              style={
                products[1].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >
    
              {products[0].productStatus}
            </p>
           </div>
          </div>
           {/* CAMERA */}
          <div className="camera" style={{display:"flex",  gap:"50px"}}>
            <div className="model"></div>
            <div>
            <p>{products[2].productName}</p>
            <p>{products[2].productPrice}</p>
            <p> {products[2].productRate}</p>
            <p> {products[2].prductInfo}</p>
            <p>{products[2].productAvailability}</p>
            <p
              style={
                products[2].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >
       
              {products[2].productStatus}
            </p>
            </div>
          </div>
          </div>
          <div className="layout2" style={{display:"flex", justifyContent:'space-around'}}>
          {/* TV */}
          
          <div className="tv" style={{display:"flex", gap:"50px"}}>
            <div className="model"></div>
            <div>
            <p>{products[3].productName}</p>
            <p>{products[3].productPrice}</p>
            <p> {products[3].productRate}</p>
            <p> {products[3].prductInfo}</p>
            <p>{products[3].productAvailability}</p>
            <p
              style={
                products[3].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >
     
              {products[3].productStatus}
            </p>
            </div>
          </div>
          {/* FRIDGE */}
          <div  className="fridge" style={{display:"flex",  gap:"50px"}}>
            <div className="model"></div>
            <div>
            <p>{products[4].productName}</p>
            <p>{products[4].productPrice}</p>
            <p> {products[4].productRate}</p>
            <p> {products[4].prductInfo}</p>
            <p>{products[4].productAvailability}</p>
            <p
              style={
                products[4].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >

              {products[4].productStatus}
            </p>
          </div>
          </div>
          {/* AC */}
          <div className="ac" style={{display:"flex",  gap:"50px"}}>
            <div className="model"></div>
            <div>
            <p>{products[5].productName}</p>
            <p>{products[5].productPrice}</p>
            <p> {products[5].productRate}</p>
            <p> {products[5].prductInfo}</p>
            <p>{products[5].productAvailability}</p>
            <p
              style={
                products[5].productAvailability
                  ? styles.available
                  : styles.unavailable
              }
            >
         
              {products[5].productStatus}
            </p>
            </div>
          </div>
          </div>
        </section>
      </>
    );
  }
}
const styles = {
  available: { color: "green" },
  unavailable: { color: "red" },
};
export default Condition;
