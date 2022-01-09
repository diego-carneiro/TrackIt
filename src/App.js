import React from "react";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Habits from "./views/Habits";
import History from "./views/History";
import CurrentDay from"./views/CurrentDay";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { AuthContext } from "./providers/auth";
import { useState } from "react";

export default function App() {

    const [token, setToken] = useState("");

    const { user, setUser } = React.useContext(AuthContext);
    
    const [info, setInfo] = useState("");

    return (
        <BrowserRouter>   
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login setInfo={setInfo} setToken={setToken} />} />
                <Route path="/cadastro" element={<Signup /> } />
                <Route path="/habitos" element={<Habits token={token}/> } />
                <Route path="/historico" element={<History/> } />
                <Route path="/hoje" element={<CurrentDay token={token}/> } />
            </Routes>
        </BrowserRouter>

    );
}