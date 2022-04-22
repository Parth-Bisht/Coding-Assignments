import styled from "styled-components";

export const NavbarDiv = styled.div`
  height: 50px;
  border: ${(props)=>props.color=="white"?"1px solid black":"1px solid white"};
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  align-items: center;
  background: ${(props)=>props.color=="white"?"white":"black"};
  color: ${(props)=>props.color=="white"?"black":"white"}
`;

export const FooterDiv = styled.div`
      text-align: center;
    position: absolute;
    height: 150px;
    width: 99.8vw;
    border: ${(props)=>props.color=="white"?"1px solid black":"1px solid white"};
    bottom: 0;
    background: ${(props)=>props.color=="white"?"white":"black"};
  color: ${(props)=>props.color=="white"?"black":"white"}
`;

export const FormDiv = styled.form`
    border:1px solid grey;
    display: flex;
    flex-direction:column;
    width: 27%;
    margin: auto;
    padding: 40px 20px;
    background: ${(props)=>props.color=="white"?"white":"black"};
  color: ${(props)=>props.color=="white"?"black":"white"}
`;

export const Body = styled.div`
    height: 491px;
    margin-top: -21px;
    background: ${(props)=>props.color=="white"?"white":"black"};
  color: ${(props)=>props.color=="white"?"black":"white"}
`;