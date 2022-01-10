import React from "react";
import { useState, useContext, createContext } from "react";

const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const [progress, setProgress] = useState(0);

    const [user, setUser] = useState({
        id: 0,
        name: "",
        image: "",
        email: "",
        password: "",
        token: "",
    });

    return (
        <AuthContext.Provider value={{ progress, setProgress, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {

    const { progress, setProgress, user, setUser } = useContext(AuthContext);

    return { progress, setProgress, user, setUser };
}