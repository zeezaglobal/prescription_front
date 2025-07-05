import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('jwt_token'));
  const [doctorId, setDoctorId] = useState(localStorage.getItem('doctorId'));

  const login = (token, doctorId) => {
    setToken(token);
    setDoctorId(doctorId);
    localStorage.setItem('jwt_token', token);
    localStorage.setItem('doctorId', doctorId);
  };

  const logout = () => {
    setToken(null);
    setDoctorId(null);
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('doctorId');
  };

  return (
    <AuthContext.Provider value={{ token, doctorId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
