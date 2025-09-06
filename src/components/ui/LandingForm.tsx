import TextInput from "../common/Input";
import { FaPlay } from "react-icons/fa";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const LandingForm = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDemo = () => {
    if (value.trim()) {
      setError(false);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        navigate("demo");
      }, 1500);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-bg_blue rounded-2xl py-5 px-4 sm:px-6 md:px-10 mt-10 sm:mt-14  mx-auto">
      <p className="text-ghost_white text-sm sm:text-base mb-3 flex gap-2 sm:gap-3 leading-relaxed">
        <AiOutlineInfoCircle
          size={20}
          className="flex-shrink-0 mt-0.5"
          color="white"
        />
        <span>
          All content on this site is static. This website is intended solely to
          demonstrate functionality and does not provide live data or
          interactive services. The video shown in the demo is also static and
          will not change regardless of the input provided.
          <br />
          <strong>
            Link used for demo: https://www.youtube.com/watch?v=FkQWpQd9Zdo
          </strong>
        </span>
      </p>

      <TextInput
        placeholder="Paste your video URL here"
        icon={<FaPlay color="white" size={22} />}
        className="h-16 sm:h-20 md:h-24 text-lg sm:text-xl md:text-2xl w-full"
        value={value}
        error={error ? "please fill the data with requested info" : ""}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        variant="primary"
        onClick={handleDemo}
        disabled={loading}
        className="cursor-pointer w-full mt-6 text-lg sm:text-xl md:text-2xl py-3 sm:py-4 flex items-center justify-center rounded-xl"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            Loading...
          </div>
        ) : (
          "Try a demo"
        )}
      </Button>
    </div>
  );
};

export default LandingForm;
