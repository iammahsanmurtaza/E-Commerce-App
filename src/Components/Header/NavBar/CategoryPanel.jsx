import { Link } from "react-router-dom";
import Data from "./Data.js";
import { Button } from "@mui/material";
export default function CategoryPanel({ open, start }) {
  return (
    <div>
      {open && (
        <div className="absolute top-full left-0 w-[320px] text-lg bg-white rounded-md shadow-lg border border-gray-200 z-50">
          {Data.slice(start).map((item) => (
            <Link
              key={item.id}
              to="/"
              className="category-row flex justify-start! items-center gap-3 px-4   rounded-md "
            >
              <Button
                className=" text-md! link! py-4! justifu-start! transition w-[320px] pl-6! "
                sx={{
                  transition: "all 0.2s ease",
                  color: "black",
                  justifyContent: "flex-start",
                  textAlign: "left",
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
                <span className="material-symbols-outlined">{item.symbol}</span>{" "}
                <span className="pl-3!">{item.line}</span>
              </Button>
              {/* <span className="material-symbols-outlined">{item.symbol}</span>
              <span className="">{item.line}</span> */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
