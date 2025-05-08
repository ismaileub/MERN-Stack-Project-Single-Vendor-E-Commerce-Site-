import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import AuthForm from "./Pages/AuthForm/AuthForm";




const router = createBrowserRouter([
    {
        path: "/",
        // errorElement:
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }

        ]
    },
]);


export default router;