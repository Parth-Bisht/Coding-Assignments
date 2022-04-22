import React,{useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import {FormDiv ,Body} from './All.styled';

function Form() {
    const {theme} = useContext(ThemeContext);
  return (
    <>
      <Body color={theme} >
        <h1 style={{ textAlign: "center" }}>Form</h1>

        <FormDiv color={theme} >
          <label>
            <strong> Name: </strong>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{marginBottom:"10px"}}
          />

          <label>
            <strong> Age:</strong>
          </label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            style={{marginBottom:"10px"}}
          />

          <label>
            <strong> Address: </strong>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            style={{marginBottom:"10px"}}
          />

          <label>
            <strong> Department: </strong>
          </label>
          <select style={{marginBottom:"10px"}} name="department">
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
            type="number"
            name="salary"
            placeholder="Enter your salary"
            style={{marginBottom:"10px"}}
          />

          <label>
            <strong> Married: </strong>
          </label>
          <input type="checkbox" name="married"/>
          <span></span>
          <input type="submit" />
        </FormDiv>
      </Body>
     
    </>
  );
}

export default Form;
