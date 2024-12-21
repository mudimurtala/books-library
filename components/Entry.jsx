import category from "/images/category.png"

export default function Entry(props) {
    return (
        <article className="book-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="category"
                    src={category}
                    alt="category icon"
                />
                <span className="genre">{props.genre}</span>
                <a href={props.linkToPDF} target="_blank">link to PDF</a>
            </div>
        </article>
    )
}