import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { MdCancel, MdPending } from "react-icons/md";

const ManageRegisteredCamps = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <>
            <Helmet>
                <title>Medical Camp | Manage Registered Camps</title>
            </Helmet>
            <div className="">
                <div className="overflow-x-auto">
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Camp Name</th>
                                <th>venue</th>
                                <th>Fees</th>
                                <th>Payment <br /> Status</th>
                                <th>Confirmation <br /> Status</th>
                                <th>Cancelation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr key={item._id}>


                                    <td>{item.camp_name}</td>
                                    <td>{item.venue}</td>
                                    <td>{item.camp_fees}</td>
                                    <td>
                                    <p className="btn btn-xs">Paid</p>
                                        <p className="btn btn-xs">Unpaid</p>
                                    </td>
                                    <td>
                                        <p className="btn btn-xs">Pending</p>
                                        <p className="btn btn-xs">Confirmed</p>
                                    </td>
                                    <td>
                                        <p className="btn btn-xs">Cancel</p>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageRegisteredCamps;