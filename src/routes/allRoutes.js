import Analytics from "../Pages/analytics"
import Balances from "../Pages/balances"
import Contract from "../Pages/contract"
import Customers from "../Pages/customers"
import NDashboard from "../Pages/NDashBoard"
import Settings from "../Pages/settings"
import Team from "../Pages/team"

export const authRoutes = [
    // { path: "/signin", component: Login },
    // { path: "/signup", component: Signup },
]
export const userRoutes = [
    { path: "/", component: NDashboard },
    { path: "/balances", component: Balances },
    { path: "/customers", component: Customers },
    { path: "/analytics", component: Analytics },
    { path: "/settings", component: Settings },
    { path: "/team", component: Team },
    { path: "/contract", component: Contract },
]

