import { createContext, useContext, useState } from "react";

const UesrIdContext = createContext(null);
const UserIdDispatchContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(1);
  return (
    <UesrIdContext.Provider value={userId}>
      <UserIdDispatchContext.Provider value={setUserId}>
        {children}
      </UserIdDispatchContext.Provider>
    </UesrIdContext.Provider>
  );
};

export const useUserId = () => {
  const context = useContext(UesrIdContext);
  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
};

export const useUserIdDispatch = () => {
  const context = useContext(UserIdDispatchContext);

  if (!context) {
    throw new Error("Cannot find Provider");
  }
  return context;
};
