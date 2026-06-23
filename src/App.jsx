import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
