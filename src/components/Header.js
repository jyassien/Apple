import React, { Component } from "react";

import cart from "../commonResources/images/icons/cart-sm.png";
import search from "../commonResources/images/icons/search-icon-sm.png";
import logo from "../commonResources/images/icons/logo-sm.png";

import HeadLinks, { HeadLogo } from "./HeadLinks";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <HeadLogo img={logo} alt="logo" />

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <HeadLinks name="Mac" link="/mac/" />
                  <HeadLinks name="iphone" link="/iphone/" />
                  <HeadLinks name="ipad" link="/ipad/" />
                  <HeadLinks name="watch" link="/watch/" />
                  <HeadLinks name="Tv" link="/tv/" />
                  <HeadLinks name="Music" link="/music/" />
                  <HeadLinks name="Music" link="/Music/" />
                  <HeadLinks name="Support" link="/Support/" />

                  <HeadLinks img={search} alt="search" link="/search/" />
                  <HeadLinks img={cart} alt="cart" link="/cart/" />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
