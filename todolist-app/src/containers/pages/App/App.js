import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Dashboard from '../Dashboard/index';
import Register from '../Register/index';
import Login from '../Login/index'
// import Login from '../Login';

const App = () =>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
