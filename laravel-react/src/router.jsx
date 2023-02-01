import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import GuestLayout from "./layouts/GuestLayout";
import { Children } from "react";
import HomeLayout from "./layouts/HomeLayout";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
