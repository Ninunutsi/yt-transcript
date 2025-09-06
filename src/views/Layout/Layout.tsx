import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { StarsBg } from "../../components";
import { FaReact } from "react-icons/fa";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine which buttons to show based on current path
  const showHomeButton = location.pathname !== "/";
  const showDemoButton = location.pathname === "/read-me";

  return (
    <div className="py-5 px-20 relative">
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
          {/* Always show ReadMe link */}
          <p
            onClick={() => navigate("read-me")}
            className="text-ghost_white text-2xl cursor-pointer underline"
          >
            #ReadMe
          </p>
        </div>
      </div>

      <StarsBg />
      <Outlet />
    </div>
  );
};

export default Layout;
