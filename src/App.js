import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './routes/Home';
import Header from './components/Header/Header.js';
import Button from './components/button/button.js';
import LevelInfo from './components/level-info/level-info.js';
import WeatherInfo from './components/weather-info/weather-info.js';
import UserHistory from './components/user-history/user-history.js';
import DriveResult from './components/drive-result/drive-result.js';
import DriveResultBottom from './components/drive-result-bottom/drive-result-bottom.js';
import HistoryButton from './components/history-button/history-button.js';

import HomePage from './pages/homePage/homepage';
import DrivingDetailPage from './pages/drivingDetailPage/drivingDetailPage';
import DrivingHistoryPage from './pages/drivingHistoryPage/drivingHistoryPage';
import HomeMapPage from './pages/homeMapPage/home-map-page';
import HomeMapStartPage from './pages/homeMapStartPage/home-map-start-page';

function App() {
  return (
    <Router>
      <Header />
      {/* <LevelInfo />
      <WeatherInfo />
      <UserHistory />
      <DriveResult />
      <DriveResultBottom />
      <HistoryButton />
      */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home-map-page' element={<HomeMapPage />} />
        <Route path='/home-map-start-page' element={<HomeMapStartPage />} />
        <Route path='/driving-detail' element={<DrivingDetailPage />} />
        <Route path='/driveHistory' element={<DrivingHistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
