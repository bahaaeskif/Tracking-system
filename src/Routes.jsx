import App from "./App";
import { PrivateHome } from "./PrivateRoutes/PrivateRoutes";
import SharedLayout from "./SharedLayout/SharedLayout";
import FaqComponent from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";

//absolute Paths Variabls
export const homePath = "/";

export const LoginPath = "login";

export const orderDetailsPath = "order-details";

export const settingsPath = "settings";

export const fAQPath = "Help&support";

//Children of Parents Routes
export const sharedLayoutChildren = [
  {
    path: orderDetailsPath,
    element: <></>,
  },
  {
    path: settingsPath,
    element: <Settings />,
  },
  {
    path: fAQPath,
    element: <FaqComponent />,
  },
  {
    path: "/",
    element: <App />,
  },
];

//Pranets Routes
export const sharedLayoutRoute = {
  path: homePath,
  element: (
    <PrivateHome>
      <SharedLayout />
    </PrivateHome>
  ),
  children: sharedLayoutChildren,
};

export const LoginRoute = {
  path: LoginPath,
  element: <Login />,
};
