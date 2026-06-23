import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/logo-martfury.webp";
import Search from "../Search/Search.jsx";
import { MdPersonOutline } from "react-icons/md";

import Button from "@mui/material/Button";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";

// Cart Badge
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip from "@mui/material/Tooltip";

// NavBar
// import NavBar from "./NavBar/NavBar.jsx";
import NavBar2 from "./NavBar/NavBar2.jsx";
import Data from "./NavBar/Data.js";
const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -3px;
    right: 0px;
    background-color: #fcb800;
  }
`;

export default function Header() {
  return (
    <>
      <header className="border-b border-gray-200 pb-4!">
        <div className="topStrip py-2">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="col1 w-[50%]">
                <p className="font-cookie">Welcome to Ahsan's Online Store !</p>
              </div>
              <div className="col2 w-[50%] flex items-center justify-end">
                <ul className="flex items-center">
                  <li className="list-none">
                    <nav className="flex gap-x-6.25">
                      <Link to="#" className="link-primary">
                        Store Location
                      </Link>
                      <p>|</p>
                      <Link to="#" className="link-primary">
                        Track order
                      </Link>
                    </nav>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="flex items-center gap-x-12.5">
            <div className="col1 w-[20%] flex items-center pl-3!">
              <Link to="/">
                <img src={image} alt="Logo" className="h-auto object-contain" />
              </Link>
            </div>
            <div className="col2 w-[60%]">
              <Search />
            </div>
            <div className="col3 w-[20%] ">
              <ul className="">
                <li className="list-none flex items-center justify-end w-full gap-5 pr-2!">
                  <Link to="#">
                    <Tooltip title="cart">
                      <IconButton aria-label="view cart with 2 items">
                        <CartBadge
                          badgeContent={0}
                          color="primary"
                          overlap="circular"
                        >
                          <ShoppingCartIcon fontSize="large" />
                        </CartBadge>
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link to="/login">
                    <Tooltip title="Wish Lists">
                      <IconButton aria-label="view favorites with 2 items">
                        <CartBadge
                          badgeContent={0}
                          color="primary"
                          overlap="circular"
                        >
                          <CiHeart className="text-[37px] transition link-primary" />
                        </CartBadge>
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link to="/login">
                    <Tooltip title="Account">
                      <MdPersonOutline className="text-[37px] link-primary text-gray-800! " />
                    </Tooltip>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <NavBar /> */}
      <NavBar2
        Data={Data}
        buttonBig={"Shop By Department"}
        number={"Hotline: 1-800-234-5678"}
      />
    </>
  );
}
