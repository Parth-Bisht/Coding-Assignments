import React from 'react'
import Employee from './Employee';

function Form() {
    const [employeedata,setemployeedata] = React.useState([]);
    const [formData,setformData]=React.useState({})

    const onadd = (newdata)=>{
        setemployeedata([...employeedata,newdata])
    }

    React.useEffect(()=>{
        getdata();
    },[])

    const handleChange = (e)=>{
        const inputName = (e.target.name);

        if (e.target.type === "checkbox") {
            setformData({
              ...formData,
              [inputName]: e.target.checked,
            });
        }
        else {
            setformData({ 
                ...formData,
                [inputName]:e.target.value
            })
        }
        
    }

    const getdata = ()=>{
        fetch(`http://localhost:3000/data`)
        .then((res) => res.json())
        .then((data)=> setemployeedata(data))
        .catch((e)=>{
            console.log(e)
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        senddata(formData);       
    }
    const senddata = async (value)=>{
        let res = await fetch(`http://localhost:3000/data`,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(value)
        })
        let data = await res.json();
        onadd(data);
    }
  return (
      <>
    <div>
      <form onSubmit={handleSubmit}>
          <label >
              Name:
          </label>
          <input onChange={handleChange} type="text" name="name" placeholder="Enter your name" />
          <br />

          <label >
              Age:
          </label>
          <input onChange={handleChange} type="number" name="age" placeholder="Enter your age" />
          <br />

          <label >
              Address:
          </label>
          <input onChange={handleChange} type="text" name="address" placeholder="Enter your address" />
          <br />

          <label >
              Department:
          </label>
          <select onChange={handleChange} name="department">
              <option value="--">--</option>
              <option value="IT">IT</option>
              <option value="Production">Production</option>
              <option value="Marketing ">Marketing </option>
              <option value="Finance  ">Finance  </option>
              <option value="Sales  ">Sales  </option>
          </select>
          <br />

          <label >
              Salary:
          </label>
          <input onChange={handleChange} type="number" name="salary" placeholder="Enter your salary" />
          <br />

            <label >
                Married:
            </label>
            <input type="checkbox" name="married" onChange={handleChange}/>
          <br />

          <input type="submit" />
      </form>
    </div>
    <div>
    <table border="1">
    <thead>
    <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>AGE</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>MARRIED</th>
        </tr>
    </thead>
    <tbody>   
    {employeedata.map((item)=>{
            return <Employee key={item.id} data={item}/>
        })}
    </tbody>
     
    </table>
        
    </div>
    </>
  )
}

export default Form
