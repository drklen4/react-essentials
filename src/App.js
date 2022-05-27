import './App.css';
import eze from "./images/main.jpg"
import img1 from "./images/Img1.PNG"
import img2 from "./images/Img2.PNG"
import {useEffect, useReducer, useState} from "react";
import {GiAirplaneDeparture} from "react-icons/gi";
import Offer from "./components/Offer";
import offersList from "./data.json";

const imagesList = [img1, img2]
const destinations = ["Asia", "America", "India"]
const destinationsModified = destinations.map((dish, i) => ({id: i, title: dish}))


function Header() {
    return (
        <header>
            <h1 style={{backgroundColor: 'lightgrey', color: 'darkslategray'}}>
                Plan your leisure with us
                <GiAirplaneDeparture className="inline-block text-red-400"/>
            </h1>

        </header>
    )
}

function Main(props) {
    return (
        <section>
            <p>We serve most {props.objective} adventures for you.</p>
            <img src={eze}
                 style={{
                backgroundImage: 'auto',
                height: "10%",
                width: "70%"
            }}
                 alt="Picture of Eze"/>
            <ul style={{textAlign: "left"}}>
                {props.destinations.map(e => <li key={e.id}>{e.title}</li>)}
            </ul>
        </section>
    )
}

function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}.</p>
        </footer>
    )
}

function App(props) {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false);

    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=1&appid=cc0977fe19e431710c389f6490430d63`)
            .then(response1 => response1.json())
            .then((re) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${re[0].lat}&lon=${re[0].lon}&units=metric&appid=cc0977fe19e431710c389f6490430d63`)
                    .then((response) => response.json())
                    .then(setTemperature)
                    .then(() => setLoading(false))
            })
    }, [])


    return (
        <div className="App">
            <Header/>
            <Main objective="bright" destinations={destinationsModified}/>
            {offersList.map(offer => {
                let image = imagesList.filter(item => (item.toString().includes(offer.image)))
                return (<Offer key={offer.id} name={offer.name} image={image} destination={offer.destination}
                               dates={offer.dates} cost={offer.cost}/>)
            })}
            <h2>Current direction is: {checked ? 'north' : 'south'}</h2>
            <h2>{props.city} temperature is:
                {temperature ?
                    ' ' + temperature.main.temp + ' °C' :
                    (loading ? 'loading...': undefined)}</h2>
            <Footer year={new Date().getFullYear()}/>
        </div>);
}


