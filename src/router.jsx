import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import AppLayout from "./components/AppLayout";
import NewsDetail from "./views/NewsDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/newsheadlines/home" />
            },
            {
                path: '/newsheadlines/home',
                element: <Home />
            },
            {
                path: '/newsdetail',
                element: <NewsDetail />
            },
        ]
    }
])

export default router;