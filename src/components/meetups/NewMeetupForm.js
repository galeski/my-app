import { useRef } from "react";
import Card from "../ui/Card";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            address: enteredAddress,
            desc: enteredDesc,
        };

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Meetup Title</label>
                    <input required type="text" id="title"
                        ref={titleInputRef} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input required type="text" id="address" 
                        ref={addressInputRef} />
                </div>
                <div>
                    <label htmlFor="desc">Address</label>
                    <textarea required id="desc" 
                        ref={descInputRef} />
                </div>
                <div>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;