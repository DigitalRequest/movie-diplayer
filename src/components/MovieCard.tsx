const MovieTitle = (props: any) => {
    let movieTitle: string = props.title;

    movieTitle = movieTitle.replaceAll("-", " ");
    movieTitle = movieTitle
        .split(" ")
        .map((elm) => elm[0].toUpperCase() + elm.slice(1, elm.length))
        .join(" ");

    return <strong className="title is-4">{movieTitle}</strong>;
};

const MovieCard = (props: any) => {
    const cardStyle = {
        width: "clamp(15%, 20%, 30%)",
        margin: "10px",
        height: "fit-content",
    };

    return (
        <div className="card p-2" style={cardStyle}>
            <div className="card-header-title">
                <MovieTitle title={props.title} />
            </div>
            <div className="card-image">
                <figure className="image">
                    <img
                        src={props.image || "https://bulma.io/images/placeholders/1280x960.png"}
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div className="card-content">
                <label className="label">{props.text || "Movie text..."}</label>
                <a href="#" className="is-link">
                    {props.link || "https://moviesverse.chat/the-marvels-dual-hindi-cleaned-hd/"}
                </a>
            </div>
        </div>
    );
};

export default MovieCard;