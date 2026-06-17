import { Button } from "@mui/material";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { LiaAngleDownSolid } from "react-icons/lia";
export default function NavBar() {
  return (
    <>
      <nav className="py-2! border-b border-gray-200">
        <div className="container flex items-center gap-5">
          <div className="col1">
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
              &nbsp;&nbsp;Shop By Department&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <FaAngleDown />
            </Button>
          </div>
          <div className="col2 w-[55%]">
            <ul>
              <li className="flex items-center list-none font-medium gap-7">
                <Link
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
                    Home Layout
                  </Button>
                  <LiaAngleDownSolid />
                </Link>
                <Link
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
                    Category
                  </Button>
                  <LiaAngleDownSolid />
                </Link>
                <Link
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
                    Product
                  </Button>
                  <LiaAngleDownSolid />
                </Link>
                <Link
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
                    Blog
                  </Button>
                  <LiaAngleDownSolid />
                </Link>
                <Link
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
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col3 w-[25%]">
            <div className="Phone flex items-center justify-end gap-3">
              <div className="">
                <FiPhone className=" text-xl " />
              </div>
              <div className="text-gray-900 text-5 font-medium">
                Hotline: 1-800-234-5678
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}
