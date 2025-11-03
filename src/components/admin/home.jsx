import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield, faTachometerAlt, faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "./widgets";

const Home = () => {
  // Mock data - replace with actual data from your state/store
  const trafficShares = [
    { name: 'Direct', value: 35, color: '#4e73df' },
    { name: 'Social', value: 25, color: '#1cc88a' },
    { name: 'Referral', value: 20, color: '#36b9cc' },
    { name: 'Bounce', value: 20, color: '#f6c23e' }
  ];

  const totalOrders = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 120 },
    { name: 'Mar', value: 150 },
    { name: 'Apr', value: 200 }
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4 mb-4">
        <div>
          <h2 className="h3 mb-0 fw-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-muted mb-0">Welcome to your admin dashboard</p>
        </div>

        <div className="d-flex align-items-center">
          <Dropdown className="btn-toolbar me-2">
            <Dropdown.Toggle as={Button} variant="primary" size="sm" className="shadow-sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />Quick Actions
            </Dropdown.Toggle>
            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-end mt-2 shadow-lg">
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faTasks} className="me-2 text-primary" /> New Task
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2 text-success" /> Upload Files
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faUserShield} className="me-2 text-info" /> Preview Security
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2 text-primary" /> Dashboard
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faBox} className="me-2 text-success" /> All Products
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faPlus} className="me-2 text-warning" /> Add Products
              </Dropdown.Item>
              <Dropdown.Item className="fw-bold">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2 text-info" /> Orders
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold text-danger">
                <FontAwesomeIcon icon={faRocket} className="me-2" /> Upgrade to Pro
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <ButtonGroup>
            <Button variant="outline-primary" size="sm" className="shadow-sm">Share</Button>
            <Button variant="outline-primary" size="sm" className="shadow-sm">Export</Button>
          </ButtonGroup>
        </div>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Customers"
            title="345k"
            period="Feb 1 - Apr 1"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title="$43,594"
            period="Feb 1 - Apr 1"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Traffic Share"
            data={trafficShares} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  {/* Page Visits Table - Placeholder */}
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">Page Visits</h5>
                      <div style={{ height: '300px', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span>Page Visits Table Placeholder</span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>

                <Col xs={12} className="px-0 mb-4">
                  <RankingWidget />
                </Col>

                <Col xs={12} className="px-0">
                  <AcquisitionWidget />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
