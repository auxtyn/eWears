// Importing necessary components and icons
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield, faUsers, faCogs, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Button, Dropdown, ButtonGroup, ProgressBar } from '@themesberg/react-bootstrap';

// Counter Widget for displaying key metrics
export const CounterWidget = ({ category, title, period, percentage, icon, iconColor }) => {
  return (
    <Card className="shadow-lg border-0 h-100" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Card.Body className="p-4">
        <Row className="d-block d-xl-flex align-items-center h-100">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center me-4 me-sm-0" style={{ width: '60px', height: '60px' }}>
              <FontAwesomeIcon icon={icon} className="text-white" size="lg" />
            </div>
            <div className="d-sm-none">
              <h5 className="text-white mb-1">{title}</h5>
              <h6 className="text-white-50 fw-light">{category}</h6>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5 className="text-white fw-bold mb-1">{category}</h5>
              <h3 className="text-white fw-extrabold mb-2">{title}</h3>
              <small className="text-white-75 fw-medium">
                {period}
              </small>
              <div className="d-flex align-items-center mt-2">
                <span className="badge bg-success text-white me-2">{percentage}%</span>
                <small className="text-white-75">vs last month</small>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Sales Value Widget
export const SalesValueWidget = ({ title, value, percentage }) => {
  return (
    <Card className="bg-gradient-success text-white shadow-lg border-0 h-100" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
      <Card.Body className="p-4">
        <Row className="d-block d-xl-flex align-items-center h-100">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className="bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center me-4 me-sm-0" style={{ width: '60px', height: '60px' }}>
              <FontAwesomeIcon icon={faCashRegister} className="text-white" size="lg" />
            </div>
            <div className="d-sm-none">
              <h2 className="text-white mb-1">{value}</h2>
              <h6 className="text-white-50 fw-light">{title}</h6>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h2 className="fw-bold text-white mb-1">{value}</h2>
              <small className="text-white-75 fw-medium">{title}</small>
              <div className="d-flex align-items-center mt-2">
                <span className="badge bg-white text-success me-2 fw-bold">{percentage}%</span>
                <small className="text-white-75">vs last month</small>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Sales Value Widget for Phone
export const SalesValueWidgetPhone = ({ title, value, percentage }) => {
  return (
    <Card className="bg-primary text-white shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className="icon icon-shape icon-md icon-white rounded me-4 me-sm-0">
              <FontAwesomeIcon icon={faCashRegister} />
            </div>
            <div className="d-sm-none">
              <h2>{value}</h2>
              <h6 className="fw-light">{title}</h6>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h2 className="fw-bold">{value}</h2>
              <small className="fw-light">{title}</small>
              <div className="small mt-2">
                <span className="fw-bold text-success">{percentage}%</span>
                <span className="text-white opacity-8 ms-3">Since last month</span>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

// Circle Chart Widget (placeholder for traffic share)
export const CircleChartWidget = ({ title, data }) => {
  return (
    <Card className="shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3 mb-3">
          <div>
            <div className="h6 mb-0 d-flex align-items-center fw-bold text-gray-800">
              <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
              {title}
            </div>
          </div>
          <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            <FontAwesomeIcon icon={faUsers} className="text-primary" />
          </div>
        </div>
        <div className="mt-3">
          {/* Placeholder for circle chart */}
          <div className="bg-gradient-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ height: '120px', border: '3px solid #e3f2fd' }}>
            <div className="text-center">
              <div className="h4 mb-0 text-primary fw-bold">75%</div>
              <small className="text-muted">Traffic Share</small>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Bar Chart Widget
export const BarChartWidget = ({ title, value, percentage, data }) => {
  return (
    <Card className="shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
      <Card.Body className="p-4">
        <div className="d-flex align-items-center justify-content-between border-bottom border-light pb-3 mb-3">
          <div>
            <div className="h6 mb-1 fw-bold text-gray-800">{title}</div>
            <div className="h3 fw-bold text-primary mb-1">{value}</div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-arrow-up" className="text-success me-1" />
              <span className="text-success fw-bold">{percentage}%</span>
              <small className="text-muted ms-1">vs last month</small>
            </div>
          </div>
          <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
            <FontAwesomeIcon icon={faShoppingCart} className="text-warning" size="lg" />
          </div>
        </div>
        <div className="mt-3">
          {/* Placeholder for bar chart */}
          <div className="bg-light rounded p-3" style={{ height: '80px', background: 'linear-gradient(45deg, #f8f9fa 25%, transparent 25%), linear-gradient(-45deg, #f8f9fa 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8f9fa 75%), linear-gradient(-45deg, transparent 75%, #f8f9fa 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}>
            <div className="d-flex align-items-end h-100">
              <div className="bg-primary me-1 rounded-top" style={{ height: '60%', width: '20%' }}></div>
              <div className="bg-success me-1 rounded-top" style={{ height: '80%', width: '20%' }}></div>
              <div className="bg-warning me-1 rounded-top" style={{ height: '40%', width: '20%' }}></div>
              <div className="bg-info me-1 rounded-top" style={{ height: '70%', width: '20%' }}></div>
              <div className="bg-danger rounded-top" style={{ height: '90%', width: '20%' }}></div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Team Members Widget
export const TeamMembersWidget = () => {
  return (
    <Card className="shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
      <Card.Body className="p-4">
        <h5 className="mb-4 fw-bold text-gray-800">Team Members</h5>
        <div className="list-group list-group-flush border-0">
          <div className="list-group-item d-flex align-items-center p-3 border-0 border-bottom border-light bg-transparent">
            <div className="bg-gradient-primary rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold text-white" style={{ width: '45px', height: '45px' }}>
              JD
            </div>
            <div>
              <h6 className="mb-1 fw-bold">John Doe</h6>
              <small className="text-muted">Admin</small>
            </div>
            <div className="ms-auto">
              <span className="badge bg-success">Online</span>
            </div>
          </div>
          <div className="list-group-item d-flex align-items-center p-3 border-0 border-bottom border-light bg-transparent">
            <div className="bg-gradient-info rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold text-white" style={{ width: '45px', height: '45px' }}>
              JS
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Jane Smith</h6>
              <small className="text-muted">Manager</small>
            </div>
            <div className="ms-auto">
              <span className="badge bg-warning">Away</span>
            </div>
          </div>
          <div className="list-group-item d-flex align-items-center p-3 border-0 bg-transparent">
            <div className="bg-gradient-success rounded-circle d-flex align-items-center justify-content-center me-3 fw-bold text-white" style={{ width: '45px', height: '45px' }}>
              MS
            </div>
            <div>
              <h6 className="mb-1 fw-bold">Mike Smith</h6>
              <small className="text-muted">Developer</small>
            </div>
            <div className="ms-auto">
              <span className="badge bg-success">Online</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Progress Track Widget
export const ProgressTrackWidget = () => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-3">Progress Track</h5>
        <div>
          <div className="d-flex justify-content-between mb-2">
            <span>Sales</span>
            <span>75%</span>
          </div>
          <ProgressBar now={75} className="mb-3" />
          <div className="d-flex justify-content-between mb-2">
            <span>Orders</span>
            <span>50%</span>
          </div>
          <ProgressBar now={50} variant="info" />
        </div>
      </Card.Body>
    </Card>
  );
};

// Ranking Widget
export const RankingWidget = () => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-3">Ranking</h5>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-3">1</span>
            <span>Top Product A</span>
          </li>
          <li className="d-flex align-items-center mb-2">
            <span className="badge bg-secondary me-3">2</span>
            <span>Top Product B</span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

// Acquisition Widget
export const AcquisitionWidget = () => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-3">Acquisition</h5>
        <div className="chart-placeholder" style={{ height: '200px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Acquisition Chart Placeholder</span>
        </div>
      </Card.Body>
    </Card>
  );
};