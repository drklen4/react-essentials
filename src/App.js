import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Body from "./components/Body";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import CurrentTemperature from "./components/CurrentTemperature";
import offersList from "./data.json";
import Offer from "./components/Offer";

function App() {
    const destinations = ["Europe", "Africa", "Asia", "All"];
    const destinationsModified = destinations.map((dest, i) => ({id: i , title: dest}));

    return (
        <>
            <Router>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main destinations={destinationsModified}/>}/>
                        {destinationsModified.map(d => {
                            return (
                                <Route path={`/${d.title}`} key={d.id} element={<Body region={d.title}/>} exact/>)
                        })}
                        {offersList.map(offer => {
                            console.log(`/${offer.region}/${offer.name.replaceAll(" ", "_")}`)

                            return (
                                <Route path={`/${offer.region}/${offer.name.replaceAll(" ", "_")}`} key={destinations.length + offer.id} element={
                                    <Offer key={offer.id} region={offer.region} name={offer.name} image={offer.image} destination={offer.destination} dates={offer.dates} cost={offer.cost}/>
                                } exact/>)
                        })}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <CurrentTemperature />
                    <Footer/>
                </div>
            </Router>
        </>

    );
}

export default App

