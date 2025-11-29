
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
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

        return { success: true };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
