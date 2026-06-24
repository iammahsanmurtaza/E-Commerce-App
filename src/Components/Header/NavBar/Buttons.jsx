import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // 1. Import the hook
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { LiaAngleDownSolid } from "react-icons/lia";
const Buttons = ({ buttonBig, item }) => {
  const navigate = useNavigate(); // 2. Initialize the navigate function
  return (
    <>
      {item.id === 0 ? (
        <Button
          className={`pl-7! pr-10! py-3! text-lg! link! transition `}
          onClick={() => navigate("/")} // 3. Add the click handler
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
          <IoMdMenu />
          &nbsp;&nbsp;{item.label}
          &nbsp;&nbsp;
          <FaAngleDown />
        </Button>
      ) : (
        <Button
          className="  text-md! py-3! link! transition "
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
      )}
    </>
  );
};

export default Buttons;
