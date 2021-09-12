import "./css/reset.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login_Page from "./Login";
import Signup_Page from "./Signup";
import Header from "./Header";
import Habits from "./Habits";
import Footer from "./Footer";
import CurrentDay from "./CurrentDay";
import History from "./History";

export default function App() {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login_Page />
                </Route>
                <Route path="/cadastro" exact>
                    <Signup_Page />
                </Route>
                <Route path="/habitos" exact>
                    <Header></Header>
                        <Habits />
                    <Footer></Footer>
                </Route>
                <Route path="/hoje" exact>
                    <Header></Header>
                        <CurrentDay />
                    <Footer></Footer>
                </Route>
                <Route path="/historico" exact>
                    <Header></Header>
                        
                    <Footer></Footer>
                </Route>
            </Switch>
        </BrowserRouter>
    );
    
    
}