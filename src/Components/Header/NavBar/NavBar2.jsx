import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LiaAngleDownSolid } from "react-icons/lia";
import CategoryPanel from "./CategoryPanel.jsx";
import BlenderIcon from "@mui/icons-material/Blender";
// states
import { useState } from "react";
// Data
import Buttons from "./Buttons.jsx";
import Data from "./Data.js";
export default function NavBar2({ buttonBig, number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-between! gap-5">
      <div
        className="relative col1 w-20%"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Buttons item={Data[0]} buttonBig={buttonBig} />
        <CategoryPanel open={open} start = {6} />
      </div>
      <div className="col2 flex items-center justify-center w-[60%]">
        {Data.slice(1, 6).map((item) => (
          <li className=" list-none font-medium gap-7" key={item.id}>
            <Link
              to="/"
              className="link transition text-md flex items-center gap-2"
            >
              <Buttons item={item} name={null} />
            </Link>
          </li>
        ))}
      </div>
      <div className="col3 w-[20%]">
        <div className="Phone flex items-center justify-center gap-3">
          <div className="">
            <FiPhone className=" text-xl " />
          </div>
          <div className="text-gray-900 text-5 font-medium">{number}</div>
        </div>
      </div>
    </div>
  );
}
