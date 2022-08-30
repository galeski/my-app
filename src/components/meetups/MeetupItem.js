import Card from "../ui/Card";
import { useContext } from 'react';
import favoritesContext from '../../store/FavoritesContext'

function MeetupItem(props) {
    const favoritesCtx = useContext(favoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                desc: props.desc
            });
        }
    }
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
                    <button
                        onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove from fav' : 'Add to fav'}
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;