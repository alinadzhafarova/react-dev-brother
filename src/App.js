import logo from './logo.svg';
import './App.css';
import InputHooks from "./FInput";
import InputHooks2 from "./CInput";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <label> Введите Ваше имя :
                    <InputHooks name=""/>
                    <InputHooks2 name=""/>
                </label>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
