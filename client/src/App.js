import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import DonorPage from "./pages/DonorPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    

    <div className="app">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donor" element={<Donor Page />} />
        <Route path="/donor/:id" element={<DonorPage editMode={true} />} />
      </Routes>      
      </BrowserRouter>
    </div>  
    )
};

export default App;
