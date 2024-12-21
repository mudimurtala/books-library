import Header from "./components/Header"
import Entry from "./components/Entry"
// import Footer from "./components/Footer"
import data from "./data"

export default function App() {
    const dataElements = data.map((item) => {
        return (
            <Entry 
                {...item}
            />
        )
    })
    return (
        <>
            <Header />
            <main className="container">
                {dataElements}
            </main>
            {/* <Footer /> */}
        </>
    )
}