import StarIcon from "/Users/harsehaj/airbnb-clone/airbnb-clone/public/assets/star.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className = "card">
            <img src ={props.coverImg} className = "card--image"/>
            <div className = "card--details">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={StarIcon} width = "14px"/>
                <span> {props.stats.rating} </span>
                <span className = "gray"> ({props.stats.reviewCount}) • </span>
                <span className =" gray">  {props.location} </span>
            </div>
            <p className = "card--title"> {props.title}</p>
            <p className = "card--price"> <span className = "bold"> From ${props.price} </span> / person</p>
        </section>
    )
}