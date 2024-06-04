import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
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
import { useDispatch, useSelector } from "react-redux";
import theme from "./theme/theme";
import MyOrder from "./pages/myOrder/MyOrder";
import ManageOrders from "./pages/order/ManageOrders";
import CreateProfile from "./pages/createProfile/CreateProfile";
import Jobs from "./pages/jobs/Jobs";
import MyGigs from "./pages/myGigs/manageGigs";
import Job from "./pages/job/Job";
import CreateJob from "./pages/createJob/CreateJob";
import MyProposals from "./pages/myProposals/MyProposals";
import MyJobs from "./pages/manageJobs/ManageJobs";
import ManageJobs from "./pages/manageJobs/ManageJobs";
import JobDetails from "./pages/jobDetails/JobDetails";
import Chat from "./pages/messaging/Chat";
import CreateCommunity from "./pages/createCommunity/CreateCommunity";
import JobProposal from "./pages/jobProposals/JobProposal";
import CreateGigOrder from "./pages/order/createOrder/CreateGigOrder";
import CreateJobOrder from "./pages/order/createOrder/CreateJobOrder";
import ManageGigs from "./pages/myGigs/manageGigs";
import request from "./utils/request";
import Cookies from "js-cookie";


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
                <Route exact path="/profile/create" element={<CreateProfile />} />
                <Route exact path="/createGig" element={<GigForm />} />
                <Route path="/navigationPage" element={<NavigationPage />} />
                <Route path="/users/:id/gigs/:gigId" element={<Gig />} />
                <Route path="/sellerDashboard" element={<SellerDashboard />} />
                <Route path="/myProfile" element={<Profile />} />
                <Route path="/myProposals" element={<MyProposals />} />
                <Route path="/manageJobs" element={<ManageJobs />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="users/:id/manageGigs" element={<ManageGigs />} />
                <Route path="/job/create" element={<CreateJob />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/users/:id/jobs/:jobId/details" element={<JobDetails />} />
                <Route path="/users/:id/jobs/:jobId" element={<Job />} />
                <Route path="/jobs/:jobId/proposals/:proposalId" element={<JobProposal />} />
                <Route path="/gigs/:gigId/orders/create" element={<CreateGigOrder />} />
                <Route path="/jobs/:jobId/orders/create" element={<CreateJobOrder />} />
                <Route path="/users/:id/manageOrders/:orderId" element={<MyOrder />} />
                <Route path="/users/:id/manageOrders" element={<ManageOrders />} />
                <Route path="/users/:id/community/create" element={<CreateCommunity />} />

                <Route path="/chat" element={<Chat />} />

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
