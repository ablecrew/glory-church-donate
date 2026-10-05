import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DonatePage from './pages/DonatePage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* QR Code points to this root URL */}
        <Route path="/" element={<LandingPage />} />
        {/* The actual checkout form */}
        <Route path="/donate" element={<DonatePage />} />
        {/* Post-donation thank you page */}
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
