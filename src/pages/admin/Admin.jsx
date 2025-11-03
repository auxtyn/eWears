import { Route, Routes } from "react-router";
import { useState } from "react";
import { Button } from '@themesberg/react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Home from "../../components/admin/home";
import AddProducts from "../../components/admin/addProducts";
import Orders from "../../components/admin/orders";
import ViewProducts from "../../components/admin/viewProducts";
import Navbar from "../../components/admin/navbar";

const Admin = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="min-vh-100 bg-light">
      {/* Mobile Sidebar */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} className="d-lg-none" style={{ width: '280px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>E-Commerce Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Navbar onItemClick={() => setShowSidebar(false)} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="min-vh-100">
        <div className="bg-white shadow-sm border-bottom sticky-top" style={{ zIndex: 999 }}>
          <div className="d-flex justify-content-between align-items-center px-4 py-3">
            <div className="d-flex align-items-center">
              <Button variant="link" className="d-lg-none me-3 p-0 text-decoration-none" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} size="lg" className="text-dark" />
              </Button>
              <h4 className="mb-0 text-muted fw-light">Admin Dashboard</h4>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-3 d-none d-md-block">
                <small className="text-muted">Welcome back, Admin</small>
              </div>
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <span className="text-white fw-bold">A</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="orders" element={<Orders />} />
            <Route path="view-products" element={<ViewProducts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
