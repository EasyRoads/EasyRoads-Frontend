// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MapPage from './routes/MapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/areas" element={<MapPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
