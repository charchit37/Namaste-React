import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet, useParams } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Outlet />
    </div>
)

const RestaurantMenuWrapper = () => {
    const { resId } = useParams();
    return <RestaurantMenu resId={resId} />;
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenuWrapper />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
