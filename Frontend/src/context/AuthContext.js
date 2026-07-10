import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // On mount, check localStorage for an existing session
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("soulflexUser");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (e) {
            localStorage.removeItem("soulflexUser");
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // userData should be { name, email, userType }
        setUser(userData);
        localStorage.setItem("soulflexUser", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("soulflexUser");
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
