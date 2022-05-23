import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import GuestRoute from 'utils/GuestRoute';
import AuthRoute from 'utils/AuthRoute';
import Login from 'pages/Auth/Login';
import PageNotFound from 'pages/PageNotFound';
import Dashboard from 'pages/Dashboard';
import UIElements from 'pages/UIElements';
import Tables from 'pages/Tables';
import Cards from 'pages/Cards';

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
                <Route
                    path="/ui-elements"
                    element={
                        <AuthRoute>
                            <UIElements />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/tables"
                    element={
                        <AuthRoute>
                            <Tables />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/cards"
                    element={
                        <AuthRoute>
                            <Cards />
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
