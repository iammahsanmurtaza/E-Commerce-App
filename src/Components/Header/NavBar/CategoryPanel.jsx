import { Link } from "react-router-dom";
import Data from "./Data.js";
export default function CategoryPanel({ open }) {
  return (
    <div>
      {open && (
        <div className="absolute top-full left-0 w-[320px] bg-white shadow-lg border border-gray-200 z-50">
          {Data.slice(5).map((item) => (
            <Link
              key={item.id}
              to="/"
              className="category-row flex items-center gap-3 px-4 py-3 pl-5! hover:bg-gray-100"
            >
              <span className="material-symbols-outlined">{item.symbol}</span>
              <span className="">{item.line}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
