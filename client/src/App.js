import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loginSuccess } from "./state/userSlice";

import Home from "./pages/home/Home";
import Join from "./pages/join/Join";
import NavigationPage from "./pages/navigationPage/NavigationPage";
import Gig from "./pages/gig/Gig";
import SellerDashboard from "./pages/sellerDashboard/SellerDashboard";
import Profile from "./pages/profile/Profile";
import GigForm from "./pages/gigForm/GigForm";
import EditProfile from "./pages/profile/editProfile/EditProfile";
import NotFound from "./pages/notFound/NotFound";

import Signin from "./components/signin/Signin";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import { CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import theme from "./theme/theme";
import MyOrder from "./pages/myOrder/MyOrder";
import ManageOrders from "./pages/order/ManageOrders";
import CreateProfile from "./pages/createProfile/CreateProfile";
import Jobs from "./pages/jobs/Jobs";
import CreateOrder from "./pages/order/CreateOrder";
import MyGigs from "./pages/myGigs/MyGigs";
import Job from "./pages/job/Job";


function App() {
  const [showSignin, setShowSignin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const queryClient = new QueryClient();

  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(loginSuccess(JSON.parse(currentUser)));
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <CssBaseline />
          {showSignin ? <Signin setShowSignin={setShowSignin} /> : null}
          {showSidebar ? (
            <Sidebar
              setShowSidebar={setShowSidebar}
              showSidebar={showSidebar}
            />
          ) : null}

          <div className="App">
            <Header
              setShowSignin={setShowSignin}
              setShowSidebar={setShowSidebar}
            />

            <main className="main">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/join" element={<Join />} />
                <Route exact path="/createProfile" element={<CreateProfile />} />
                <Route exact path="/createGig" element={<GigForm />} />
                <Route path="/navigationPage" element={<NavigationPage />} />
                <Route path="/users/:id/gigs/:gigId" element={<Gig />} />
                <Route path="/sellerDashboard" element={<SellerDashboard />} />
                <Route path="/myProfile" element={<Profile />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="/myGigs" element={<MyGigs />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/job" element={<Job />} />
                <Route path="/gigs/:gigId/orders/create" element={<CreateOrder />} />
                <Route path="/users/:id/manageOrders/:orderId" element={<MyOrder />} />
                <Route path="/users/:id/manageOrders" element={<ManageOrders />} />
                <Route element={<NotFound />} />
              </Routes>
            </main>
            
          </div>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
