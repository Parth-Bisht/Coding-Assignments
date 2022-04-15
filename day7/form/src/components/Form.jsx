import React from "react";
import Employee from "./Employee";
import styles from "./Form.module.css";

function Form() {
  const [employeedata, setemployeedata] = React.useState([]);
  const [formData, setformData] = React.useState({});
  const [isloading,setisloading] = React.useState(false);
  const [iserror,setiserror] = React.useState(false);

  const onadd = (newdata) => {
      setisloading(false)
    setemployeedata([...employeedata, newdata]);
  };

  React.useEffect(() => {
      setisloading(true)
    getdata();
  }, []);

  const handleChange = (e) => {
    const inputName = e.target.name;

    if (e.target.type === "checkbox") {
      setformData({
        ...formData,
        [inputName]: e.target.checked,
      });
    } else {
      setformData({
        ...formData,
        [inputName]: e.target.value,
      });
    }
  };

  const getdata = () => {
    fetch(`http://localhost:3000/data`)
      .then((res) => res.json())
      .then((data) => {
          setemployeedata(data);
          setisloading(false)
        })
      .catch((e) => {
        setisloading(false)
          setiserror(true);
        console.log(e);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    senddata(formData);
  };
  const senddata = async (value) => {
      setisloading(true)
    let res = await fetch(`http://localhost:3000/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    let data = await res.json();
    onadd(data);
  };
  return (
    <>
      <div className={styles.border}>
        <h1 style={{ textAlign: "center" }}>Form</h1>
        <form className={styles.mainForm} onSubmit={handleSubmit}>
          <label>
            <strong> Name: </strong>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter your name"
          />

          <label>
            <strong> Age:</strong>
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="age"
            placeholder="Enter your age"
          />

          <label>
            <strong> Address: </strong>
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            placeholder="Enter your address"
          />

          <label>
            <strong> Department: </strong>
          </label>
          <select onChange={handleChange} name="department">
            <option value="--">--</option>
            <option value="IT">IT</option>
            <option value="Production">Production</option>
            <option value="Marketing ">Marketing </option>
            <option value="Finance  ">Finance </option>
            <option value="Sales  ">Sales </option>
          </select>

          <label>
            <strong> Salary: </strong>
          </label>
          <input
            onChange={handleChange}
            type="number"
            name="salary"
            placeholder="Enter your salary"
          />

          <label>
            <strong> Married: </strong>
          </label>
          <input type="checkbox" name="married" onChange={handleChange} />
          <span></span>
          <input className={styles.btn} type="submit" />
        </form>
      </div>
      <div>
      {isloading? (<div>...loading</div>) : iserror? (<div>Something went wrong</div>) : ( <table border="1">
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
            {employeedata.map((item) => {
              return <Employee key={item.id} data={item} />;
            })}
          </tbody>
        </table>)}
       
      </div>
    </>
  );
}

export default Form;
