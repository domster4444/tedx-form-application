import MultiPageForm from "./screen/MultiPageForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./screen/Register";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
