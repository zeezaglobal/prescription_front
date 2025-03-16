import { Layout, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <Layout className="home-layout">
      {/* Header with Bigger Logo and Navigation */}
      <Header className="home-header">
        <div className="logo bigger-logo">Medi<span className="text-green">Script</span></div>
        <div className="nav-buttons">
          <Button className="login-btn"><Link to="/login">Login</Link></Button>
          <Button className="signup-btn"><Link to="/register">Signup</Link></Button>
        </div>
      </Header>

      {/* Hero Section Adjusted for Larger Green Box (Moved to Left) */}
      <Content className="home-content">
        <div className="hero-container">
          <div className="hero-box expanded-box wider-taller-box ">
            <div className="text-container top-left-text moved-left">
              <Title level={2} className="main-title"><span className="white-text">Make your</span> <br /> <span className="bold-text">Prescriptions Digital</span></Title>
              <br/> <br/> <br/>
              <Button className="download-btn">Download</Button>
              <p className="subtext">Available for iOS and Android</p>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
