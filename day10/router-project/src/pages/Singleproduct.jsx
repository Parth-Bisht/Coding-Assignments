import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";

function Singleproduct() {
  var addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
  const {token} = useContext(AuthContext);
  const [products, setProducts] = useState({});
  const navigate = useNavigate()
  const { xyz, id } = useParams();
  useEffect(() => {
    if (xyz == "Sweater") {
      fetch(`http://localhost:3000/mensweater/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Pants") {
      fetch(`http://localhost:3000/menpants/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Watch") {
      fetch(`http://localhost:3000/menwatch/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Tshirts") {
      fetch(`http://localhost:3000/mentshirt/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
  }, []);
  const handleAddtoCart = () => {
    // alert("Item added");
    if(token){
      products.qty = 1;
      addToCart.push(products);
      localStorage.setItem("addToCart", JSON.stringify(addToCart));
    }
    else{
      products.qty = 1;
      addToCart.push(products);
      localStorage.setItem("addToCart", JSON.stringify(addToCart));
      navigate("/cart")
    }
  };
  return (
    <div>
      {/* <h1>{xyz} product Page {id}</h1>           */}
      <div className="card my-5 mx-3" style={{ maxWidth: "640px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={products.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted d-flex align-items-center">
                  Rating: <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />{" "}
                </small>
              </p>
              <p className="card-text">MRP: ₹{products.mrp}</p>
            </div>
            <button type="button" className="btn btn-outline-secondary mx-2">
              Buy Now
            </button>
            <button
              onClick={handleAddtoCart}
              type="button"
              className="btn btn-outline-success mx-2"
              data-bs-toggle={token?"modal":""}
              data-bs-target={token?"#exampleModal":""}
            >
              Add To Cart
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Product Added!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p> Your item has been added successfully in cart!</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproduct;
