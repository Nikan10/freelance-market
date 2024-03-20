import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

import './App.css';

import { MenuOutlined } from "@mui/icons-material";

import maherBrand from './assets/images/brandings/maher-new3.png'

import Home from './pages/Home/Home';
import About from './pages/About';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import Gig from './pages/Gig/Gig';
import SellerDashboard from './pages/SellerDashboard/SellerDashboard';
import NotFound from './pages/NotFound/NotFound';

import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { AppBar, CssBaseline, IconButton, Toolbar, Typography, Button, InputBase, Badge } from '@mui/material';

import { useSelector } from 'react-redux';

import theme from './theme/theme'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <ThemeProvider theme={theme}>
      
      <Router>
        <CssBaseline />
        {showSignup ? <Signup setShowSignup={setShowSignup} showSignup={showSignup} /> : null}
        {showSignin ? <Signin setShowSignin={setShowSignin} /> : null}
        {showSidebar ? <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} /> : null}

        <div className="App">

          <Header setShowSignin={setShowSignin} setShowSignup={setShowSignup} setShowSidebar={setShowSidebar} />
          
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/navigation_page" element={<NavigationPage />} />
              <Route path="/gig" element={<Gig />} />
              <Route path="/seller_dashboard" element={<SellerDashboard />} />
              <Route element={<NotFound/>} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
