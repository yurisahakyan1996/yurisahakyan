export default function Card( { cardTitle, imgUrl, imgAlt, cardText }) {
    return(
        <div className="blocks">
            <h2> {cardTitle} </h2>
            <img src={imgUrl} alt={imgAlt} />
            <p> {cardText} </p>
        </div>
    )
}