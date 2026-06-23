import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
const Buttons = (props) => {
  return (
    <Button
      className="shop-dept-btn text-lg! link! transition "
      sx={{
        transition: "all 0.2s ease",
        color: open ? "#fcb800" : "black",
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
      &nbsp;&nbsp;{props.bigButton} &nbsp;&nbsp; <FaAngleDown />
    </Button>
  );
};

export default Buttons;
