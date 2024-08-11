import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const ContextProvider = ({ children }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYW51cGFtdXBhZGh5YXk5NzFAZ21haWwuY29tIiwiaWQiOjUzNCwiZmlyc3ROYW1lIjoiQW51cGFtIiwibGFzdE5hbWUiOiJVcGFkaHlheSJ9LCJpYXQiOjE3MjMzODg4NDcsImV4cCI6MTc1NDkyNDg0N30.bacGM9RxpKL5oG7_u1hduw6pEVFeJgF6nHs00aiKh7w";
  const [data, setData] = useState([]);
  const [rply, setRply] = useState([]);
  const [del,setDel]  =useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetching = async () => {
    try {
      const res = await fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const ans = await res.json();
      setData(ans);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const replyFetching = async (threadId) => {
    try {
      const res = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
      }
  
      const ans = await res.json();
      setRply(ans);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
  };
  const delFetching = async (threadId) => {
    try {
      const res = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`HTTP error! status: ${res.status}, message: ${errorText}`);
      }
  
      const ans = await res.json();
      setDel(ans);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetching();
    // replyFetching(2);
    // delFetching(2)
  }, []);

  return (
    <DataContext.Provider value={{ data,del, rply, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
