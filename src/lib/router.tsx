import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  
  {
    path: "/unauthorized",
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">Access Denied</h1>
          <p className="text-slate-400 mt-2">You do not have permission to view this page.</p>
        </div>
      </div>
    ),
  },
]);