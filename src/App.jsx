import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from 'contexts/AuthContext';

import GuestRoute from 'components/GuestRoute';
import AuthRoute from 'components/AuthRoute';
import Login from 'pages/Auth/Login';
import PageNotFound from 'pages/PageNotFound';
import Dashboard from 'pages/Dashboard';
import UIElements from 'pages/UIElements';
import Tables from 'pages/Tables';
import Cards from 'pages/Cards';
import EmptyLayout from 'components/EmptyLayout';
import Forms from 'pages/Forms';

export default function App() {
    return (
        <AuthProvider>
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
                        path="/forms"
                        element={
                            <AuthRoute>
                                <Forms />
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
                            <EmptyLayout>
                                <PageNotFound />
                            </EmptyLayout>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
