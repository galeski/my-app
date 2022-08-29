import Card from "../ui/Card";

function MeetupItem(props) {
    return (
        <li>
            <Card>
                <div>
                    <img src="" alt={props.title} />
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.desc}</p>
                </div>
                <div>
                    <button>TO FAVORITES</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;