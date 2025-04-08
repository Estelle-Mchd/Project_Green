import "./Card.css"

interface Plantes {
    specie: string;
    imgSrc: string;
    description: string;
    highlight: boolean | string;
}

function Card({ specie, imgSrc, description, highlight }: Plantes) {

    return (
        <figure className={`card ${highlight ? 'highlight' : ''}`}>
            <img src={imgSrc} alt={specie} />
            <figcaption>{description}</figcaption>
        </figure>
    )
}

export default Card