import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query"

import { loginStart, loginSuccess, loginFailure } from './state/userSlice'

import { MenuOutlined } from "@mui/icons-material";

import maherBrand from './assets/images/brandings/maher-new3.png'

import Home from './pages/home/Home';
import About from './pages/About';
import NavigationPage from './pages/navigationPage/NavigationPage';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs'
import SellerDashboard from './pages/sellerDashboard/SellerDashboard';
import Profile from './pages/profile/Profile';
import NotFound from './pages/notFound/NotFound';

import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { AppBar, CssBaseline, IconButton, Toolbar, Typography, Button, InputBase, Badge } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import theme from './theme/theme'
import Sidebar from './components/sidebar/Sidebar';
import GigForm from './pages/gigForm/GigForm';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const queryClient = new QueryClient()

  const dispatch = useDispatch()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if(currentUser) {
      dispatch(loginSuccess(JSON.parse(currentUser)))
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
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
                <Route exact path="/create_gig" element={<GigForm />} />
                <Route path="/about" element={<About />} />
                <Route path="/navigation_page" element={<NavigationPage />} />
                <Route path="/gigs/:id" element={<Gig />} />
                <Route path="/seller_dashboard" element={<SellerDashboard />} />
                <Route path="/myProfile" element={<Profile />} />
                <Route path="/gigs" element={<Gigs />} />
                <Route element={<NotFound/>} />
              </Routes>
            </main>
            
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
