import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screen/Register";
import Login from "./screen/Login";
import Dashboard from "./screen/Dashboard";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
