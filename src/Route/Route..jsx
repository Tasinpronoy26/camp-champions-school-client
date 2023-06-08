import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SelectedClass from "../Pages/Dashboard/SelectedClass/SelectedClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {

                path: "/signup",
                element: <Signup></Signup>

            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "selected",
                        element: <SelectedClass></SelectedClass>
                    },
                    {
                        path: "manageusers",
                        element: <ManageUsers></ManageUsers>
                    }
                ]


            }

        ]
    }
]);



export default router;