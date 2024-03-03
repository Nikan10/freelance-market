import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import './App.css';

import { MenuOutlined } from "@mui/icons-material";

import maherBrand from './assets/images/brandings/maher-new3.png'

import Home from './pages/Home/Home';
import About from './pages/About';
import NavigationPage from './pages/NavigationPage/NavigationPage';
import Gig from './pages/Gig/Gig';
import NotFound from './pages/NotFound/NotFound';

import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { AppBar, CssBaseline, IconButton, Toolbar, Typography, Button, InputBase, Badge } from '@mui/material';

import theme from './theme/theme'

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {showSignup ? <Signup setShowSignup={setShowSignup} /> : null}
      {showSignin ? <Signin setShowSignin={setShowSignin} /> : null}
      <Router>
        <CssBaseline />

        <div className="App">
          {/* <header className="header">
            <div className='left'>
              <IconButton><MenuOutlined /></IconButton>
              <div className="logo"><img src={maherBrand} alt='maher logo'></img></div>
            </div>
            <nav className="navbar">
              <ul>
                <li><a href="/navigation_page">Navigation</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/become_seller">Become a Seller</a></li>
                <li><a href="" onClick={() => setShowSignin(!showSignin)}>sign in</a></li>
                <li><Button variant='outlined' onClick={() => setShowSignup(!showSignup)}>Join</Button></li>
              </ul>
            </nav>
          </header> */}

          <Header setShowSignin={setShowSignin} setShowSignup={setShowSignup} />
          
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/navigation_page" element={<NavigationPage />} />
              <Route path="/gig" element={<Gig />} />
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
