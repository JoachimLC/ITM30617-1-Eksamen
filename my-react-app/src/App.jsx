import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberPage from './pages/memberpage';
import FrontPage from './pages/frontpage';
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