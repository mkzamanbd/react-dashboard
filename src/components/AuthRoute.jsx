import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import AppLayout from 'components/DashboardLayout';

export default function AuthRoute({ children }) {
    const { currentUser } = useAuth();
    return currentUser ? <AppLayout>{children}</AppLayout> : <Navigate to="/login" />;
}
