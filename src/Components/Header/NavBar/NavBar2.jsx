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
import Data  from "./Data.js";
export default function NavBar2({ buttonBig, number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-between! gap-5">
      <div
        className="relative col1 w-20%"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Button
          className="  text-lg! link! transition "
          sx={{
            transition: "all 0.2s ease",
            color: "black",
            whiteSpace: "nowrap",
            padding: "8px 16px",
            "& .MuiTouchRipple-root": {
              color: "#fbb82c",
            },
            "&:hover": {
              backgroundColor: "#ffffff",
              transform: "scale(1)",
              color: "#fcb800",
            },
            "&:active": {
              transform: "scale(1)",
              backgroundColor: "#fbb82c20",
            },
          }}
        >
          {" "}
          <IoMdMenu />
          &nbsp;&nbsp;{buttonBig}
          &nbsp;&nbsp; <FaAngleDown />
        </Button>
        <CategoryPanel open = {open}/>
      </div>
      <div className="col2 flex items-center justify-center w-[60%]">
        {Data.slice(0, 5).map((item) => (
          <li className=" list-none font-medium gap-7">
            <Link
              key={item.id}
              to="/"
              className="link transition text-md flex items-center gap-2"
            >
              <Button
                className="  text-md! link! transition "
                sx={{
                  transition: "all 0.2s ease",
                  color: "black",
                  whiteSpace: "nowrap",
                  padding: "8px 16px",
                  "& .MuiTouchRipple-root": {
                    color: "#fbb82c",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    transform: "scale(1)",
                    color: "#fcb800",
                  },
                  "&:active": {
                    transform: "scale(1)",
                    backgroundColor: "#fbb82c20",
                  },
                }}
              >
                {item.label}&nbsp;&nbsp;
                {item.id !== 5 ? <LiaAngleDownSolid /> : null}
              </Button>
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
