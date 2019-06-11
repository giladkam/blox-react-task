import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';

const LogoutButton = () => (
    <Link className="logout-btn" to="/login">Logout</Link>
);

export default LogoutButton;