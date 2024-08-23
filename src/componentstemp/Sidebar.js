import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; 

function Sidebar() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the 'Alt' key is pressed
      if (event.altKey) {
        switch (event.key) {
          case '1':
            navigate('/');
            break;
          case '2':
            navigate('/page1');
            break;
          case '3':
            navigate('/page2');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="sidebar d-flex flex-column vh-100">
      <h3 className="sidebar-title">Dashboard</h3>
      <Nav className="flex-column sidebar-nav">
        <Nav.Link as={Link} to="/" className="sidebar-link">
          <i className="bi bi-house-fill"></i> Dashboard alt+1
        </Nav.Link>
        <Nav.Link as={Link} to="/page1" className="sidebar-link">
          <i className="bi bi-file-earmark-text"></i> Page 1 alt+2
        </Nav.Link>
        <Nav.Link as={Link} to="/page2" className="sidebar-link">
          <i className="bi bi-gear-fill"></i> Page 2 Alt+3
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
