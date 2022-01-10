import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./providers/auth";


ReactDOM.render(
    
    <AuthProvider>
        <App />
    </AuthProvider>, 
    document.querySelector(".root")
);


