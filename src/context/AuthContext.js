
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (email, password) => {
        if (email === "samareid@gmail.com" && password === "1234") {
            const userData = { email };

            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            return { success: true };
        }

        return { success: false, message: "Invalid email or password" };
    };

    const signup = (email, password) => {
        const userData = { email };

        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return false
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;