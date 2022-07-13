import React from 'react';
import { Navigate } from 'react-router-dom';
import BlankLayout from 'components/EmptyLayout';
import { useAuth } from 'contexts/AuthContext';

export default function GuestRoute({ children }) {
    const { currentUser } = useAuth();
    return currentUser ? <Navigate to="/dashboard" /> : <BlankLayout>{children}</BlankLayout>;
}
