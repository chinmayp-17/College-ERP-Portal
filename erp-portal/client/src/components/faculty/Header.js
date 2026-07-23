import { LogOut } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login/facultylogin");
  };
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
      <div className="flex items-center ">
        <img
          src="https://icon-library.com/images/cms-icon/cms-icon-11.jpg"
          alt=""
          className="h-7"
        />
        <h1 className="font-bold text-blue-600 text-sm">CMS</h1>
      </div>
      <h1 className="font-semibold text-black">Welcome</h1>
      <div className="flex items-center space-x-3">
        <img src={user.result.avatar} alt={user.result.name.charAt(0)} className="w-8 h-8 rounded-full border-blue-600 border-2 object-cover" />
        <h1>{user.result.name.split(" ")[0]}</h1>
        <LogOut
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default Header;
