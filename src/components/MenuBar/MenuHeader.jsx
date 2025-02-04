import React from "react";
import "./MenuHeader.css"; 

const MenuHeader = () => {
   return (
      <div className="menu-header">
         <header className="header">
            <nav className="nav" id="Lnav">
               <ul className="nav-list">
                  <li><a href="#">Man</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">Home-living</a></li>
                  <li><a href="#">Beauty</a></li>
                  <li><a href="#">Order</a></li>
               </ul>
            </nav>
            <nav className="search-nav">
               <input type="text" className="search-bar" placeholder="Search..." />
            </nav>
            <nav className="nav" id="Rnav">
               <ul className="nav-list">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Log Out</a></li>
               </ul>
            </nav>
         </header>

         
      </div>
   );
};

export default MenuHeader;
