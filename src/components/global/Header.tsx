import { FaReact } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const showHomeButton = location.pathname !== "/";
  const showDemoButton = location.pathname === "/read-me";
  return (
    <div className="flex justify-between items-center mb-5">
      <div className="flex gap-3.5">
        <FaReact color="white" size={40} />
        {showHomeButton && (
          <button
            onClick={() => navigate("/")}
            className="text-indigo-500 font-bold px-3 py-1 text-lg rounded cursor-pointer"
          >
            Home
          </button>
        )}
        {showDemoButton && (
          <button
            onClick={() => navigate("demo")}
            className="text-indigo-500 font-bold px-3 py-1 text-lg rounded cursor-pointer"
          >
            Demo
          </button>
        )}
      </div>
      <div className="flex gap-4">
        <p
          onClick={() => navigate("read-me")}
          className="text-ghost_white text-2xl cursor-pointer underline"
        >
          #ReadMe
        </p>
      </div>
    </div>
  );
};

export default Header;
