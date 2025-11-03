import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faPlus, faShoppingCart, faSignOutAlt, faStore } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navItems = [
    { to: "/admin/home", icon: faTachometerAlt, label: "Dashboard" },
    { to: "/admin/view-products", icon: faBox, label: "All Products" },
    { to: "/admin/add-products", icon: faPlus, label: "Add Products" },
    { to: "/admin/orders", icon: faShoppingCart, label: "Orders" },
  ];

  return (
    <div className="sidebar bg-gradient-primary text-white min-vh-100 p-4 shadow-lg" style={{ width: '280px' }}>
      <div className="text-center mb-4">
        <div className="bg-white bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
          <FontAwesomeIcon icon={faStore} size="2x" className="text-white" />
        </div>
        <h5 className="text-white fw-bold mb-0">E-Commerce Admin</h5>
        <small className="text-white-50">Management Panel</small>
      </div>

      <nav>
        <ul className="list-unstyled mb-4">
          {navItems.map((item, index) => (
            <li className="mb-2" key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `d-flex align-items-center text-decoration-none px-3 py-3 rounded-3 transition-all ${isActive ? 'bg-white text-primary fw-bold shadow-sm' : 'text-white hover-bg-white-10'}`
                }
                style={{
                  transition: 'all 0.3s ease',
                  borderRadius: '10px'
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="me-3" style={{ width: '20px' }} />
                <span className="fw-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="border-top border-white-50 pt-3">
          <button className="btn btn-outline-light w-100 rounded-pill fw-medium">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
