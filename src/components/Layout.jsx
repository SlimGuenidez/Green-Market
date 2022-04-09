import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
          <nav>
            <ul>
            <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/add">add item</Link>
              </li>
              <li>
                <Link to="/profil">Profil</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
};

export default Layout;