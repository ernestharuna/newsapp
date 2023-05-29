import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;