import LoginDialog from "./LoginDialog";
import SignUpDialog from "./SignUpDialog";
import logo from "../assets/img/map.svg";


const Header = () =>

    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Эх, прокачу</h1>
        <div className="LogIn" >
            <div className="LogDialog"><LoginDialog /></div>

            <div className="SignDialog"><SignUpDialog /></div>



        </div>

    </header>

export default Header;
