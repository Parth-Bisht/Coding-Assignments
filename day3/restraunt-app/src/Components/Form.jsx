import React from 'react'

function Form({onadd}) {
    const [formdata,setformdata] = React.useState({})

    const handleChange = (e)=>{
        const inputName = e.target.name;
        setformdata({
            ...formdata,
            [inputName]:e.target.value
        })
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        senddata(formdata)
        // console.log(formdata);
    }

    const senddata = (formdata)=>{
        fetch(`http://localhost:3000/restros`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })
        .then((res) => res.json())
        .then((data)=>onadd(data));
        
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label >Restro Name: </label>
          <input onChange={handleChange} name="name" type="text"  />
          <br />
          <label >Categories: </label>
          <input onChange={handleChange} name="categories" type="text"  />
          <br />
          <label >Image url: </label>
          <input onChange={handleChange} name="imgURL" type="text" />
          <br />
          <label >Payment Method: </label>
          <select onChange={handleChange} name="paymentMethods">
            <option value="--">---</option>
              <option value="Accepts Online payment only">Accepts Online payment only</option>
              <option value="Accepts Cash only">Accepts Cash only</option>
              <option value="Accepts everything">Accepts everything</option>
          </select>
          <br />
          <label>Votes: </label>
          <input onChange={handleChange} name="totalVotes" type="number" />
          <br />
          <label >Reviews: </label>
          <input onChange={handleChange} name="reviews" type="number" />
          <br />
          <label >Rating: </label>
          <input onChange={handleChange} name="rating" type="number" />
          <br />
          <label >Cost for one: </label>
          <input onChange={handleChange} name="costforone" type="number" />
          <br />
          <input type="submit" />
      </form>
    </div>
  )
}

export default Form
