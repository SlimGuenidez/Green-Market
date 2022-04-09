import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
          <nav className="nav">
            <ul>
            <p>
                <Link to="/home">home</Link>
              </p>
              <p>
                <Link to="/add">add item</Link>
              </p>
              <p>
                <Link to="/profil">Profil</Link>
              </p>
              <p>
                <Link to="/">Logout</Link>
              </p>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Layout;