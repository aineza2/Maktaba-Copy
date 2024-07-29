/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MainContext = createContext();

export const PageContext = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <MainContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </MainContext.Provider>
  );
};