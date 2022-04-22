import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ title, img, width }) {
  return (
    <div>
      <div className="card my-3" style={{ width: `${width}` }}>
        <img src={img} height="291px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <Link to={title} className="btn btn-dark">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
