import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../../reduxStore/slice/adminSlice';
import './Navbar.css';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    localStorage.removeItem('adminToken');
    dispatch(adminLogout());
    navigate('/admin/login');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="admin-navbar-background">
      <nav className="navbar admin-custom-navbar">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="admin-navbar-brand">
            <img src="/adminLogo.png" alt="Logo" className="admin-navbar-logo" />
          </Link>
          <div className="admin-navbar-center">
            <span>Dashboard</span>
          </div>
          <div className="admin-navbar-actions">
            <h5 className="admin-logout-text" onClick={handleLogout}>Logout</h5>
            <div className="admin-dropdown-icon" onClick={toggleDropdown}>
              ☰
            </div>
            {showDropdown && (
              <div className="admin-dropdown-menu">
                <h5 className="admin-logout-text-dropdown" onClick={handleLogout}>Logout</h5>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
