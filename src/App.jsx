import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home  from  "./pages/Home.jsx";
import Timeline from "./pages/Timeline.jsx";
import Stats from "./pages/Stats.jsx";
import FriendDetail from "./pages/FriendDetail.jsx";
import NotFound from "./pages/NotFound.jsx";


function App(){
  return(
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/timeline" element={<Timeline />}/>
            <Route path="/stats" element={<Stats />}/>
            <Route path="/friends/:id" element={<FriendDetail />}/>
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="top-center" autoClose={2000}/>
      </div>
    </Router>
  );
}

export default App;