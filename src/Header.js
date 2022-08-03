import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket , user },dispatch] = useStateValue();
  const authhandle = () => {
      if(user){
          auth.signOut();
      }
  }
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src={require("./image/best-deal.png")}
          alt="no able"
        />
      </NavLink>
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <NavLink to={!user && "/login"}>                           
        <div  onClick={authhandle} className="header__option">
          <span className="header__optionlineOne">Hello {!user? 'Guest' :user.email}</span>
          <span className="header__optionlineTWo">{ user ? 'Sig Out ':'Sign In' }</span>
        </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionlineOne">Return</span>
          <span className="header__optionlineTWo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Yours</span>
          <span className="header__optionlineTWo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTWo header__BasketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
