/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

// import { Display } from "./components/Display";
// import { Launch } from "./components/Launch";
// import Contact from "./components/Contact";
// import Todo from "./components/Todo";
// import Login from "./components/Login";
// import Ecommerce from "./components/Ecommerce";

import Mobile from "./components/Mobile"
import Laptop from "./components/Laptop"
import Book from "./components/Book"
import GoogleLogin from "./components/GoogleLogin"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { render } from "react-dom";
import { createContext, useState } from "react";

// How to use one component's useState in another component:
export const myBasket = createContext();

// How to store the data in React:
// Function --> useState()

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    // Logic to logout from the application and redirect to login page:
    setIsLoggedIn(false)
    window.location.pathname = "/login"
  }

  return (
    <div className="mt-2">
    {/* React router links */}
    <BrowserRouter>
      <Link className="mx-2" to="/mobile">Mobile</Link>
      <Link className="mx-2" to="/laptop">Laptop</Link>
      <Link className="mx-2" to="/book">Book</Link>

      { isLoggedIn? <button className="btn btn-primary btn-sm" onClick={logout}>Logout</button> : <Link className="mx-2 btn btn-primary btn-sm" to="/GoogleLogin">Login</Link>}

      <Routes>
        <Route path="/mobile" element={<Mobile/>}></Route>
        <Route path="/laptop" element={<Laptop/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/GoogleLogin" element=
          {
            <myBasket.Provider value={{ set: setIsLoggedIn }}>
              <GoogleLogin/>
            </myBasket.Provider>
          }>
        </Route>

      </Routes>
    </BrowserRouter>

      {/* <Todo/> */}
      {/* <Login/> */}
      {/* <Ecommerce/> */}
    </div>
  );
}

render(<App/>, document.getElementById("root"))

