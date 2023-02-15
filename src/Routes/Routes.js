import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AvailableLaptops from "../Pages/AvailableLaptops/AvailableLaptops/AvailableLaptops";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
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
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.brand}`)
                },
                element: <AvailableLaptops></AvailableLaptops>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
]);