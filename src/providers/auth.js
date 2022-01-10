import React from "react";
import { useState, useContext, createContext } from "react";

const AuthContext = createContext()

export default function AuthProvider ({ children }) {

    const [progress, setProgress] = useState(0);

    return (
       <AuthContext.Provider value = {{progress, setProgress}}>
           {children}
       </AuthContext.Provider>
    )
}

export const useAuth = () => {
    
    const { progress, setProgress } = useContext(AuthContext);

    return { progress, setProgress } ;
}