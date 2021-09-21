import { BrowserRouter as Router, Switch } from "react-router-dom";
import NonLayout from "./Layouts/NoLayout";
import StandardLayout from "./Layouts/StandardLayout";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import AuthMiddleware from "./routes/middleware/AuthMiddleware";


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            authRoutes.map((route, idx) => (
              <AuthMiddleware
                key={idx}
                path={route.path}
                component={route.component}
                layout={NonLayout}
              />
            ))}
          {
            userRoutes.map((route, idx) =>
              <AuthMiddleware
                key={idx}
                exact path={route.path}
                component={route.component}
                layout={StandardLayout}
              />
            )
          }

        </Switch>
      </Router>
    </div>
  );
}

export default App;
