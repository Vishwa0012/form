import React, { useState } from "react";
import Home from "./Components/Home";
import AddUser from "./Components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<Home user={user} setUser={setUser} />}
          />
          <Route path="/" element={<AddUser user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
