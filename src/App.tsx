import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/pages/home";
function App() {
    return (
        <div className="App">
            <Header />
            <Home />
        </div>
    );
}

export default App;
