import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LeaguesPage from './pages/LeaguesPage';
import TicketsPage from './pages/TicketsPage';
import AcademyPage from './pages/AcademyPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
    <div className="App"> 
      <Routes>
        <Route path="/" element={HomePage}/>
        <Route path="/Leagues" element={LeaguesPage}/>
        <Route path="/tickets" element={TicketsPage}/>
        <Route path="/Academy" element={AcademyPage}/>
        <Route path="/blog" element={BlogPage}/>
        <Route path="/login" element={LoginPage}/>
        <Route path="/signup" element={SignupPage}/>
        <Route path="/admin" element={AdminPage}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
