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
  return (
    <Layout className="home-layout">
      {/* Header with Bigger Logo and Navigation */}
      <Header className="home-header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo bigger-logo">
          Medi<span className="text-success">Script</span>
        </div>
        <div className="nav-buttons">
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
        <div className="hero-container container text-center py-5">
          <div className="hero-box expanded-box wider-taller-box p-4 bg-success text-white rounded">
            <div className="text-container">
              <Title level={2} className="main-title text-white">
                Make your <br />
                <span className="fw-bold">Prescriptions Digital</span>
              </Title>

              <div className="d-flex justify-content-center mt-4">
                {/* App Store Logo Button */}
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-3"
                >
                  <img
                    src={appStoreLogo}
                    alt="App Store"
                    style={{ height: '50px' }} // adjust size as needed
                  />
                </a>

                {/* Play Store Logo Button */}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={playStoreLogo}
                    alt="Play Store"
                    style={{ height: '50px' }} // adjust size as needed
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