import album_art from "../images/album_cover_7.png"
import album_icon from "../images/album_icon.png"
import artist_icon from "../images/artist_icon.png"
import genre_icon from "../images/genre_icon.png"

const Card = () => {
    return (
        <div>
            <img src={album_art} />
            <h2>MBDTF Deluxe</h2>
            <div>
                <img src={album_icon} />
                <p>My Beautiful Dark Twisted Fantasy Japanese Deluxe Edition</p>
            </div>
            <div>
                <img src={artist_icon} />
                <p>Kanye West</p>
            </div>
            <div>
                <img src={genre_icon} />
                <p>Avant Garde Baroque Rap</p>
            </div>
        </div>
    )
}

export default Card;