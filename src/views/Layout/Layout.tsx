import { Outlet } from "react-router-dom";
import { Header, StarsBg } from "../../components";

const Layout = () => {
  return (
    <div className="py-5 px-20 relative">
      <Header />
      <StarsBg />
      <Outlet />
    </div>
  );
};

export default Layout;
