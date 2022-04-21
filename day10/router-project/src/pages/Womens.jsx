import React from 'react'
import ProductCard from './ProductCard'

function Womens() {
  const [products,setProducts] = React.useState([])
  React.useEffect(()=>{
    fetch(`http://localhost:3000/women`)
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div className="container">
    <div className="row">
      {products.map((items)=>{
        return <div key={items.id} className="col-md-4"><ProductCard img={items.image} title={items.title}/></div>
      })}

    </div>
    </div>
  )
}

export default Womens
