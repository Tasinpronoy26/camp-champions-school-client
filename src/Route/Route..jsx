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
import Payment from "../Pages/Dashboard/User/Payment.jsx/Payment";
import DefaultDashboarc from "../Pages/Dashboard/DefaultDashboard/DefaultDashboarc";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import PrivateRoute from "./PrivateRoute";
import Feedback from "../Pages/Dashboard/Instructor/Feedback/Feedback";
import AdminFeedBack from "../Pages/Dashboard/Admin/AdminFeedBack/AdminFeedBack";



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
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard",
                        element: <DefaultDashboarc></DefaultDashboarc>
                    }, 
                    {
                        path: "selected",
                        element: <SelectedClass></SelectedClass>
                    },
                    {
                        path: "manageusers",
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: "payment",
                        element: <Payment></Payment>
                    },
                    {
                        path: "addclass",
                        element: <AddClass></AddClass>
                    },
                    {
                        path: "myclass",
                        element: <MyClass></MyClass>
                    },
                    {
                        path: "manageclass",
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: "feedback",
                        element: <Feedback></Feedback>
                    },
                    {
                        path: "feedback/admin",
                        element: <AdminFeedBack></AdminFeedBack>
                    }

                ]


            }

        ]
    }
]);



export default router;