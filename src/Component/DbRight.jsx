import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiTelegramLogo } from "react-icons/pi";

const DbRight = () => {
  return (
    <div className="w-[35%] border-l-2 border-white bg-gray-100 dark:bg-gray-900  flex flex-col gap-2 px-3 py-5">
      <div className="upper">
        <span className="bg-slate-500 dark:bg-slate-800 text-white mt-2 w-[100%] rounded-sm p-2">
          Lead Details
        </span>
        <div className="flex justify-between items-center p-2 text-gray-600 dark:text-gray-400 Name">
          <span>Name</span>Orlando
        </div>
        <div className="flex justify-between items-center p-2 text-gray-600 dark:text-gray-400 Contact">
          <span>Contact</span>+54-9062827869
        </div>
        <div className="flex justify-between items-center p-2 text-gray-600 dark:text-gray-400 Email">
          <span>Email Id</span>orlando@gmail.com
        </div>
        <div className="flex justify-between items-center p-2 text-gray-600 dark:text-gray-400 LinkedIn">
          <span>LinkedIn</span>linkedin.com/in/timvadde/
        </div>
        <div className="flex justify-between items-center p-2 text-gray-600 dark:text-gray-400 Company">
          <span>Company Name</span>Reachinbox
        </div>
      </div>
      <div className="middle mt-4 text-gray-600 font-medium">
        <span className="bg-slate-600 dark:bg-slate-800 text-white mt-2 w-full p-2">
          Activities
        </span>
        <div className="Compain flex flex-col mt-3 gap-2">
          <span>Campiagn Name</span>
          <span>3 Steps | 5 Days in Sequence</span>
        </div>
        <div className="flex flex-col gap-2">
          {[...Array(7)].map((_, index) => (
            <div className="email flex gap-2 mt-2" key={index}>
              <div className="h-6 w-6 text-center flex items-center justify-center rounded-full bg-slate-400 dark:bg-slate-600">
                <MdOutlineMailOutline className="text-gray-700 dark:text-gray-300" />
              </div>
              <div className="flex flex-col gap-2">
                <span>Step {index + 1}: Email</span>
                <span className="flex items-center gap-1 text-sm">
                  <PiTelegramLogo className="text-yellow-200" /> Sent 3rd, Feb
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DbRight;
