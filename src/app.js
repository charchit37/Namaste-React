import { React, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useParams,
} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Outlet />
    </div>
);

const RestaurantMenuWrapper = () => {
    const { resId } = useParams();
    return <RestaurantMenu resId={resId} />;
};

const Offer = lazy(() => import('./components/Offer'));
const Help = lazy(() => import('./components/Help'));
const SignIn = lazy(() => import("./components/Sign"));
const Cart = lazy(() => import('./components/Cart'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/offer",
                element: <Suspense fallback={<Shimmer />}> <Offer /></Suspense>
            },
            {
                path: "/help",
                element: <Suspense fallback={<Shimmer />}><Help /></Suspense>
            },
            {
                path: "/sign-in",
                element: <Suspense fallback={<Shimmer />}><SignIn /></Suspense>
            },
            {
                path: "cart",
                element: <Suspense fallback={<Shimmer />}><Cart /> </Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <Suspense fallback={<Shimmer />}><RestaurantMenuWrapper /></Suspense>
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
