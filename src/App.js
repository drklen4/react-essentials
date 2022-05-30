import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Body from "./components/Body";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App(props) {
    const destinations = ["Europe", "Asia", "America"];
    const destinationsModified = destinations.map((dest, i) => ({id: i, title: dest}));

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
        <>

            <Router>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main objective="bright" destinations={destinationsModified}/>} />
                        {destinationsModified.map(d => {
                            return (
                                <Route path={`/${d.title}`} key={d.id} element={<Body city={props.city}/>} exact/>)
                        })}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <p>
                        {props.city} temperature is:
                        {temperature ?
                            ' ' + temperature.main.temp + ' °C' :
                            (loading ? 'loading...' : undefined)}
                    </p>
                    <Footer/>
                </div>
            </Router>
        </>


    );
}

export default App

