import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-ghost_white position border-2 text-center mt-28 gap-5 border-ghost_white rounded-2xl p-10 flex justify-center flex-col">
      <h1 className="text-5xl">404</h1>
      <h2>Oops, Page not found!</h2>
      <p>
        The Page, that you're looking for is not found (it maybe moved, deleted
        or even doesn't exist). Sorry for the Inconvenience.
      </p>
      <p>If you think this is an error or something is broken, click report</p>
      <div className="flex gap-5 justify-center ">
        <button
          onClick={() => navigate("/")}
          className="border p-1.5 rounded-lg cursor-pointer"
        >
          Home
        </button>
        <button className="p-1.5 rounded-lg cursor-pointer">Report</button>
      </div>
    </div>
  );
};

export default NotFound;
