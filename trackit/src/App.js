import "./css/reset.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login_Page from "./Login";
import Signup_Page from "./Signup";
import Header from "./Header";
import Main_Page from "./Menu";
import Footer from "./Footer";
import Habits from "./Habits";

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
                <Route path="/hoje" exact>
                    <Header></Header>
                    <Main_Page />
                    <Footer></Footer>
                </Route>
                <Route path="/habitos" exact>
                    <Header></Header>
                    <Habits/>
                    <Footer></Footer>
                </Route>
            </Switch>
        </BrowserRouter>
    );
    
    
}