import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Cart() {
  var cart = JSON.parse(localStorage.getItem("addToCart")) || [];
  const [products,setProducts] = useState(cart);

  function sort(e){
    if(e.target.htmlFor=="btnradio1"){
     products.sort((a,b)=>{
       return a.mrp - b.mrp
     })
     console.log(products);
     setProducts([...products])
    }
    else{
      products.sort((a,b)=>{
        return b.mrp - a.mrp
      })
      console.log(products);
      setProducts([...products])
    }
  }

  return (
    <div>
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
  <label onClick={sort} className="btn btn-outline-primary" htmlFor="btnradio1">Low to high</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label onClick={sort} className="btn btn-outline-primary" htmlFor="btnradio2">High to Low</label>
</div>
    <div className="container my-5">
     
        {products.map((items) => {
          return (
            <div key={items.image} className="card mb-3" style={{maxWidth: "740px"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={items.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <p className="card-text">
                <small className="text-muted d-flex align-items-center">
                  Rating: <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />{" "}
                </small>
              </p>
              <p className="card-text">MRP: ₹{items.mrp}</p>
              <p className="card-text">QTY: {items.qty}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      
    </div>
  </div>
  )
}

export default Cart;
