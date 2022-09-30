import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/pages/Home/Home'

const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
  );
}

export default App;
