import LoginPage from "@/pages/auth/LoginPage"
import RegisterPage from "@/pages/auth/RegisterPage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
        path:'/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element:<RegisterPage/>

    }
]
    
)