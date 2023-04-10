import "../src/styles/index.css";
import { Header } from "./components/header/header";
import { Home } from "./components/pages/home";
import { GalesRouter } from "./components/router/galerouter";
function App() {
    return (
        <div className="App">
            <Header />
            <GalesRouter />
        </div>
    );
}

export default App;
