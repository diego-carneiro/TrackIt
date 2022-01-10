import React from "react";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Habits from "./views/Habits";
import History from "./views/History";
import CurrentDay from"./views/CurrentDay";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { useState } from "react";

export default function App() {

    const [info, setInfo] = useState("");

    return (
        <BrowserRouter>   
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login setInfo={setInfo}/>} />
                <Route path="/cadastro" element={<Signup /> } />
                <Route path="/habitos" element={<Habits/> } />
                <Route path="/historico" element={<History/> } />
                <Route path="/hoje" element={<CurrentDay/> } />
            </Routes>
        </BrowserRouter>

    );
}