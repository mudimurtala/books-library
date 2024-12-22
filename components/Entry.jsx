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
                <h2 className="book-title">{props.title}</h2>
                <p className="author-year">{props.authorAndYear}</p>
                <p className="description">{props.description}</p>
            </div>
        </article>
    )
}