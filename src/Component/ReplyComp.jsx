import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { FaRegSmile } from "react-icons/fa";
import { FiUserMinus } from "react-icons/fi";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { useData } from "../ContextApi/Context";

const ReplyComp = ({ close }) => {
  const { rply, loading } = useData();
  const [data, setData] = useState({
    to: '',
    from: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const postapi = async (thread_id) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYW51cGFtdXBhZGh5YXk5NzFAZ21haWwuY29tIiwiaWQiOjUzNCwiZmlyc3ROYW1lIjoiQW51cGFtIiwibGFzdE5hbWUiOiJVcGFkaHlheSJ9LCJpYXQiOjE3MjMzODg4NDcsImV4cCI6MTc1NDkyNDg0N30.bacGM9RxpKL5oG7_u1hduw6pEVFeJgF6nHs00aiKh7w";

    try {
      const res = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${thread_id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const ans = await res.json();
      setData(ans); // Assuming you want to handle the response
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="bg-black rounded-lg text-white w-full max-w-lg mx-auto p-2 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center bg-slate-800 text-white p-2 rounded-t-lg">
          <span className="font-semibold">Reply</span>
          <button className="text-2xl" onClick={close}>
            <IoIosCloseCircle />
          </button>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center">
            <label className="w-1/5">To:</label>
            <input
              type="text"
              name="to"
              value={data.to}
              onChange={handleChange}
              className="w-full outline-none bg-black border-bottom rounded p-1"
              placeholder="Recipient's Email"
            />
          </div>
          <hr />
          <div className="flex items-center">
            <label className="w-1/5">From:</label>
            <input
              type="text"
              name="from"
              value={data.from}
              onChange={handleChange}
              className="w-full outline-none bg-black border-bottom rounded p-1"
              placeholder="Your Email"
            />
          </div>
          <hr />
          <div className="flex items-center">
            <label className="w-1/5">Subject:</label>
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={handleChange}
              className="w-full outline-none bg-black border-bottom rounded p-1"
              placeholder="Subject"
            />
          </div>
          <hr />
          <div className="flex flex-col">
            <label>Message:</label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              className="w-full outline-none bg-black border-bottom rounded p-1"
              placeholder="Type your message here..."
              rows="4"
            ></textarea>
          </div>
        </div>
        <hr />
        <div className="bottom p-2 flex items-center gap-2">
          <button
            className="bg-blue-500 p-2 w-20 rounded-md text-white flex items-center gap-2"
            onClick={()=>postapi(2)}  
          >
            Send <FaCaretDown />{" "}
          </button>
          <span className="flex items-center gap-1">
            <AiOutlineThunderbolt /> Variables
          </span>
          <span className="flex items-center gap-1">
            <FaEye /> Preview Email
          </span>
          <span>A :</span>
          <span>
            <CiLink />
          </span>
          <span>
            <FaFileImage />
          </span>
          <span>
            <FaRegSmile />
          </span>
          <span>
            <FiUserMinus />
          </span>
          <span className="flex gap-1 items-center">
            <RiArrowLeftDoubleFill />
            <RiArrowRightDoubleFill />
          </span>
        </div>
        {error && <div className="text-red-500 p-2">{error}</div>}
      </div>
    </div>
  );
};

export default ReplyComp;
