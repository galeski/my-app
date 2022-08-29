import MeetupList from "../components/meetups/MeetupList";

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
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </div>
    );
}

export default AllMeetupsPage;