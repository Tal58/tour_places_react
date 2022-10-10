import './App.css';
import {data} from "./helper/data"
import Cards from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App row d-flex justify-content-evenly gap-3">
       <Navbar />
       <Header />
{
  data.map((item,key)=><Cards key={key} title = {item.title} desc = {item.desc} image = {item.image} />)}
     
    </div>
  );
}

export default App;
