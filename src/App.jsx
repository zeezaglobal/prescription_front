
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DocForm from './pages/DoctorForm';
import 'antd/dist/reset.css';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorform" element={<DocForm />} />
      </Routes>
    </Router>
  )
}

export default App
