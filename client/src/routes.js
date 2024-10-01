import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import CreateQuote from "./components/CreateQuote";
import OtherUserProfile from "./components/OtherUserProfile";
import NotFound from "./components/NotFound";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/signup", element: <Signup /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
  { path: "/createquote", element: <CreateQuote /> },
  { path: "/profile/:userid", element: <OtherUserProfile /> },
  { path: "*", element: <NotFound /> },
];
