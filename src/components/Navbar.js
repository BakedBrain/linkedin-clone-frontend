// frontend/src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/feed" className="navbar-logo">
          <span className="logo-icon">in</span>
          LinkedIn Clone
        </Link>
        <div className="navbar-menu">
          <Link to="/feed" className="navbar-item">Feed</Link>
          <Link to="/profile" className="navbar-item">Profile</Link>
          <div className="navbar-user">
            <span className="user-name">{user?.name}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;