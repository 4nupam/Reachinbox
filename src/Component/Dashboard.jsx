import React, { useState, useEffect } from "react";
import DbRight from "./DbRight";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { useData } from "../ContextApi/Context";
import DeletePop from "./DeletePop";
import ReplyComp from "./ReplyComp";
import { FaDotCircle } from "react-icons/fa";

const Dashboard = () => {
  const { data, loading, error } = useData();
  const [modalState, setModalState] = useState({ deletePop: false, reply: false });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "r") {
        setModalState(prev => ({ ...prev, reply: !prev.reply }));
      } else if (event.key === "d") {
        setModalState(prev => ({ ...prev, deletePop: !prev.deletePop }));
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const close = () => {
    setModalState({ deletePop: false, reply: false });
  };

  console.log(data.data)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ml-16 mt-16 flex justify-start bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400">
      <div className="w-[35%] flex flex-col bg-gray-200 dark:bg-gray-800">
        <div className="w-full bg-slate-200 p-4 rounded-md shadow-md">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label htmlFor="mail-filter" className="sr-only">Mail Filter</label>
              <select id="mail-filter" className="font-bold text-blue-600 dark:text-white">
                <option value="">Inbox All(s)</option>
                <option value="">Outbox</option>
                <option value="">Spam</option>
              </select>
              <button className="p-2" aria-label="Refresh">
                <IoRefreshCircleOutline />
              </button>
            </div>
            <span>25/25 Inboxes Selected</span>
            <div className="mt-2">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                type="text"
                id="search"
                placeholder="Search"
                className="w-full outline-none p-2 bg-transparent border-2 border-gray-600 rounded-md"
              />
            </div>
            <div className="flex justify-between items-center py-2">
              <span><b className="text-violet-800 dark:text-violet-200">26</b> New Replies</span>
              <label htmlFor="sort-order" className="sr-only">Sort Order</label>
              <select id="sort-order" className="font-bold text-black bg-transparent dark:text-white dark:bg-gray-800">
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Earlier</option>
              </select>
            </div>
            <hr className="border-t border-slate-700 dark:border-gray-700" />
          </div>
          <div className="flex flex-col gap-2">
            {data?.data.map((item, index) => {
              const month = new Date(item.sentAt).toLocaleString('default', { month: 'short' });
              return (
                <div key={index} className="Card_left cursor-pointer">
                  <div className="upper flex items-center justify-between p-2">
                    <span>{item.fromEmail}</span>
                    <span>{month}</span>
                  </div>
                  <span className="p-2">I have tried a lot</span>
                  <div className="div mt-2 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1 bg-slate-600 p-2 text-white rounded-full">
                      <FaDotCircle className="text-blue-500" /> Interested
                    </span>
                    <span>campaignName</span>
                  </div>
                  <hr className="border-2 mt-2 border-slate-700 dark:border-gray-700" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="middle w-full p-2">
        <nav className="flex items-center justify-between">
          <div className="left flex flex-col gap-2">
            <h2>{data.data.fromName || 'Users'}</h2>
            <span>{data.data.fromEmail || 'user@example.com'}</span>
          </div>
          <div className="flex items-center gap-2">
            <select name="" id="">
              <option value="">Meeting Completed</option>
              <option value="">Meeting Due</option>
            </select>
            <select name="" id="">
              <option value="">Move</option>
              <option value="">Not Move</option>
            </select>
            <button>:</button>
          </div>
        </nav>
        <hr />
        <div className=" flex items-center w-full justify-center mt-2">
          <hr />
          <span>Today</span>
          <hr />
        </div>
        {data?.data.map((reply, index) => (
          <div key={index} className="reply_box cursor-pointer flex flex-col border-2 border-white mt-2">
            <div className="upper flex items-center justify-between p-2">
              <span>{reply.fromName}</span>
              <span>{reply.timestamp}</span>
            </div>
            <div className="p-2 flex flex-col gap-2">
              <span>from : {reply.fromEmail} cc : {reply.cc}</span>
              <span>to: {reply.toEmail}</span>
              <span>{reply.greeting}</span>
              <span>{reply.body}</span>
           
            </div>
          </div>
        ))}
      </div>
      <DbRight />
      {modalState.deletePop && <DeletePop close={close} />}
      {modalState.reply && <ReplyComp close={close} />}
    </div>
  );
};

export default Dashboard;
