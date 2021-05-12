import Assets from "../Pages/assets";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/login";
import Profile from "../Pages/profile";
import Signup from "../Pages/signup";
import Users from "../Pages/users";

export const authRoutes = [
    { path: "/signin", component: Login },
    { path: "/signup", component: Signup },
]
export const userRoutes = [
    { path: "/", component: Dashboard },
    { path: "/users", component: Users },
    { path: "/assets", component: Assets },
    { path: "/profile", component: Profile },
    { path: "/profile", component: Profile }
]

