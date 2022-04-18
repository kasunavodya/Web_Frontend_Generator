import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Dashboard from "./components/dashboard";
import BrowsePage from "./components/pages/browsePage";
import ConvertToReactPage from "./components/pages/convertToReact";
import AddCssPage from "./components/pages/addCSS";
import DownloadCodePage from "./components/pages/downloadCode";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Routes>
            <Route path="/" element={<Dashboard/>} exact />
            <Route path="/browse" element={<BrowsePage/>} />
            <Route path="/convertToReact" element={<ConvertToReactPage/>} />
            <Route path="/addCss" element={<AddCssPage/>} />
            <Route path="/downloadCode" element={<DownloadCodePage/>} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
