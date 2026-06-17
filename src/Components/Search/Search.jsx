import React from "react";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <>
      <div className="Search flex items-center justify-center gap-2.5">
        <div className="Search-box w-full h-12.5 pl-7.5!  bg-[#d6d1d1] rounded-full relative flex items-center px-4">
          <input
            type="text"
            placeholder="Search for Products..."
            className="w-full h-full bg-transparent border-none focus:outline-none placeholder-[#4e4e4e]"
          />
          <Button
            className="w-12.5 h-12.5 rounded-full!"
            sx={{
              transition: "all 0.2s ease",
              color: "#fbb82c",
              "& .MuiTouchRipple-root": {
                color: "#fbb82c",
              },
              "&:hover": {
                backgroundColor: "#fbb82c20",
                transform: "scale(1)",
              },
              "&:active": {
                transform: "scale(0.95)",
                backgroundColor: "#fbb82c20",
              },
            }}
          >
            <FaSearch className="text-[#fbb82c] text-[18px]" />
          </Button>
        </div>
      </div>
    </>
  );
}
