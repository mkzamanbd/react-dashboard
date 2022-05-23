import React from 'react';
import { Navigate } from 'react-router-dom';
import BlankLayout from 'components/EmptyLayout';
import useAuth from 'hooks/useAuth';

export default function GuestRoute({ children }) {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <Navigate to="/dashboard" /> : <BlankLayout>{children}</BlankLayout>;
}
