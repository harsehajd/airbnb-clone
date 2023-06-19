import PhotoGrid from "/Users/harsehaj/airbnb-clone/airbnb-clone/public/assets/photogrid.png"

export default function Navbar() {
    return (
        <div>
            <img src={PhotoGrid} className = "photo-grid"/>
            <div className = "hero--text"> 
                <h1> Online Experiences </h1>
                <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
            </div>
        </div>
    )
}