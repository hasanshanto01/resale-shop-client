import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AvailableLaptops from "../Pages/AvailableLaptops/AvailableLaptops/AvailableLaptops";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:brand',
                element: <AvailableLaptops></AvailableLaptops>
            }
        ]
    }
]);