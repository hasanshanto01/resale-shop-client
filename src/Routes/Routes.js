import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import AvailableLaptops from "../Pages/AvailableLaptops/AvailableLaptops/AvailableLaptops";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import MyBuyers from "../Pages/Dashboard/MyBuyers/MyBuyers";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";

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
                element: <PrivateRoute><AvailableLaptops></AvailableLaptops></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <MyProducts></MyProducts>
            // },
            {
                path: '/dashboard/products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/buyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/wishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/orders/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/bookings/${params.id}`)
                },
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
        ]
    }
]);