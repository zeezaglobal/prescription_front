import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import appStoreLogo from '../assets/appstore.svg'; // adjust path as per your project structure
import playStoreLogo from '../assets/playstore.png';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  // A quick check for mobile viewport can be useful, but CSS media queries are better.
  // For this example, we'll rely on Bootstrap classes and CSS.

  return (
    <Layout className="home-layout">
      {/* Header stacks vertically on small screens and horizontally on medium screens and up */}
      <Header className="home-header d-flex flex-column flex-md-row justify-content-md-between align-items-center px-3 py-2">
        <div className="logo bigger-logo">
          Medi<span className="text-success">Script</span>
        </div>
        {/* Adds top margin on small screens, which is removed on medium screens and up */}
        <div className="nav-buttons mt-2 mt-md-0">
          <Link to="/login">
            <Button type="primary" className="me-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button type="default">
              Signup
            </Button>
          </Link>
        </div>
      </Header>

      {/* Hero Section */}
      <Content className="home-content d-flex justify-content-center align-items-center">
        {/* Container with responsive padding */}
        <div className="hero-container container text-center py-4">
          {/* Box with responsive padding */}
          <div className="hero-box p-4 p-md-5 bg-success text-white rounded">
            <div className="text-container">
              <Title level={2} className="main-title text-white">
                Make your <br />
                <span className="fw-bold">Prescriptions Digital</span>
              </Title>

              {/* Store buttons stack vertically on extra-small screens and go horizontal on small screens and up */}
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-4">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // Margin bottom on small screens, margin right on larger screens
                  className="mb-3 mb-sm-0 me-sm-3"
                >
                  <img
                    src={appStoreLogo}
                    alt="App Store"
                    className="store-logo" // Use class for styling
                  />
                </a>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playStoreLogo}
                    alt="Play Store"
                    className="store-logo" // Use class for styling
                  />
                </a>
              </div>
              <p className="subtext mt-3">Available for iOS and Android</p>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}