import React from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../index.css";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 sticky z-50 text-black border-b-2 border-black">
      <Link to="/">
        <div className="flex flex-row gap-3 justify-center items-center">
          <h2 className="font-bold text-3xl">SpeyPay</h2>
        </div>
      </Link>

      <div className="flex flex-row gap-5">
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Header;
