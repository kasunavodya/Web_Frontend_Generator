import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Dashboard/>} exact />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
