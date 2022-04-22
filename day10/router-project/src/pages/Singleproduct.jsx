import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaStar,FaStarHalf} from 'react-icons/fa';

function Singleproduct() {
  const [products, setProducts] = useState({});
  const {xyz, id} = useParams();
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

  return (
    <div>
      {/* <h1>{xyz} product Page {id}</h1>           */}
          <div className="card my-5 mx-3" style={{maxWidth: "640px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={products.image} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{products.title}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted d-flex align-items-center">Rating: <FaStar/> <FaStar/> <FaStar/> <FaStarHalf/> </small></p>
              <p className="card-text">MRP: {products.mrp}</p>
            </div>
            <button type="button" class="btn btn-outline-secondary mx-2">Buy Now</button>
            <button type="button" class="btn btn-outline-success mx-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
