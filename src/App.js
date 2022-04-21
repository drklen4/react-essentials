import './App.css';
import landscape from "./Img2.PNG"
import {useEffect, useReducer, useState} from "react";

function Header() {
    return (
        <header>
            <h1>Plan your leisure with us</h1>
        </header>
    )
}

function Main(props) {
    return (
        <section>
            <p>We serve most {props.objective} advantures for you.</p>
            <img src={landscape} height={400} alt="Picture of Serbian monastery"/>
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

const destinations = ["Asia", "America", "India"]

const destinationsModified = destinations.map((dish, i) => ({id: i, title: dish}))

function SecretComponent() {
    return <h1> Secret component </h1>
}

function App(props) {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false);

    const [temperature, setTemperature] = useState(null);

    useEffect(() => {

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.city}&limit=1&appid=cc0977fe19e431710c389f6490430d63`)
            .then(response1 => response1.json())
            .then((re) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${re[0].lat}&lon=${re[0].lon}&units=metric&appid=cc0977fe19e431710c389f6490430d63`)
                    .then((response) => response.json())
                    .then(setTemperature)
            })
    }, [])


    return (
        <div className="App">
            <Header/>
            <Main objective="bright" destinations={destinationsModified}/>
            <h4>{props.authorized ? <SecretComponent/> : false}</h4>
            <>
                <input style={{float: "left"}}
                       type="checkbox"
                       value={checked}
                       onChange={toggle}/>
            </>
            <h2>Current direction is: {checked ? 'north' : 'south'}</h2>
            <h2>{props.city} temperature is: {temperature ? temperature.main.temp + ' °C' : undefined}</h2>
            <Footer year={new Date().getFullYear()}/>
        </div>);


}

export default App;
