// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Header from './components/Header/Header.js';
import Button from './components/button/button.js';
import LevelInfo from './components/level-info/level-info.js';
import WeatherInfo from './components/weather-info/weather-info.js';
import UserHistory from './components/user-history/user-history.js';
import DriveResult from './components/drive-result/drive-result.js';
import DriveResultBottom from './components/drive-result-bottom/drive-result-bottom.js';

function App() {
  return (
    <Router>
      <Header />
      <LevelInfo />
      <WeatherInfo />
      <UserHistory />

      <DriveResult />
      <Button label='Where to Drive' />
      <DriveResultBottom />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
