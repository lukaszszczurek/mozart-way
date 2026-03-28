import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MozartAdsPage from './pages/mozart-ads/MozartAdsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mozart-ads" element={<MozartAdsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
