import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Attendence from "./Components/Attendence";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/attendence",
      element: <Attendence></Attendence>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
