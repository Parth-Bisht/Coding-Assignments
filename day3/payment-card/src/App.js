
import './App.css';
import DateLogo from './components/datelogo';
import Button from './components/button';
import Heading from './components/Heading';


function App() {
  return (
    <div>
    <div style={{backgroundColor:"#f6a61f",height:"433px",marginBottom:"40px"}} className="card">
      <DateLogo date={"23/02/2021"} img={"https://www.iconpacks.net/icons/3/free-amazon-logo-icon-6202.png"}/>
      <Button/>
      <Heading title1={"Amazon Gift"} title2={"Pay"}/>
      <DateLogo date={"Desktop-Mobile"} img={"http://cdn.onlinewebfonts.com/svg/img_418607.png"}  />
    </div>
    <div style={{height:"390px"}} className="card">
      <DateLogo date={"17 Sep 2020"} img={"https://1000logos.net/wp-content/uploads/2016/10/Apple-logo.jpg"}/>
      <Button/>
      <Heading title1={"Apple Gift"} title2={"Payment"}/>
      <DateLogo date={"MacOS-Mobile"} img={"http://cdn.onlinewebfonts.com/svg/img_418607.png"}  />
    </div>
    </div>
  );
}

export default App;
