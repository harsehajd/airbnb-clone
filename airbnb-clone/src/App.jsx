import Navbar from "/Users/harsehaj/airbnb-clone/airbnb-clone/src/components/Navbar.jsx"
import Hero from "/Users/harsehaj/airbnb-clone/airbnb-clone/src/components/Hero.jsx"
import Card from "/Users/harsehaj/airbnb-clone/airbnb-clone/src/components/Card.jsx"
import cardData from "/Users/harsehaj/airbnb-clone/airbnb-clone/src/cardData.jsx"

export default function App() {
    const cards = cardData.map(item => {
    return (
        <Card 
            key = {item.id}
            {...item}
        />
    )
})        

return (
<div>
    <Navbar />
    <Hero />
    <section className="cards-list">
        {cards}
    </section>
</div>
)
}
