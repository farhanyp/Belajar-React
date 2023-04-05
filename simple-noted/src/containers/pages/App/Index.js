import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
