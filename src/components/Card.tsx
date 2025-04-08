import "./Card.css"

interface Plantes {
    specie: string;
    imgSrc: string;
    description: string;
    highlight: boolean;
}


function Card({ specie, imgSrc, description }: Plantes) {

    return (
        <figure className={`card $highlight ? 'highlight' :''}`}>
            <img src={imgSrc} alt={specie} />
            <figcaption>{description}</figcaption>
        </figure>
    )
}



export default Card