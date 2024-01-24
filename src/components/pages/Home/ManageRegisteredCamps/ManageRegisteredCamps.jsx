import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import useCamp from "../../../../Hooks/useCamp";

const ManageRegisteredCamps = () => {

    const data = useLoaderData();
    const [camp] = useCamp();
    const totalPrice = camp.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <Helmet>
                <title>Medical Camp | Manage Registered Camps</title>
            </Helmet>
            <div>
                <div className="flex justify-between">
                    <h2 className="text-4xl">Items: {data.length}</h2>
                    <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                    {
                        data.length ?
                            <Link to='/dashboard/payment'>
                                <button className="btn btn-primary">Pay</button>
                            </Link>
                            :
                            <button disabled className="btn btn-primary">Pay</button>
                    }
                </div>
                <div className="overflow-x-auto">
                    <table className="table  w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Camp Name</th>
                                <th>Venue</th>
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
                                    <td>${item.camp_fees}</td>
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