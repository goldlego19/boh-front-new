import Button from "@atlaskit/button/new";
import { Link } from "react-router-dom";
const AuthPage = () => {
  return (
    <div className="bg-darkBlue flex items-center justify-center h-screen w-screen">
      <div className="bg-lightBlue flex flex-col rounded-[1.875rem] p-8 text-center justify-center shadow-2xl w-1/2 h-4/5">
        <div className="flex justify-center mb-20">
          <img
            src="src\assets\image.png"
            alt="Balance of Hours Icon"
            className="w-80 h-80"
          />
        </div>
        <div className="">
          <h1 className="text-[#fff] text-[5rem] font-sf-pro font-bold mb-2">
            Balance of Hours
          </h1>
          <p className="text-[#fff] font-sf-pro text-[1.5rem] mb-14">
            Seamless information extraction from <br />
            Confluence made simple
          </p>
          <Link to="/accounts">
            <div className="flex items-center justify-center">
              <button className="w-[40%] rounded-[30px] font-sf-pro font-bold bg-white text-2xl text-[#8080804D] py-5 transform transition-transform ease-in-out duration-300 hover:scale-105">
                Authenticate
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
