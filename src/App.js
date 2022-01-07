import React from "react";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Habits from "./views/Habits";
import History from "./views/History";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { AuthContext } from "./providers/auth";
import { useState } from "react";

export default function App() {

    const { user, setUser } = React.useContext(AuthContext);
    
    const [info, setInfo] = useState("");

    setUser(info);

    return (
        <BrowserRouter>   
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login setInfo={setInfo}/>} />
                <Route path="/cadastro" element={<Signup /> } />
                <Route path="/habitos" element={<Habits/> } />
                <Route path="/historico" element={<History/> } />
            </Routes>
        </BrowserRouter>

    );
}