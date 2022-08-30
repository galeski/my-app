import { useContext } from "react";
import favoritesContext from "../store/FavoritesContext";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(favoritesContext);

    return (
        <div>Favorites Page
            <h1>My favs</h1>
            <MeetupList meetups={favoritesCtx.favorites} />
        </div>
    );
}

export default FavoritesPage;