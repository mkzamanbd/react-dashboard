import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import PageNotFound from 'pages/PageNotFound';
import AuthRoute from 'utils/AuthRoute';
import GuestRoute from 'utils/GuestRoute';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route
                    path="/login"
                    element={
                        <GuestRoute>
                            <Login />
                        </GuestRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <AuthRoute>
                            <Dashboard />
                        </AuthRoute>
                    }
                />
                {/* page not found */}
                <Route
                    path="*"
                    element={
                        <AuthRoute>
                            <PageNotFound />
                        </AuthRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
