const RegisteredCamps = () => {
    return (
        <div>
            <div className="text-5xl font-bold">Table Structure:<div className="divider"></div>
                ○ Display a tabular view of camps that the participant has registered
                for.<div className="divider"></div>
                ○ Include columns such as Camp Name, Date and Time, Venue, Camp
                Fees, Payment Status, Confirmation Status, Actions.<div className="divider"></div>
                ○ Utilize the "react-table" library for a dynamic and responsive table.<div className="divider"></div>
                ● Payment Status:<div className="divider"></div>
                ○ Display the payment status for each registered camp
                (Unpaid/Paid).<div className="divider"></div>
                ■ For unpaid camps, include a "Pay" button that redirects
                participants to the payment page.<div className="divider"></div>
                ■ After successful payment via Stripe, show a notification with
                the transaction ID.<div className="divider"></div>
                ■ Change the "Pay" button to "Paid," indicating a successful
                payment, and make it non-clickable.<div className="divider"></div>
                ● Confirmation Status:<div className="divider"></div>
                ○ Initially set to "Pending" and updated to "Confirmed" after
                approval by organizers.<div className="divider"></div>
                ● Actions:<div className="divider"></div>
                ○ Include action buttons for each registered camp row:<div className="divider"></div>
                ■ Cancel: Allow participants to cancel their registration for a
                specific camp. Cancel can be possible before payments only,
                after payment you can disabled the button.<div className="divider"></div>
                ■ Implement a confirmation dialog for cancel actions.<div className="divider"></div>
                ■ On confirmation, update the confirmation status and
                reflect changes in the table.</div>
        </div>
    );
};

export default RegisteredCamps;