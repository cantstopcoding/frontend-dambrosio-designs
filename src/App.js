import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href='/'>Caroline Dambrosio Designs</a>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
