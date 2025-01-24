import React, { createContext, useState } from 'react';

    export const AuthContext = createContext();

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);

      const login = (email, password) => {
        // Placeholder login logic
        setUser({ email, fullName: 'Test User', address: 'Test Address', phoneNumber: '123-456-7890' });
      };

      const register = (fullName, email, password, address, phoneNumber) => {
        // Placeholder registration logic
        setUser({ fullName, email, address, phoneNumber });
      };

      const logout = () => {
        setUser(null);
      };

      return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };
