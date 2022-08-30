import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
    const navigate = useNavigate();

    function onAddMeetupHandler(meetupData) {
        fetch(
            'https://react-test-8b199-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/", { replace: true });
        });
    }
    return (
        <div>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </div>
    );
}

export default NewMeetupPage;