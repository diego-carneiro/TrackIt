import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState("");

    return (
       <AuthContext.Provider value = {{token, setToken}}>
           {children}
       </AuthContext.Provider>
    )
}