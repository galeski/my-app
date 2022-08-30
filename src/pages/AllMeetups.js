import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: '1 meetup',
        address: 'bulgarska',
        desc: 'first meetup'
    },
    {
        id: 'm2',
        title: '2 meetup',
        address: 'dzialkowa',
        desc: 'second meetup'
    },
];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-test-8b199-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }

                meetups.push(meetup);
            };

            console.log(meetups);

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
}

export default AllMeetupsPage;