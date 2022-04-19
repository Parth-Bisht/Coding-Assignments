import './App.css';
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  font-size: 15px;
  background: transparent;
  color: black;
  border: 1px solid grey;
  ${(props) =>
    props.type === "primary"
      ? `background-color:#2591fe;border:none;color:white;`
      : props.type === "dashed"
      ? `border-style: dotted;`
      : props.type === "text"
      ? `border:none`
      : props.type === "link"
      ? `border:none;color:#2591fe;`
      : ``}
`;

function App() {
  return (
    <div className="App">
       <Button>Default Button</Button>
      <Button type={"primary"}>Primary Button</Button>
      <Button type={"dashed"}>Dashed Button</Button>
      <Button type={"text"}>Text Button</Button>
      <Button type={"link"}>Link Button</Button>
    </div>
  );
}

export default App;
