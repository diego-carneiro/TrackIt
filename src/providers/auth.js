import React from "react";
import { useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {

    const initialValue = {
        email: "",
        image: "",
        name: "",
    }

    const [user, setUser] = useState("");

    return (
       <AuthContext.Provider value = {{user, setUser}}>
           {props.children}
       </AuthContext.Provider>
    )
}