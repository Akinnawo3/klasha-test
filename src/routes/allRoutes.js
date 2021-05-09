import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/login";
import Signup from "../Pages/signup";

export const authRoutes = [
    { path: "/signin", component: Login },
    { path: "/signup", component: Signup },
]
export const userRoutes = [
    { path: "/", component: Dashboard }
]

