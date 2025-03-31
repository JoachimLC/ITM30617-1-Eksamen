import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberPage from './pages/MemberPage';
import FrontPage from './pages/FrontPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/member/:id" element={<MemberPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;