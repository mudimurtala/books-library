import bookicon from "/images/book00icon.png"

export default function Header() {
    return (
        <header>
            <img src={bookicon} alt="book icon" />
            <h1>my books library</h1>
        </header>
    )
};