import React from 'react';
import useClasses from '../../Hook/useClasses/useClasses';
import { Link, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { BiSelectMultiple } from "react-icons/bi";
import { MdPayment } from "react-icons/md";


const Dashboard = () => {

    const [selectC] = useClasses();
    console.log(selectC);

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
                        {/* Sidebar content here */}
                        <Link to="/dashboard/selected"><li><a> <SiGoogleclassroom></SiGoogleclassroom> Selected Classes</a></li></Link>
                        <li><a><BiSelectMultiple></BiSelectMultiple> Enrolled Classes</a></li>
                        <li><a><MdPayment></MdPayment> Payment History</a></li>
                    </ul>

                </div>

            </div>



        </div>
    );
};

export default Dashboard;