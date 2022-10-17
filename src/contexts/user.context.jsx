import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentuser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentuser] = useState(null);
    const value = { currentUser, setCurrentuser };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
