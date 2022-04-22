import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Multiproduct() {
  const [products, setProducts] = useState([]);
  const { xyz } = useParams();
  useEffect(() => {
    if (xyz == "Sweater") {
      fetch(`http://localhost:3000/mensweater`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Pants") {
      fetch(`http://localhost:3000/menpants`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Watch") {
      fetch(`http://localhost:3000/menwatch`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
    if (xyz == "Tshirts") {
      fetch(`http://localhost:3000/mentshirt`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {products.map((items) => {
            return (
              <div key={items.id} className="col-md-3">
                <div className="card" style={{ width: "14rem" }}>
                  <img
                    src={items.image}
                    height="291px"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link to={`${items.id}`} className="btn btn-dark">
                      Buy
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Multiproduct;
