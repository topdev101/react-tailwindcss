import React, { useState } from "react";
import { MyContext } from "./MyContext";

const MyProvider = ({ children }) => {
  const [selectedFourBar, setSelectedFourBar] = useState(true);

  return (
    <MyContext.Provider value={{ selectedFourBar, setSelectedFourBar }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
