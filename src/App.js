import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './routes/Home';
import Header from './components/Header/Header.js';
import HomePage from './pages/homePage/homepage';
import DrivingDetailPage from './pages/drivingDetailPage/drivingDetailPage';
import DrivingHistoryPage from './pages/drivingHistoryPage/drivingHistoryPage';
import HomeMapPage from './pages/homeMapPage/home-map-page';
import HomeMapStartPage from './pages/homeMapStartPage/home-map-start-page';
import MapPage from './pages/mapPage/MapPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home-map-page' element={<HomeMapPage />} />
        <Route path='/home-map-start-page' element={<HomeMapStartPage />} />
        <Route path='/driving-detail' element={<DrivingDetailPage />} />
        <Route path='/driveHistory' element={<DrivingHistoryPage />} />
        <Route path="/areas" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
