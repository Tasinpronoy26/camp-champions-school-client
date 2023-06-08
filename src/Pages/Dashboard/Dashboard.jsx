import useClasses from '../../Hook/useClasses/useClasses';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { BiSelectMultiple, BiUser } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import useRole from '../../Hook/useRole/useRole';



const Dashboard = () => {


    const [selectC] = useClasses();
    
    // console.log(selectC);

    const [isAdmin] = useRole();
    console.log(isAdmin);
    



    // TODO: 


    return (
        <div>
            <div className="drawer lg:drawer-open md:pt-[0px]">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />


                <div className="drawer-content mx-auto md:mx-4 my-28 items-center justify-center border p-8 md:p-24">

                    <div>
                        <Outlet></Outlet>
                    </div>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-neutral md:mt-[70px] rounded-none drawer-button lg:hidden mt-10 ms-5">Show</label>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content mt-[71px]">

                        {
                            isAdmin?.role ?  (
                                <>
                                    <Link to="/dashboard/manageclasses">
                                        <li>
                                            <a>
                                                <SiGoogleclassroom />
                                                Manage Classes
                                            </a>
                                        </li>
                                    </Link>
                                    <Link to="/dashboard/manageusers">
                                        <li>
                                            <a>
                                                <BiUser />
                                                Manage Users
                                            </a>
                                        </li>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/dashboard/selected">
                                        <li>
                                            <a>
                                                <SiGoogleclassroom />
                                                Selected Classes
                                            </a>
                                        </li>
                                    </Link>
                                    <li>
                                        <a>
                                            <BiSelectMultiple />
                                            Enrolled Classes
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <MdPayment />
                                            Payment History
                                        </a>
                                    </li>
                                </>
                            )
                        }

                    </ul>

                </div>

            </div>



        </div>
    );
};

export default Dashboard;