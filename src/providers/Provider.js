import React, { useContext } from "react";
import UserContext from "./context/UserContext";


const StoredProvider = ({ children }) => {

    return (
        <Context.Provider
            value={{
                token,
                setToken,
            }}
        >
            {children}
        </Context.Provider>    
    );
}

export default StoredProvider;