import React from "react";
import Logo from "../assests/Logo.svg";
import { IoIosHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { GiBrickWall } from "react-icons/gi";
import { GoInbox } from "react-icons/go";
import { FiBarChart } from "react-icons/fi";
import Upper from "./Upper";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="flex flex-col justify-between items-center h-screen bg-slate-100 dark:bg-slate-800 p-2 fixed z-10">
        <ul className="flex flex-col items-center justify-between gap-6 text-2xl text-black dark:text-white">
          <img src={Logo} alt="" />
          <IoIosHome className="cursor-pointer" />
          <MdOutlinePersonSearch className="cursor-pointer" />
          <IoMail className="cursor-pointer" />
          <TbBrandTelegram className="cursor-pointer" />
          <GiBrickWall className="cursor-pointer" />
          <GoInbox className="cursor-pointer" onClick={navigate('/Dashboard')}/>
          <FiBarChart className="cursor-pointer" />
        </ul>
        <span className="mb-3 text-black dark:text-white">user</span>
      </div>
      <Upper />
      {/* <Dashboard/> */}
    </div>
  );
};

export default Navigation;
