const FeedbackAndRatings = () => {
    return (
        <div>
            <div className="text-5xl font-bold">● Page Features:
                ○ Participants can submit comprehensive feedback and ratings for
                medical camps they have attended.<div className="divider"></div>
                ● Table Structure:<div className="divider"></div>
                ○ Display a tabular view of present detailed information on attended
                medical camps, showcasing fields such as Camp Name, Date and
                Time, Venue, Camp Fees, Payment Status, Confirmation Status, and
                Actions. Display only the camps that have been paid for and
                completed.<div className="divider"></div>
                ● Feedback and Ratings:<div className="divider"></div>
                ○ Allow participants to share their experiences through written
                feedback and provide numerical ratings for various aspects of the
                medical camps.<div className="divider"></div>
                ● Review Button:<div className="divider"></div>
                ○ Introduce an intuitive "Review" button within the actions for each
                attended camp.<div className="divider"></div>
                ○ Clicking the "Review" button opens a modal or form for participants
                to input their feedback and ratings, creating a seamless and
                user-friendly experience.<div className="divider"></div>
                ● Review Submission:<div className="divider"></div>
                ○ Upon submitting a review, save the entered data in a dedicated
                collection, associating it with the specific medical camp and
                participant.<div className="divider"></div>
                ○ Encourage participants to upload images or testimonials along with
                their feedback, adding a visual and personalized touch to the
                testimonials.<div className="divider"></div>
                ● Testimonial Section Update:<div className="divider"></div>
                ○ Dynamically update the Home Page testimonial section to
                showcase participant reviews.<div className="divider"></div>
                ○ Display relevant details such as Camp Name, Date, and
                participant's feedback alongside any uploaded images or
                testimonials.
            </div>
        </div>
    );
};

export default FeedbackAndRatings;